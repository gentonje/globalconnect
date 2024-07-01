import { HomeIcon } from "lucide-react";
import React from "react";
import { FcAbout, FcBbc, FcContacts, FcHome, FcServices } from "react-icons/fc";
import {
  LiaAccusoft,
  LiaAdSolid,
  LiaAddressBookSolid,
  LiaAddressCard,
  LiaAppStore,
  LiaDashcube,
} from "react-icons/lia";

interface sroutes {
  path: string;
  label: string;
  icon?: React.ReactNode;
}

// // Optional: Define routes here if not using dynamic routes
const sroutes = [
  {
    path: "/",
    label: "Mission",
    icon: <FcHome className="text-sky-500  h-6 w-6" />,
  },
  {
    path: "/",
    label: "About",
    icon: <FcAbout className="text-sky-500  h-6 w-6" />,
  },
  {
    path: "/",
    label: "Contact",
    icon: <FcContacts className="text-sky-500 h-6 w-6" />,
  },
  {
    path: "/",
    label: "Service",
    icon: <FcServices className="text-sky-500 h-6 w-6" />,
  },
  {
    path: "/",
    label: "Blog",
    icon: <FcBbc className="text-sky-500 h-6 w-6" />,
  },
];

export default sroutes;
