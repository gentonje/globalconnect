// File: src/components/ContentArea.tsx
import React from 'react';
import { ProductCard } from './ProductCard';
import { ContentAreaProps } from '@/types/globalShopping';
import { products } from '@/components/global/data';
import { TailwindIndicator } from '@/app/components/main/MainPage/Tailwindindicator';

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
      <div className="mx-auto bg-white m-1 p-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-center mb-8">
        <TailwindIndicator />
        {products.Farmers.map((product, index) => (
          <ProductCard key={index} {...product} onClick={() => onProductClick(product)} />
        ))}
        
      </div>
    ),
    Goods: (
      <div className="mx-auto m-1 p-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-center ">
         <TailwindIndicator />
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