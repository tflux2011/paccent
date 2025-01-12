import Navbar from "./components/Navbar";
import VisionSection from "./components/VisionSection";
import MineralsSection from "./components/MineralsSection";
import MinesSection from "./components/MinesSection";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import MissionSection from "./components/MissionSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Slider />
      <MissionSection />
      <VisionSection />
      <MineralsSection />
      <MinesSection />
      <PartnersSection />

      <Footer />
    </div>
  );
};

export default Home;
