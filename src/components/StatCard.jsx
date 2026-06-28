"use client";
import { useEffect, useRef, useState } from "react";

export default function StatCard({ number, suffix = "", title }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateCount = () => {
    let start = 0;
    const end = parseInt(number);
    if (start === end) return;

    const duration = 1200;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
  };

  return (
    <div ref={ref} className="flex-1 px-8 py-10 text-center md:text-left">
      <h2 className="font-mono text-5xl font-bold text-white md:text-6xl">
        {count}
        <span className="text-accent">{suffix}</span>
      </h2>
      <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
        {title}
      </p>
    </div>
  );
}
