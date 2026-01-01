"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  const [emblaRef] = useEmblaCarousel(
    {
      axis: "y",
      loop: true,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );
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
            <span className="animate-pulse absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
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
          The Future of{" "}
          <span className="bg-gradient-to-t from-primary via-orange-600 to-orange-400 bg-clip-text text-transparent">
            Guild & Community
          </span>{" "}
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
          <a
            href="https://discord.gg/e9yEA86FnJ"
            className="w-full px-6 py-3 rounded-md bg-gradient-to-r from-primary to-orange-500 text-white font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all whitespace-nowrap cursor-pointer hover:animate-pulse"
          >
            Join Our Discord Community
          </a>
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
        className="mt-16 w-full max-w-6xl mx-auto px-10 relative"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-full"></div>
        <div className="rounded-xl border border-zinc-800 border-t-primary/50 bg-zinc-900/50 p-2 shadow-2xl shadow-primary/10 opacity-90">
          <div className="bg-black rounded-lg overflow-hidden border border-zinc-800 h-[500px] relative">
            <div className="embla overflow-hidden h-full" ref={emblaRef}>
              <div className="embla__container flex flex-col h-full">
                <div className="embla__slide flex-shrink-0 h-full flex items-center justify-center">
                  <Image
                    src="/create_event.png"
                    alt="Dashboard Mockup"
                    width={1920}
                    height={1080}
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="embla__slide flex-shrink-0 h-full flex items-center justify-center">
                  <Image
                    src="/events.png"
                    alt="Dashboard Mockup"
                    width={1920}
                    height={1080}
                    className="object-contain h-full w-full"
                  />
                </div>
                <div className="embla__slide flex-shrink-0 h-full flex items-center justify-center">
                  <Image
                    src="/event_card.png"
                    alt="Dashboard Mockup"
                    width={1920}
                    height={1080}
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
            </div>
            {/* Work in Progress Badge */}
            <div className="absolute top-4 left-4 z-30 flex items-center gap-2 rounded-lg border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-sm px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-xs font-semibold text-yellow-500">
                Work in progress. All UI may change.
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
