import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/sections/HeroSection";
import BrandSection from "@/components/sections/BrandSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TargetAudienceSection from "@/components/sections/TargetAudienceSection";
import PathologiesSection from "@/components/sections/PathologiesSection";
import BodyCompositionSection from "@/components/sections/BodyCompositionSection";
import AboutSection from "@/components/sections/AboutSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <BrandSection />
        <ServicesSection />
        <TargetAudienceSection />
        <PathologiesSection />
        <BodyCompositionSection />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
