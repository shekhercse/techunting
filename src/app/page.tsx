import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection />
      <Services/>
    </main>
  );
}
