// components/CheckoutSummary.tsx
import React from 'react';
import { ShoppingCart, CreditCard } from 'lucide-react';

type CheckoutSummaryProps = {
  itemCount: number;
  total: number;
  onCheckout: () => void;
};

const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({ itemCount, total, onCheckout }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <ShoppingCart size={20} className="text-purple-600 mr-2" />
        <span className="text-sm font-medium">{itemCount} items</span>
        <span className="mx-2">|</span>
        <span className="text-sm font-semibold">${total.toFixed(2)}</span>
      </div>
      <button
        onClick={onCheckout}
        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full p-2 flex items-center justify-center hover:from-purple-700 hover:to-indigo-700 transition-colors"
      >
        <CreditCard size={20} />
      </button>
    </div>
  </div>
);

export default CheckoutSummary;