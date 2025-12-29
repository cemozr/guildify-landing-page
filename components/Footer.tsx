'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-zinc-900 bg-black py-12"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-lg font-bold text-white">Guildify</span>
          </div>
          <p className="text-sm text-gray-500">
            Built for guild leaders, by guild leaders.
          </p>
        </div>
        <div className="flex gap-8">
          <Link
            className="text-sm text-gray-400 hover:text-white transition-colors"
            href="#roadmap"
          >
            Roadmap
          </Link>
          <Link
            className="text-sm text-gray-400 hover:text-white transition-colors"
            href="#"
          >
            Dev Updates
          </Link>
          <Link
            className="text-sm text-gray-400 hover:text-white transition-colors"
            href="#"
          >
            Contact
          </Link>
          <Link
            className="text-sm text-gray-400 hover:text-white transition-colors"
            href="#"
          >
            Twitter
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 text-center md:text-left">
        <p className="text-xs text-gray-600">
          © 2025 Guildify. Currently in development. All placeholder images are for demonstration.
        </p>
      </div>
    </motion.footer>
  );
}
