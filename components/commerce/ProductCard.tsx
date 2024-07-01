// components/ProductCard.tsx
import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Product } from '@/types/commercetypes';

type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => (
  <div onClick={onClick} className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1">
    <div className="aspect-w-1 aspect-h-1 w-full">
      <img src={product.imageUrl} alt={product.name} className=" flex m-1 p-1 h-42 w-36 mx-auto object-fit " />
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