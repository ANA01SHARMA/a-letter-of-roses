
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Bouquet: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1.05]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <section id="flowers" ref={containerRef} className="relative min-h-screen py-32 px-4 overflow-hidden flex flex-col items-center justify-center">
      <motion.div style={{ scale, y }} className="relative z-10 w-full max-w-5xl">
        <div className="aspect-[4/5] md:aspect-video rounded-[60px] overflow-hidden shadow-2xl border border-rose-900/10">
          <img 
            src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1600&q=80" 
            alt="Huge bouquet of flowers" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-12 left-12 right-12 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-4">A bouquet of <span className="text-rose-400 italic">affection</span></h2>
          <p className="text-rose-200/70 font-romantic text-lg md:text-2xl max-w-xl">
            Because a single flower couldn't possibly carry all the love I have for you.
          </p>
        </motion.div>
      </motion.div>

      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-rose-900/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-900/10 blur-3xl rounded-full"></div>
    </section>
  );
};

export default Bouquet;
