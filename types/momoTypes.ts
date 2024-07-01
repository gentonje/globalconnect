// types.ts

export type ApiStep = 'createApiUser' | 'createApiKey' | 'getOAuthToken' | 'apiCall';

export type ApiType = 'collections' | 'disbursements' | 'remittances';

// export interface ApiHeaders {
//   'X-Reference-Id': string;
//   'Ocp-Apim-Subscription-Key': string;
//   'X-Target-Environment': string;
//   'Authorization': string;
// }
export interface ApiHeaders {
  'X-Reference-Id': string;
  'Ocp-Apim-Subscription-Key': string;
  'X-Target-Environment': string;
  'Authorization': string;
  [key: string]: string; // Add this index signature
}

export interface ApiBody {
  amount: string;
  currency: string;
  externalId: string;
  payer: {
    partyIdType: string;
    partyId: string;
  };
  payerMessage: string;
  payeeNote: string;
}

export interface ApiState {
  step: ApiStep;
  apiEndpoint: string;
  callbackUrl: string;
  headers: ApiHeaders;
  apiUser: { referenceId: string };
  apiKey: string;
  accessToken: string;
  apiType: ApiType;
  body: ApiBody;
  response: string;
  isLoading: boolean;
  lastCallback: string | null;
}

export interface InputFieldProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  readOnly?: boolean;
}

export interface ActionButtonProps {
  onClick: () => void;
  isLoading: boolean;
  loadingText: string;
  text: string;
}

export interface UuidGeneratorProps {
  onUuidGenerated: (uuid: string) => void;
}

export interface StepComponentProps {
  state: ApiState;
  updateState: (updates: Partial<ApiState>) => void;
  handleApiCall: (url: string, method: string, headers: Record<string, string>, body?: any) => Promise<{ ok: boolean; data: any }>;
}