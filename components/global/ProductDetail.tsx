// File: src/components/ProductDetail.tsx
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { ProductDetailProps } from '@/types/globalShopping';

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => (
  <div className="p-4">
    <button onClick={onBack} className="mb-4 flex items-center text-purple-400">
      <ChevronLeft size={16} />
      <span className="ml-1 text-sm">Back</span>
    </button>
    <div className="bg-gray-800 p-4 rounded">
      <product.Icon size={48} className="mx-auto mb-4 text-gray-300" />
      <h2 className="text-xl font-bold text-center mb-2">{product.name}</h2>
      <p className="text-center text-green-400 text-lg mb-3">${product.price.toFixed(2)}</p>
      <p className="text-gray-300 mb-4 text-sm">{product.description}</p>
      <button
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-sm"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  </div>
);
