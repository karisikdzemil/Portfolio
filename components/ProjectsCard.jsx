"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ image, title, description, tags, links, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="w-[320px] md:w-[360px] bg-[#111] border border-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/20"
    >
      <div className="h-36 md:h-44 w-full overflow-hidden relative">
        <Image
          src={image}
          alt={`${title} preview`}
          layout="fill"
          objectFit="cover"
          className="hover:scale-105 transition-transform duration-300 ease-out"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-[#222] px-2 py-1 rounded-full border border-neutral-700 text-cyan-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-sm font-semibold text-cyan-400">
          {links.map((link, i) => (
            <a
              href={link.href}
              key={i}
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label} →
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
