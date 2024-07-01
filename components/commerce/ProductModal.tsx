// components/ProductModal.tsx
import React from 'react';
import { X, Star, MapPin, Store } from 'lucide-react';
import { Product, Shop } from '@/types/commercetypes';
import { shops } from '@/components/commerce/Data';

type ProductModalProps = {
  product: Product;
  onClose: () => void;
  onAddToCart: () => void;
  onViewShop: (shopId: number) => void;
};

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose, onAddToCart, onViewShop }) => {
  const shop = shops.find(s => s.id === product.shopId);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        <button onClick={onClose} className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
          <X size={24} />
        </button>
        <img src={product.imageUrl} alt={product.name} className="flex mx-auto w-64 h-64 justify-center items-center rounded mb-4 object-fit" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-bold text-green-600 mb-2">KSh {product.price.toLocaleString()}</p>
        <div className="flex items-center mb-4">
          <Star className="text-yellow-400 fill-current" size={20} />
          <span className="ml-1 text-lg">{product.rating.toFixed(1)}</span>
          <MapPin className="ml-4 text-gray-500" size={20} />
          <span className="ml-1 text-lg text-gray-500">{product.location}</span>
        </div>
        {shop && (
          <div className="bg-gray-100 p-3 rounded-lg mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Store className="text-blue-500" size={20} />
                <span className="ml-2 font-semibold">{shop.name}</span>
              </div>
              <div className="flex items-center">
                <Star className="text-yellow-400 fill-current" size={16} />
                <span className="ml-1">{shop.rating.toFixed(1)}</span>
              </div>
            </div>
            <button 
              onClick={() => onViewShop(shop.id)} 
              className="mt-2 text-blue-500 hover:underline text-sm"
            >
              View more from this shop
            </button>
          </div>
        )}
        <button onClick={onAddToCart} className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md px-6 py-3 w-full font-bold hover:from-blue-600 hover:to-purple-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductModal;