import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ApiState } from '@/types/momoTypes';
import UuidGenerator from '@/actions/momo/UuidGenerator';

interface CreateApiUserProps {
  state: ApiState;
  updateState: (updates: Partial<ApiState>) => void;
  handleApiCall: (url: string, method: string, headers: Record<string, string>, body?: any) => Promise<{ ok: boolean; data: any }>;
}

const InputField: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}> = ({ label, value, onChange, readOnly = false }) => (
  <div className="space-y-2">
    <label className="text-sm font-medium">{label}</label>
    <Input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-gray-700 text-white"
      readOnly={readOnly}
    />
  </div>
);

const CreateApiUser: React.FC<CreateApiUserProps> = ({ state, updateState, handleApiCall }) => {
  const handleCreateApiUser = async () => {
    updateState({ isLoading: true });
    const { ok, data } = await handleApiCall(
      `${state.apiEndpoint}/v1_0/apiuser`,
      'POST',
      {
        'X-Reference-Id': state.headers['X-Reference-Id'],
        'Ocp-Apim-Subscription-Key': state.headers['Ocp-Apim-Subscription-Key']
      },
      { providerCallbackHost: state.callbackUrl }
    );

    if (ok) {
      updateState({ 
        apiUser: { referenceId: state.headers['X-Reference-Id'] },
        response: JSON.stringify(data, null, 2),
        isLoading: false
      });
    } else {
      updateState({ 
        response: `Error: ${JSON.stringify(data, null, 2)}`,
        isLoading: false
      });
    }
  };

  const handleUuidGenerated = (uuid: string) => {
    updateState({ headers: { ...state.headers, 'X-Reference-Id': uuid } });
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Create API User (POST /v1_0/apiuser)</h3>
      <UuidGenerator onUuidGenerated={handleUuidGenerated} />
      <InputField
        label="X-Reference-Id (UUID)"
        value={state.headers['X-Reference-Id']}
        onChange={(value) => updateState({ headers: { ...state.headers, 'X-Reference-Id': value } })}
      />
      <InputField
        label="Ocp-Apim-Subscription-Key"
        value={state.headers['Ocp-Apim-Subscription-Key']}
        onChange={(value) => updateState({ headers: { ...state.headers, 'Ocp-Apim-Subscription-Key': value } })}
        readOnly
      />
      <InputField
        label="API Endpoint"
        value={state.apiEndpoint}
        onChange={(value) => updateState({ apiEndpoint: value })}
        readOnly
      />
      <InputField
        label="Callback URL"
        value={state.callbackUrl}
        onChange={() => {}}
        readOnly
      />
      <Button 
        onClick={handleCreateApiUser} 
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={state.isLoading}
      >
        {state.isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating API User...
          </>
        ) : (
          'Create API User'
        )}
      </Button>
    </div>
  );
};

export default CreateApiUser;