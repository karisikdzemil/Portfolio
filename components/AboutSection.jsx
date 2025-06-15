"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-[#121212] text-gray-300 px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div
            className="flex-1 text-lg leading-relaxed space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I am a passionate <span className="text-cyan-400 font-bold">web developer</span> with a strong focus on building
              beautiful and performant user interfaces.
            </p>
            <p>
              My expertise lies in <span className="text-cyan-400 font-bold">React.js</span> and crafting dynamic applications.
            </p>
            <p>
              I value <span className="text-cyan-400 font-bold">problem solving</span>, performance, and clean code.
            </p>
          </motion.div>

          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Image
              src="/portfolioImage.jpeg"
              alt="Profile picture"
              className="w-64 h-64 md:w-96 md:h-96 object-cover rounded-full border-4 border-cyan-500 shadow-lg"
                width={1000}
                height={1000}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
