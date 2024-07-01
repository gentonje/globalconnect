// components/CartSummary.tsx
import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { CartItem } from '@/types/commercetypes';

interface CartSummaryProps {
  cartItems: CartItem[];
  onClose: () => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartItems, onClose, onRemoveItem, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-4 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Cart Summary</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.product.id} className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4">
                  <Image
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded"
                  />
                </div>
                <div className="flex-grow">
                  <h3 className="font-medium">{item.product.name}</h3>
                  <p className="text-sm text-gray-500">
                    ${item.product.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition-colors"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartSummary;