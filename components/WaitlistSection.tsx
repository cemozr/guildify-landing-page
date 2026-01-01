"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Add your form submission logic here
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-black"
      id="waitlist"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-zinc-800 hover:border-primary/30 rounded-xl p-12 md:p-16 relative transition-all"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-primary via-orange-500 to-transparent"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-orange-500 via-primary to-transparent"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Be There From Day One
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Join the waitlist to get early access, exclusive development
            updates, and help shape Guildify into the tool you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <a
              href="https://discord.gg/e9yEA86FnJ"
              className="rounded-md bg-gradient-to-r w-full from-primary to-orange-500 px-8 py-3 font-semibold text-white hover:shadow-lg hover:shadow-primary/50 transition-all whitespace-nowrap"
              type="submit"
            >
              Join Our Community Today
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
