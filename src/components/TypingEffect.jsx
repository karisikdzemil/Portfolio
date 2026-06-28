"use client";
import { useState, useEffect } from "react";

const words = [
  "web apps.",
  "REST & real-time APIs.",
  "React Native apps.",
  "fullstack JavaScript.",
];

export default function TypingEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 40 : 90;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1400);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <p className="min-h-[2.5rem] font-mono text-xl text-white/70 md:text-2xl">
      <span className="text-white/40">{"// building "}</span>
      <span className="text-accent">{text}</span>
      <span className="animate-blink text-accent">|</span>
    </p>
  );
}
