"use client"

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Seat, Passenger } from '@/types/bookingTypes';

type FlightType = '3x3' | '3x6';

interface SeatSelectionProps {
  flightType: FlightType;
  onSeatSelection: (seats: Seat[]) => void;
}

const SeatSelection: React.FC<SeatSelectionProps> = ({ flightType, onSeatSelection }) => {
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  useEffect(() => {
    const totalSeats = flightType === '3x3' ? 9 : 18;
    const initialSeats: Seat[] = Array.from({ length: totalSeats }, (_, index) => ({
      number: `${Math.floor(index / 3) + 1}${String.fromCharCode(65 + (index % 3))}`,
      passenger: null
    }));
    setSeats(initialSeats);
  }, [flightType]);

  const handleSeatClick = (seatNumber: string) => {
    setSelectedSeat(seatNumber);
  };

  const updatePassengerDetails = (field: keyof Passenger, value: string) => {
    if (selectedSeat) {
      setSeats(prevSeats => 
        prevSeats.map(seat => 
          seat.number === selectedSeat
            ? { 
                ...seat, 
                passenger: { 
                  ...seat.passenger,
                  [field]: field === 'packageWeight' ? parseFloat(value) : value
                } as Passenger
              }
            : seat
        )
      );
    }
  };

  useEffect(() => {
    onSeatSelection(seats);
  }, [seats, onSeatSelection]);

  const renderSeat = (seat: Seat) => (
    <Button
      key={seat.number}
      variant={seat.passenger ? "default" : seat.number === selectedSeat ? "secondary" : "outline"}
      className="w-20 h-20 m-1"
      onClick={() => handleSeatClick(seat.number)}
    >
      {seat.number}
    </Button>
  );

  const renderSeatMap = () => {
    const rows = flightType === '3x3' ? 3 : 6;
    return Array.from({ length: rows }, (_, rowIndex) => (
      <div key={rowIndex} className="flex justify-center w-full mb-4">
        {seats.slice(rowIndex * 3, (rowIndex + 1) * 3).map(renderSeat)}
      </div>
    ));
  };

  return (
    <div className="flex flex-col md:flex-row w-full gap-6">
      <Card className="flex-1">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Your Seat</h2>
          <Label className="block mb-2">Flight Type: {flightType}</Label>
          <div className="flex flex-col items-center">
            {renderSeatMap()}
          </div>
        </CardContent>
      </Card>
      <Card className="flex-1">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Passenger Details</h2>
          {selectedSeat && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="passengerName">Passenger Name</Label>
                <Input
                  id="passengerName"
                  value={seats.find(s => s.number === selectedSeat)?.passenger?.name || ''}
                  onChange={(e) => updatePassengerDetails('name', e.target.value)}
                  placeholder="Enter passenger name"
                />
              </div>
              <div>
                <Label htmlFor="packageWeight">Package Weight (kg)</Label>
                <Input
                  id="packageWeight"
                  type="number"
                  value={seats.find(s => s.number === selectedSeat)?.passenger?.packageWeight || ''}
                  onChange={(e) => updatePassengerDetails('packageWeight', e.target.value)}
                  placeholder="Enter package weight"
                />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SeatSelection;