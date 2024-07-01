// components/ProductList.tsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '@/types/commercetypes';

interface ProductListProps {
  products: Product[];
  onProductSelect: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onProductSelect }) => {
  const [visibleProducts, setVisibleProducts] = useState(10);

  const showMore = () => {
    setVisibleProducts(prev => Math.min(prev + 10, products.length));
  };

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {products.slice(0, visibleProducts).map(product => (
          <ProductCard key={product.id} product={product} onClick={() => onProductSelect(product)} />
        ))}
      </div>
      {visibleProducts < products.length && (
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
  );
};

export default ProductList;