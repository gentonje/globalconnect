import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface UuidGeneratorProps {
  onUuidGenerated: (uuid: string) => void;
}

const UuidGenerator: React.FC<UuidGeneratorProps> = ({ onUuidGenerated }) => {
  const [uuid, setUuid] = useState<string>('');

  const generateUuid = () => {
    const newUuid = uuidv4();
    setUuid(newUuid);
    onUuidGenerated(newUuid);
  };

  return (
    <div className="space-y-2">
      <Input
        type="text"
        value={uuid}
        readOnly
        placeholder="Generated UUID will appear here"
        className="bg-gray-700 text-white"
      />
      <Button onClick={generateUuid} className="w-full bg-green-600 hover:bg-green-700">
        Generate UUID
      </Button>
    </div>
  );
};

export default UuidGenerator;