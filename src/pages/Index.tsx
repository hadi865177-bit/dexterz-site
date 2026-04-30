import PageLayout from "../components/layout/PageLayout";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServiceCardsSection from "../components/sections/ServiceCardsSection";
import FeaturedInsightsSection from "../components/sections/FeaturedInsightsSection";
import RecentBlogsSection from "../components/sections/RecentBlogsSection";
import AIServiceSection from "../components/sections/AIServiceSection";
import StaffAugmentationSection from "../components/sections/StaffAugmentationSection";
import ConsultationSection from "../components/sections/ConsultationSection";
import DevelopmentServiceSection from "../components/sections/DevelopmentServiceSection";
import TechnologySection from "../components/sections/TechnologySection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";
import CtaSection from "../components/sections/CtaSection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <TechnologySection />
      <AboutSection />
      <DevelopmentServiceSection />
      <ServiceCardsSection />
      {/* <AIServiceSection /> */}
      <ConsultationSection />
      <StaffAugmentationSection />
      <TestimonialsSection />
      <ContactSection />
      <CtaSection />
      <FeaturedInsightsSection />
    </PageLayout>
  );
};

export default Index;
