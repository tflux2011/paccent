import PropTypes from "prop-types";

const TeamMemberCard = ({ name, position, imageSrc }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 text-center">
    <img
      src={imageSrc}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
    />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600">{position}</p>
  </div>
);

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

const LeadershipSection = () => {
  const teamMembers = [
    {
      name: "Oluwatoyin M ORIOLA",
      position: "MD/CEO",
      imageSrc: "toyin.jpg",
    },
    {
      name: "Engr Adewale Oluwakemi MEBUDE",
      position: "General Manager",
      imageSrc: "gm.jpeg",
    },
    {
      name: "Dr. Bunmi Folayinka",
      position: "International Marketing Representative",
      imageSrc: "avatar-1.svg",
    },
    {
      name: "Fatimah Oriola",
      position: "Director (Media)",
      imageSrc: "fatimah.jpeg",
    },
    {
      name: "Barrister Tamara Preye Tabai",
      position: "Company Secretary",
      imageSrc: "Tamara.jpeg",
    },
    {
      name: "Lt. Victor O. Agunbiade",
      position: "Director",
      imageSrc: "victor.jpeg",
    },
    {
      name: "Bishop Abiodun Adeniji",
      position: "Director",
      imageSrc: "Bishop.jpeg",
    },
    {
      name: "Adesinaoye Oluwasegun Olumide",
      position: "Geological Technologist/Geological Engineer",
      imageSrc: "olumide.jpeg",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              position={member.position}
              imageSrc={member.imageSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default LeadershipSection;
