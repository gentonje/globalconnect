"use client"

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Flight } from '@/types/bookingTypes';
import { flights } from '@/components/flight/FlightData/Data';

const FlightSchedule: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | 'all'>('all');

  const companies = Array.from(new Set(flights.map(flight => flight.airline)));

  const filteredFlights = selectedCompany === 'all' 
    ? flights 
    : flights.filter(flight => flight.airline === selectedCompany);

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Flight Schedule</h2>
        <div className="mb-4">
          <Select onValueChange={(value) => setSelectedCompany(value)} value={selectedCompany}>
            <SelectTrigger>
              <SelectValue placeholder="Select airline" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Airlines</SelectItem>
              {companies.map(company => (
                <SelectItem key={company} value={company}>{company}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Airline</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Plane Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredFlights.map(flight => (
              <TableRow key={flight.id}>
                <TableCell>{flight.airline}</TableCell>
                <TableCell>{flight.origin}</TableCell>
                <TableCell>{flight.destination}</TableCell>
                <TableCell>{flight.date}</TableCell>
                <TableCell>{flight.departureTime}</TableCell>
                <TableCell>{flight.planeType}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default FlightSchedule;