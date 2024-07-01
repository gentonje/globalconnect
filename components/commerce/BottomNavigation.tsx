// components/BottomNavigation.tsx
import React from 'react';
import { Home, Search, Heart, ShoppingBag, User } from 'lucide-react';

const BottomNavigation: React.FC = () => (
  <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
    <div className="flex justify-around items-center h-16">
      <button className="flex flex-col items-center justify-center text-gray-600 hover:text-purple-600">
        <Home size={24} />
        <span className="text-xs mt-1">Home</span>
      </button>
      <button className="flex flex-col items-center justify-center text-gray-600 hover:text-purple-600">
        <Search size={24} />
        <span className="text-xs mt-1">Search</span>
      </button>
      <button className="flex flex-col items-center justify-center text-gray-600 hover:text-purple-600">
        <Heart size={24} />
        <span className="text-xs mt-1">Wishlist</span>
      </button>
      <button className="flex flex-col items-center justify-center text-gray-600 hover:text-purple-600">
        <ShoppingBag size={24} />
        <span className="text-xs mt-1">Orders</span>
      </button>
      <button className="flex flex-col items-center justify-center text-gray-600 hover:text-purple-600">
        <User size={24} />
        <span className="text-xs mt-1">Profile</span>
      </button>
    </div>
  </nav>
);

export default BottomNavigation;