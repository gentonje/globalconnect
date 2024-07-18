import * as React from "react";
import Link from "next/link";
import nroutes from "@/app/(routes)/navbar_routes";

export function MainNav() {
  return (
    <nav className="mb-10">
      <div className="  md:h-10 md:mb-2 hidden md:flex fixed top-0 bg-white justify-center items-center opacity-90 mb-5 h-[70px] p-2 w-full space-x-12 md:space-x-2 px-6 gap-4 border border-b-2 border-slate-300">
        {nroutes?.map((route, index) => (
          <Link key={index} href={route.path}>
            {route.label}
          </Link>
        ))}
      </div>

    </nav>
  );
}
