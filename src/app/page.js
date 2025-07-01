"use client";
import { motion } from "framer-motion";
import TypingEffect from "../../components/TypingEffect";
import StatsSection from "../../components/StatsSection";
import AboutSection from "../../components/AboutSection";
import SkillsPage from "../../components/SkillsPage";
import ProjectsPage from "../../components/ProjectsPage";
import ContactPage from "../../components/ContactPage";
import Footer from "../../components/Footer";
import EducationPage from "../../components/EducationPage";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#010D14] via-[#0A1E28] to-[#260C0D] text-white px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text"
        >
          Dzemil Karisik
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <TypingEffect />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex gap-6 mt-8"
        >
          <a
            href="#projects"
            className="bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-6 py-3 rounded-full font-bold"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-bold hover:bg-cyan-400 hover:text-black transition"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>

      <StatsSection />
      <AboutSection />
      <SkillsPage />
      <ProjectsPage />
      <EducationPage />
      <ContactPage />
      <Footer />
    </div>
  );
}
