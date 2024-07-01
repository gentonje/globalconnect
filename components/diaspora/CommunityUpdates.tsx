import React from 'react';

interface Update {
  id: number;
  title: string;
  content: string;
  date: string;
}

interface CommunityUpdatesProps {
  updates: Update[];
}

export const CommunityUpdates: React.FC<CommunityUpdatesProps> = ({ updates }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Community Updates</h2>
      <div className="space-y-4">
        {updates.map((update) => (
          <div key={update.id} className="bg-gray-700 p-4 rounded-md">
            <h3 className="text-lg font-semibold text-white mb-2">{update.title}</h3>
            <p className="text-gray-300 mb-2">{update.content}</p>
            <p className="text-sm text-gray-400">{update.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};