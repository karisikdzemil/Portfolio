import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

export default function Footer() {
  const socials = [
    { icon: <FaEnvelope />, href: "mailto:karisikdzemil@gmail.com" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/dzemilkarisik" },
    { icon: <FaPhone />, href: "tel:+381640302888" },
    { icon: <FaGithub />, href: "https://github.com/karisikdzemil" },
  ];

  return (
    <footer className="bg-black py-8 text-center text-sm text-gray-500 border-t border-neutral-800">
      <p className="mb-4">
        © 2024 Dzemil Karisik. Crafted with passion and cutting-edge technologies.
      </p>
      <div className="flex justify-center gap-6">
        {socials.map((item, i) => (
          <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xl hover:text-cyan-400 transition"
          >
            {item.icon}
          </a>
        ))}
      </div>
    </footer>
  );
}
