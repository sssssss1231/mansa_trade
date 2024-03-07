import Navbar from "./components/navbar.tsx";
import HeroSection from "./sections/hero.section.tsx";
import CardsSection from "./sections/cards.section.tsx";
import AboutSection from "./sections/about.section.tsx";
import TariffSection from "./sections/tariff.section.tsx";
import CalcSection from "./sections/calc.section.tsx";
import ReasonSection from "./sections/reason.section.tsx";
import About2Section from "./sections/about2.section.tsx";
import AboutStakeSection from "./sections/about-stake.section.tsx";
import JoinSystemSection from "./sections/join-system.section.tsx";
import FooterSection from "./sections/footer.section.tsx";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto max-w-screen-xl">
        <div className="mx-auto max-w-screen-lg">
          <HeroSection />
          <CardsSection />
          <AboutSection />
          <TariffSection />
          <CalcSection />
          <ReasonSection />
          <About2Section />
          <AboutStakeSection />
          <JoinSystemSection />
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default App;
