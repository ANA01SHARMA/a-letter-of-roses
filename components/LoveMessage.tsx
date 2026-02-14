
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reasons = [
  "I love the way you smile", "I love how your eyes light up when you’re happy", "I love the sound of your laugh", "I love how you make me feel safe", "I love how you understand me without words",
  "I love your kindness", "I love your honesty", "I love your patience with me", "I love how you care about others", "I love how you make bad days better",
  "I love the way you listen", "I love how you support my dreams", "I love your strength", "I love your softness", "I love how you make me feel valued",
  "I love your sense of humor", "I love how you handle challenges", "I love how real you are", "I love how you make me laugh even when I don’t want to", "I love how being with you feels like home",
  "I love how you inspire me", "I love how thoughtful you are", "I love how you remember little things", "I love how you surprise me", "I love how you care deeply",
  "I love how you respect me", "I love how you believe in me", "I love how you never give up", "I love how you make me feel confident", "I love how you bring peace into my life",
  "I love how you accept me as I am", "I love how you encourage me to grow", "I love how you make me feel special", "I love how you make time for me", "I love how you protect the people you love",
  "I love how gentle you can be", "I love how strong your heart is", "I love how you forgive", "I love how you care even when it’s hard", "I love how you choose love every day",
  "I love how you make silence comfortable", "I love how you make small moments meaningful", "I love how you show affection", "I love how you stay true to yourself", "I love how you make me feel understood",
  "I love how you never judge me", "I love how you make me feel important", "I love how you bring joy into my life", "I love how you turn problems into solutions", "I love how you never stop trying",
  "I love how you make me feel calm", "I love how you give the best hugs", "I love how you look at me", "I love how you care about my happiness", "I love how you make me feel loved",
  "I love how you make me feel appreciated", "I love how you stay when things get tough", "I love how you trust me", "I love how you respect my feelings", "I love how you make me feel secure",
  "I love how you celebrate my successes", "I love how you comfort me in failure", "I love how you make life more beautiful", "I love how you bring light into my darkness", "I love how you stand by me",
  "I love how you care without expecting anything back", "I love how you make me laugh at myself", "I love how you make me feel chosen", "I love how you make me feel lucky", "I love how you make love feel easy",
  "I love how you make every day better", "I love how you never stop caring", "I love how you make me feel strong", "I love how you bring out the best in me", "I love how you calm my worries",
  "I love how you turn moments into memories", "I love how you make me feel alive", "I love how you love me", "I love how you make me feel complete", "I love how you make my heart feel full",
  "I love how you make life sweeter", "I love how you bring warmth into my world", "I love how you make me feel hopeful", "I love how you make me feel understood", "I love how you make me feel happy",
  "I love how you make me feel cared for", "I love how you make me feel special every day", "I love how you make love feel real", "I love how you make me smile without trying", "I love how you make me feel at peace",
  "I love how you make my life brighter", "I love how you make me feel seen", "I love how you make me feel heard", "I love how you make me feel loved in little ways", "I love how you make everything feel okay",
  "I love how you make love feel safe", "I love how you make my heart feel at home", "I love how you make me believe in love", "I love how you are exactly who you are", "I love you — simply, deeply, endlessly 💖"
];

interface Kiss {
  id: number;
  x: number;
  y: number;
}

const LoveMessage: React.FC = () => {
  const [kisses, setKisses] = useState<Kiss[]>([]);

  const handleHeartClick = (e: React.MouseEvent) => {
    const newKiss = { id: Date.now(), x: e.clientX, y: e.clientY };
    setKisses((prev) => [...prev, newKiss]);
    setTimeout(() => {
      setKisses((prev) => prev.filter((k) => k.id !== newKiss.id));
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 md:py-24 space-y-32">
      {/* Long Heartfelt Message */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-stone-900/30 backdrop-blur-xl border border-rose-900/20 p-8 md:p-16 rounded-[50px] shadow-2xl"
      >
        <div className="flex items-center gap-6 mb-12 justify-center md:justify-start">
          <span className="text-5xl">💌</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white italic">A Message for My Loved One</h2>
        </div>
        
        <div className="font-romantic text-2xl md:text-3xl text-rose-100/80 leading-relaxed space-y-10 italic text-center md:text-left">
          <p>
            From the moment you came into my life, everything felt a little warmer, a little brighter, 
            and a lot more meaningful. You have this beautiful way of turning ordinary moments 
            into memories I want to keep forever.
          </p>
          <p>
            You are my calm on chaotic days, my smile without reason, and my safe place when the 
            world feels heavy. Loving you feels natural, effortless, and right — like my heart 
            always knew where it belonged.
          </p>
          <p>
            Thank you for being you — for your kindness, your patience, your laughter, and your love. 
            No matter where life takes us, a part of my heart will always beat a little faster for you. 💖
          </p>
        </div>
      </motion.div>

      {/* 100 Reasons Section */}
      <div className="space-y-16">
        <div className="text-center">
          <h3 className="text-4xl md:text-6xl font-serif text-rose-400 mb-8 tracking-wide">🌹 100 Reasons Why I Love You</h3>
          <div className="w-32 h-px bg-rose-500/20 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (index % 10) * 0.05 }}
              className="p-6 bg-stone-950/40 rounded-3xl border border-white/5 flex gap-5 items-center group hover:bg-rose-950/20 transition-all cursor-default"
            >
              <span className="text-rose-600 font-serif text-lg font-bold opacity-40 group-hover:opacity-100 min-w-[30px]">{index + 1}.</span>
              <p className="text-rose-100/70 font-romantic text-xl leading-snug group-hover:text-rose-50 transition-colors italic">
                {reason}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pulsing Heart at the End */}
      <div className="flex flex-col items-center py-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-romantic text-rose-200/50 italic mb-16 text-center"
        >
          Simply, deeply, endlessly...
        </motion.p>

        <motion.button
          onClick={handleHeartClick}
          animate={{ 
            scale: [1, 1.15, 1],
          }}
          transition={{ 
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut"
          }}
          whileHover={{ scale: 1.25 }}
          whileTap={{ scale: 0.9 }}
          className="relative group cursor-pointer focus:outline-none"
        >
          <div className="absolute inset-0 bg-rose-500/20 blur-3xl rounded-full scale-150"></div>
          <svg 
            width="160" 
            height="160" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="text-rose-600 drop-shadow-[0_0_20px_rgba(225,29,72,0.8)] relative z-10"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-rose-300/40 font-romantic italic text-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Touch my heart 💋
          </span>
        </motion.button>
      </div>

      {/* Blow Kisses Overlay (Specific to this section) */}
      <div className="fixed inset-0 pointer-events-none z-[10000]">
        <AnimatePresence>
          {kisses.map((kiss) => (
            <motion.div
              key={kiss.id}
              initial={{ opacity: 0, scale: 0.5, x: kiss.x - 20, y: kiss.y - 20 }}
              animate={{ 
                opacity: [0, 1, 1, 0], 
                scale: [1, 3, 2, 1.5], 
                y: kiss.y - 500,
                x: kiss.x - 20 + (Math.random() * 200 - 100),
                rotate: [0, 30, -30, 0]
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.2, ease: "easeOut" }}
              className="absolute text-7xl select-none"
            >
              💋
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LoveMessage;
