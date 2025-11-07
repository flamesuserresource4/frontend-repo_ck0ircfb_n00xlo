import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Sun, Moon, Music, VolumeX } from 'lucide-react';

const FloatingEmoji = ({ emoji, delay, x, y }) => {
  return (
    <motion.div
      className="absolute text-3xl select-none"
      initial={{ y: y, x: x, opacity: 0 }}
      animate={{
        y: [y, y - 20, y],
        opacity: 1,
      }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
      aria-hidden
    >
      {emoji}
    </motion.div>
  );
};

export default function HeroSection({ isNight, onToggleTheme, isMusicOn, onToggleMusic }) {
  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-5, 5]);

  useEffect(() => {
    const handler = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);
      x.set(relX);
      y.set(relY);
    };
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, [x, y]);

  return (
    <section
      ref={containerRef}
      className={`relative w-full min-h-[90vh] overflow-hidden flex items-center justify-center ${
        isNight
          ? 'bg-gradient-to-b from-[#0b1020] via-[#11163a] to-[#0b1020]'
          : 'bg-gradient-to-b from-[#fff7f2] via-[#ffe9e0] to-[#fff7f2]'
      }`}
    >
      {/* Controls */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
        <button
          onClick={onToggleTheme}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow/20 shadow-rose-200 hover:shadow-rose-300 transition border border-white/40 backdrop-blur bg-white/60 text-rose-700"
        >
          {isNight ? <Sun size={18} /> : <Moon size={18} />} {isNight ? 'Play Mode' : 'Sleep Mode'}
        </button>
        <button
          onClick={onToggleMusic}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow/20 shadow-emerald-200 hover:shadow-emerald-300 transition border border-white/40 backdrop-blur bg-white/60 text-emerald-700"
        >
          {isMusicOn ? <Music size={18} /> : <VolumeX size={18} />} {isMusicOn ? 'Music On' : 'Music Off'}
        </button>
      </div>

      {/* Decorative gradient overlay to warm up colors */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,183,178,0.35),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(186,230,213,0.35),transparent_40%)] z-10" />

      {/* Spline Scene */}
      <div className="relative w-full h-[70vh] md:h-[80vh] max-w-6xl z-20">
        <motion.div style={{ rotate }} className="w-full h-full rounded-3xl overflow-hidden shadow-xl">
          <Spline
            scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </div>

      {/* Headline */}
      <div className="absolute inset-x-0 bottom-6 md:bottom-10 z-30 flex flex-col items-center px-4">
        <motion.h1
          className="text-center font-extrabold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            color: isNight ? '#E7E2FF' : '#6b3d2e',
            textShadow: isNight ? '0 10px 30px rgba(120, 97, 255, 0.35)' : '0 10px 30px rgba(255, 176, 170, 0.5)'
          }}
        >
          Hi! I’m TimTim 🐹 — The Cutest Guinea Pig on the Web!
        </motion.h1>
        <p className={`mt-3 text-center max-w-2xl ${isNight ? 'text-indigo-100/90' : 'text-rose-800/80'}`}>
          Welcome to my cozy corner. Scroll to see snacks, adventures, and squeaks!
        </p>
      </div>

      {/* Floating goodies */}
      <div className="absolute inset-0 z-20">
        <FloatingEmoji emoji="🥕" delay={0} x={40} y={120} />
        <FloatingEmoji emoji="💚" delay={0.6} x={-80} y={200} />
        <FloatingEmoji emoji="🌿" delay={0.3} x={-180} y={60} />
        <FloatingEmoji emoji="🩷" delay={0.9} x={140} y={260} />
        <FloatingEmoji emoji="✨" delay={1.1} x={220} y={160} />
      </div>
    </section>
  );
}
