// File: src/components/CartIcon.tsx
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { CartIconProps } from '@/types/globalShopping';

export const CartIcon: React.FC<CartIconProps> = ({ itemCount }) => (
  <div className="relative">
    <ShoppingBag size={20} />
    {itemCount > 0 && (
      <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 flex items-center justify-center text-xs">
        {itemCount}
      </div>
    )}
  </div>
);