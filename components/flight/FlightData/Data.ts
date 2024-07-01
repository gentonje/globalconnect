// src/data/flightData.ts
import { Flight } from '@/types/bookingTypes';




  
  export const flights: Flight[] = [
    {
      id: '1',
      airline: 'Dream Air',
      planeType: '3x3',
      origin: 'Juba',
      destination: 'Nimule',
      departureTime: '09:00',
      date: '2024-07-01'
    },
    {
      id: '2',
      airline: 'Imatong Airlines',
      planeType: '3x6',
      origin: 'Juba',
      destination: 'Kapoeta',
      departureTime: '14:30',
      date: '2024-07-02'
    },
    {
      id: '3',
      airline: 'Kush Airline',
      planeType: '3x3',
      origin: 'Nimule',
      destination: 'Ikotos',
      departureTime: '11:15',
      date: '2024-07-03'
    },
    // Add more flights as needed
  ];
  
  export const destinations = ['Juba', 'Nimule', 'Kapoeta', 'Ikotos', 'Torit', 'Bor', 'Yambio', 'Wau'];