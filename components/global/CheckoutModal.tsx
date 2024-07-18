// File: src/components/CheckoutModal.tsx
import React from 'react';
import { CheckoutModalProps } from '@/types/globalShopping';

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, cartItems, onCheckout }) => {
  if (!isOpen) return null;
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-4 rounded-lg max-w-xs w-full">
        <h2 className="text-lg font-bold mb-3">Checkout</h2>
        <div className="max-h-40 overflow-y-auto">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2 text-sm">
              <span>{item.name}</span>
              <span>Kshs {item.price.toFixed(0)}</span>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-600 my-3 pt-3 flex justify-between items-center font-bold text-sm">
          <span>Total:</span>
          <span>Kshs {total.toFixed(0)}</span>
        </div>
        <div className="flex justify-end space-x-3">
          <button onClick={onClose} className="px-3 py-1 bg-gray-600 rounded hover:bg-gray-700 text-sm">Cancel</button>
          <button onClick={onCheckout} className="px-3 py-1 bg-purple-600 rounded hover:bg-purple-700 text-sm">Confirm Purchase</button>
        </div>
      </div>
    </div>
  );
};
