"use client";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SkillsCard({ title, description, icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4}}
      viewport={{ once: true, amount: 0.4 }}
      className="w-[280px] md:w-[300px] h-[300px] bg-[#111] border border-neutral-800 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/30 text-center flex flex-col items-center gap-6"
    >
      <div className="text-6xl bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        <FontAwesomeIcon icon={icon} className="text-white" />
      </div>
      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
  );
}
