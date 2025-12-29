'use client';

import { motion } from 'framer-motion';

const roadmapSteps = [
  {
    title: 'Concept & Design',
    description: 'Architecture planned. Core features defined.',
    icon: 'check',
    status: 'completed',
  },
  {
    title: 'Development',
    description: 'Building core infrastructure and MVP features.',
    icon: 'code',
    status: 'current',
  },
  {
    title: 'Closed Alpha',
    description: 'Invite-only testing for select guilds.',
    icon: '3',
    status: 'upcoming',
  },
  {
    title: 'Public Beta',
    description: 'Open access for waitlist members.',
    icon: '4',
    status: 'future',
  },
  {
    title: 'Full Release',
    description: 'Official launch with complete feature set.',
    icon: '5',
    status: 'future',
  },
];

export default function RoadmapSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-black"
      id="roadmap"
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
          <h2 className="text-4xl font-bold text-white mb-4">Development Status</h2>
          <p className="text-gray-400">
            We are building in public. Here is our current trajectory.
          </p>
        </motion.div>
        <div className="relative">
          <div className="absolute top-1/5 left-0 w-full h-px bg-zinc-800 -translate-y-1/2 hidden md:block "></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {roadmapSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col items-center text-center ${
                  step.status === 'upcoming' ? 'opacity-60' : step.status === 'future' ? 'opacity-40' : ''
                }`}
              >
                <div
                  className={`w-16 h-16 rounded-full ${
                    step.status === 'completed'
                      ? 'bg-zinc-900 border-2 border-primary text-primary'
                      : step.status === 'current'
                      ? 'bg-gradient-to-br from-primary to-orange-500 text-white shadow-lg shadow-primary/50'
                      : 'bg-zinc-900 border-2 border-zinc-800 text-gray-400'
                  } flex items-center justify-center z-10 mb-4`}
                >
                  {step.status === 'completed' && (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {step.status === 'current' && (
                    <span className="material-symbols-outlined text-xl">{step.icon}</span>
                  )}
                  {(step.status === 'upcoming' || step.status === 'future') && (
                    <span className="text-lg font-bold">{step.icon}</span>
                  )}
                </div>
                <h4 className="text-white font-bold mb-2">{step.title}</h4>
                {step.status === 'current' && (
                  <span className="inline-block px-3 py-1 mb-2 rounded-full text-xs bg-gradient-to-r from-primary to-orange-500 text-white font-bold shadow-lg shadow-primary/50">
                    CURRENT
                  </span>
                )}
                <p className="text-xs text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
