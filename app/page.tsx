import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#FAFAFA]">
      <Hero />
      <Projects />
    </main>
  );
}
