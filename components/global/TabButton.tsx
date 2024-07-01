// File: src/components/TabButton.tsx
import React from 'react';
import { TabButtonProps } from '@/types/globalShopping';

export const TabButton: React.FC<TabButtonProps> = ({ Icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 flex flex-col items-center justify-center py-1 sm:py-2 ${isActive ? 'text-purple-400' : 'text-gray-400'}`}
  >
    <Icon size={28} className={isActive ? 'glow' : 'hover:bg-gray-800'} />
    <span className="text-xs mt-0.5 font-medium hidden sm:block">{label}</span>
  </button>
);