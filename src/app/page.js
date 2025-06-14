import Image from "next/image";
import TypingEffect from "../../components/TypingEffect";
import StatsSection from "../../components/StatsSection";
import AboutSection from "../../components/AboutSection";

export default function Home() {
  return (
    <>
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#010D14] via-[#0A1E28] to-[#260C0D] text-white px-4">
      <h1 className="text-6xl font-extrabold bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        Dzemil Karisik
      </h1>
      <TypingEffect />

      <div className="flex gap-6 mt-8">
        <button className="bg-gradient-to-r from-cyan-400 to-pink-500 text-white px-6 py-3 rounded-full font-bold">
          View My Work
        </button>
        <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-full font-bold hover:bg-cyan-400 hover:text-black transition">
          Get In Touch
        </button>
      </div>
    </section>
      <StatsSection />
      <AboutSection />
    </>
  );
}
