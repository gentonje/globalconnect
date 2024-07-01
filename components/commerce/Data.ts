// data.ts
import { Category, Shop, Product } from '@/types/commercetypes';

export const countries = ["Kenya", "Uganda", "Tanzania", "Rwanda", "Ethiopia", "South Sudan", "Djibouti"];

export const locations = [
  "Nairobi", "Mombasa", "Kisumu", "Kampala", "Entebbe", "Dar es Salaam", "Arusha", 
  "Kigali", "Addis Ababa", "Juba", "Djibouti City"
];

export const categories: Category[] = [
  {
    name: "Beauty",
    subcategories: ["Skincare", "Makeup", "Hair Care", "Nails", "Fragrances"]
  },
  {
    name: "Electronics",
    subcategories: ["Smartphones", "Laptops", "Audio", "Cameras", "Accessories"]
  },
  {
    name: "Fashion",
    subcategories: ["Women's Clothing", "Men's Clothing", "Shoes", "Bags", "Jewelry"]
  },
  {
    name: "Home & Living",
    subcategories: ["Furniture", "Decor", "Bedding", "Kitchen", "Lighting"]
  },
  {
    name: "Automotive",
    subcategories: ["Car Parts", "Motorcycles", "Tools", "Accessories", "Tires"]
  }
];

export const shops: Shop[] = [
  { id: 1, name: "BeautyZone", rating: 4.5, country: "Kenya" },
  { id: 2, name: "TechHub", rating: 4.2, country: "Uganda" },
  { id: 3, name: "Fashionista", rating: 4.7, country: "Tanzania" },
  { id: 4, name: "HomeComfort", rating: 4.0, country: "Rwanda" },
  { id: 5, name: "AutoParts", rating: 4.3, country: "Ethiopia" },
];

export const mockProducts: Product[] = [
  { id: 1, name: "Moisturizing Face Cream", price: 2999, category: "Beauty", subcategory: "Skincare", description: "Hydrating face cream for all skin types", imageUrl: "./tecnopop.jpeg", location: "Nairobi", rating: 4.5, shopId: 1, country: "Kenya" },
  { id: 2, name: "Matte Lipstick Set", price: 1899, category: "Beauty", subcategory: "Makeup", description: "Set of 5 long-lasting matte lipsticks", imageUrl: "./galaxy24.jpeg", location: "Kampala", rating: 4.3, shopId: 1, country: "Uganda" },
  { id: 3, name: "Smartphone X1", price: 54999, category: "Electronics", subcategory: "Smartphones", description: "Latest model with 5G capability", imageUrl: "./tecnopop.jpeg", location: "Dar es Salaam", rating: 4.7, shopId: 2, country: "Tanzania" },
  { id: 4, name: "Wireless Earbuds", price: 7999, category: "Electronics", subcategory: "Audio", description: "True wireless earbuds with noise cancellation", imageUrl: "tecnopop.jpeg", location: "Kigali", rating: 4.4, shopId: 2, country: "Rwanda" },
  { id: 5, name: "Summer Floral Dress", price: 3499, category: "Fashion", subcategory: "Women's Clothing", description: "Light and breezy floral print dress", imageUrl: "tecnopop.jpeg", location: "Addis Ababa", rating: 4.2, shopId: 3, country: "Ethiopia" },
  { id: 6, name: "Men's Leather Wallet", price: 2499, category: "Fashion", subcategory: "Men's Clothing", description: "Genuine leather bifold wallet", imageUrl: "tecnopop.jpeg", location: "Juba", rating: 4.0, shopId: 3, country: "South Sudan" },
  { id: 7, name: "Modern Coffee Table", price: 15999, category: "Home & Living", subcategory: "Furniture", description: "Sleek design with storage compartment", imageUrl: "tecnopop.jpeg", location: "Mombasa", rating: 4.6, shopId: 4, country: "Kenya" },
  { id: 8, name: "Decorative Wall Clock", price: 3999, category: "Home & Living", subcategory: "Decor", description: "Stylish wall clock with silent mechanism", imageUrl: "tecnopop.jpeg", location: "Entebbe", rating: 4.1, shopId: 4, country: "Uganda" },
  { id: 9, name: "Car Battery", price: 8999, category: "Automotive", subcategory: "Car Parts", description: "High-performance car battery", imageUrl: "tecnopop.jpeg", location: "Arusha", rating: 4.8, shopId: 5, country: "Tanzania" },
  { id: 10, name: "Motorcycle Helmet", price: 5999, category: "Automotive", subcategory: "Motorcycles", description: "DOT-certified full-face helmet", imageUrl: "tecnopop.jpeg", location: "Djibouti City", rating: 4.5, shopId: 5, country: "Djibouti" },
  // Add more products as needed
];