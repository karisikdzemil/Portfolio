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
              I am an <span className="text-cyan-400 font-bold">ambitious front-end developer</span> and a 
              <span className="text-cyan-400 font-bold"> software engineering student</span>. Every day, I work on improving my skills by creating and planning projects that reflect 
              <span className="text-cyan-400 font-bold"> real-world scenarios</span> and have the potential for 
              <span className="text-cyan-400 font-bold"> practical application</span>.
            </p>
            <p>
              I gain knowledge through my academic studies—where I focus on 
              <span className="text-cyan-400 font-bold"> logical thinking, algorithms and data structures, and computer architecture</span>—
              as well as through various 
              <span className="text-cyan-400 font-bold"> online courses and tutorials</span> which I apply in 
              <span className="text-cyan-400 font-bold"> real projects</span>.
            </p>
            <p>
              My core tech stack includes 
              <span className="text-cyan-400 font-bold"> React</span>, 
              <span className="text-cyan-400 font-bold"> Next.js</span>, 
              <span className="text-cyan-400 font-bold"> JavaScript</span>, 
              <span className="text-cyan-400 font-bold"> TypeScript</span>, and 
              <span className="text-cyan-400 font-bold"> Tailwind CSS</span>. I also work with 
              <span className="text-cyan-400 font-bold"> Firebase</span>, 
              <span className="text-cyan-400 font-bold"> Framer-Motion</span>, 
              <span className="text-cyan-400 font-bold"> MongoDB</span>, 
              <span className="text-cyan-400 font-bold"> Git</span>, and 
              <span className="text-cyan-400 font-bold"> Socket.io</span> for real-time communication.
            </p>
            <p>
              I am currently exploring 
              <span className="text-cyan-400 font-bold"> PostgreSQL</span>, 
              <span className="text-cyan-400 font-bold"> Prisma</span>, and 
              <span className="text-cyan-400 font-bold"> GraphQL</span> to broaden my backend skills. I care deeply about 
              <span className="text-cyan-400 font-bold"> clean code</span>, 
              <span className="text-cyan-400 font-bold"> performance</span>, and 
              <span className="text-cyan-400 font-bold"> user experience</span>, and I enjoy collaborating on meaningful projects that push me to grow.
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
