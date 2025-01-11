import MineralCard from "./MineralCard";

const MineralsSection = () => (
  <section id="minerals" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Minerals</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {["Gold", "Copper", "Tin", "Zinc", "Lead", "Coax"].map((mineral) => (
          <MineralCard key={mineral} name={mineral} />
        ))}
      </div>
    </div>
  </section>
);

export default MineralsSection;
