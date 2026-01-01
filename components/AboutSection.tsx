"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
  {
    title: "One Platform. Multiple Worlds.",
    description:
      "Guildify supports multiple MMORPGs under a single unified system — no need to switch tools when your guild switches games.",
  },
  {
    title: "Built for Real Guild Leadership",
    description:
      "Guildify isn’t a chat tool. It’s a command center for MMO guilds that take structure seriously.",
  },
  {
    title: "MMO-Aware Systems",
    description:
      "Roles, specs, loot rules, attendance, progression. Guildify understands how MMORPG guilds actually function.",
  },
  {
    title: "One Platform, Full Control",
    description:
      "Events, rosters, permissions, announcements, and member management — all in one place, fully connected.",
  },
  {
    title: "Scales From Party to Alliance",
    description:
      "Whether you run a small raid group or a multi-guild coalition, Guildify grows with you without breaking.",
  },
  {
    title: "Leadership-Grade Permissions",
    description:
      "Fine-grained access control built for officers, class leaders, and raid leads — no compromises.",
  },
];

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-zinc-950"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col lg:flex-row items-start gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <h2 className="text-4xl font-bold text-white leading-tight">
              Built specifically for{"  "}
              <span className="text-orange-500 ">guilds</span>.
            </h2>
            <p className="text-gray-400">
              Generic management tools aren't built for MMORPGs. Guildify is
              designed from the ground up with gaming logic in mind.
            </p>
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded bg-green-500/20 text-green-500 flex items-center justify-center mt-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{benefit.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <Image
              src="/features.png"
              alt="Description"
              width={500}
              height={300}
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
