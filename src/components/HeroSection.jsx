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
  const rotate = useTransform(x, [-200, 200], [-4, 4]);

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
      className={`relative w-full min-h-[100vh] overflow-hidden flex items-center justify-center ${
        isNight
          ? 'bg-[#0b1020]'
          : 'bg-[#f8f4ff]'
      }`}
    >
      {/* Full-width Spline cover background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/fTzRQ8pMbm1-BzvF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Pastel gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(255,214,196,0.45),transparent),radial-gradient(50%_50%_at_80%_30%,rgba(186,230,213,0.35),transparent),radial-gradient(40%_40%_at_50%_80%,rgba(252,231,243,0.35),transparent)]" />

      {/* Controls */}
      <div className="absolute top-4 right-4 z-30 flex items-center gap-2">
        <button
          onClick={onToggleTheme}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow/20 shadow-rose-200 hover:shadow-rose-300 transition border border-white/40 backdrop-blur bg-white/70 text-rose-700"
        >
          {isNight ? <Sun size={18} /> : <Moon size={18} />} {isNight ? 'Play Mode' : 'Sleep Mode'}
        </button>
        <button
          onClick={onToggleMusic}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow/20 shadow-emerald-200 hover:shadow-emerald-300 transition border border-white/40 backdrop-blur bg-white/70 text-emerald-700"
        >
          {isMusicOn ? <Music size={18} /> : <VolumeX size={18} />} {isMusicOn ? 'Music On' : 'Music Off'}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-30 w-full max-w-6xl px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Profile card */}
        <motion.div
          className="relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/60 shadow-xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ rotate }}
        >
          <div className="flex items-center gap-5">
            <div className="relative">
              <span className="absolute -inset-1 rounded-full bg-gradient-to-tr from-pink-200 via-rose-200 to-amber-200 blur-xl opacity-70" aria-hidden />
              <img
                src="https://auvkjcgnirjxetnrnket.supabase.co/storage/v1/object/public/TimTim/WhatsApp%20Image%202025-11-07%20at%2019.57.07_7f4f3b06.jpg"
                alt="TimTim the Guinea Pig"
                className="relative w-28 h-28 md:w-36 md:h-36 rounded-2xl object-cover border-4 border-white shadow-lg"
                loading="eager"
              />
              <motion.span
                className="absolute -bottom-3 -right-3 text-3xl"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                aria-hidden
              >
                🥕
              </motion.span>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-700 text-sm font-semibold">TimTim • Guinea Pig Star</div>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold text-rose-900 drop-shadow-sm">
                Hi! I’m TimTim 🐹
              </h1>
              <p className="mt-2 text-rose-700/80 max-w-prose">
                The cutest guinea pig on the web! I squeak for snacks, explore fluffy worlds, and nap like a pro.
              </p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="rounded-2xl bg-emerald-50 text-emerald-700 px-3 py-3 font-semibold">Snacks ❤</div>
            <div className="rounded-2xl bg-amber-50 text-amber-700 px-3 py-3 font-semibold">Naps 😴</div>
            <div className="rounded-2xl bg-pink-50 text-pink-700 px-3 py-3 font-semibold">Adventures ✨</div>
          </div>
        </motion.div>

        {/* Mascot tagline */}
        <div className="relative">
          <motion.div
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/60 shadow-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="text-lg md:text-xl text-rose-800/90">
              Tagline:
              <span className="ml-2 font-extrabold text-rose-900">“The Cutest Guinea Pig on the Web!”</span>
            </p>
            <p className="mt-3 text-rose-700/80">
              Move your mouse around — the scene reacts! Scroll down for snacks, stories, and Shorts.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-mint-100 text-emerald-700 font-semibold">Minty Fresh</span>
              <span className="px-4 py-2 rounded-full bg-peach-100 text-rose-700 font-semibold">Peachy Cozy</span>
              <span className="px-4 py-2 rounded-full bg-cream-100 text-amber-700 font-semibold">Creamy Cute</span>
            </div>
          </motion.div>
        </div>
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
