'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAppContext } from '@/context/AppContext';
import Image from 'next/image';

export default function Navbar() {
  const { activeSection, setActiveSection } = useAppContext();

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full bg-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
        
            
            <Image src="/guildify-logo-2.png" alt="Guildify Logo" width={64} height={64} />
           
            <span className="text-white text-xl font-bold font-cinzel">Guildify</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link
              className="text-sm font-medium text-white hover:text-primary transition-colors"
              href="#features"
              onClick={() => setActiveSection('features')}
            >
              Features
            </Link>
            <Link
              className="text-sm font-medium text-white hover:text-primary transition-colors"
              href="#roadmap"
              onClick={() => setActiveSection('roadmap')}
            >
              Roadmap
            </Link>
            <Link
              className="text-sm font-medium text-white hover:text-primary transition-colors"
              href="#about"
              onClick={() => setActiveSection('about')}
            >
              Why Guildify
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link
              className="rounded-md bg-gradient-to-r from-primary to-orange-500 px-4 py-2 text-sm font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all"
              href="https://discord.gg/e9yEA86FnJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Discord
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
