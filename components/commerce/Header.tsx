// components/Header.tsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';

type HeaderProps = {
  cartItemCount: number;
  onCartClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick }) => (
  <header className="bg-white shadow-md p-3 sticky top-0 z-10">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">East African Marketplace</h1>
      <button 
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-2 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-colors relative"
        onClick={onCartClick}
      >
        <ShoppingCart size={20} />
        {cartItemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {cartItemCount}
          </span>
        )}
      </button>
    </div>
  </header>
);

export default Header;