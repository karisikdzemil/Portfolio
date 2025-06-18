"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-black text-gray-300 fixed top-0 z-50">
      <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        <a href="#home">DzK</a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <li key={link.href} className="hover:text-cyan-400 cursor-pointer">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <button
        className="text-3xl md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <HiMenu />
      </button>

      {/* AnimatePresence controls both overlay and menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark semi-transparent backdrop */}
            <motion.div
              key="overlay"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in Menu */}
            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-[75%] sm:w-[60%] bg-black border-l border-neutral-800 z-50 shadow-lg p-8 flex flex-col gap-8"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
                  DzK
                </span>
                <button
                  className="text-3xl text-gray-300 hover:text-pink-500"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX />
                </button>
              </div>

              <ul className="flex flex-col gap-6 text-lg">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-cyan-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
