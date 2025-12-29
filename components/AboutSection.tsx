'use client';

import { motion } from 'framer-motion';

const benefits = [
  {
    title: 'MMORPG-First Design',
    description: 'We understand what "Main Spec", "Off Spec", "DKP", and "Raid Lockout" mean.',
  },
  {
    title: 'Scalable Architecture',
    description: 'Whether you have 10 raiders or a 5,000 member alliance, Guildify performs flawlessly.',
  },
  {
    title: 'Granular Permissions',
    description: 'Military-grade role management to ensure your guild bank and strategies are secure.',
  },
];

export default function AboutSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-zinc-950" 
      id="about"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <h2 className="text-4xl font-bold text-white leading-tight">
              Built specifically for {' '}
              <span className="text-orange-500 ">guilds</span>.
            </h2>
            <p className="text-gray-400">
              Generic management tools aren't
              built for MMORPGs. Guildify is designed from the ground up with
              gaming logic in mind.
            </p>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded bg-green-500/20 text-green-500 flex items-center justify-center mt-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{benefit.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <div className="relative w-full aspect-square bg-zinc-900 rounded-xl border border-zinc-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all p-8 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-12 left-8 right-12 h-24 bg-zinc-800/90 backdrop-blur border border-zinc-700 rounded p-4 flex gap-3"
              >
                <div className="w-12 h-12 rounded bg-primary/20 border border-primary/30"></div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="h-3 w-3/4 bg-zinc-700 rounded"></div>
                  <div className="h-2 w-1/2 bg-zinc-700 rounded"></div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute top-44 left-16 right-8 h-36 bg-zinc-900/95 backdrop-blur border border-primary/40 rounded p-4 flex flex-col gap-3"
              >
                <div className="flex justify-between items-center mb-2">
                  <div className="h-3 w-1/3 bg-primary/40 rounded"></div>
                  <div className="h-2 w-12 bg-green-500/20 rounded"></div>
                </div>
                <div className="h-2 w-full bg-zinc-700 rounded"></div>
                <div className="h-2 w-full bg-zinc-700 rounded"></div>
                <div className="h-2 w-5/6 bg-zinc-700 rounded"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
