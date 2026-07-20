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

const BASE_URL = "https://dzemilkarisik.dev";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dzemil Karisik — Fullstack JavaScript Engineer",
    template: "%s — Dzemil Karisik",
  },
  description:
    "Dzemil Karisik is a fullstack JavaScript engineer building web and mobile products end to end — React, Next.js, TypeScript, Node.js, and real-time systems.",
  keywords: [
    "Dzemil Karisik",
    "fullstack developer",
    "JavaScript engineer",
    "React developer",
    "Next.js developer",
    "React Native",
    "Node.js",
    "web developer",
    "mobile developer",
    "Serbia",
    "Novi Pazar",
  ],
  authors: [{ name: "Dzemil Karisik", url: BASE_URL }],
  creator: "Dzemil Karisik",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Dzemil Karisik — Fullstack JavaScript Engineer",
    description:
      "Fullstack JavaScript engineer building web and mobile products — React, Next.js, Node.js.",
    siteName: "Dzemil Karisik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dzemil Karisik — Fullstack JavaScript Engineer",
    description: "Fullstack JavaScript engineer — React, Next.js, Node.js.",
  },
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
