// components/CategoryItem.tsx
import React from 'react';

type CategoryItemProps = {
  name: string;
  onClick: () => void;
  isActive: boolean;
};

const CategoryItem: React.FC<CategoryItemProps> = ({ name, onClick, isActive }) => (
  <button
    onClick={onClick}
    className={`
      px-4 py-2 rounded-lg text-sm font-medium
      transition-all duration-300 ease-in-out
      ${isActive
        ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg scale-105'
        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }
    `}
  >
    {name}
  </button>
);

export default CategoryItem;