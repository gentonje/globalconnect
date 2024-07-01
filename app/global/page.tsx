"use client"

import React, { useState } from 'react';
import { Megaphone, Tractor, ShoppingBag, User, Settings } from 'lucide-react';
import { TabButton } from '@/components/global/TabButton';
import { ProductDetail } from '@/components/global/ProductDetail';
import { CartIcon } from '@/components/global/CartIcon';
import { CheckoutModal } from '@/components/global/CheckoutModal';
import { ContentArea } from '@/components/global/ContentArea';
import { Product } from '@/types/globalShopping';
import { addToCart, clearCart } from '@/actions/globalShopping';

export default function Homepage() {
  const [activeTab, setActiveTab] = useState('Advertise');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleProductClick = (product: Product) => setSelectedProduct(product);
  const handleBackClick = () => setSelectedProduct(null);
  const handleAddToCart = (product: Product) => {
    setCartItems(addToCart(cartItems, product));
    setSelectedProduct(null);
  };
  const handleCheckout = () => {
    setCartItems(clearCart());
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col overflow-y-auto">
      <header className="flex justify-between items-center p-3 bg-gray-800 h-14">
        <h1 className="text-lg font-bold">Global Market</h1>
        <div className="flex items-center space-x-3">
          <button onClick={() => setIsCheckoutOpen(true)} className="p-1 rounded-full hover:bg-gray-700">
            <CartIcon itemCount={cartItems.length} />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-700">
            <Settings size={20} />
          </button>
        </div>
      </header>
      <div className="flex-grow overflow-y-auto">
        {selectedProduct
          ? <ProductDetail product={selectedProduct} onBack={handleBackClick} onAddToCart={handleAddToCart} />
          : <ContentArea activeTab={activeTab} onProductClick={handleProductClick} />
        }
      </div>
      <nav className="flex fixed bottom-0 w-full opacity-95 justify-around items-center h-14 bg-gray-800 border-t border-gray-700">
        <TabButton Icon={Megaphone} label="Advertise" isActive={activeTab === 'Advertise'} onClick={() => setActiveTab('Advertise')} />
        <TabButton Icon={Tractor} label="Farmers" isActive={activeTab === 'Farmers'} onClick={() => setActiveTab('Farmers')} />
        <TabButton Icon={ShoppingBag} label="Goods" isActive={activeTab === 'Goods'} onClick={() => setActiveTab('Goods')} />
        <TabButton Icon={User} label="Profile" isActive={activeTab === 'Profile'} onClick={() => setActiveTab('Profile')} />
      </nav>
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        onCheckout={handleCheckout}
      />
    </div>
  );
};


