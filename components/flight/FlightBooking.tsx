"use client"

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import SeatSelection from './SeatSelection';
import { Flight, Seat } from '@/types/bookingTypes';

interface FlightBookingProps {
  selectedFlight: Flight;
  onSeatSelection: (seats: Seat[]) => void;
  onBookingComplete: () => void;
}

const FlightBooking: React.FC<FlightBookingProps> = ({ 
  selectedFlight, 
  onSeatSelection, 
  onBookingComplete 
}) => {
  const [seats, setSeats] = useState<Seat[]>([]);

  const handleSeatSelection = (selectedSeats: Seat[]) => {
    setSeats(selectedSeats);
    onSeatSelection(selectedSeats);
  };

  const handleBookingComplete = () => {
    if (seats.some(seat => seat.passenger)) {
      onBookingComplete();
    }
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Flight Booking</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Selected Flight Details</h3>
          <p><strong>Airline:</strong> {selectedFlight.airline}</p>
          <p><strong>From:</strong> {selectedFlight.origin}</p>
          <p><strong>To:</strong> {selectedFlight.destination}</p>
          <p><strong>Date:</strong> {selectedFlight.date}</p>
          <p><strong>Time:</strong> {selectedFlight.departureTime}</p>
        </div>

        <SeatSelection
          flightType={selectedFlight.planeType}
          onSeatSelection={handleSeatSelection}
        />

        <Button 
          onClick={handleBookingComplete} 
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
          disabled={!seats.some(seat => seat.passenger)}
        >
          Complete Booking
        </Button>
      </CardContent>
    </Card>
  );
};

export default FlightBooking;