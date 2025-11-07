import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#fff7f2]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-rose-900 text-center">Send TimTim Some Love 💌</h2>
        <p className="text-center text-rose-700/80 mt-3">Drop a sweet note and make TimTim squeak!</p>

        <div className="relative mt-10 bg-white/70 backdrop-blur rounded-2xl p-6 shadow-lg border border-white/50 overflow-hidden">
          <motion.div
            className="absolute -top-6 right-6 text-6xl select-none"
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 150 }}
            aria-hidden
          >
            🐹
          </motion.div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-rose-900">Your Name</label>
              <input type="text" required className="mt-1 w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white/80" placeholder="Carrot Lover" />
            </div>
            <div>
              <label className="block text-sm font-medium text-rose-900">Email</label>
              <input type="email" required className="mt-1 w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white/80" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-rose-900">Message</label>
              <textarea required rows={4} className="mt-1 w-full rounded-xl border border-rose-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-rose-300 bg-white/80" placeholder="Hi TimTim! You are adorable!" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl active:scale-95 transition">
                Send Squeak 💌
              </button>
            </div>
          </form>

          {sent && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="mt-4 text-center text-emerald-700 font-semibold"
            >
              Thanks! TimTim squeaked happily! 🐹✨
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
