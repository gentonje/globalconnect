import React from 'react';
import { Region, Country, regions } from '@/types/diasporaTypes';

interface LocationSelectionProps {
  region: Region;
  onSelectLocation: (location: Country) => void;
}

export const LocationSelection: React.FC<LocationSelectionProps> = ({ region, onSelectLocation }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-white">Select Your Location in {region}</h2>
      <div className="grid grid-cols-2 gap-4">
        {regions[region].map((location) => (
          <button
            key={location}
            onClick={() => onSelectLocation(location)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            {location}
          </button>
        ))}
      </div>
    </div>
  );
};