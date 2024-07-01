"use client"

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Flight, Passenger, Seat } from '@/types/bookingTypes';



interface SummaryProps {
  flight: Flight | null;
  seats: Seat[];
  totalPrice: number;
}

const Summary: React.FC<SummaryProps> = ({ flight, seats, totalPrice }) => {
  const occupiedSeats = seats.filter(seat => seat.passenger);

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Summary</h2>
        
        {flight && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Flight Details</h3>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Airline</TableCell>
                  <TableCell>{flight.airline}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">From</TableCell>
                  <TableCell>{flight.origin}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">To</TableCell>
                  <TableCell>{flight.destination}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Date</TableCell>
                  <TableCell>{flight.date}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Departure Time</TableCell>
                  <TableCell>{flight.departureTime}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Plane Type</TableCell>
                  <TableCell>{flight.planeType}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Passenger Details</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Seat</TableHead>
                <TableHead>Passenger Name</TableHead>
                <TableHead>Package Weight</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {occupiedSeats.map(seat => (
                <TableRow key={seat.number}>
                  <TableCell>{seat.number}</TableCell>
                  <TableCell>{seat.passenger?.name}</TableCell>
                  <TableCell>{seat.passenger?.packageWeight} kg</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Price Breakdown</h3>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Base Price (per passenger)</TableCell>
                <TableCell>$100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Package Weight Charge</TableCell>
                <TableCell>$2 per kg</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Number of Passengers</TableCell>
                <TableCell>{occupiedSeats.length}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Total Package Weight</TableCell>
                <TableCell>
                  {occupiedSeats.reduce((total, seat) => total + (seat.passenger?.packageWeight || 0), 0)} kg
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        <div className="text-right">
          <p className="text-2xl font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default Summary;