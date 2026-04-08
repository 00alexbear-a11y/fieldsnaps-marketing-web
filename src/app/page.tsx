import TopNavBar from "@/components/layout/TopNavBar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PricingSection from "@/components/sections/PricingSection";
import FeatureDataFunnel from "@/components/sections/FeatureDataFunnel";
import FoundersNote from "@/components/sections/FoundersNote";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full h-full min-h-screen selection:bg-brand-blue selection:text-white">
      <TopNavBar />
      
      <HeroSection />

      {/* Product Image Break Section */}
      <section className="h-[60vh] min-h-[500px] w-full relative border-y-2 border-outline/50 flex items-center justify-center overflow-hidden bg-primary">
          <div className="absolute inset-0 z-0">
              <Image 
                src="/bg_construction.png" 
                alt="Brutalist Construction Background"
                fill
                className="object-cover opacity-60 grayscale filter contrast-125"
                priority
              />
          </div>
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <h2 className="text-[#EBEAE6] text-[clamp(2.5rem,8vw,8rem)] font-headline font-black uppercase tracking-tighter mix-blend-overlay drop-shadow-[0_0_15px_rgba(0,0,0,0.8)]">
                YOUR FIELD MADE SIMPLE.
              </h2>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10 pointer-events-none opacity-40"></div>
      </section>

      <FoundersNote />

      <FeatureDataFunnel />
      
      <PricingSection />

      <Footer />
    </main>
  );
}
