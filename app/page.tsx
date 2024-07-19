"use client";
import React, { useState, useEffect } from "react";

import { TailwindIndicator } from "./components/main/MainPage/Tailwindindicator";

import { ContentPage } from "@/components/component/ContentPage";
import Loading from "./Loading";
import { LandingPage } from "@/components/component/LandingPage";
import { Sidebar } from "./components/main/MainPage/Sidebar";
import LoadingDots from "./Loading";
import LandingPage2 from "@/components/component/Header";


export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isloggedIn, setisLogged] = useState(false);
  
  useEffect(() => {
    // Simulate some asynchronous operation, like fetching data
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after some time (simulating data fetching)
    }, 2000); // Simulating a 2-second delay
  }, []); // Empty dependency array means this effect runs only once, on component mount

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" mx-auto bg-white max-h-screen">         
          
          {isloggedIn ? <ContentPage /> : <ContentPage />}

          
        </div>
      )}
    </div>
  );
}
