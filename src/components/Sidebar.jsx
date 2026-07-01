"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import {
  HiHome,
  HiUser,
  HiFolderOpen,
  HiCode,
  HiMail,
  HiMenu,
  HiX,
  HiLocationMarker,
} from "react-icons/hi";

const navLinks = [
  { href: "/", label: "Home", icon: HiHome },
  { href: "/about", label: "About", icon: HiUser },
  { href: "/projects", label: "Projects", icon: HiFolderOpen },
  { href: "/skills", label: "Skills", icon: HiCode },
  { href: "/contact", label: "Contact", icon: HiMail },
];

const socials = [
  { href: "https://github.com/karisikdzemil", icon: FaGithub, label: "GitHub" },
  {
    href: "https://www.linkedin.com/in/d%C5%BEemil-kari%C5%A1ik-37b964253/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "mailto:karisikdzemil@gmail.com", icon: FaEnvelope, label: "Email" },
];

function SidebarContent({ onClose }) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col p-5">
      {/* Profile */}
      <div className="flex flex-col items-center text-center pt-4">
        <div className="relative h-[88px] w-[88px] overflow-hidden rounded-full border-2 border-accent/25 ring-4 ring-accent/8">
          <Image
            src="/portfolioImage.jpeg"
            alt="Dzemil Karisik"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <h1 className="mt-4 text-sm font-bold text-white">Dzemil Karisik</h1>
        <p className="mt-0.5 font-mono text-[11px] text-muted">Fullstack JS Engineer</p>
        <span className="mt-3 inline-flex items-center gap-1.5 rounded-sm bg-accent/10 px-2.5 py-1 font-mono text-[10px] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Available for work
        </span>
      </div>

      <div className="my-5 border-t border-white/[0.07]" />

      {/* Contact info */}
      <div className="space-y-2.5 text-[11px] text-muted">
        <div className="flex items-center gap-2.5">
          <FaEnvelope className="shrink-0 text-accent/60" size={11} />
          <span className="truncate">karisikdzemil@gmail.com</span>
        </div>
        <div className="flex items-center gap-2.5">
          <HiLocationMarker className="shrink-0 text-accent/60" size={12} />
          <span>Novi Pazar, Serbia</span>
        </div>
      </div>

      {/* Social icons */}
      <div className="mt-4 flex gap-2">
        {socials.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex h-8 w-8 items-center justify-center rounded border border-white/[0.08] text-muted transition-colors hover:border-accent/30 hover:text-accent"
          >
            <Icon size={13} />
          </a>
        ))}
      </div>

      <div className="my-5 border-t border-white/[0.07]" />

      {/* Navigation */}
      <nav className="flex flex-col gap-0.5">
        {navLinks.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`flex items-center gap-3 rounded px-3 py-2.5 text-sm transition-all ${
                active
                  ? "bg-accent/10 font-semibold text-accent"
                  : "text-muted hover:bg-white/[0.04] hover:text-white"
              }`}
            >
              <Icon size={15} />
              {label}
              {active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-accent" />
              )}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto pt-6 font-mono text-[10px] text-white/20">
        © 2026 Dzemil Karisik
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 flex h-14 items-center justify-between border-b border-white/[0.07] bg-ink-soft/95 px-5 backdrop-blur-sm md:hidden">
        <Link href="/" className="font-mono text-sm font-bold text-white">
          DK<span className="text-accent">_</span>
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="text-muted hover:text-white"
        >
          <HiMenu size={22} />
        </button>
      </div>

      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 hidden h-screen w-[260px] overflow-y-auto border-r border-white/[0.07] bg-ink-soft md:flex md:flex-col">
        <SidebarContent />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="overlay"
              className="fixed inset-0 z-50 bg-black/60 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="drawer"
              className="fixed top-0 left-0 z-50 h-full w-[260px] overflow-y-auto border-r border-white/[0.07] bg-ink-soft md:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-muted hover:text-white"
                aria-label="Close menu"
              >
                <HiX size={20} />
              </button>
              <SidebarContent onClose={() => setOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
