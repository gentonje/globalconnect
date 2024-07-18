// App.tsx
"use client"
// App.tsx
import React, { useState } from 'react';
import Header from '@/components/commerce/Header';
import FilterSection from '@/components/commerce/FilterSection';
import ProductList from '@/components/commerce/ProductList';
import ProductModal from '@/components/commerce/ProductModal';
import CartSummary from '@/components/commerce/CartSummary';
import BottomNavigation from '@/components/commerce/BottomNavigation';
import { Product, FilterState, CartItem } from '@/types/commercetypes';
import { mockProducts } from '@/components/commerce/Data';

const Global: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    country: null,
    location: null,
    category: null,
    subcategory: null,
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.product.id !== productId));
  };

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters(prevFilters => ({ ...prevFilters, ...newFilters }));
  };

  const filteredProducts = mockProducts.filter(product => 
    (!filters.country || product.country === filters.country) &&
    (!filters.location || product.location === filters.location) &&
    (!filters.category || product.category === filters.category) &&
    (!filters.subcategory || product.subcategory === filters.subcategory)
  );

  const handleCheckout = () => {
    console.log('Proceeding to checkout', cartItems);
    // Implement checkout logic here
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-white pb-16 font-inter text-gray-800">
      <Header 
        cartItemCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      <main className="max-w-7xl mx-auto p-4">
        <FilterSection
          filters={filters}
          updateFilters={updateFilters}
        />
        <ProductList
          products={filteredProducts}
          onProductSelect={setSelectedProduct}
        />
   
      </main>
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={() => {
            addToCart(selectedProduct);
            setSelectedProduct(null);
          }}
        />
      )}
      {isCartOpen && (
        <CartSummary 
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onRemoveItem={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}
      <BottomNavigation />
    </div>
  );
};

export default Global;
