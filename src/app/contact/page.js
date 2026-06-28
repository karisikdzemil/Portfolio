import PageHeader from "@/components/ui/PageHeader";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Dzemil Karisik — open to internships, freelance work and fullstack roles.",
};

const contacts = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "karisikdzemil@gmail.com",
    href: "mailto:karisikdzemil@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "linkedin.com/in/dzemilkarisik",
    href: "https://www.linkedin.com/in/d%C5%BEemil-kari%C5%A1ik-37b964253/",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    value: "github.com/karisikdzemil",
    href: "https://github.com/karisikdzemil",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+381 64 030 2888",
    href: "tel:+381640302888",
  },
];

export default function ContactPage() {
  return (
    <section className="min-h-[calc(100vh-4rem)] bg-ink px-6 py-24 md:px-10">
      <PageHeader
        index="04"
        label="Get In Touch"
        title="Contact"
        subtitle="Open to internships, freelance projects and fullstack roles. If you've got something to build, tell me about it."
      />

      <div className="mx-auto mt-16 grid max-w-6xl gap-px border-2 border-white/10 bg-white/10 sm:grid-cols-2">
        {contacts.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 bg-ink p-8 transition-colors hover:bg-ink-soft"
          >
            <span className="text-3xl text-white/40 transition-colors group-hover:text-accent">
              {contact.icon}
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
                {contact.label}
              </p>
              <p className="mt-1 text-lg font-bold text-white group-hover:text-accent">
                {contact.value}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
