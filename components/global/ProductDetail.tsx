// File: src/components/ProductDetail.tsx
import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { ProductDetailProps } from '@/types/globalShopping';

export const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => (
  <div className="p-4 mb-20">
    <button onClick={onBack} className="mb-4 flex items-center text-purple-400">
      <ChevronLeft size={64} className='flex rounded-full animate-pulse' />
      <span className="ml-1 text-2xl">Back</span>
    </button>
    <div className="bg-white p-4 rounded-lg">
    <div className=" flex items-center justify-center">       
        <img src={product.imageUrl} alt={product.name} className="object-contain rounded w-full h-72" />
      </div>
      <h2 className="text-16px text-teal-950 font-bold text-center mb-2">{product.name}</h2>
      <p className="font-semibold text-center bg-sky-100 text-red-800 text-[16px] mb-3 rounded-md">Kshs {product.price.toFixed(0)}</p>
      <p className="text-teal-700 mb-4 text-sm text-center items-center">{product.description}</p>
      <button
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded text-sm"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  </div>
);
