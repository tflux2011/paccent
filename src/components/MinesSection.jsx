import MineLocationCard from "./MineLocationCard";

const MinesSection = () => (
  <section id="mines" className="py-20 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Mines</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MineLocationCard
          title="Mumura, Gwana District"
          location="Bauchi State, Nigeria"
          minerals="Zinc, Copper & Lead Ore Mine"
          status="Active"
        />
        <MineLocationCard
          title="Anyiin, Logo LGA"
          location="Benue State, Nigeria"
          minerals="Zinc, Copper & Lead Ore Mine"
          status="Ongoing"
        />
        <MineLocationCard
          title="Shiroro Gold Mine"
          location="Niger State, Nigeria"
          status="Upcoming"
        />
        <MineLocationCard
          title="Ilesha Gold Mine"
          location="Osun State, Nigeria"
          status="Upcoming"
        />
      </div>
    </div>
  </section>
);

export default MinesSection;
