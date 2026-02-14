
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FlowerType = 'rose' | 'lily' | 'marigold' | 'hibiscus' | 'aster' | 'orchid';

interface GardenFlower {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  type: FlowerType;
}

const FlowerRenderer: React.FC<{ type: FlowerType; color: string; rotation: number }> = ({ type, color, rotation }) => {
  const renderFlowerBody = () => {
    switch (type) {
      case 'rose':
        return (
          <g style={{ transformOrigin: '50% 50%', transform: `rotate(${rotation}deg)` }}>
            <circle cx="50" cy="50" r="22" fill={color} />
            <circle cx="50" cy="50" r="15" fill="none" stroke="black" strokeWidth="1" strokeOpacity="0.1" />
            <path d="M50 35 A15 15 0 0 1 65 50 A15 15 0 0 1 50 65 A15 15 0 0 1 35 50 A15 15 0 0 1 50 35" fill="none" stroke="black" strokeWidth="0.5" strokeOpacity="0.2" />
            <circle cx="50" cy="50" r="8" fill={color} filter="brightness(0.9)" />
            <circle cx="50" cy="50" r="3" fill="#fde047" />
          </g>
        );
      case 'lily':
        return (
          <g style={{ transformOrigin: '50% 50%', transform: `rotate(${rotation}deg)` }}>
            {[0, 60, 120, 180, 240, 300].map((angle) => (
              <motion.path
                key={angle}
                d="M50 50 Q50 15 65 15 Q50 15 50 50"
                fill={color}
                style={{ transformOrigin: '50% 50%', transform: `rotate(${angle}deg)` }}
              />
            ))}
            <circle cx="50" cy="50" r="5" fill="#fde047" />
          </g>
        );
      case 'marigold':
        return (
          <g style={{ transformOrigin: '50% 50%', transform: `rotate(${rotation}deg)` }}>
            <circle cx="50" cy="50" r="24" fill={color} />
            <circle cx="50" cy="50" r="20" fill={color} filter="brightness(1.1)" />
            <circle cx="50" cy="50" r="14" fill={color} filter="brightness(1.2)" />
            <circle cx="50" cy="50" r="8" fill="#eab308" />
          </g>
        );
      case 'hibiscus':
        return (
          <g style={{ transformOrigin: '50% 50%', transform: `rotate(${rotation}deg)` }}>
            {[0, 72, 144, 216, 288].map((angle) => (
              <circle key={angle} cx="65" cy="50" r="16" fill={color} style={{ transformOrigin: '50% 50%', transform: `rotate(${angle}deg)` }} />
            ))}
            <line x1="50" y1="50" x2="50" y2="25" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />
            <circle cx="50" cy="25" r="3" fill="#fde047" />
          </g>
        );
      case 'aster':
        return (
          <g style={{ transformOrigin: '50% 50%', transform: `rotate(${rotation}deg)` }}>
            {[...Array(16)].map((_, i) => (
              <rect key={i} x="48" y="20" width="4" height="30" fill={color} style={{ transformOrigin: '50% 50%', transform: `rotate(${i * 22.5}deg)` }} rx="2" />
            ))}
            <circle cx="50" cy="50" r="10" fill="#fde047" />
          </g>
        );
      case 'orchid':
        return (
          <g style={{ transformOrigin: '50% 50%', transform: `rotate(${rotation}deg)` }}>
            <ellipse cx="50" cy="35" rx="12" ry="20" fill={color} opacity="0.8" />
            <ellipse cx="35" cy="60" rx="20" ry="12" fill={color} opacity="0.8" />
            <ellipse cx="65" cy="60" rx="20" ry="12" fill={color} opacity="0.8" />
            <path d="M40 50 Q50 70 60 50 Q50 60 40 50" fill="#fde047" />
            <circle cx="50" cy="50" r="6" fill="#be123c" />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <svg width="80" height="80" viewBox="0 0 100 100" className="drop-shadow-xl">
      {/* Green Leaf */}
      <motion.path 
        d="M50 80 Q30 70 20 85 Q30 95 50 80" 
        fill="#22c55e" 
        initial={{ rotate: -15, scale: 0 }}
        animate={{ rotate: -5, scale: 1 }}
      />
      {/* Yellow Leaf */}
      <motion.path 
        d="M50 80 Q70 70 80 85 Q70 95 50 80" 
        fill="#fde047" 
        initial={{ rotate: 15, scale: 0 }}
        animate={{ rotate: 5, scale: 1 }}
      />
      {/* Stem */}
      <rect x="48" y="50" width="4" height="30" fill="#166534" />
      {/* Flower Body */}
      {renderFlowerBody()}
    </svg>
  );
};

const FlowerGarden: React.FC = () => {
  const [gardenFlowers, setGardenFlowers] = useState<GardenFlower[]>([]);

  const handleGardenClick = (e: React.MouseEvent) => {
    const types: FlowerType[] = ['rose', 'lily', 'marigold', 'hibiscus', 'aster', 'orchid'];
    const colors = ['#e11d48', '#fb7185', '#f43f5e', '#ec4899', '#f97316', '#a855f7', '#ffffff'];
    
    const newFlower: GardenFlower = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
      type: types[Math.floor(Math.random() * types.length)]
    };
    
    setGardenFlowers(prev => [...prev, newFlower]);
  };

  const clearGarden = (e: React.MouseEvent) => {
    e.stopPropagation();
    setGardenFlowers([]);
  };

  return (
    <div 
      className="relative min-h-[85vh] w-full cursor-crosshair overflow-hidden flex flex-col items-center bg-[#0a0a0a]"
      onClick={handleGardenClick}
    >
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-rose-900/30 via-transparent to-transparent"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 text-center pt-16 select-none pointer-events-none"
      >
        <h2 className="text-5xl md:text-7xl font-serif text-white/90 italic mb-4 drop-shadow-lg">Our Eternal Garden</h2>
        <p className="text-rose-200/50 font-romantic text-2xl italic">Click anywhere to watch our love bloom...</p>
        <div className="mt-4 flex gap-4 justify-center text-xs uppercase tracking-[0.3em] text-white/20">
          <span>Rose</span> • <span>Lily</span> • <span>Marigold</span> • <span>Hibiscus</span> • <span>Aster</span> • <span>Orchid</span>
        </div>
      </motion.div>

      <button 
        onClick={clearGarden}
        className="absolute bottom-12 right-12 z-30 px-8 py-3 bg-stone-900/60 hover:bg-rose-950/60 text-rose-100/40 hover:text-white rounded-full text-[10px] font-bold uppercase tracking-[0.25em] border border-white/5 transition-all backdrop-blur-xl shadow-2xl"
      >
        Clear Garden
      </button>

      {/* Flower Placement Layer */}
      <div className="fixed inset-0 pointer-events-none z-20">
        <AnimatePresence>
          {gardenFlowers.map((f) => (
            <motion.div
              key={f.id}
              initial={{ scale: 0, opacity: 0, y: f.y + 20 }}
              animate={{ scale: 1, opacity: 1, y: f.y }}
              transition={{ type: "spring", damping: 15, stiffness: 120 }}
              className="absolute pointer-events-none"
              style={{ left: f.x - 40, top: f.y - 40 }}
            >
              <FlowerRenderer type={f.type} color={f.color} rotation={f.rotation} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Interactive Helper Text */}
      <motion.div
        animate={{ opacity: gardenFlowers.length > 0 ? 0 : 1 }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 pointer-events-none text-rose-500/20 font-romantic italic text-xl"
      >
        Every click plants a piece of my heart
      </motion.div>
    </div>
  );
};

export default FlowerGarden;
