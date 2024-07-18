// File: src/components/ProductCard.tsx
import React from 'react';
import { ProductCardProps } from '@/types/globalShopping';


export const ProductCard: React.FC<ProductCardProps> = ({ Icon, name,imageUrl, price,description, onClick }) => (
  <div 
    className="flex text-teal-700 h-56 md:h-56 lg:h-56 w-full rounded-lg border border-gray-50 hover:border-gray-500 cursor-pointer"
    onClick={() => onClick({ Icon, name, price,imageUrl,description })}
  >
    <div className="flex flex-col py-1 px-1 mx-auto items-center justify-center sm:block sm:mb-0">
      <div className=" flex items-center justify-center">       
        <img src={imageUrl} alt={name} className="object-contain rounded w-40 h-40" />
      </div>
      <div className="">
      {/* <p className="flex px-1  text-sky-800 justify-center bg-green-100 text-[10px] text-center overflow-hidden text-ellipsis h-10">{description}</p> */}
                <h3 className="flex px-1 font-bold text-sm overflow-hidden justify-center text-center">{name}</h3>                
              <p className="flex text-red-800 justify-center bg-yellow-100 text-[12px] font-bold text-center">Kshs. {price.toFixed(0)}</p>
      </div>
    </div>
  </div>
);