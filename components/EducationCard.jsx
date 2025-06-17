"use client";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";
import { BsPatchCheckFill } from "react-icons/bs";

export default function EducationCard({ type, title, subtitle, period, description, tags, status, from = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: from === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="bg-[#111] border border-neutral-800 rounded-2xl p-6 shadow-lg"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-2xl text-cyan-400">
          {type === "formal" ? <FaGraduationCap /> : <BsPatchCheckFill />}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-cyan-400 text-sm mb-1">{subtitle}</p>
      <p className="text-gray-500 text-sm mb-3">{period}</p>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-[#222] px-2 py-1 rounded-full border border-neutral-700 text-rose-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      {status && (
        <div className="mt-4">
          <span className="text-xs bg-emerald-600 text-white px-3 py-1 rounded-full font-semibold">
            {status}
          </span>
        </div>
      )}
    </motion.div>
  );
}
