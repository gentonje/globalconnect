// "use client"
// import React, { useState, useCallback, useEffect } from 'react';
// import { Card, CardHeader, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { ApiState, ApiStep } from '@/types/momoTypes';
// import CreateApiUser from '@/components/momo/CreateApiUser';
// import CreateApiKey from '@/components/momo/CreateApiKey';
// import GetOAuthToken from '@/components/momo/GetOAuthToken';
// import MakeApiCall from '@/components/momo/MakeApiCall';
// import { handleApiCall, formatResponseForDisplay } from '@/lib/momoUtils';

// const INITIAL_STATE: ApiState = {
//   step: 'createApiUser',
//   apiEndpoint: 'https://sandbox.momodeveloper.mtn.com',
//   callbackUrl: `${window.location.origin}/api/callback`,
//   headers: {
//     'X-Reference-Id': '',
//     'Ocp-Apim-Subscription-Key': '6e24cdd3651744bbb973c4ca6b9c848a',
//     'X-Target-Environment': 'sandbox',
//     'Authorization': ''
//   },
//   apiUser: { referenceId: '' },
//   apiKey: '',
//   accessToken: '',
//   apiType: 'collections',
//   body: {
//     amount: '5.0',
//     currency: 'EUR',
//     externalId: '947354',
//     payer: { partyIdType: 'MSISDN', partyId: '46733123454' },
//     payerMessage: 'Pay for product a',
//     payeeNote: 'payer note'
//   },
//   response: '',
//   isLoading: false,
//   lastCallback: null
// };

// const MomoApiTool: React.FC = () => {
//   const [state, setState] = useState<ApiState>(INITIAL_STATE);

//   const updateState = useCallback((updates: Partial<ApiState>) => {
//     setState(prev => ({ ...prev, ...updates }));
//   }, []);

//   const checkForCallback = useCallback(async () => {
//     try {
//       const response = await fetch('/api/last-callback');
//       const data = await response.json();
//       if (data) {
//         updateState({ lastCallback: formatResponseForDisplay(data) });
//       }
//     } catch (error) {
//       console.error('Error checking for callback:', error);
//     }
//   }, [updateState]);

//   useEffect(() => {
//     const intervalId = setInterval(checkForCallback, 5000);
//     return () => clearInterval(intervalId);
//   }, [checkForCallback]);

//   const renderStep = () => {
//     const props = { state, updateState, handleApiCall };
//     switch (state.step) {
//       case 'createApiUser':
//         return <CreateApiUser {...props} />;
//       case 'createApiKey':
//         return <CreateApiKey {...props} />;
//       case 'getOAuthToken':
//         return <GetOAuthToken {...props} />;
//       case 'apiCall':
//         return <MakeApiCall {...props} />;
//     }
//   };

//   const proceedToNextStep = () => {
//     const steps: ApiStep[] = ['createApiUser', 'createApiKey', 'getOAuthToken', 'apiCall'];
//     const currentIndex = steps.indexOf(state.step);
//     if (currentIndex < steps.length - 1) {
//       updateState({ step: steps[currentIndex + 1] });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white p-8">
//       <Card className="max-w-2xl mx-auto bg-gray-800 text-white">
//         <CardHeader className="text-2xl font-bold text-center">MTN MoMo API Interaction Tool</CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             {renderStep()}
//             {state.response && (
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold">API Response</h3>
//                 <pre className="mt-2 p-4 bg-gray-700 text-white rounded overflow-x-auto">
//                   {state.response}
//                 </pre>
//                 {state.step !== 'apiCall' && (
//                   <Button 
//                     onClick={proceedToNextStep}
//                     className="w-full mt-4 bg-green-600 hover:bg-green-700"
//                   >
//                     Proceed to Next Step
//                   </Button>
//                 )}
//               </div>
//             )}
//             {state.lastCallback && (
//               <div className="mt-4">
//                 <h3 className="text-lg font-semibold">Last Received Callback</h3>
//                 <pre className="mt-2 p-4 bg-gray-700 text-white rounded overflow-x-auto">
//                   {state.lastCallback}
//                 </pre>
//               </div>
//             )}
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default MomoApiTool;
import React from 'react'

export default function page() {
  return (
    <div>page</div>
  )
}
