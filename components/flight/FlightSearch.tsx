"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { flights, destinations} from './FlightData/Data';
import { Flight } from '@/types/bookingTypes';

interface FlightSearchProps {
  onFlightSelect: (flight: Flight) => void;
}

const FlightSearch: React.FC<FlightSearchProps> = ({ onFlightSelect }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [searchResults, setSearchResults] = useState<Flight[]>([]);

  const handleSearch = () => {
    const results = flights.filter(flight =>
      flight.origin === origin &&
      flight.destination === destination &&
      flight.date === date
    );
    setSearchResults(results);
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Flights</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="origin">Origin</Label>
            <Select onValueChange={setOrigin} value={origin}>
              <SelectTrigger id="origin">
                <SelectValue placeholder="Select origin" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map(dest => (
                  <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="destination">Destination</Label>
            <Select onValueChange={setDestination} value={destination}>
              <SelectTrigger id="destination">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent>
                {destinations.map(dest => (
                  <SelectItem key={dest} value={dest}>{dest}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full"
            />
          </div>
          <Button onClick={handleSearch} className="w-full">Search Flights</Button>
        </div>
        {searchResults.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Available Flights</h3>
            {searchResults.map(flight => (
              <Card key={flight.id} className="mb-4">
                <CardContent className="p-4">
                  <p><strong>{flight.airline}</strong> - {flight.planeType}</p>
                  <p>{flight.origin} to {flight.destination}</p>
                  <p>Departure: {flight.departureTime}</p>
                  <Button onClick={() => onFlightSelect(flight)} className="mt-2">Select</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FlightSearch;