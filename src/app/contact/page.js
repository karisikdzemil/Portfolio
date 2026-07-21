"use client";

import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import AnimatedSection from "@/components/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";

const contactBase = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "karisikdzemil@gmail.com",
    href: "mailto:karisikdzemil@gmail.com",
    color: "#f59e0b",
    descKey: "contact.emailDesc",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "dzemilkarisik",
    href: "https://www.linkedin.com/in/d%C5%BEemil-kari%C5%A1ik-37b964253/",
    color: "#0A66C2",
    descKey: "contact.linkedinDesc",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "karisikdzemil",
    href: "https://github.com/karisikdzemil",
    color: "#a78bfa",
    descKey: "contact.githubDesc",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+381 64 030 2888",
    href: "tel:+381640302888",
    color: "#22c55e",
    descKey: "contact.phoneDesc",
  },
];

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-hidden px-8 py-10 md:px-10 md:py-12">
      <div className="pointer-events-none absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-accent/[0.05] blur-[100px]" />

      <div className="relative mx-auto max-w-3xl">
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            {t("contact.label")}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-white md:text-4xl">
            {t("contact.title")}
          </h1>
          <p className="mt-2 text-muted">{t("contact.subtitle")}</p>
        </AnimatedSection>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {contactBase.map(({ icon: Icon, label, value, href, color, descKey }, i) => (
            <AnimatedSection key={label} delay={0.1 + i * 0.07}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl border border-white/[0.07] bg-ink-soft p-6 transition-all duration-300 hover:border-white/[0.14] hover:shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at top left, ${color}14 0%, transparent 60%)`,
                  }}
                />
                <div
                  className="absolute left-0 right-0 top-0 h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
                />

                <div className="relative">
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-300 group-hover:scale-105"
                    style={{
                      borderColor: `${color}30`,
                      backgroundColor: `${color}12`,
                      color,
                    }}
                  >
                    <Icon size={20} />
                  </div>

                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    {label}
                  </p>
                  <p className="mt-1 font-semibold text-white">{value}</p>
                  <p className="mt-0.5 text-xs text-muted/50">{t(descKey)}</p>

                  <div
                    className="absolute bottom-0 right-0 font-mono text-sm transition-all duration-300 group-hover:translate-x-0.5"
                    style={{ color }}
                  >
                    →
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-8">
          <div className="rounded-xl border border-white/[0.06] bg-ink-soft p-5 text-center">
            <p className="text-sm text-muted">
              {t("contact.footerPre")}{" "}
              <a
                href="mailto:karisikdzemil@gmail.com"
                className="font-medium text-accent transition-colors hover:text-accent-dim"
              >
                {t("contact.footerLink")}
              </a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
