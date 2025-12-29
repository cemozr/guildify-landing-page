'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-black">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/content.png" 
          alt="Hero Background" 
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black"></div>
      </div>
      
     
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20  rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
      <div className="max-w-5xl relative z-10 mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            In Active Development
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          The Future of{' '}
          <span className="bg-gradient-to-t from-primary via-orange-600 to-orange-400 bg-clip-text text-transparent">
            Guild & Community
          </span>{' '}
          Management
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-gray-400 leading-relaxed"
        >
          Guildify is an upcoming platform built to help MMORPG communities
          organize members, events, economy, and game data — all in one unified
          dashboard.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex w-full max-w-xl mx-auto flex-col sm:flex-row gap-3 relative z-20"
        >
         
          <button className="w-full px-6 py-3 rounded-md bg-gradient-to-r from-primary to-orange-500 text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all whitespace-nowrap cursor-pointer hover:animate-pulse">
            Join Our Discord Community
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 text-xs text-gray-500"
        >
          Join guild leaders waiting for early access.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mt-16 w-full max-w-6xl mx-auto px-6 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-full"></div>
        <div className="rounded-xl border border-zinc-800 border-t-primary/50 bg-zinc-900/50 p-2 shadow-2xl shadow-primary/10 opacity-90">
          <div className="bg-black rounded-lg overflow-hidden border border-zinc-800 h-64 md:h-96 relative">
            <div className="flex h-full">
              <div className="w-16 md:w-64 border-r border-zinc-800 bg-zinc-900 p-4 hidden md:flex flex-col gap-4">
                <div className="h-8 w-32 bg-zinc-800 rounded animate-pulse"></div>
                <div className="space-y-2 mt-4">
                  <div className="h-4 w-full bg-zinc-800 rounded"></div>
                  <div className="h-4 w-3/4 bg-zinc-800 rounded"></div>
                  <div className="h-4 w-5/6 bg-primary/20 rounded border-l-2 border-primary"></div>
                </div>
              </div>
              <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                <div className="col-span-3 h-12 border-b border-zinc-800 mb-2 flex items-center justify-between">
                  <div className="h-4 w-48 bg-zinc-800 rounded"></div>
                  <div className="h-8 w-24 bg-primary rounded"></div>
                </div>
                <div className="col-span-3 md:col-span-2 h-48 bg-zinc-900 rounded border border-zinc-800"></div>
                <div className="col-span-3 md:col-span-1 h-48 bg-zinc-900 rounded border border-zinc-800"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
