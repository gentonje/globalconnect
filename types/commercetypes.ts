// types.ts

export type Category = {
  name: string;
  subcategories: string[];
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
  rating: number;
  shopId: number;
  country: string;
};

export type CartItem = {
  product: Product;
  quantity: number;
};