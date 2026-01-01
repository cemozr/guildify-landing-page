"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

        <Image
          src="/guildify-logo-2.png"
          alt="Guildify Logo"
          width={256}
          height={128}
          className="w-24 h-16 md:w-48 md:h-32"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 text-center md:text-left">
        <p className="text-xs text-gray-600">
          © 2025 Guildify. Currently in development. All placeholder images are
          for demonstration.
        </p>
      </div>
    </motion.footer>
  );
}
