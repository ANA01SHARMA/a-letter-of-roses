
import React from 'react';
import { motion } from 'framer-motion';

type Tab = 'home' | 'message' | 'flowers' | 'gallery' | 'surprise';

interface NavbarProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const navItems: { name: string; id: Tab }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Message', id: 'message' },
    { name: 'Flowers', id: 'flowers' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Surprise', id: 'surprise' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-8 left-0 right-0 z-50 flex justify-center items-center px-4 pointer-events-none"
    >
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 px-6 md:px-10 py-3 rounded-full flex gap-4 md:gap-10 pointer-events-auto shadow-2xl">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            onClick={() => onTabChange(item.id)}
            className={`transition-all text-[10px] md:text-[11px] font-bold tracking-[0.25em] uppercase relative py-1 ${
              activeTab === item.id 
                ? 'text-rose-400' 
                : 'text-white/40 hover:text-white'
            }`}
          >
            {item.name}
            {activeTab === item.id && (
              <motion.div 
                layoutId="navActive"
                className="absolute -bottom-1 left-0 right-0 h-px bg-rose-500"
              />
            )}
          </button>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
