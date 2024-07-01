import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

export const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="bg-gray-700 p-4 rounded-lg shadow mb-4">
    <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-300">{content}</p>
  </div>
);