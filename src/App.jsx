import React, { useEffect, useRef, useState } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import ShortsSection from './components/ShortsSection';
import ContactSection from './components/ContactSection';
import { motion } from 'framer-motion';

export default function App() {
  const [isNight, setIsNight] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isMusicOn) {
      audioRef.current.volume = 0.25;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isMusicOn]);

  return (
    <div className={isNight ? 'bg-[#0b1020] text-indigo-50' : 'bg-white text-rose-900'}>
      {/* Interactive carrot cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] hidden md:block"
        initial={false}
        animate={{}}
        style={{ translateX: -12, translateY: -12 }}
      >
        <motion.span
          className="text-2xl"
          animate={{ x: 0, y: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          🥕
        </motion.span>
      </motion.div>

      {/* Hidden audio element */}
      <audio ref={audioRef} loop src="https://cdn.pixabay.com/audio/2022/03/15/audio_2d0a38e54a.mp3" />

      {/* Hero with theme/music toggles */}
      <HeroSection
        isNight={isNight}
        onToggleTheme={() => setIsNight((v) => !v)}
        isMusicOn={isMusicOn}
        onToggleMusic={() => setIsMusicOn((v) => !v)}
      />

      {/* Content sections */}
      <AboutSection />
      <GallerySection />
      <ShortsSection />
      <ContactSection />

      {/* Footer with day/night state cue */}
      <footer className="py-10 text-center text-sm opacity-70">
        <div>© {new Date().getFullYear()} TimTim — Made with squeaks and snacks.</div>
        <div className="mt-2">{isNight ? 'Sleep Mode: zZz...' : 'Play Mode: let’s explore!'}</div>
      </footer>
    </div>
  );
}
