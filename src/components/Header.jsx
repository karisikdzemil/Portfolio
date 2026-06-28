"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Stack" },
  { href: "/projects", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b-2 border-white/10 bg-ink/95 backdrop-blur-sm">
        <nav className="flex h-16 w-full items-center justify-between px-6 md:px-10">
          <Link href="/" className="font-mono text-lg font-bold tracking-tight text-white">
            DzK<span className="text-accent">_</span>
          </Link>

          <ul className="hidden items-center gap-8 font-mono text-sm uppercase tracking-wider md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative pb-1 transition-colors ${
                      active ? "text-accent" : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="absolute -bottom-[5px] left-0 h-[2px] w-full bg-accent" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            className="text-2xl text-white md:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <HiMenu />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-40 bg-black/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              key="menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed top-0 right-0 z-50 flex h-full w-[80%] flex-col gap-10 border-l-2 border-white/10 bg-ink p-8 sm:w-[60%]"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-lg font-bold text-white">
                  DzK<span className="text-accent">_</span>
                </span>
                <button
                  className="text-3xl text-white hover:text-accent"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX />
                </button>
              </div>

              <ul className="flex flex-col gap-6 font-mono text-2xl uppercase">
                {navLinks.map((link, i) => (
                  <li key={link.href} className="flex items-baseline gap-3">
                    <span className="text-sm text-accent">0{i + 1}</span>
                    <Link
                      href={link.href}
                      className={pathname === link.href ? "text-accent" : "text-white"}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
