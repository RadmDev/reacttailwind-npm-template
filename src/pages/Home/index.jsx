import FeaturesSection from "./FeaturesSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import PartnersSection from "./PartnersSection";
import PricingSection from "./PricingSection";
import ShowcaseSection from "./ShowcaseSection";
import TestimonialSection from "./TestimonialSection";

const HomePage = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <FeaturesSection />
      <ShowcaseSection />
      <PricingSection />
      <TestimonialSection />
    </main>
  );
};

export default HomePage;
