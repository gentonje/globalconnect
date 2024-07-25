// File: src/components/ProductCard.tsx
import React from 'react';
import { ProductCardProps } from '@/types/globalShopping';


export const ProductCard: React.FC<ProductCardProps> = ({ Icon, name,imageUrl, price,description, onClick }) => (
  <div 
    className="flex text-teal-950 h-56  md:h-56 lg:h-56 w-full rounded-lg border border-gray-50 hover:animate-pulse cursor-pointer"
    onClick={() => onClick({ Icon, name, price,imageUrl,description })}
  >
    <div className=" flex flex-col py-1 px-1 mx-auto items-center justify-center sm:block sm:mb-0">
      <div className=" flex items-center justify-center">       
        <img src={imageUrl} alt={name} className="object-contain rounded w-40 h-40" />
      </div>
      <div className="min-w-40">     
                <h3 className="flex px-1 font-bold text-sm overflow-hidden justify-center text-center ">{name}</h3>                
              
      </div>
      <div className='min-w-40'>
      <p className="flex text-red-800 justify-center bg-sky-100 text-[14px] font-bold text-center rounded-md w-full">Kshs. {price.toFixed(0)}</p>
      </div>
    </div>
  </div>
);