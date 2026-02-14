
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Flower {
  id: number;
  x: number;
  y: number;
  type: string;
  color: string;
}

const FlowerOverlay: React.FC<{ flowers: Flower[] }> = ({ flowers }) => {
  const getFlowerEmoji = (type: string) => {
    switch(type) {
      case 'rose': return '🌹';
      case 'tulip': return '🌷';
      case 'daisy': return '🌼';
      case 'lily': return '🌸';
      default: return '🌸';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {flowers.map((flower) => (
          <motion.div
            key={flower.id}
            initial={{ opacity: 0, scale: 0, rotate: -20, x: flower.x - 20, y: flower.y - 20 }}
            animate={{ 
              opacity: [0, 1, 1, 0], 
              scale: [0.5, 1.5, 1.2, 1], 
              y: flower.y - 150,
              rotate: [0, 10, -10, 0],
              x: flower.x - 20 + (Math.random() * 40 - 20)
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute text-4xl select-none"
            style={{ 
              color: flower.color,
              filter: `drop-shadow(0 0 10px ${flower.color}44)` 
            }}
          >
            {getFlowerEmoji(flower.type)}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FlowerOverlay;
