"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const { activeSection, setActiveSection } = useAppContext();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const controls = useAnimation();

  const handleNavClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    section: string
  ) => {
    e.preventDefault();
    setIsTransitioning(true);

    // Fade out animation
    await controls.start({
      opacity: 0,
      y: -20,
      transition: { duration: 0.3, ease: "easeInOut" },
    });

    // Scroll to section
    setActiveSection(section);
    const element = document.querySelector(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Fade in animation
    setTimeout(async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" },
      });
      setIsTransitioning(false);
    }, 400);
  };

  return (
    <>
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm pointer-events-none"
        />
      )}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 z-50 w-full bg-black"
      >
        <motion.div animate={controls}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src="/guildify-logo-2.png"
                  alt="Guildify Logo"
                  width={64}
                  height={64}
                />

                <span className="text-white text-xl font-bold font-cinzel">
                  Guildify
                </span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <Link
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
                  href="#features"
                  onClick={(e) => handleNavClick(e, "#features")}
                >
                  Features
                </Link>

                <Link
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
                  href="#about"
                  onClick={(e) => handleNavClick(e, "#about")}
                >
                  Why Guildify
                </Link>
                <Link
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
                  href="#roadmap"
                  onClick={(e) => handleNavClick(e, "#roadmap")}
                >
                  Roadmap
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
        </motion.div>
      </motion.nav>
    </>
  );
}
