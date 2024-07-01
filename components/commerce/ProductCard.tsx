// components/ProductCard.tsx
import React from 'react';
import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';
import { Product } from '@/types/commercetypes';

type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => (
  <div onClick={onClick} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="relative w-full h-40">
    <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-fit rounded mb-2 p-1" />
      
    </div>
    <div className="p-2">
      <h3 className="font-medium text-sm mb-1 truncate">{product.name}</h3>
      <p className="text-base font-semibold text-green-600">${product.price.toFixed(2)}</p>
      <div className="flex items-center mt-1">
        <Star className="text-yellow-400 fill-current" size={12} />
        <span className="ml-1 text-xs">{product.rating.toFixed(1)}</span>
        <MapPin className="ml-2 text-gray-500" size={12} />
        <span className="ml-1 text-xs text-gray-500 truncate">{product.location}</span>
      </div>
    </div>
  </div>
);

export default ProductCard;