// File: src/data.ts
import { Banana, Carrot, ShoppingBag, Coffee, Apple, Leaf, Cherry, Grape, Egg, BookText, Sofa, Flame, Droplet, Utensils, Shirt, Book, Scissors, Heart, Sun, Brush } from 'lucide-react';
import { Product } from '@/types/globalShopping';


export const products: Record<string, Product[]> = {
  Farmers: [
    
  ],
  Goods: [
    {
      Icon: Banana,
      name: "LG UHD TV",
      price: 45000,
      description: "High-quality Ultra HD television with vibrant colors and sharp image quality.",
      imageUrl: "/images/lg50.jpg"
    },
    {
      Icon: Carrot,
      name: "Grace Golden Slippers",
      price: 750,
      description: "Elegant and comfortable golden slippers for a touch of luxury.",
      imageUrl: "/images/lg51.jpg"
    },
    {
      Icon: Apple,
      name: "Crystal UHD TV 32 inch",
      price: 26500,
      description: "32-inch Crystal UHD TV offering clear picture quality and smart features.",
      imageUrl: "/images/lg52.jpg"
    },
    {
      Icon: Apple,
      name: "Crystal UHD TV 24 inch",
      price: 18000,
      description: "Compact 24-inch Crystal UHD TV, perfect for smaller spaces.",
      imageUrl: "/images/lg53.jpg"
    },
    {
      Icon: Leaf,
      name: "Crystal UHD TV 52 inch",
      price: 38000,
      description: "Large 52-inch Crystal UHD TV with immersive viewing experience.",
      imageUrl: "/images/lg54.jpg"
    },
    {
      Icon: Cherry,
      name: "Sunday Panties",
      price: 500,
      description: "Comfortable and stylish panties for a relaxed Sunday feel.",
      imageUrl: "/images/lg55.jpg"
    },
    {
      Icon: Cherry,
      name: "GET Sports",
      price: 2500,
      description: "High-performance sports gear for active lifestyles.",
      imageUrl: "/images/lg56.jpg"
    },
    {
      Icon: Grape,
      name: "Nike Sports",
      price: 3500,
      description: "Premium Nike sports equipment and apparel for athletes.",
      imageUrl: "/images/lg57.jpg"
    },
    {
      Icon: Grape,
      name: "Adidas Sports",
      price: 4000,
      description: "Quality Adidas sports products for training and competition.",
      imageUrl: "/images/lg58.jpg"
    }
  ]
};