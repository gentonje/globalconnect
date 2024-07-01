
"use client"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { BellIcon, HomeIcon, LogOutIcon, MenuIcon, SettingsIcon, ShoppingCartIcon, UserIcon } from "lucide-react"
import { FaceIcon, GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { Card, CardContent } from "../ui/card"

interface Product {
  id: number | string; 
  name: string;
  price: number; 
  description: string;
  image: string;
  crop: string;
  location: string;
}

export default function FarmingPage() {
   
  const [cart, setCart] = useState<Product[]>([]);
  const [cropFilter, setCropFilter] = useState("")
  const [locationFilter, setLocationFilter] = useState("")
  const [showFilters, setShowFilters] = useState(false)

  
  const addToCart = (product:Product) => {
    setCart([...cart, product])
  }
  const removeFromCart = (product:Product) => {
    setCart(cart.filter((item) => item !== product))
  }
  const filteredProducts = [
    {
      name: "Fresh Tomatoes",
      description: "Locally grown, juicy and flavorful tomatoes.",
      price: 3.99,
      image: "/placeholder.svg?height=200&width=300",
      crop: "Vegetables",
      location: "Local",
    },
    {
      name: "Organic Carrots",
      description: "Freshly harvested, crunchy and nutrient-rich carrots.",
      price: 2.49,
      image: "/placeholder.svg?height=200&width=300",
      crop: "Vegetables",
      location: "Local",
    },
    {
      name: "Juicy Oranges",
      description: "Sweet and refreshing oranges, perfect for juicing.",
      price: 4.99,
      image: "/placeholder.svg?height=200&width=300",
      crop: "Fruits",
      location: "Imported",
    },
    {
      name: "Crisp Lettuce",
      description: "Fresh and crunchy lettuce, perfect for salads.",
      price: 2.99,
      image: "/placeholder.svg?height=200&width=300",
      crop: "Vegetables",
      location: "Local",
    },
    {
      name: "Sweet Corn",
      description: "Locally grown, tender and flavorful corn.",
      price: 4.49,
      image: "/placeholder.svg?height=200&width=300",
      crop: "Vegetables",
      location: "Local",
    },
    {
      name: "Ripe Avocados",
      description: "Creamy and nutrient-dense avocados.",
      price: 1.99,
      image: "/placeholder.svg?height=200&width=300",
      crop: "Fruits",
      location: "Imported",
    },
  ].filter((product) => {
    if (cropFilter && !product.crop.toLowerCase().includes(cropFilter.toLowerCase())) {
      return false
    }
    if (locationFilter && !product.location.toLowerCase().includes(locationFilter.toLowerCase())) {
      return false
    }
    return true
  })
  return (
    <>
    {/* // <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#1a1a1a] text-[#333] dark:text-[#f5f5f5]">
    //   <header className="bg-teal-500 dark:bg-teal-700 py-4 px-6 md:px-8 lg:px-10 flex items-center justify-between">
    //     <Link className="text-2xl font-bold" href="#">
    //       <HomeIcon className="w-8 h-8 mr-2 inline-block" />
    //       Farm
    //     </Link>
    //     <div className="flex items-center gap-4">
    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button className="relative" size="icon" variant="ghost">
    //             <ShoppingCartIcon className="w-6 h-6" />
    //             <Badge className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs" />
    //             <span className="sr-only">Cart</span>
    //           </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end">
    //           <DropdownMenuLabel>Cart</DropdownMenuLabel>
    //           <DropdownMenuSeparator />
    //           <DropdownMenuItem>Your cart is empty</DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //       <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //           <Button size="icon" variant="ghost">
    //             <UserIcon className="w-6 h-6" />
    //             <span className="sr-only">User Menu</span>
    //           </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end">
    //           <DropdownMenuLabel>My Account</DropdownMenuLabel>
    //           <DropdownMenuSeparator />
    //           <DropdownMenuItem>
    //             <SettingsIcon className="w-4 h-4 mr-2" />
    //             Settings
    //           </DropdownMenuItem>
    //           <DropdownMenuItem>
    //             <LogOutIcon className="w-4 h-4 mr-2" />
    //             Logout
    //           </DropdownMenuItem>
    //         </DropdownMenuContent>
    //       </DropdownMenu>
    //       <Button size="icon" variant="ghost">
    //         <BellIcon className="w-6 h-6" />
    //         <span className="sr-only">Notifications</span>
    //       </Button>
    //     </div>
    //   </header>
    //   <main className="px-4 md:px-8 lg:px-10 py-8">
    //     <div className="mb-6">
    //       <Collapsible>
    //         <CollapsibleTrigger className="flex items-center justify-between w-full bg-green-500 dark:bg-green-700 text-white px-4 py-2 rounded-lg">
    //           <span>Filters</span>
    //         </CollapsibleTrigger>
    //         <CollapsibleContent className="p-4 bg-white dark:bg-[#2c2c2c] rounded-lg shadow-md">
    //           <div className="flex flex-col md:flex-row justify-between mb-6">
    //             <div className="mb-4 md:mb-0 md:mr-4">
    //               <Label className="mb-2" htmlFor="crop-filter">
    //                 Filter by Crop
    //               </Label>
    //               <Input id="crop-filter" placeholder="Filter by crop" />
    //             </div>
    //             <div>
    //               <Label className="mb-2" htmlFor="location-filter">
    //                 Filter by Location
    //               </Label>
    //               <Input id="location-filter" placeholder="Filter by location" />
    //             </div>
    //           </div>
    //         </CollapsibleContent>
    //       </Collapsible>
    //     </div>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" />
    //     <div className="mt-8">
    //       <h2 className="text-2xl font-bold mb-4">Checkout</h2>
    //       <div className="bg-white dark:bg-[#2c2c2c] rounded-lg shadow-md p-4">
    //         <div className="mb-4">
    //           <h3 className="text-lg font-bold">Items in Cart</h3>
    //           <ul />
    //         </div>
    //         <div className="flex justify-between items-center">
    //           <span className="text-lg font-bold">Total Cost:</span>
    //           <span className="text-2xl font-bold">$</span>
    //         </div>
    //         <Button className="mt-4 w-full">Proceed to Checkout</Button>
    //       </div>
    //     </div>
    //   </main>
    //   <footer className="bg-teal-500 dark:bg-teal-700 text-white py-4 px-6 md:px-8 lg:px-10 flex items-center justify-between">
    //     <div className="text-sm">© 2024 FarmFresh. All rights reserved.</div>
    //     <div className="flex items-center gap-4">
    //       <Link className="hover:text-gray-200" href="#">
    //         <TwitterLogoIcon className="w-6 h-6" />
    //         <span className="sr-only">Twitter</span>
    //       </Link>
    //       <Link className="hover:text-gray-200" href="#">
    //         <FaceIcon className="w-6 h-6" />
    //         <span className="sr-only">Facebook</span>
    //       </Link>
    //       <Link className="hover:text-gray-200" href="#">
    //         <InstagramLogoIcon className="w-6 h-6" />
    //         <span className="sr-only">Instagram</span>
    //       </Link>
    //     </div>
    //   </footer>
    // </div> */}
    
    
     
      <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#1a1a1a] text-[#333] dark:text-[#f5f5f5]">
        <header className="bg-teal-500 dark:bg-teal-700 py-4 px-6 md:px-8 lg:px-10 flex items-center justify-between">
          <Link href="#" className="text-2xl font-bold" prefetch={false}>
            <MenuIcon className="w-8 h-8 mr-2 inline-block" />
            Farm
          </Link>
          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCartIcon className="w-6 h-6" />
                  <Badge className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-1.5 py-0.5 text-xs">
                    {cart.length}
                  </Badge>
                  <span className="sr-only">Cart</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Cart</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {cart.length === 0 ? (
                  <DropdownMenuItem>Your cart is empty</DropdownMenuItem>
                ) : (
                  cart.map((product) => (
                    <DropdownMenuItem key={product.name}>
                      {product.name} - ${product.price}
                      <Button variant="ghost" size="icon" onClick={() => removeFromCart(product)}>
                        <div className="w-4 h-4" />
                        <span className="sr-only">Remove from cart</span>
                      </Button>
                    </DropdownMenuItem>
                  ))
                )}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <UserIcon className="w-6 h-6" />
                  <span className="sr-only">User Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <SettingsIcon className="w-4 h-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOutIcon className="w-4 h-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="icon">
              <BellIcon className="w-6 h-6" />
              <span className="sr-only">Notifications</span>
            </Button>
          </div>
        </header>
        <main className="px-4 md:px-8 lg:px-10 py-8">
          <div className="mb-6">
            <Collapsible open={showFilters} onOpenChange={setShowFilters}>
              <CollapsibleTrigger className="flex items-center justify-between w-full bg-green-500 dark:bg-green-700 text-white px-4 py-2 rounded-lg">
                <span>Filters</span>
                <div className="w-6 h-6" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 bg-white dark:bg-[#2c2c2c] rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row justify-between mb-6">
                  <div className="mb-4 md:mb-0 md:mr-4">
                    <Label htmlFor="crop-filter" className="mb-2">
                      Filter by Crop
                    </Label>
                    <Input
                      id="crop-filter"
                      placeholder="Filter by crop"
                      value={cropFilter}
                      onChange={(e) => setCropFilter(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="location-filter" className="mb-2">
                      Filter by Location
                    </Label>
                    <Input
                      id="location-filter"
                      placeholder="Filter by location"
                      value={locationFilter}
                      onChange={(e) => setLocationFilter(e.target.value)}
                    />
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.name} className="bg-white dark:bg-[#2c2c2c] rounded-lg shadow-md">
                <img
                  src="/placeholder.svg"
                  alt={`${product.name} Image`}
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                      ${product.price.toFixed(2)}
                    </span>
                    {/* <Button size="sm" onClick={() => addToCart(product)}>
                      Buy Now
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
        <footer className="bg-teal-500 dark:bg-teal-700 text-white py-4 px-6 md:px-8 lg:px-10 flex items-center justify-between">
          <div className="text-sm">&copy; 2024 FarmFresh. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-gray-200" prefetch={false}>
              <TwitterLogoIcon className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-gray-200" prefetch={false}>
              <GitHubLogoIcon className="w-6 h-6" />
              <span className="sr-only">Github</span>
            </Link>
            <Link href="#" className="hover:text-gray-200" prefetch={false}>
              <InstagramLogoIcon className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </footer>
      </div>
      </>
    )
  
  
}