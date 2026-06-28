import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const socials = [
  { icon: <FaEnvelope />, href: "mailto:karisikdzemil@gmail.com", label: "Email" },
  {
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/d%C5%BEemil-kari%C5%A1ik-37b964253/",
    label: "LinkedIn",
  },
  { icon: <FaGithub />, href: "https://github.com/karisikdzemil", label: "GitHub" },
  { icon: <FaPhone />, href: "tel:+381640302888", label: "Phone" },
];

const siteLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Stack" },
  { href: "/projects", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-white/10 bg-ink px-6 py-12 text-white md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="max-w-sm">
          <p className="font-mono text-lg font-bold">
            DK<span className="text-accent">_</span>
          </p>
          <p className="mt-3 text-sm text-white/50">
            Fullstack JavaScript engineer. Building web and mobile products
            end to end, from database to deployed UI.
          </p>
        </div>

        <div className="flex gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Sitemap
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-accent">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/40">
              Connect
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              {socials.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-accent"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 pt-6 font-mono text-xs text-white/40">
        © {year} Dzemil Karisik. Built from scratch, no templates.
      </div>
    </footer>
  );
}
