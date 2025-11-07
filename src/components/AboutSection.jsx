import React from 'react';
import { motion } from 'framer-motion';

const FactCard = ({ icon, title, text, delay }) => (
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    className="group bg-white/70 backdrop-blur rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition"
  >
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="text-lg font-semibold text-rose-900">{title}</h3>
    <p className="text-rose-700/80 mt-1">{text}</p>
  </motion.div>
);

export default function AboutSection() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#fff7f2] to-[#fbffee]">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-rose-900 text-center"
        >
          About TimTim
        </motion.h2>
        <p className="text-center text-rose-700/80 mt-3 max-w-2xl mx-auto">
          TimTim is a tiny ball of fluff who lives for snacks, snuggles, and nap time. Here’s a peek into his cozy life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <FactCard icon="🍓" title="Loves strawberries" text="Sweet treats make TimTim squeak with joy!" delay={0} />
          <FactCard icon="🥕" title="Crunch master" text="Carrots and hay are his crunchy companions." delay={0.1} />
          <FactCard icon="😴" title="Nap champion" text="Warm blankets + soft sounds = instant snooze." delay={0.2} />
          <FactCard icon="🧭" title="Explorer mode" text="He patrols his kingdom with curious sniffs." delay={0.3} />
          <FactCard icon="🛁" title="Spa day" text="Loves a gentle brush and a fresh bedding reset." delay={0.4} />
          <FactCard icon="💌" title="Squeak-speak" text="Friendly chirps whenever you say hello!" delay={0.5} />
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[0,1,2].map((i) => (
            <motion.div
              key={i}
              initial={{ rotateY: 180, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="[transform-style:preserve-3d] bg-white/70 backdrop-blur rounded-2xl p-6 shadow-lg border border-white/50"
            >
              <div className="text-2xl font-semibold text-rose-900">Fun Fact #{i + 1}</div>
              <p className="mt-2 text-rose-700/80">
                {i === 0 && 'TimTim keeps a stash of hay under his favorite corner.'}
                {i === 1 && 'He popcorning-dances when you play soft music!'}
                {i === 2 && 'His daily routine: snack, explore, nap, repeat.'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
