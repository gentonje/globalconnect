// src/types/bookingTypes.ts

export interface Passenger {
    name: string;
    packageWeight: number;
    // Remove packageSize if it's no longer needed
  }
  
  export interface Seat {
    number: string;
    passenger: Passenger | null;
  }
  
  export interface Flight {
    id: string;
    airline: string;
    planeType: '3x3' | '3x6';
    origin: string;
    destination: string;
    departureTime: string;
    date: string;
  }