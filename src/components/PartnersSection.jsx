import PartnerCard from "./PartnerCard";

const PartnersSection = () => (
  <section id="partners" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "Quan Luo", location: "Jos, Plateau, Nigeria" },
          { name: "Allen Mining Co", location: "Jos, Plateau, Nigeria" },
          { name: "Dabo Multiresources Ventures", location: "Bauchi, Nigeria" },
          { name: "Lamido Ventures", location: "Gombe State" },
          {
            name: "Lianyungang Lizhou International Trade Co.,Ltd",
            location: "Jiangsu Province, China",
          },
          {
            name: "Innovative Mining And Exploration Nigeria Limited",
            location: "Osun State, Nigeria",
          },
          { name: "Adahally Company", location: "Abuja, Nigeria" },
        ].map((partner, index) => (
          <PartnerCard key={index} {...partner} />
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
