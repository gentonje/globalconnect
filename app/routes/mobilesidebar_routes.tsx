// If you're using React Router, define your routes here
// import Home from './components/Home'; // Import your components
// import About from './components/About';
// import Contact from './components/Contact';
// import Services from './components/Services';
// import Blog from './components/Blog'

import { LiaAccessibleIcon, LiaCloudsmith, LiaDashcube, LiaFishSolid, LiaYahoo } from "react-icons/lia";

import { FcHome } from "react-icons/fc"
import { BsSearch } from "react-icons/bs"
import { FcAbout } from "react-icons/fc"

// Optional: Define routes here if not using dynamic routes

  const mroutes  = [
    { path: '/', label: 'Home',icon: <FcHome className="text-sky-500  h-4 w-4 m-1" />, },
    { path: '/about', label: 'Search ',icon: <BsSearch className="text-sky-500 m-1  " />, },
    { path: '/contact', label: 'About',icon: <FcAbout className="text-sky-500  m-1 " />, },
    
  ];
  
  export default  (mroutes) ;
  
