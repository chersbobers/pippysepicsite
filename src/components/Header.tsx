import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
interface HeaderProps {
  setActiveTab: (tab: string) => void;
}
export const Header = ({
  setActiveTab
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [{
    id: 'stats',
    label: 'Stats'
  }, {
    id: 'videos',
    label: 'Videos'
  }, {
    id: 'merch',
    label: 'Merch'
  }, {
    id: 'socials',
    label: 'Socials'
  }];
  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };
  return <header className="bg-green-200 sticky top-0 z-50 pixel-borders">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold text-green-800 pixel-text cursor-pointer" onClick={() => setActiveTab('home')}>
            Pippy OC
          </span>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-green-800 focus:outline-none pixel-button bg-green-100 p-1">
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-green-800 hover:text-green-600 transition text-xs">
              <span className="pixel-text">{item.label}</span>
            </button>)}
        </nav>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-green-200 px-4 py-2 border-t-2 border-black">
          <nav className="flex flex-col space-y-3 pb-3">
            {navItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className="text-green-800 hover:text-green-600 transition text-left text-xs">
                <span className="pixel-text">{item.label}</span>
              </button>)}
          </nav>
        </div>}
    </header>;
};