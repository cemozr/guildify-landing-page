'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: 'group',
    title: 'Guild Management',
    description: 'Comprehensive roster tools with role-based access control, activity tracking, and alt character linking.',
    status: 'Planned',
    color: 'primary',
  },
  {
    icon: 'account_tree',
    title: 'Sub-guild Structure',
    description: 'Organize massive communities into squads, teams, or static groups with their own permissions and chats.',
    status: 'Planned',
    color: 'secondary',
  },
  {
    icon: 'calendar_month',
    title: 'Raid Scheduling',
    description: 'Advanced calendar tools for recurring events, signup management, waitlists, and attendance tracking.',
    status: 'In Dev',
    color: 'primary',
    statusColor: 'primary',
  },
  {
    icon: 'savings',
    title: 'Economy Tracking',
    description: 'Track guild bank interactions, loot distribution systems (DKP/EPGP support), taxes, and donations.',
    status: 'Planned',
    color: 'accent-gold',
  },
  {
    icon: 'database',
    title: 'Game Database',
    description: 'Integrated item and quest database for your specific game. Link items directly in chat and event descriptions.',
    status: 'Concept',
    color: 'secondary',
  },
  {
    icon: 'map',
    title: 'Map Editor',
    description: 'Interactive tactical maps for planning raids and territory control wars. Draw, mark, and share strategies.',
    status: 'Concept',
    color: 'primary',
  },
];

export default function FeaturesSection() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-black" 
      id="features"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What We're Building
          </h2>
          <p className="text-gray-400">
            Designed specifically for the complexities of modern MMORPGs and organized gaming groups.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <div className="absolute top-4 right-4">
                <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded ${
                  feature.status === 'In Dev' 
                    ? 'bg-primary/20 text-primary border border-primary/30' 
                    : feature.status === 'Concept'
                    ? 'bg-zinc-800 text-gray-400 border border-zinc-700'
                    : 'bg-zinc-800 text-gray-400 border border-zinc-700'
                }`}>
                  {feature.status}
                </span>
              </div>
              <div className="mb-4 w-10 h-10 rounded bg-gradient-to-br from-primary/20 to-orange-500/20 border border-primary/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
