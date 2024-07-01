"use client";
import React from "react";
import MobileNavbarBottom from "./MobileNav";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const MobileNavbar = () => {
  return <nav className=" flex min-w-[vw] px-4 mx-2 my-2 py-1 md:hidden justify-between rounded-sm bg-sky-500 font-bold"><MobileNavbarBottom />  
  <Link href={"/"}>
    <Button className="bg-green-300 text-teal-950 w-auto h-10 rounded-lg hover:bg-green-500">Home</Button>
  </Link>
  </nav>;
};

export default MobileNavbar;
