'use client';

import { motion } from 'framer-motion';

const audiences = [
  {
    icon: 'crown',
    title: 'Guild Leaders',
    description: 'Automate the tedious admin work so you can focus on leading your guild to victory and keeping morale high.',
    gradient: 'from-primary to-orange-800',
  },
  {
    icon: 'diversity_3',
    title: 'Community Managers',
    description: 'Tools designed to manage thousands of members across multiple games with ease and precision.',
    gradient: 'from-accent-gold to-yellow-900',
  },
  {
    icon: 'sports_esports',
    title: 'eSports Teams',
    description: 'Structure your competitive rosters, schedule scrims, and track performance data all in one secure place.',
    gradient: 'from-secondary to-orange-900',
  },
   {
    icon: 'theater_comedy',
    title: 'FRP Communities',
    description: 'Manage your role-playing game communities with tools tailored for immersive storytelling and player engagement.',
    gradient: 'from-secondary to-orange-900',
  },
];

export default function AudienceSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-black"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white text-center mb-12"
        >
          Who is Guildify For?
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-4">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary via-orange-500 to-orange-600 shadow-lg shadow-primary/30 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white text-3xl">
                  {audience.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{audience.title}</h3>
              <p className="text-gray-400 text-sm">{audience.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
