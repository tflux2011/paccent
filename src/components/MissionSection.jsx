import MissionCard from "./MissionCard";
import { Search, Mountain, Ship } from "lucide-react";

const MissionSection = () => (
  <section className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <MissionCard
          icon={<Search className="w-12 h-12" />}
          title="Discover"
          description="We explore and identify valuable mineral deposits across Nigeria using advanced geological techniques"
        />
        <MissionCard
          icon={<Mountain className="w-12 h-12" />}
          title="Explore"
          description="Sustainable mining practices that respect the environment and local communities"
        />
        <MissionCard
          icon={<Ship className="w-12 h-12" />}
          title="Export"
          description="Connecting Nigerian minerals to global markets with reliable export services"
        />
      </div>
    </div>
  </section>
);

export default MissionSection;
