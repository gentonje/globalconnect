import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ApiState, ApiType } from '@/types/momoTypes';
import UuidGenerator from '@/actions/momo/UuidGenerator';

interface MakeApiCallProps {
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

const MakeApiCall: React.FC<MakeApiCallProps> = ({ state, updateState, handleApiCall }) => {
  const handleFinalApiCall = async () => {
    if (!state.apiType || Object.values(state.body).some(v => !v)) {
      updateState({ response: 'Please fill in all fields.' });
      return;
    }

    updateState({ isLoading: true });

    const endpoints = {
      collections: `${state.apiEndpoint}/collection/v1_0/requesttopay`,
      disbursements: `${state.apiEndpoint}/disbursement/v1_0/transfer`,
      remittances: `${state.apiEndpoint}/remittance/v1_0/transfer`
    };

    const { ok, data } = await handleApiCall(
      endpoints[state.apiType],
      'POST',
      state.headers,
      state.body
    );

    updateState({ 
      response: ok ? JSON.stringify(data, null, 2) : `Error: ${JSON.stringify(data, null, 2)}`,
      isLoading: false
    });
  };

  const handleUuidGenerated = (uuid: string) => {
    updateState({ headers: { ...state.headers, 'X-Reference-Id': uuid } });
  };

  return (
    <div className="space-y-4">
      <div className="p-4 bg-green-800 rounded">
        <h3 className="font-semibold">Authentication Successful</h3>
        <p className="text-sm">Access Token: {state.accessToken}</p>
      </div>
      <Select 
        value={state.apiType} 
        onValueChange={(value: ApiType) => updateState({ apiType: value })}
      >
        <SelectTrigger className="bg-gray-700 text-white">
          <SelectValue placeholder="Select API" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="collections">Collections</SelectItem>
          <SelectItem value="disbursements">Disbursements</SelectItem>
          <SelectItem value="remittances">Remittances</SelectItem>
        </SelectContent>
      </Select>
      <UuidGenerator onUuidGenerated={handleUuidGenerated} />
      <InputField
        label="X-Reference-Id"
        value={state.headers['X-Reference-Id']}
        onChange={(value) => updateState({ headers: { ...state.headers, 'X-Reference-Id': value } })}
      />
      {Object.entries(state.body).map(([key, value]) => (
        <InputField 
          key={key} 
          label={key} 
          value={typeof value === 'object' ? value.partyId : value} 
          onChange={(newValue) => updateState({
            body: {
              ...state.body,
              [key]: typeof value === 'object' ? { ...value, partyId: newValue } : newValue
            }
          })}
          readOnly={key !== 'amount' && key !== 'currency'}
        />
      ))}
      <Button 
        onClick={handleFinalApiCall} 
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={state.isLoading}
      >
        {state.isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Making API Call...
          </>
        ) : (
          'Make API Call'
        )}
      </Button>
    </div>
  );
};

export default MakeApiCall;