import React from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ApiState } from '@/types/momoTypes';

interface GetOAuthTokenProps {
  state: ApiState;
  updateState: (updates: Partial<ApiState>) => void;
  handleApiCall: (url: string, method: string, headers: Record<string, string>, body?: any) => Promise<{ ok: boolean; data: any }>;
}

const GetOAuthToken: React.FC<GetOAuthTokenProps> = ({ state, updateState, handleApiCall }) => {
  const handleGetOAuthToken = async () => {
    updateState({ isLoading: true });
    const { ok, data } = await handleApiCall(
      `${state.apiEndpoint}/collection/token/`,
      'POST',
      {
        'Authorization': `Basic ${btoa(`${state.apiUser.referenceId}:${state.apiKey}`)}`,
        'Ocp-Apim-Subscription-Key': state.headers['Ocp-Apim-Subscription-Key']
      }
    );

    if (ok) {
      try {
        const parsedData = JSON.parse(data);
        if (parsedData.access_token) {
          updateState({ 
            accessToken: parsedData.access_token,
            headers: { ...state.headers, 'Authorization': `Bearer ${parsedData.access_token}` },
            response: JSON.stringify(parsedData, null, 2),
            isLoading: false
          });
        } else {
          throw new Error('Access token not found in response');
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
      <h3 className="text-lg font-semibold">Get OAuth Token (POST /collection/token/)</h3>
      <p className="text-sm text-gray-300">API Key created: {state.apiKey}</p>
      <Button 
        onClick={handleGetOAuthToken} 
        className="w-full bg-blue-600 hover:bg-blue-700"
        disabled={state.isLoading}
      >
        {state.isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Getting OAuth Token...
          </>
        ) : (
          'Get OAuth Token'
        )}
      </Button>
    </div>
  );
};

export default GetOAuthToken;