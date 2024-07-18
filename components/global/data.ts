// File: src/data.ts
import { Banana, Carrot, ShoppingBag, Coffee, Apple, Leaf, Cherry, Grape, Egg, BookText, Sofa, Flame, Droplet, Utensils, Shirt, Book, Scissors, Heart, Sun, Brush } from 'lucide-react';
import { Product } from '@/types/globalShopping';


export const products: Record<string, Product[]> = {
  Farmers: [
    { Icon: Banana, name: "LG UHD TV", price: 45000, description: "Fresh, organic bananas from local farmers.",imageUrl:"/images/lg50.jpg" },
    { Icon: Carrot, name: "Grace Golden Slippers", price: 750, description: "Crunchy, sweet carrots grown without pesticides.",imageUrl:"/images/lg51.jpg" },
    { Icon: Apple, name: "Crystal UHD TV 32 inch", price: 26500, description: "Juicy, locally sourced apples perfect for snacking.",imageUrl:"/images/lg52.jpg" },
    { Icon: Apple, name: "Crystal UHD TV 24 inch", price: 18000, description: "Colorful, flavorful tomatoes grown with care.",imageUrl:"/images/lg53.jpg" },
    { Icon: Leaf, name: "Crystal UHD TV 52 inch", price: 38000, description: "Nutrient-packed spinach leaves, organically grown.",imageUrl:"/images/lg54.jpg" },
    { Icon: Cherry, name: "Sunday Panties", price: 500, description: "Zesty lemons, perfect for cooking and beverages.",imageUrl:"/images/lg55.jpg" },
    { Icon: Cherry, name: "GET Sports", price: 2500, description: "Plump, juicy cherries picked at peak ripeness.",imageUrl:"/images/lg56.jpg" },
    { Icon: Grape, name: "Nike Sports", price: 3500, description: "Sweet, seedless grapes, ideal for snacking." ,imageUrl:"/images/lg57.jpg"},
    { Icon: Grape, name: "Adidas Sports", price: 4000, description: "Versatile potatoes, great for baking or mashing.",imageUrl:"/images/lg58.jpg" },
    
  ],
  Goods: [
    { Icon: Banana, name: "LG UHD TV", price: 45000, description: "Fresh, organic bananas from local farmers.",imageUrl:"/images/lg50.jpg" },
    { Icon: Carrot, name: "Grace Golden Slippers", price: 750, description: "Crunchy, sweet carrots grown without pesticides.",imageUrl:"/images/lg51.jpg" },
    { Icon: Apple, name: "Crystal UHD TV 32 inch", price: 26500, description: "Juicy, locally sourced apples perfect for snacking.",imageUrl:"/images/lg52.jpg" },
    { Icon: Apple, name: "Crystal UHD TV 24 inch", price: 18000, description: "Colorful, flavorful tomatoes grown with care.",imageUrl:"/images/lg53.jpg" },
    { Icon: Leaf, name: "Crystal UHD TV 52 inch", price: 38000, description: "Nutrient-packed spinach leaves, organically grown.",imageUrl:"/images/lg54.jpg" },
    { Icon: Cherry, name: "Sunday Panties", price: 500, description: "Zesty lemons, perfect for cooking and beverages.",imageUrl:"/images/lg55.jpg" },
    { Icon: Cherry, name: "GET Sports", price: 2500, description: "Plump, juicy cherries picked at peak ripeness.",imageUrl:"/images/lg56.jpg" },
    { Icon: Grape, name: "Nike Sports", price: 3500, description: "Sweet, seedless grapes, ideal for snacking." ,imageUrl:"/images/lg57.jpg"},
    { Icon: Grape, name: "Adidas Sports", price: 4000, description: "Versatile potatoes, great for baking or mashing.",imageUrl:"/images/lg58.jpg" },
  ]
};