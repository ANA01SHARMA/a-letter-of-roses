
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LoveMessage from './components/LoveMessage';
import Letter from './components/Letter';
import Bouquet from './components/Bouquet';
import Gallery from './components/Gallery';
import HeartsSection from './components/HeartsSection';
import Surprise from './components/Surprise';
import FlowerOverlay from './components/FlowerOverlay';
import FlowerGarden from './components/FlowerGarden';

type Tab = 'home' | 'message' | 'flowers' | 'gallery' | 'surprise';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [flowers, setFlowers] = useState<{ id: number; x: number; y: number; type: string; color: string }[]>([]);
  const nextId = useRef(0);

  const addFlower = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.closest('a') || target.closest('input')) return;

    const flowerTypes = ['rose', 'tulip', 'daisy', 'lily'];
    const colors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c1', '#fec5bb', '#ffcad4'];
    
    const newFlower = {
      id: nextId.current++,
      x: e.clientX,
      y: e.clientY,
      type: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    setFlowers(prev => [...prev, newFlower]);

    setTimeout(() => {
      setFlowers(prev => prev.filter(f => f.id !== newFlower.id));
    }, 2000);
  }, []);

  useEffect(() => {
    window.addEventListener('click', addFlower);
    return () => window.removeEventListener('click', addFlower);
  }, [addFlower]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden selection:bg-rose-900/50 selection:text-white">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-rose-900/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-900/20 blur-[120px] rounded-full"></div>
      </div>

      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="relative z-10 pt-20">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Hero />
              <Letter />
              <Bouquet />
              <HeartsSection />
            </motion.div>
          )}

          {activeTab === 'message' && (
            <motion.div
              key="message-view"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <LoveMessage />
            </motion.div>
          )}

          {activeTab === 'flowers' && (
            <motion.div
              key="flowers-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <FlowerGarden />
            </motion.div>
          )}

          {activeTab === 'gallery' && (
            <motion.div
              key="gallery-view"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <Gallery />
            </motion.div>
          )}

          {activeTab === 'surprise' && (
            <motion.div
              key="surprise-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Surprise />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Global Interaction Layer */}
      <FlowerOverlay flowers={flowers} />

      <footer className="relative z-10 py-16 text-center text-rose-200/30 font-romantic italic text-lg border-t border-rose-900/10 bg-black">
        <div className="mb-4 text-rose-500/50 text-2xl">🌹</div>
        <p>Created with love, for my one and only.</p>
        <p className="mt-2 text-sm uppercase tracking-[0.2em] font-sans opacity-50">Valentine's Day • 2025</p>
      </footer>
    </div>
  );
};

export default App;
