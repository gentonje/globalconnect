import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="max-w-4xl mx-auto mt-8">
    <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
    {children}
  </div>
);