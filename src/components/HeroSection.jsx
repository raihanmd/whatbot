import CarouselHero from "./CaouselHero";
import NavigationBar from "./NavigationBar";

const HeroSection = () => {
  return (
    <div className="hero">
      <NavigationBar />
      <CarouselHero />
    </div>
  );
};

export default HeroSection;
