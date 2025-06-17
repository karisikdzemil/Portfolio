"use client";
import { motion } from "framer-motion";

export default function ContactCard({ icon, label, value, href, delay = 0 }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-[#111] border border-neutral-800 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 shadow-md hover:shadow-pink-500/30 transition-all duration-300"
    >
      <div className="text-4xl">{icon}</div>
      <h4 className="text-white font-bold">{label}</h4>
      <p className="text-gray-400 text-sm">{value}</p>
    </motion.a>
  );
}
