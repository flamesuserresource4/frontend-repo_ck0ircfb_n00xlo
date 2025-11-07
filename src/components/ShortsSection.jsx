import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube } from 'lucide-react';

const shorts = [
  { id: 't32-eloA76c', url: 'https://youtube.com/shorts/t32-eloA76c?si=m87SOzlTVjkB_fti' },
  { id: 'u_Qg-o0WnGk', url: 'https://youtube.com/shorts/u_Qg-o0WnGk?si=0k_8zY_g0-wQ4L-m' },
  { id: 'Qf1iTpfxNjE', url: 'https://youtube.com/shorts/Qf1iTpfxNjE?si=t6rSc4mdvgfSzM1C' },
];

export default function ShortsSection() {
  const [active, setActive] = useState(null);

  const openVideo = (id) => setActive(id);
  const closeVideo = () => setActive(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#fefcf6] to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900">Watch TimTim in Action!</h2>
            <p className="text-rose-700/80 mt-2">Tiny adventures captured in bite-sized videos.</p>
          </div>
          <a
            href="https://www.youtube.com/@TimTim-357"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-red-500 text-white px-5 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl active:scale-95 transition"
          >
            <Youtube size={18} /> Subscribe
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          {shorts.map((s, idx) => (
            <motion.div
              key={s.id}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-lg bg-black/10 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => openVideo(s.id)}
            >
              <iframe
                title={`TimTim Shorts ${s.id}`}
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${s.id}?modestbranding=1&rel=0&controls=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeVideo}
            >
              <motion.div
                className="relative w-full max-w-[420px] aspect-[9/16] bg-black rounded-xl overflow-hidden"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  title={`TimTim Shorts ${active}`}
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${active}?autoplay=1&modestbranding=1&rel=0`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
