import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  { src: 'https://auvkjcgnirjxetnrnket.supabase.co/storage/v1/object/public/TimTim/WhatsApp%20Image%202025-11-07%20at%2019.57.07_755a3898.jpg', caption: 'Snack Time 🍎' },
  { src: 'https://auvkjcgnirjxetnrnket.supabase.co/storage/v1/object/public/TimTim/WhatsApp%20Image%202025-11-07%20at%2019.57.08_46831fe1.jpg', caption: 'Explorer Mode 🧭' },
  { src: 'https://auvkjcgnirjxetnrnket.supabase.co/storage/v1/object/public/TimTim/WhatsApp%20Image%202025-11-07%20at%2019.57.08_7f913c13.jpg', caption: 'Cozy Naps 😴' },
  { src: 'https://auvkjcgnirjxetnrnket.supabase.co/storage/v1/object/public/TimTim/WhatsApp%20Image%202025-11-07%20at%2019.57.08_b7eeaa2f.jpg', caption: 'Strawberry Love 🍓' },
  { src: 'https://auvkjcgnirjxetnrnket.supabase.co/storage/v1/object/public/TimTim/WhatsApp%20Image%202025-11-07%20at%2019.57.09_a3a31c4a.jpg', caption: 'Hay There 🌿' },
  { src: 'https://auvkjcgnirjxetnrnket.supabase.co/storage/v1/object/public/TimTim/WhatsApp%20Image%202025-11-07%20at%2019.57.09_efb7ae19.jpg', caption: 'Binky Dance ✨' },
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#fbffee] via-[#fff7f2] to-[#fefcf6]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <span className="inline-block px-4 py-1 rounded-full bg-rose-100 text-rose-700 font-semibold">TimTim Moments</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900 mt-3">Gallery</h2>
          <p className="text-rose-700/80 mt-2 max-w-2xl mx-auto">Hover for a gentle zoom and sparkles. Everything is soft, pastel, and extra cute.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {photos.map((p, idx) => (
            <motion.figure
              key={p.src}
              className="group relative overflow-hidden rounded-3xl shadow-[0_10px_30px_rgba(255,182,193,0.25)] border border-white/60 bg-white/40 backdrop-blur"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <img src={p.src} alt={p.caption} className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <figcaption className="absolute bottom-3 left-3 text-white font-semibold drop-shadow-lg bg-black/30 backdrop-blur px-3 py-1 rounded-full">
                {p.caption}
              </figcaption>
              {/* Sparkles */}
              <motion.div className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
                {[...Array(10)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-yellow-100"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.1, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.12 }}
                    style={{ top: `${(i * 13) % 90}%`, left: `${(i * 23) % 90}%` }}
                  >
                    ✨
                  </motion.span>
                ))}
              </motion.div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
