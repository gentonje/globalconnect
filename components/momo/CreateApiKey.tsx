import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ApiState } from '@/types/momoTypes';

interface CreateApiKeyProps {
  state: ApiState;
  updateState: (updates: Partial<ApiState>) => void;
  handleApiCall: (url: string, method: string, headers: Record<string, string>, body?: any) => Promise<{ ok: boolean; data: any }>;
}

const CreateApiKey: React.FC<CreateApiKeyProps> = ({ state, updateState, handleApiCall }) => {
  const handleCreateApiKey = async () => {
    updateState({ isLoading: true });
    const { ok, data } = await handleApiCall(
      `${state.apiEndpoint}/v1_0/apiuser/${state.apiUser.referenceId}/apikey`,
      'POST',
      { 'Ocp-Apim-Subscription-Key': state.headers['Ocp-Apim-Subscription-Key'] }
    );

    if (ok) {
      try {
        const parsedData = JSON.parse(data);
        if (parsedData.apiKey) {
          updateState({ 
            apiKey: parsedData.apiKey,
            response: JSON.stringify(parsedData, null, 2),
            isLoading: false
          });
        } else {
          throw new Error('API Key not found in response');
        }
      } catch (error) {
        updateState({ 
          response: `Error parsing response: ${error instanceof Error ? error.message : String(error)}`,
          isLoading: false
        });
      }
    } else {
      updateState({ 
        response: `Error: ${JSON.stringify(data, null, 2)}`,
        isLoading: false
      });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Create API Key (POST /v1_0/apiuser/{state.apiUser.referenceId}/apikey)</h3>
      <p className="text-sm text-gray-300">API User created with Reference ID: {state.apiUser.referenceId}</p>
      <Button 
        onClick={handleCreateApiKey} 
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={state.isLoading}
      >
        {state.isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Creating API Key...
          </>
        ) : (
          'Create API Key'
        )}
      </Button>
    </div>
  );
};

export default CreateApiKey;