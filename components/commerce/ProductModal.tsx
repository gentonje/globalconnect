// components/ProductModal.tsx
import React from 'react';
import Image from 'next/image';
import { X, Star, MapPin, ShoppingCart, ChevronLeft } from 'lucide-react';
import { Product } from '@/types/commercetypes';

type ProductModalProps = {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
};

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
    <div className="bg-white rounded-lg p-4 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
      <button onClick={onClose} className="absolute top-2 left-2 bg-white rounded-full p-1 shadow-md">
        <ChevronLeft size={32} />
      </button>
      <button onClick={onClose} className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md">
        <X size={28} />
      </button>
      <div className="relative w-full h-64 mb-4">
      <img src={product.imageUrl} alt={product.name} className="w-56 h-64 object-fit rounded mb-2 p-2 m-auto mt-6" />
      </div>
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-sm text-gray-600 mb-2">{product.description}</p>
      <p className="text-lg font-bold text-green-600 mb-2">${product.price.toFixed(2)}</p>
      <div className="flex items-center mb-2">
        <Star className="text-yellow-400 fill-current" size={16} />
        <span className="ml-1 text-sm">{product.rating.toFixed(1)}</span>
        <MapPin className="ml-4 text-gray-500" size={16} />
        <span className="ml-1 text-sm text-gray-500">{product.location}</span>
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-1">Customer Reviews</h3>
        <p className="text-xs text-gray-600">Based on 50 reviews</p>
        {/* Add more detailed review information here */}
      </div>
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-1">Purchase History</h3>
        <p className="text-xs text-gray-600">150 people bought this item</p>
        {/* Add more purchase history information here */}
      </div>
      <button 
        onClick={onAddToCart} 
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-4 py-2 w-full font-medium hover:from-blue-600 hover:to-purple-700 transition-colors flex items-center justify-center"
      >
        <ShoppingCart size={20} className="mr-2" />
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductModal;