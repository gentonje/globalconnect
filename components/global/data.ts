// File: src/data.ts
import { Banana, Carrot, ShoppingBag, Coffee, Apple, Leaf, Cherry, Grape, Egg, BookText, Sofa, Flame, Droplet, Utensils, Shirt, Book, Scissors, Heart, Sun, Brush } from 'lucide-react';
import { Product } from '@/types/globalShopping';


export const products: Record<string, Product[]> = {
  Farmers: [
    { Icon: Banana, name: "LG UHD TV", price: 45000, description: "Fresh, organic bananas from local farmers.",imageUrl:"/images/lg50.jpg" },
    { Icon: Carrot, name: "Grace Golden Slippers", price: 750, description: "Crunchy, sweet carrots grown without pesticides.",imageUrl:"/images/lg51.jpg" },
    { Icon: Apple, name: "Crisp Apples", price: 3.49, description: "Juicy, locally sourced apples perfect for snacking.",imageUrl:"/images/lg52.jpg" },
    { Icon: Apple, name: "Heirloom Tomatoes", price: 4.99, description: "Colorful, flavorful tomatoes grown with care.",imageUrl:"/images/lg53.jpg" },
    { Icon: Leaf, name: "Organic Spinach", price: 3.29, description: "Nutrient-packed spinach leaves, organically grown.",imageUrl:"/images/lg54.jpg" },
    { Icon: Cherry, name: "Fresh Lemons", price: 2.49, description: "Zesty lemons, perfect for cooking and beverages.",imageUrl:"/images/lg55.jpg" },
    { Icon: Cherry, name: "Sweet Cherries", price: 5.99, description: "Plump, juicy cherries picked at peak ripeness.",imageUrl:"/images/lg56.jpg" },
    { Icon: Grape, name: "Seedless Grapes", price: 3.79, description: "Sweet, seedless grapes, ideal for snacking." ,imageUrl:"/images/lg57.jpg"},
    { Icon: Grape, name: "Russet Potatoes", price: 2.99, description: "Versatile potatoes, great for baking or mashing.",imageUrl:"/images/lg58.jpg" },
    { Icon: Banana, name: "Cool Cucumbers", price: 1.79, description: "Crisp cucumbers, perfect for salads and pickling.",imageUrl:"/images/lg59.jpg" },
    { Icon: Coffee, name: "Sweet Corn", price: 0.99, description: "Farm-fresh corn on the cob, locally grown.",imageUrl:"/images/lg60.jpg" },
    { Icon: Coffee, name: "Ripe Avocados", price: 2.49, description: "Creamy avocados, ready for guacamole or toast.",imageUrl:"/images/lg50.jpg" },
    { Icon: Egg, name: "Bell Peppers", price: 2.29, description: "Colorful bell peppers, great for stir-fries.",imageUrl:"/images/lg50.jpg" },
    { Icon: Egg, name: "Free-Range Eggs", price: 4.99, description: "Farm-fresh eggs from free-range hens." ,imageUrl:"/images/lg50.jpg"},
  ],
  Goods: [
    { Icon: ShoppingBag, name: "Eco Bag", price: 4.99, description: "Durable, reusable shopping bag made from recycled materials." ,imageUrl:"/images/lg50.jpg"},
    { Icon: Coffee, name: "Fair Trade Coffee", price: 9.99, description: "Ethically sourced, medium roast coffee beans.",imageUrl:"/images/lg50.jpg" },
    { Icon: BookText, name: "Stainless Steel Bottle", price: 14.99, description: "Insulated, eco-friendly water bottle for on-the-go hydration." ,imageUrl:"/images/lg50.jpg"},
    { Icon: Sofa, name: "Natural Bar Soap", price: 5.99, description: "Handmade soap with essential oils and natural ingredients." ,imageUrl:"/images/lg50.jpg"},
    { Icon: Flame, name: "Soy Wax Candle", price: 12.99, description: "Long-lasting, naturally scented soy candle in a reusable jar." ,imageUrl:"/images/lg50.jpg"},
    { Icon: Droplet, name: "Local Raw Honey", price: 8.99, description: "Pure, unprocessed honey from local beekeepers.",imageUrl:"/images/lg50.jpg" },
    { Icon: Utensils, name: "Bamboo Cutlery Set", price: 7.99, description: "Eco-friendly, portable cutlery set for on-the-go meals." ,imageUrl:"/images/lg50.jpg"},
    { Icon: Shirt, name: "Organic Cotton T-Shirt", price: 19.99, description: "Soft, breathable t-shirt made from organic cotton.",imageUrl:"/images/lg50.jpg" },
    { Icon: Book, name: "Sustainable Living Guide", price: 15.99, description: "Comprehensive guide to eco-friendly lifestyle choices." ,imageUrl:"/images/lg50.jpg"},
    { Icon: Scissors, name: "Recycled Paper Notebook", price: 6.99, description: "Notebook made from 100% recycled paper." ,imageUrl:"/images/lg50.jpg"},
    { Icon: Heart, name: "Natural Lip Balm", price: 3.99, description: "Moisturizing lip balm made with organic ingredients." ,imageUrl:"/images/lg50.jpg"},
    { Icon: Sun, name: "Mineral Sunscreen", price: 13.99, description: "Reef-safe, natural sunscreen for face and body.",imageUrl:"/images/lg50.jpg" },
    { Icon: Brush, name: "Bamboo Toothbrush", price: 4.49, description: "Biodegradable toothbrush with soft bristles." ,imageUrl:"/images/lg50.jpg"},
    { Icon: Leaf, name: "Herbal Tea Sampler", price: 11.99, description: "Assortment of organic, caffeine-free herbal teas." ,imageUrl:"/images/lg50.jpg"},
  ]
};