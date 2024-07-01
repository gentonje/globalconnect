// File: src/components/ProductCard.tsx
import React from 'react';
import { ProductCardProps } from '@/types/globalShopping';

export const ProductCard: React.FC<ProductCardProps> = ({ Icon, name, price, onClick }) => (
  <div 
    className="flex bg-gray-800 p-2 m-3 w-36 h-36 my-2 rounded cursor-pointer "
    onClick={() => onClick({ Icon, name, price, description: '' })}
  >
    <div className="flex items-center mb-2 sm:block sm:mb-0">
      <div className=" flex items-center justify-center">
        <Icon size={28} className="text-gray-300" />
      </div>
      <div className="ml-3 sm:ml-0">
        <h3 className="font-bold text-sm h-10 overflow-hidden sm:text-center">{name}</h3>
        <p className="text-green-400 text-xs sm:text-center">${price.toFixed(2)}</p>
      </div>
    </div>
  </div>
);