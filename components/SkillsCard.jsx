"use client";
import { motion } from "framer-motion";

export default function SkillsCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-[#111] border border-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/30 text-center flex flex-col items-center gap-4"
    >
      <div className="text-4xl">{icon}</div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}
