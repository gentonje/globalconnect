import React from 'react';
import { Region, regions } from '@/types/diasporaTypes';

interface RegionSelectionProps {
  onSelectRegion: (region: Region) => void;
}

export const RegionSelection: React.FC<RegionSelectionProps> = ({ onSelectRegion }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-white">Select Your Region</h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(regions).map((region) => (
          <button
            key={region}
            onClick={() => onSelectRegion(region as Region)}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
};