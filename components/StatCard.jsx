"use client";
import { useEffect, useState } from "react";

export default function StatCard({ number, title }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(number);
    if (start === end) return;

    let duration = 2000; 
    let stepTime = Math.max(Math.floor(duration / end), 20);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="bg-[#12191c] border border-cyan-900 text-center p-8 rounded-2xl w-64 shadow-md">
      <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        {count}
      </h2>
      <p className="text-gray-400 mt-2">{title}</p>
    </div>
  );
}
