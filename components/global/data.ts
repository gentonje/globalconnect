// File: src/data.ts
import { Banana, Carrot, ShoppingBag, Coffee, Apple, Leaf, Cherry, Grape, Egg, BookText, Sofa, Flame, Droplet, Utensils, Shirt, Book, Scissors, Heart, Sun, Brush } from 'lucide-react';
import { Product } from '@/types/globalShopping';
import { LiaLemon } from 'react-icons/lia';

export const products: Record<string, Product[]> = {
  Farmers: [
    { Icon: Banana, name: "Organic Bananas", price: 2.99, description: "Fresh, organic bananas from local farmers." },
    { Icon: Carrot, name: "Fresh Carrots", price: 1.99, description: "Crunchy, sweet carrots grown without pesticides." },
    { Icon: Apple, name: "Crisp Apples", price: 3.49, description: "Juicy, locally sourced apples perfect for snacking." },
    { Icon: Apple, name: "Heirloom Tomatoes", price: 4.99, description: "Colorful, flavorful tomatoes grown with care." },
    { Icon: Leaf, name: "Organic Spinach", price: 3.29, description: "Nutrient-packed spinach leaves, organically grown." },
    { Icon: Cherry, name: "Fresh Lemons", price: 2.49, description: "Zesty lemons, perfect for cooking and beverages." },
    { Icon: Cherry, name: "Sweet Cherries", price: 5.99, description: "Plump, juicy cherries picked at peak ripeness." },
    { Icon: Grape, name: "Seedless Grapes", price: 3.79, description: "Sweet, seedless grapes, ideal for snacking." },
    { Icon: Grape, name: "Russet Potatoes", price: 2.99, description: "Versatile potatoes, great for baking or mashing." },
    { Icon: Banana, name: "Cool Cucumbers", price: 1.79, description: "Crisp cucumbers, perfect for salads and pickling." },
    { Icon: Coffee, name: "Sweet Corn", price: 0.99, description: "Farm-fresh corn on the cob, locally grown." },
    { Icon: Coffee, name: "Ripe Avocados", price: 2.49, description: "Creamy avocados, ready for guacamole or toast." },
    { Icon: Egg, name: "Bell Peppers", price: 2.29, description: "Colorful bell peppers, great for stir-fries." },
    { Icon: Egg, name: "Free-Range Eggs", price: 4.99, description: "Farm-fresh eggs from free-range hens." },
  ],
  Goods: [
    { Icon: ShoppingBag, name: "Eco Bag", price: 4.99, description: "Durable, reusable shopping bag made from recycled materials." },
    { Icon: Coffee, name: "Fair Trade Coffee", price: 9.99, description: "Ethically sourced, medium roast coffee beans." },
    { Icon: BookText, name: "Stainless Steel Bottle", price: 14.99, description: "Insulated, eco-friendly water bottle for on-the-go hydration." },
    { Icon: Sofa, name: "Natural Bar Soap", price: 5.99, description: "Handmade soap with essential oils and natural ingredients." },
    { Icon: Flame, name: "Soy Wax Candle", price: 12.99, description: "Long-lasting, naturally scented soy candle in a reusable jar." },
    { Icon: Droplet, name: "Local Raw Honey", price: 8.99, description: "Pure, unprocessed honey from local beekeepers." },
    { Icon: Utensils, name: "Bamboo Cutlery Set", price: 7.99, description: "Eco-friendly, portable cutlery set for on-the-go meals." },
    { Icon: Shirt, name: "Organic Cotton T-Shirt", price: 19.99, description: "Soft, breathable t-shirt made from organic cotton." },
    { Icon: Book, name: "Sustainable Living Guide", price: 15.99, description: "Comprehensive guide to eco-friendly lifestyle choices." },
    { Icon: Scissors, name: "Recycled Paper Notebook", price: 6.99, description: "Notebook made from 100% recycled paper." },
    { Icon: Heart, name: "Natural Lip Balm", price: 3.99, description: "Moisturizing lip balm made with organic ingredients." },
    { Icon: Sun, name: "Mineral Sunscreen", price: 13.99, description: "Reef-safe, natural sunscreen for face and body." },
    { Icon: Brush, name: "Bamboo Toothbrush", price: 4.49, description: "Biodegradable toothbrush with soft bristles." },
    { Icon: Leaf, name: "Herbal Tea Sampler", price: 11.99, description: "Assortment of organic, caffeine-free herbal teas." },
  ]
};