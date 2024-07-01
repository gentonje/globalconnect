// data.ts
import { Category, Country, Location, Shop, Product } from '@/types/commercetypes';

export const categories: Category[] = [
  {
    name: "Electronics",
    subcategories: ["Smartphones", "Laptops", "Tablets", "Accessories"]
  },
  {
    name: "Fashion",
    subcategories: ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories"]
  },
  {
    name: "Home & Living",
    subcategories: ["Furniture", "Decor", "Kitchenware", "Bedding"]
  },
  // Add more categories as needed
];

export const countries: Country[] = [
  {
    name: "Kenya",
    subcategories: ["Nairobi Area", "Coast", "Rift Valley", "Western"]
  },
  {
    name: "Uganda",
    subcategories: ["Central", "Eastern", "Northern", "Western"]
  },
  {
    name: "Tanzania",
    subcategories: ["Dar es Salaam", "Arusha", "Zanzibar", "Mwanza"]
  },
  // Add more countries as needed
];

export const locations: Location[] = [
  { name: "Nairobi", country: "Kenya" },
  { name: "Mombasa", country: "Kenya" },
  { name: "Kampala", country: "Uganda" },
  { name: "Dar es Salaam", country: "Tanzania" },
  // Add more locations as needed
];

export const shops: Shop[] = [
  { id: 1, name: "SsengobaTech", rating: 4.5, country: "Kenya" },
  { id: 2, name: "FashionZone", rating: 4.2, country: "Uganda" },
  { id: 3, name: "HomeDecor", rating: 4.7, country: "Tanzania" },
  // Add more shops as needed
];

export const mockProducts: Product[] = [
  { 
    id: 1, 
    name: "OPPO A60", 
    price: 28999, 
    category: "Electronics",
    subcategory: "Smartphones", 
    description: "256GB + 8GB, 50MP Camera, 5000mAh", 
    imageUrl: "/images/galaxy24.jpeg", 
    location: "Nairobi", 
    country: "Kenya",
    rating: 4.5, 
    shopId: 1,
    reviews: 120,
    purchases: 500
  },
  { 
    id: 2, 
    name: "Leather Jacket", 
    price: 5999, 
    category: "Fashion",
    subcategory: "Men's Clothing", 
    description: "Genuine leather, multiple pockets", 
    imageUrl: "/images/tecnopop.jpeg", 
    location: "Kampala", 
    country: "Uganda",
    rating: 4.3, 
    shopId: 2,
    reviews: 85,
    purchases: 320
  },
  // Add more products as needed
];