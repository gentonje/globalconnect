// apiUtils.ts

import { ApiHeaders, ApiBody } from '@/types/momoTypes';

export async function handleApiCall(
  url: string, 
  method: string, 
  headers: ApiHeaders, 
  body?: ApiBody
): Promise<{ ok: boolean; data: any }> {
  try {
    const response = await fetch(url, {
      method,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined
    });

    const responseData = await response.text();
    let parsedData;
    try {
      parsedData = JSON.parse(responseData);
    } catch {
      parsedData = responseData;
    }

    return { 
      ok: response.ok, 
      data: parsedData 
    };
  } catch (error) {
    return { 
      ok: false, 
      data: error instanceof Error ? error.message : String(error)
    };
  }
}

export function generateBasicAuthHeader(username: string, password: string): string {
  return `Basic ${btoa(`${username}:${password}`)}`;
}

export function generateBearerAuthHeader(token: string): string {
  return `Bearer ${token}`;
}

export function formatResponseForDisplay(data: any): string {
  return JSON.stringify(data, null, 2);
}

export function isValidUUID(uuid: string): boolean {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(uuid);
}

export function getApiEndpoint(apiType: string, baseUrl: string): string {
  switch (apiType) {
    case 'collections':
      return `${baseUrl}/collection/v1_0/requesttopay`;
    case 'disbursements':
      return `${baseUrl}/disbursement/v1_0/transfer`;
    case 'remittances':
      return `${baseUrl}/remittance/v1_0/transfer`;
    default:
      throw new Error(`Invalid API type: ${apiType}`);
  }
}

export function handleApiError(error: any): string {
  if (error instanceof Error) {
    return `Error: ${error.message}`;
  } else if (typeof error === 'string') {
    return `Error: ${error}`;
  } else {
    return 'An unknown error occurred';
  }
}