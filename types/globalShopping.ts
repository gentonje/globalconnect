

// File: src/types.ts
import { LucideIcon } from 'lucide-react';

export interface Product {
  Icon: LucideIcon;
  name: string;
  price: number;
  description: string;
}

export interface TabButtonProps {
  Icon: LucideIcon;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export interface ProductCardProps extends Product {
  onClick: (product: Product) => void;
}

export interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

export interface CartIconProps {
  itemCount: number;
}

export interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: Product[];
  onCheckout: () => void;
}

export interface ContentAreaProps {
  activeTab: string;
  onProductClick: (product: Product) => void;
}