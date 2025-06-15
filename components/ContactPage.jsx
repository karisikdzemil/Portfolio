import ContactCard from "./ContactCard";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

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
    href: "https://linkedin.com/in/dzemilkarisik",
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
    value: "+381 640302888",
    href: "tel:+381640302888",
  },
];

export default function ContactPage() {
  return (
    <section className="px-6 py-16 bg-black min-h-screen text-white">
      <h2 className="text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        Let's Create Something Amazing
      </h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
        I'm always excited about new challenges and opportunities to create exceptional digital experiences. Whether you're a startup looking to build your first product or an enterprise seeking to modernize your platform, let's discuss how we can bring your vision to life.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {contacts.map((contact, index) => (
          <ContactCard key={index} {...contact} />
        ))}
      </div>
    </section>
  );
}
