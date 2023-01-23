import CarouselHero from "../components/CaouselHero";
import Introduction from "../components/Introduction";
import NavigationBar from "../components/NavigationBar";

const Main = () => {
  return (
    <div className="main">
      <div className="hero">
        <NavigationBar />
        <CarouselHero />
      </div>
      <Introduction />
    </div>
  );
};

export default Main;
