import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  // icons: {
  //   icon: "/favicon.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-ink font-sans text-white antialiased">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
