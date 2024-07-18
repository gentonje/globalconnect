import React, { useContext } from "react";
import sroutes from "@/app/(routes)/sidebar_routes";
import Link from "next/link";
export function LSidebarNav() {
  return (
    <aside>
      <div className=" h-full mx-1 left-10 p-2 mt-2 w-64 rounded-md border border-r-4 hidden lg:block border-teal-500 min-h-[vh]">
        <div className="">
          <p className="p-2 rounded-md text-center bg-sky-100">Left Navigation</p>
          <nav className="text">
						{sroutes.map((route, index) => {
							
							return (
                <Link
                key={index}
                href={route.path}
                className="mt-5 m-2 capitalize flex items-center px-4 py-2 hover:bg-green-200 rounded-md"
            >
                {route.icon}
                <span className="mx-4 font-sans">
                    {route.label}
                </span>
            </Link>
            
							);
						})}
						<hr className="my-6" />
						
					</nav>
        </div>
      </div>
    </aside>
  );
}
