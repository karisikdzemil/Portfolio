"use client";
import { useEffect, useRef, useState } from "react";

export default function StatCard({ number, title }) {
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const animateCount = () => {
    let start = 0;
    const end = parseInt(number);
    if (start === end) return;

    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);
  };

  return (
    <div
      ref={ref}
      className="bg-[#12191c] border border-cyan-900 text-center p-8 rounded-2xl w-64 shadow-md"
    >
      <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        {count}
      </h2>
      <p className="text-gray-400 mt-2">{title}</p>
    </div>
  );
}
