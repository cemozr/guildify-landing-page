"use client";

import { motion } from "framer-motion";
import ElectricBorder from "./ui/ElectricBorder";
const features = [
  {
    icon: "group_add",
    title: "Community, Guild & Alliance Management",
    description:
      "Multi-layer support: Community, Guild, and Alliance. Each layer is managed separately with its own roles, permissions, events, and progression.",

    color: "accent-gold",
  },
  {
    icon: "gavel",
    title: "Auction House",
    description:
      "Internal guild auction system for loot bidding, DKP integration, and transparent item distribution.",

    color: "accent-gold",
  },
  {
    icon: "account_balance",
    title: "Guild Bank",
    description:
      "Track deposits, withdrawals, taxes, and permissions with full visibility and role-based access control. Manage your loot before distribution",

    color: "primary",
  },
  {
    icon: "event",
    title: "Event System",
    description:
      "Create raids, guild activities, and social events with signups, roles, waitlists, and attendance tracking.",

    color: "primary",
  },
  {
    icon: "groups",
    title: "Member Management",
    description:
      "Manage ranks, specs, alts, activity status, and progression history across your entire guild.",

    color: "secondary",
  },
  {
    icon: "handyman",
    title: "Crafting System",
    description:
      "Track crafters, professions, recipes, and resource requests within your guild ecosystem. Connect your crafters with guild members in need of crafted items.",

    color: "secondary",
  },
  {
    icon: "security",
    title: "Role Management",
    description:
      "Granular permission system built for guild masters, officers, class leaders, and raid leads.",

    color: "primary",
  },
  {
    icon: "assignment",
    title: "Quest System",
    description:
      "Guild-wide objectives, weekly tasks, and progression goals tied to participation and rewards.",

    color: "secondary",
  },
  {
    icon: "redeem",
    title: "Reward Templates",
    description:
      "Create reusable reward structures for raids, quests, events, and seasonal guild activities.",

    color: "accent-gold",
  },
  {
    icon: "group_work",
    title: "Party Management",
    description:
      "Form and manage parties, statics, and raid groups with role balance and availability tracking.",

    color: "primary",
  },
  {
    icon: "inventory",
    title: "Loot Distribution",
    description:
      "Supports various loot distribution methods with full transparency.",

    color: "accent-gold",
  },
  {
    icon: "inventory",
    title: "Mysterious Features",
    description:
      "And many more features that we can't reveal just yet. Stay tuned!",
    color: "accent-gold",
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
            Designed specifically for the complexities of modern MMORPGs and
            organized gaming groups.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <ElectricBorder
              key={index}
              color="#F26400"
              speed={0.2}
              chaos={0.1}
              borderRadius={10}
              className="p-6 bg-zinc-900/50 backdrop-blur-sm"
            >
              <div className="flex flex-col h-full relative">
                <div className="absolute top-0 right-0 w-10 h-10 rounded bg-gradient-to-br from-primary/20 to-orange-500/20 border border-primary/30 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 pr-14">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ElectricBorder>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
