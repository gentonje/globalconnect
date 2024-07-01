"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { LucideHome, } from "lucide-react";
import MobileNav from "@/app/components/main/MainPage/MobileNav";
import { Progress } from "../ui/progress";

const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false); // Cleanup function for unmounted component
  }, []);

  return isMounted;
};

interface progressProps {
progress:number
}
export default function Header(progressValue:progressProps) {
  const isMounted = useIsMounted(); // Get mounted state

  return (
    <div>
      {isMounted && (
        <div className="flex flex-col">
          <header className="mx-2 my-1 bg-indigo-400 text-white py-2 rounded-md">
            <span className="flex mx-1 ">
              <Link href={"/"}><MobileNav /></Link>
              <span className="flex mx-auto">
                <h1 className="flex font-sans text-2xl font-extrabold rounded-md">
                  LEARNING SPACE
                </h1>
              </span>
              <Link href={"/"} >
                <Button className=" bg-indigo-300 border text p-1 m-1 rounded-lg hover:bg-green-500">
                  <LucideHome className="w-8 h-8" />
                </Button>
              </Link>
            </span>
          </header>
          <section className="flex mx-16 -mt-4 bg-white text-slate-950 rounded-md">
          <Progress
                className="w-[80%] mx-auto  my-auto h-3 md:h-4 text-sky-500 bg-gray-50 border border-sky-400 shadow-sm shadow-emerald-300"
                value={progressValue.progress}
              />
              <span className="text-sky-500 text-[14px] md:text-[18px] p-1 font-bold ">
              {progressValue.progress}%
            </span>
              
           
          </section>
          {/* <footer className="mx-4 text-2xl font-semibold text-center bg-indigo-200 text-white py-8 rounded-md">
            Footer Links
          </footer> */}
        </div>
      )}
    </div>
  );
}
