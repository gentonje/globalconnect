"use client"
import React, { useState } from "react";
import {
  X,
  Home,
  Users,
  Calendar,
  MessageCircle,
  HelpCircle,
  Globe,
  MapPin,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface MenuItem {
  label: string;
  icon?: React.ComponentType<{ size?: number | string }>;
  children?: MenuItem[];
}

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: string) => void;
  username: string;
  location: string;
}

interface MenuItemProps {
  item: MenuItem;
  depth?: number;
  isSelected: boolean;
  onSelect: (label: string) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item,
  depth = 0,
  isSelected,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(item.label);
    if (hasChildren) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className={`text-gray-200 ${depth > 0 ? "ml-4" : ""}`}>
      <div
        className={`flex items-center justify-between py-3 px-4 hover:bg-gray-700 hover:text-white transition-colors duration-300 rounded-md cursor-pointer ${
          isOpen ? "bg-gray-700 text-white" : ""
        } ${isSelected ? "bg-blue-600 text-white" : ""}`}
        onClick={handleClick}
      >
       <span className="text-sm font-medium flex items-center">
          {Icon && (
            <span className="mr-2">
              <Icon size={18} />
            </span>
          )}
          {item.label}
        </span>
        {hasChildren &&
          (isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />)}
      </div>
      {isOpen && item.children && item.children.length > 0 && (
        <div className="mt-1">
          {item.children.map((child, index) => (
            <MenuItem
              key={index}
              item={child}
              depth={depth + 1}
              isSelected={isSelected}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const SideMenu: React.FC<SideMenuProps> = ({
  isOpen,
  onClose,
  onSelectItem,
  username,
  location,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    onSelectItem(item);
  };

  const menuData: MenuItem[] = [
    { label: "Home", icon: Home },
    {
      label: "Community",
      icon: Users,
      children: [
        { label: "Local", icon: MapPin },
        { label: "Global", icon: Globe },
      ],
    },
    { label: "Resources", icon: HelpCircle },
    { label: "News", icon: MessageCircle },
    { label: "Culture", icon: Calendar },
  ];

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-72 bg-gray-800 overflow-y-auto transition-all duration-500 ease-in-out z-30 shadow-lg`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <span className="text-white text-xl font-bold">Kenyan Diaspora</span>
          <X
            className="text-gray-200 hover:text-white transition-colors duration-300 cursor-pointer"            
            size={24}
            onClick={onClose}
          />
        </div>
        <div className="p-4 border-b border-gray-700">
          <p className="text-white">Welcome, {username}</p>
          <p className="text-gray-400 text-sm">Location: {location}</p>
        </div>
        <nav className="p-4 space-y-2">
          {menuData.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              isSelected={selectedItem === item.label}
              onSelect={handleSelectItem}
            />
          ))}
        </nav>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-500 ease-in-out"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};
