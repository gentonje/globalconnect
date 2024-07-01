// File: src/actions.ts
import { Product } from '@/types/globalShopping';

export const addToCart = (cartItems: Product[], product: Product): Product[] => {
  return [...cartItems, product];
};

export const clearCart = (): Product[] => {
  return [];
};

