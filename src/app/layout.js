import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Dzemil Karisik — Fullstack JavaScript Engineer",
    template: "%s — Dzemil Karisik",
  },
  description:
    "Dzemil Karisik is a fullstack JavaScript engineer building web and mobile products end to end — React, Next.js, React Native, Node.js and real-time systems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink font-sans text-white antialiased">
        <Sidebar />
        <main className="min-h-screen pt-14 md:ml-[260px] md:pt-0">
          {children}
        </main>
      </body>
    </html>
  );
}
