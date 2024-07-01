"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Plane, Package } from 'lucide-react';


const locations = ['Kapoeta', 'Juba', 'Nimule', 'Ikotos', 'Torit', 'Bor', 'Yambio', 'Wau'];
const companies = ['Dream Air', 'Imatong Airlines', 'Kush Airline'];

const BookingComponent: React.FC = () => {
  const [bookingType, setBookingType] = useState<'flight' | 'parcel'>('flight');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking:', { type: bookingType, from, to, date, company });
    // Here you would typically call an API to process the booking
    
  };

  return (
    <>
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Book Flight or Send Parcel</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4 mb-4">
            <Button
              type="button"
              variant={bookingType === 'flight' ? 'default' : 'outline'}
              onClick={() => setBookingType('flight')}
              className="flex-1"
            >
              <Plane className="mr-2 h-4 w-4" />
              Book Flight
            </Button>
            <Button
              type="button"
              variant={bookingType === 'parcel' ? 'default' : 'outline'}
              onClick={() => setBookingType('parcel')}
              className="flex-1"
            >
              <Package className="mr-2 h-4 w-4" />
              Send Parcel
            </Button>
          </div>

          <Select onValueChange={setFrom} value={from}>
            <SelectTrigger>
              <SelectValue placeholder="From" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>{loc}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select onValueChange={setTo} value={to}>
            <SelectTrigger>
              <SelectValue placeholder="To" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc} value={loc}>{loc}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full"
          />

          <Select onValueChange={setCompany} value={company}>
            <SelectTrigger>
              <SelectValue placeholder="Select company" />
            </SelectTrigger>
            <SelectContent>
              {companies.map((comp) => (
                <SelectItem key={comp} value={comp}>{comp}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            {bookingType === 'flight' ? 'Book Flight' : 'Send Parcel'}
          </Button>
        </form>
      </CardContent>
    </Card>
    
    </>
    
  );
};

export default BookingComponent;