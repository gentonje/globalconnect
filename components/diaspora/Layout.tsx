"use client"

import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { SideMenu } from './SideMenu';

interface LayoutProps {
  children: (section: string) => React.ReactNode;
  username: string;
  location: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, username, location }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>('Home');

  const handleSelectItem = (item: string) => {
    setCurrentSection(item);
  };

  return (
    <div className="relative min-h-screen bg-gray-800 text-gray-200">
      <header className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
        <span className="text-xl font-bold">Kenyan Diaspora</span>
        <button 
          className="p-2 rounded-md bg-gray-700 hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
        >
          <Menu className="text-white" size={24} />
        </button>
      </header>
      <SideMenu 
        isOpen={isSideMenuOpen} 
        onClose={() => setIsSideMenuOpen(false)} 
        onSelectItem={handleSelectItem}
        username={username}
        location={location}
      />
      <main className="p-4">
        {children(currentSection)}
      </main>
    </div>
  );
};