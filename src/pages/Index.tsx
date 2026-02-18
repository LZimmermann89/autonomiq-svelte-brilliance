import { Layout } from "@/components/Layout";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { AdvantagesSection } from "@/components/AdvantagesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ContactSection } from "@/components/ContactSection";
import { CookieBanner } from "@/components/CookieBanner";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <AdvantagesSection />
      <ProcessSection />
      <ResearchSection />
      <ContactSection />
      <CookieBanner />
    </Layout>
  );
};

export default Index;
