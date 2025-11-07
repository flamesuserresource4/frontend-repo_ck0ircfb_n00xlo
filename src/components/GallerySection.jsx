import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  { src: 'https://images.unsplash.com/photo-1546443046-ed1ce6ffd1ab?q=80&w=1400&auto=format&fit=crop', caption: 'Snack Time 🍎' },
  { src: 'https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1400&auto=format&fit=crop', caption: 'Explorer Mode 🧭' },
  { src: 'https://images.unsplash.com/photo-1705851280899-e680bfbc0305?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbmFjayUyMFRpbWUlMjAlRjAlOUYlOEQlOEV8ZW58MHwwfHx8MTc2MjUyNTA1MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', caption: 'Cozy Naps 😴' },
  { src: 'https://images.unsplash.com/photo-1705851280899-e680bfbc0305?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbmFjayUyMFRpbWUlMjAlRjAlOUYlOEQlOEV8ZW58MHwwfHx8MTc2MjUyNTA1MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', caption: 'Strawberry Love 🍓' },
  { src: 'https://images.unsplash.com/photo-1705851280899-e680bfbc0305?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbmFjayUyMFRpbWUlMjAlRjAlOUYlOEQlOEV8ZW58MHwwfHx8MTc2MjUyNTA1MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', caption: 'Hay There 🌿' },
  { src: 'https://images.unsplash.com/photo-1705851280899-e680bfbc0305?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTbmFjayUyMFRpbWUlMjAlRjAlOUYlOEQlOEV8ZW58MHwwfHx8MTc2MjUyNTA1MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80', caption: 'Binky Dance ✨' },
];

export default function GallerySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#fbffee] to-[#fefcf6]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900 text-center">Gallery</h2>
        <p className="text-center text-rose-700/80 mt-3 max-w-2xl mx-auto">
          Hover over the photos for a sprinkle of sparkle.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((p, idx) => (
            <motion.figure
              key={p.src}
              className="group relative overflow-hidden rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <img src={p.src} alt={p.caption} className="w-full h-64 object-cover transform transition duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              <figcaption className="absolute bottom-3 left-3 text-white font-semibold drop-shadow-lg">{p.caption}</figcaption>
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute text-yellow-200"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                    style={{ top: `${Math.random() * 90}%`, left: `${Math.random() * 90}%` }}
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
