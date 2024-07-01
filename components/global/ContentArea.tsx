// File: src/components/ContentArea.tsx
import React from 'react';
import { ProductCard } from './ProductCard';
import { ContentAreaProps } from '@/types/globalShopping';
import { products } from '@/components/global/data';

export const ContentArea: React.FC<ContentAreaProps> = ({ activeTab, onProductClick }) => {
  const content = {
    Advertise: (
      <div className="text-center p-4">
        <h2 className="text-xl font-bold mb-3">Promote Your Products</h2>
        <p className="mb-4 text-sm">Reach more customers with our advertising options.</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-sm">
          Create Ad
        </button>
      </div>
    ),
    Farmers: (
      <div className="mt-4  mb-20 grid grid-cols-2 md:grid-cols-6 md:gap-4 gap-2 mx-4 md:mx-6 items-center">
        {products.Farmers.map((product, index) => (
          <ProductCard key={index} {...product} onClick={() => onProductClick(product)} />
        ))}
      </div>
    ),
    Goods: (
      <div className="mt-4  mb-20 grid grid-cols-2  md:grid-cols-6 md:gap-4  gap-2 mx-4 md:mx-6 items-center ">
        {products.Goods.map((product, index) => (
          <ProductCard key={index} {...product} onClick={() => onProductClick(product)} />
        ))}
      </div>
    ),
    Profile: (
      <div className="text-center p-4">
        <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-3"></div>
        <h2 className="text-lg font-bold mb-2">John Doe</h2>
        <p className="mb-4 text-sm">Eco-enthusiast since 2020</p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-sm">
          Edit Profile
        </button>
      </div>
    ),
  };

  return content[activeTab as keyof typeof content] || null;
};