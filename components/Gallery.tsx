
import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { url: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?auto=format&fit=crop&w=600&q=80', title: 'Gentle Moments' },
  { url: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?auto=format&fit=crop&w=600&q=80', title: 'Eternal Softness' },
  { url: 'https://images.unsplash.com/photo-1494972308805-463bc619d34e?auto=format&fit=crop&w=600&q=80', title: 'Blooming Joy' },
  { url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80', title: 'Heartfelt' },
  { url: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=600&q=80', title: 'Whispered Promises' },
  { url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=600&q=80', title: 'Sunlit Devotion' },
  { url: 'https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?auto=format&fit=crop&w=600&q=80', title: 'First Light' },
  { url: 'https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&w=600&q=80', title: 'Rose Shadows' },
  { url: 'https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=600&q=80', title: 'Path of Hearts' },
  { url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80', title: 'Spring of Love' },
  { url: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80', title: 'Together Always' },
  { url: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?auto=format&fit=crop&w=600&q=80', title: 'Twilight Souls' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-8">Our Visual <span className="text-rose-400 italic">Symphony</span></h2>
          <div className="w-32 h-px bg-rose-900/40 mx-auto"></div>
          <p className="mt-8 text-rose-200/40 font-romantic text-xl italic">A collection of moments that define us...</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.8 }}
              className="group relative aspect-[3/4] rounded-[40px] overflow-hidden cursor-pointer border border-white/5 bg-stone-900/20"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[15%] group-hover:grayscale-0 brightness-[0.9] group-hover:brightness-100"
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                <span className="text-white font-romantic italic text-3xl">{img.title}</span>
                <span className="text-rose-300/60 text-xs uppercase tracking-[0.3em] mt-3">Chapter {index + 1}</span>
              </div>

              {/* Pulsing heart on right bottom */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.25, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 2, 
                  ease: "easeInOut", 
                  delay: index * 0.2 
                }}
                className="absolute bottom-8 right-8 z-30 text-rose-500 drop-shadow-[0_0_12px_rgba(244,63,94,0.8)]"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </motion.div>

              {/* Ambient shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
