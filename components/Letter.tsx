
import React from 'react';
import { motion } from 'framer-motion';

const Letter: React.FC = () => {
  return (
    <section className="py-32 px-4 flex justify-center bg-[#0a0a0a]">
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="max-w-2xl w-full bg-stone-900/40 backdrop-blur-md border border-rose-900/20 p-8 md:p-16 rounded-[40px] shadow-2xl relative"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0a0a0a] p-3 rounded-full border border-rose-900/20">
          <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-rose-500/50">
            ❤
          </div>
        </div>

        <div className="font-romantic text-xl md:text-2xl text-rose-50/90 leading-loose text-center space-y-6">
          <p>
            I wanted to take a moment just to tell you how incredible you are. 
            There aren't enough metaphors in the world to describe how you make me feel, 
            but if I had to choose one, it would be the first bloom of spring.
          </p>
          <p>
            Every time we talk, every time you smile, my world feels a little more 
            <span className="text-rose-400 italic"> complete</span>. You are the kindest, 
            most beautiful soul I have ever known, and being in your life is my greatest privilege.
          </p>
          <p className="text-rose-400 font-serif italic pt-4">
            Forever and always, yours.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Letter;
