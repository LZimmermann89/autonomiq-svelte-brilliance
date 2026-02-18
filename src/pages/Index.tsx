import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AdvantagesSection />
        <ProcessSection />
        <ResearchSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
