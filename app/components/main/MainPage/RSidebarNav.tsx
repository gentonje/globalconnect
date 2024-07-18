import downloadroutes from "@/app/(routes)/downloadroutes";
import Link from "next/link";
import React, { useContext } from "react";

export function RSidebarNav() {  

  return (
    <aside>
      <div className="mt-2 mx-1 left-10 w-64 rounded-md border border-l-4 hidden xl:block border-teal-500 min-h-[vh]">
        <div className="">
          <p className="p-2 font-sans rounded-md text-center justify-evenly bg-sky-100">Progress Reports</p>
          <nav className="text">
						{downloadroutes.map((route, index) => {
							
							return (
                <Link
                key={index}
                href={route.path}
                className="m-2 capitalize flex items-center px-4 py-2 hover:bg-green-200 rounded-md"
            >
                {route.icon}
                <span className=" font-sans">
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
