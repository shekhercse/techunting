import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import WhyChooseUs from"@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection />
      <Services/>
      <WhyChooseUs/>
    </main>
  );
}
