"use client"

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FlightSearch from '@/components/flight/FlightSearch';
import SeatSelection from '@/components/flight/SeatSelection';
import Summary from '@/components/flight/Summary';
import FlightSchedule from '@/components/flight/FlightSchedule';
import { Flight, Seat } from '@/types/bookingTypes';

const MainBooking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedFlight, setSelectedFlight] = useState<Flight | null>(null);
  const [selectedSeats, setSelectedSeats] = useState<Seat[]>([]);

  const handleFlightSelect = (flight: Flight) => {
    setSelectedFlight(flight);
    setStep(3);
  };

  const handleSeatSelection = (seats: Seat[]) => {
    setSelectedSeats(seats);
  };

  const handleNextStep = () => {
    if (step === 3 && selectedSeats.some(seat => seat.passenger)) {
      setStep(4);
    } else if (step === 4) {
      // Here you would typically move to the checkout process
      console.log('Proceeding to checkout', { selectedFlight, selectedSeats });
      // Reset the booking process
      setStep(1);
      setSelectedFlight(null);
      setSelectedSeats([]);
    }
  };

  const calculateTotalPrice = () => {
    return selectedSeats.reduce((total, seat) => {
      if (seat.passenger) {
        return total + 100 + (seat.passenger.packageWeight * 2); // Base price + $2 per kg
      }
      return total;
    }, 0);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Flight Booking</h1>
        
        {step === 1 && (
          <>
            <FlightSearch onFlightSelect={handleFlightSelect} />
            <Button 
              onClick={() => setStep(2)} 
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
            >
              View Full Flight Schedule
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <FlightSchedule />
            <Button 
              onClick={() => setStep(1)} 
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Back to Search
            </Button>
          </>
        )}

        {step === 3 && selectedFlight && (
          <>
            <SeatSelection
              flightType={selectedFlight.planeType}
              onSeatSelection={handleSeatSelection}
            />
            <Button 
              onClick={handleNextStep} 
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={!selectedSeats.some(seat => seat.passenger)}
            >
              Review Booking
            </Button>
          </>
        )}

        {step === 4 && selectedFlight && (
          <>
            <Summary
              flight={selectedFlight}
              seats={selectedSeats}
              totalPrice={calculateTotalPrice()}
            />
            <Button 
              onClick={handleNextStep} 
              className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Proceed to Checkout
            </Button>
          </>
        )}

        {step > 1 && step < 4 && (
          <Button 
            onClick={() => setStep(prev => prev - 1)} 
            className="w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800"
          >
            Back
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default MainBooking;