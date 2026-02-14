
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Kiss {
  id: number;
  x: number;
  y: number;
}

const Hero: React.FC = () => {
  const [kisses, setKisses] = useState<Kiss[]>([]);

  const handleHeartClick = (e: React.MouseEvent) => {
    const newKiss = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    setKisses((prev) => [...prev, newKiss]);
    setTimeout(() => {
      setKisses((prev) => prev.filter((k) => k.id !== newKiss.id));
    }, 2000);
  };

  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-start pt-32 px-4 overflow-hidden">
      {/* Background with Rose Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <img 
          src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80" 
          alt="Dark red rose" 
          className="w-full h-full object-cover opacity-30 grayscale-[30%] brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mb-8"
        >
          <span className="text-rose-400 font-romantic italic text-3xl block tracking-widest">hello, MY LOVE</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="mb-24"
        >
          <h1 className="text-7xl md:text-9xl font-serif text-white leading-[0.9] drop-shadow-2xl">
            You are my <br />
            <span className="text-rose-500 italic font-romantic lowercase mt-4 inline-block tracking-normal">everything</span>
          </h1>
        </motion.div>

        {/* Pulsing Heart Button */}
        <motion.button
          onClick={handleHeartClick}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: 1 
          }}
          transition={{ 
            delay: 2, 
            duration: 1.5,
            scale: {
              repeat: Infinity,
              duration: 1.2,
              ease: "easeInOut"
            }
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="relative group cursor-pointer focus:outline-none"
        >
          <div className="absolute inset-0 bg-rose-500/20 blur-3xl rounded-full scale-150 group-hover:bg-rose-500/40 transition-colors"></div>
          <svg 
            width="140" 
            height="140" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="text-rose-600 drop-shadow-[0_0_15px_rgba(225,29,72,0.8)] relative z-10"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <p className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-rose-300/60 font-romantic italic text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Touch my heart...</p>
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 1 }}
          className="mt-32 text-rose-200/40 font-romantic italic text-xl tracking-wide"
        >
          Scroll down or click 'Message' to see more...
        </motion.div>
      </div>

      {/* Blow Kisses Effect Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[10000]">
        <AnimatePresence>
          {kisses.map((kiss) => (
            <motion.div
              key={kiss.id}
              initial={{ opacity: 0, scale: 0.5, x: kiss.x - 20, y: kiss.y - 20 }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                scale: [1, 2.5, 2, 1.5], 
                y: kiss.y - 400,
                x: kiss.x - 20 + (Math.random() * 200 - 100),
                rotate: [0, 20, -20, 0]
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute text-6xl select-none"
            >
              💋
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-rose-500/50 via-rose-500/20 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
