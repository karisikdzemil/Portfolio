import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Dzemil Karisik.",
};

const contacts = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "karisikdzemil@gmail.com",
    href: "mailto:karisikdzemil@gmail.com",
    color: "#f59e0b",
    description: "Best way to reach me",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "dzemilkarisik",
    href: "https://www.linkedin.com/in/d%C5%BEemil-kari%C5%A1ik-37b964253/",
    color: "#0A66C2",
    description: "Professional network",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "karisikdzemil",
    href: "https://github.com/karisikdzemil",
    color: "#a78bfa",
    description: "See my code",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+381 64 030 2888",
    href: "tel:+381640302888",
    color: "#22c55e",
    description: "Available on WhatsApp",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen px-8 py-10 md:px-10 md:py-12">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-white md:text-4xl">Let&apos;s Connect</h1>
          <p className="mt-2 text-muted">
            Got something in mind? Pick whatever channel works best for you.
          </p>
        </div>

        {/* Contact grid */}
        <div className="grid gap-4 sm:grid-cols-2">
          {contacts.map(({ icon: Icon, label, value, href, color, description }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl border border-white/[0.07] bg-ink-soft p-5 transition-all duration-300 hover:border-white/15"
              style={{ "--card-color": color }}
            >
              {/* Subtle gradient bg on hover */}
              <div
                className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle at top left, ${color}10 0%, transparent 65%)`,
                }}
              />

              <div className="relative">
                {/* Icon */}
                <div
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border transition-colors duration-300"
                  style={{
                    borderColor: `${color}25`,
                    backgroundColor: `${color}10`,
                    color,
                  }}
                >
                  <Icon size={18} />
                </div>

                {/* Text */}
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  {label}
                </p>
                <p className="mt-1 font-semibold text-white transition-colors group-hover:text-white">
                  {value}
                </p>
                <p className="mt-0.5 text-xs text-muted/60">{description}</p>

                {/* Arrow */}
                <div
                  className="absolute right-0 bottom-0 font-mono text-sm transition-all duration-300 group-hover:translate-x-0.5"
                  style={{ color }}
                >
                  →
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 rounded-xl border border-white/[0.07] bg-ink-soft p-5 text-center">
          <p className="text-sm text-muted">
            Got something to build?{" "}
            <a href="mailto:karisikdzemil@gmail.com" className="font-medium text-accent hover:text-accent-dim">
              Tell me about it.
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}
