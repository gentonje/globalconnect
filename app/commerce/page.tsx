
"use client"

import React, { useState, useMemo } from 'react';
import { ShoppingCart, ChevronDown, ChevronLeft, Globe, MapPin, X } from 'lucide-react';
import { categories, locations, countries, mockProducts, shops } from '@/components/commerce/Data';
import { Product, Category } from '@/types/commercetypes';
import CategoryItem from '@/components/commerce/CategoryItem';
import ProductCard from '@/components/commerce/ProductCard';
import ProductModal from '@/components/commerce/ProductModal';
import CheckoutSummary from '@/components/commerce/CheckoutSummary';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [selectedShopId, setSelectedShopId] = useState<number | null>(null);
  const [cartItems, setCartItems] = useState<{ product: Product; quantity: number }[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [visibleProducts, setVisibleProducts] = useState(8);

  const filteredProducts = useMemo(() => 
    mockProducts.filter(p => 
      (!selectedCategory || p.category === selectedCategory) &&
      (!selectedSubcategory || p.subcategory === selectedSubcategory) &&
      (!selectedCountry || p.country === selectedCountry) &&
      (!selectedLocation || p.location === selectedLocation) &&
      (!selectedShopId || p.shopId === selectedShopId)
    ),
    [selectedCategory, selectedSubcategory, selectedCountry, selectedLocation, selectedShopId]
  );

  const filteredLocations = useMemo(() => 
    selectedCountry
      ? locations.filter(location => 
          mockProducts.some(p => p.country === selectedCountry && p.location === location)
        )
      : [],
    [selectedCountry]
  );

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
    setSelectedProduct(null);
  };

  const showMore = () => {
    setVisibleProducts(prev => Math.min(prev + 8, filteredProducts.length));
  };

  const viewShop = (shopId: number) => {
    setSelectedShopId(shopId);
    setSelectedProduct(null);
    setVisibleProducts(8);
  };

  const removeAllFilters = () => {
    setSelectedCategory(null);
    setSelectedSubcategory(null);
    setSelectedCountry(null);
    setSelectedLocation(null);
    setSelectedShopId(null);
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 pb-20 font-inter text-gray-800">
      <header className="bg-white shadow-md p-3 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Muchais African Marketplace</h1>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-2 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-colors relative">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        {selectedShopId ? (
          <button 
            onClick={() => setSelectedShopId(null)} 
            className="mb-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded inline-flex items-center text-sm"
          >
            <ChevronLeft size={16} className="mr-2" />
            Back to All Products
          </button>
        ) : (
          <>
            <section className="mb-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button
                  onClick={removeAllFilters}
                  className="text-xs text-blue-600 hover:text-blue-800 flex items-center"
                >
                  <X size={14} className="mr-1" />
                  Remove all filters
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium mb-2 text-sm">Country</h3>
                  <div className="flex flex-wrap gap-2">
                    {countries.map(country => (
                      <button
                        key={country}
                        onClick={() => {
                          setSelectedCountry(country === selectedCountry ? null : country);
                          setSelectedLocation(null);
                        }}
                        className={`px-3 py-1 rounded-full flex items-center text-xs ${
                          country === selectedCountry
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        <Globe size={12} className="mr-1" />
                        {country}
                      </button>
                    ))}
                  </div>
                </div>

                {/* ... (Location, Categories, and Subcategories sections remain similar, just adjust text sizes) ... */}
              </div>
            </section>

            {/* ... (Active filters section remains similar, just adjust text sizes) ... */}
          </>
        )}

        <section>
          <h2 className="text-lg font-semibold mb-3">
            {selectedShopId 
              ? `Products from ${shops.find(s => s.id === selectedShopId)?.name}`
              : "Products"}
            {(selectedCountry || selectedLocation || selectedCategory || selectedSubcategory) && ": "}
            {selectedCountry && `in ${selectedCountry}`}
            {selectedLocation && `, ${selectedLocation}`}
            {selectedCategory && (selectedCountry || selectedLocation ? ` - ${selectedCategory}` : selectedCategory)}
            {selectedSubcategory && ` > ${selectedSubcategory}`}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {filteredProducts.slice(0, visibleProducts).map(product => (
              <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
            ))}
          </div>
          {visibleProducts < filteredProducts.length && (
            <div className="text-center mt-6">
              <button 
                onClick={showMore}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:from-blue-600 hover:to-purple-700 transition-colors inline-flex items-center"
              >
                Show More <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
          )}
        </section>
      </main>

      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={() => addToCart(selectedProduct)}
          onViewShop={viewShop}
        />
      )}

      <CheckoutSummary 
        itemCount={totalItems}
        total={totalPrice}
        onCheckout={() => console.log('Proceed to checkout')}
      />
    </div>
  );
};

export default App;