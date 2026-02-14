
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Song {
  title: string;
  artist: string;
}

const songs: Song[] = [
  // 90s Classics
  { title: "Pehla Nasha", artist: "Udit Narayan" },
  { title: "Tujhe Dekha Toh", artist: "Kumar Sanu" },
  { title: "Baahon Ke Darmiyaan", artist: "Alka Yagnik & Hariharan" },
  // Modern Hindi
  { title: "Tum Hi Ho", artist: "Arijit Singh" },
  { title: "Raabta", artist: "Arijit Singh" },
  { title: "Agar Tum Saath Ho", artist: "Alka Yagnik & Arijit Singh" },
  { title: "Kuch Toh Hai", artist: "Armaan Malik" },
  { title: "Raatan Lambiyan", artist: "Jubin Nautiyal" },
  { title: "Apna Bana Le", artist: "Arijit Singh" },
  { title: "Mera Pyar Tera Pyar", artist: "Arijit Singh" },
  { title: "Khairiyat", artist: "Arijit Singh" },
  { title: "Shayad", artist: "Arijit Singh" },
  { title: "Hawayein", artist: "Arijit Singh" },
  // English
  { title: "Perfect", artist: "Ed Sheeran" },
  { title: "All of Me", artist: "John Legend" },
  { title: "Until I Found You", artist: "Stephen Sanchez" },
  { title: "Can’t Help Falling in Love", artist: "Elvis Presley" },
  { title: "Make You Feel My Love", artist: "Adele" },
  { title: "Say You Won’t Let Go", artist: "James Arthur" },
  { title: "A Thousand Years", artist: "Christina Perri" },
];

const Surprise: React.FC = () => {
  const [step, setStep] = useState<'pause' | 'playlist'>('pause');
  const [currentLine, setCurrentLine] = useState(0);
  const [playingSong, setPlayingSong] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const lines = [
    "If the world paused right now...",
    "If everything went quiet...",
    "If time stopped completely...",
    "I’d still choose you."
  ];

  useEffect(() => {
    if (step === 'pause') {
      const timers = lines.map((_, i) => 
        setTimeout(() => setCurrentLine(i + 1), (i + 1) * 2000)
      );
      return () => timers.forEach(clearTimeout);
    }
  }, [step]);

  // Handle Shuffle
  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * songs.length);
    setPlayingSong(randomIndex);
  };

  useEffect(() => {
    if (step === 'playlist' && playingSong === null) {
      handleShuffle(); // Auto-shuffle mode starts here
    }
  }, [step]);

  if (step === 'pause') {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center p-6 text-center z-50 overflow-hidden">
        {/* Cinematic Pause Content */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-stone-900/50 via-transparent to-transparent pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl space-y-8">
          <AnimatePresence>
            {lines.map((line, idx) => (
              idx < currentLine && (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className={`font-serif tracking-[0.15em] leading-relaxed ${
                    idx === lines.length - 1 
                      ? "text-4xl md:text-6xl text-rose-400 italic" 
                      : "text-2xl md:text-3xl text-stone-300"
                  }`}
                >
                  {line}
                </motion.p>
              )
            ))}
          </AnimatePresence>
        </div>

        {currentLine >= lines.length && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            onClick={() => setStep('playlist')}
            className="mt-20 px-8 py-3 bg-white/5 hover:bg-white/10 text-rose-200/50 hover:text-rose-100 border border-white/10 rounded-full font-romantic text-lg italic transition-all group"
          >
            Enter our corner <span className="group-hover:ml-2 transition-all">→</span>
          </motion.button>
        )}

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -1000], 
              x: [0, Math.random() * 200 - 100],
              opacity: [0, 0.4, 0] 
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity,
              delay: Math.random() * 10 
            }}
            className="absolute bottom-0 w-1 h-1 bg-rose-500/30 rounded-full blur-[2px]"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-12 pb-32 px-4 bg-gradient-to-b from-black via-rose-950/10 to-stone-950 flex flex-col items-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16 space-y-4"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-white">Songs that remind me of <span className="italic text-rose-400 underline decoration-rose-900/50 underline-offset-8">you</span></h2>
        <p className="text-xl font-romantic text-rose-200/50 italic max-w-xl mx-auto">
          Every song here carries a feeling I couldn’t say out loud.
        </p>
      </motion.div>

      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-4">
        {songs.map((song, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => setPlayingSong(idx)}
            className={`p-6 rounded-3xl border transition-all cursor-pointer relative overflow-hidden group ${
              playingSong === idx 
              ? "bg-rose-900/20 border-rose-500/50 shadow-2xl shadow-rose-900/20" 
              : "bg-stone-900/40 border-white/5 hover:border-rose-900/50"
            }`}
          >
            {playingSong === idx && (
              <motion.div 
                layoutId="activeGlow"
                className="absolute inset-0 bg-rose-500/5 blur-xl pointer-events-none"
              />
            )}
            
            <div className="flex justify-between items-center">
              <div>
                <h4 className={`text-xl font-serif mb-1 ${playingSong === idx ? "text-rose-100" : "text-stone-300"}`}>
                  {song.title}
                </h4>
                <p className="text-sm font-sans text-rose-200/40 uppercase tracking-widest">{song.artist}</p>
              </div>
              <div className={`transition-all ${playingSong === idx ? "text-rose-400 scale-125" : "text-stone-700"}`}>
                {playingSong === idx ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Floating Action Bar */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-12 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-2xl px-10 py-5 rounded-full border border-white/10 flex items-center gap-12 shadow-2xl z-[60]"
      >
        <button 
          onClick={handleShuffle}
          className="flex flex-col items-center gap-1 group"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-rose-200/40 group-hover:text-rose-400">Surprise Me</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-rose-500">
            <polyline points="16 3 21 3 21 8"></polyline>
            <line x1="4" y1="20" x2="21" y2="3"></line>
            <polyline points="21 16 21 21 16 21"></polyline>
            <line x1="15" y1="15" x2="21" y2="21"></line>
            <line x1="4" y1="4" x2="9" y2="9"></line>
          </svg>
        </button>

        <div className="h-10 w-px bg-white/10"></div>

        <div className="text-center min-w-[120px]">
          {playingSong !== null ? (
            <>
              <p className="text-rose-100 font-serif text-lg leading-none mb-2">{songs[playingSong].title}</p>
              <p className="text-[10px] uppercase tracking-widest text-rose-200/30">{songs[playingSong].artist}</p>
            </>
          ) : (
            <p className="text-rose-200/30 font-romantic italic">Silence is golden...</p>
          )}
        </div>
      </motion.div>

      {/* Visual background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-rose-900/20 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-900/10 blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
};

export default Surprise;
