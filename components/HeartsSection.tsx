
import React from 'react';
import { motion } from 'framer-motion';

const HeartsSection: React.FC = () => {
  return (
    <section className="relative py-40 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <h3 className="text-5xl font-serif text-white leading-tight">
            Every beat of my <span className="text-rose-500 italic">heart</span> is for you.
          </h3>
          <p className="text-xl font-romantic text-rose-200/60 leading-relaxed">
            I find myself thinking about you at the most random times of the day, 
            and every time, it brings a smile to my face that I can't quite hide.
          </p>
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, delay: i * 0.4 }}
                className="text-3xl text-rose-500"
              >
                ❤
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative aspect-square"
        >
          <div className="absolute inset-0 bg-rose-500/10 blur-[80px] rounded-full"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4">
             <div className="space-y-4 pt-12">
                <div className="h-48 rounded-3xl overflow-hidden shadow-xl border border-rose-900/20">
                  <img src="https://picsum.photos/seed/love1/400/600" className="w-full h-full object-cover" alt="Love aesthetic" />
                </div>
                <div className="h-64 rounded-3xl overflow-hidden shadow-xl border border-rose-900/20">
                  <img src="https://picsum.photos/seed/love2/400/800" className="w-full h-full object-cover" alt="Love aesthetic" />
                </div>
             </div>
             <div className="space-y-4">
                <div className="h-64 rounded-3xl overflow-hidden shadow-xl border border-rose-900/20">
                  <img src="https://picsum.photos/seed/love3/400/800" className="w-full h-full object-cover" alt="Love aesthetic" />
                </div>
                <div className="h-48 rounded-3xl overflow-hidden shadow-xl border border-rose-900/20">
                  <img src="https://picsum.photos/seed/love4/400/600" className="w-full h-full object-cover" alt="Love aesthetic" />
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeartsSection;
