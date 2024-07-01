// types.ts

export type Subcategory = string;

export type Category = {
  name: string;
  subcategories: Subcategory[];
};

export type Location = {
  name: string;
  country: string;
};

export type Country = {
  name: string;
  subcategories: string[]; // e.g., regions or states
};

export type Shop = {
  id: number;
  name: string;
  rating: number;
  country: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  description: string;
  imageUrl: string;
  location: string;
  country: string;
  rating: number;
  shopId: number;
  reviews: number;
  purchases: number;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

export type FilterState = {
  country: string | null;
  location: string | null;
  category: string | null;
  subcategory: string | null;
};