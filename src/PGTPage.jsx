import PropTypes from "prop-types";
import { Droplet, Building, Map, Mail, MapPin } from "lucide-react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const PGTPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ClientsSection />
      <ManagementSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Hero = () => (
  <section className="bg-amber-50 py-20">
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Pace Setters Global Technology
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A subsidiary of PGT Group - Leading the way in Civil Engineering,
          Building Engineering, and Water Works
        </p>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg text-gray-600 mb-6">
          We are an indigenous company with a promise to make a difference in
          our growing national economy by our conscious impact on the National
          GDP. Our service delivery is uncompromising. We offer excellent
          quality job within reasonable time frame.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          The company&rsquo;s dedication and commitment to these tasks has led
          to her growth both within the nation and internationally. Our company
          is a leading and trusted one in Nigeria.
        </p>
        <p className="text-lg text-gray-600 mb-6">
          Our company is the complete Infrastructural service provider that is
          committed to provision of quality access road, quality housing, and
          quality water.
        </p>
        <div className="bg-amber-50 p-6 rounded-lg mt-8">
          <p className="text-xl font-semibold text-amber-800 italic">
            &rdquo;Our mission is to positively revolutionise governance and
            businesses using dynamic technological solution.&rdquo;
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Water Engineering",
      icon: Droplet,
      items: [
        "Dams",
        "Tubewells",
        "Hydropower",
        "Well Design",
        "Logging and Building Services",
        "Water Storage and Distribution",
        "Maintenance Services",
        "Water Treatment",
        "Special Well Drilling Services",
        "Water Engineering/Treatment",
      ],
    },
    {
      title: "Civil Works",
      icon: Building,
      items: [
        "Highway and Road Works",
        "Rural Roads",
        "Building Construction Services",
        "Erosion and Flooding",
      ],
    },
    {
      title: "Additional Services",
      icon: Map,
      items: ["Project Planning and Design", "Dredging and Mining"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <service.icon className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-12 bg-amber-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center">
            Mission Statement on Projects
          </h3>
          <p className="text-lg text-gray-700 italic text-center">
            Our mission is to execute every project with utmost sense of quality
            using latest cutting edge technology to give value for money
            employing internationally acceptable best practices which drives the
            vision of the company in its undertakings.
          </p>
        </div>
      </div>
    </section>
  );
};

const ClientsSection = () => {
  const clients = [
    "Federal Ministry of Water Resources",
    "Federal Ministry of Works",
    "State Ministry of Works, Ekiti State",
    "Ministry of Rural Development, Ekiti State",
    "Benin-Owena River Basin Development Authority",
    "Anambra Imo River Basin Development Authority",
    "Cross River Basin Development Authority",
    "Lower Niger River Basin Development Authority",
    "Ogun Osun River Basin Development Authority",
    "Sahara Homes Limited",
    "Uwani Ventures ltd.",
    "Soft Fingers Dev. Ltd.",
    "OSSAP",
    "National Emergency Management Agency (NEMA)",
    "AgbaUmana Dev. Association",
    "Akanu Dev. Association",
    "AGES Communications ltd.",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Major Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {clients.map((client, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ManagementSection = () => {
  const team = [
    {
      name: "Engr Oluwatoyin M.O ORIOLA",
      title: "MD/CEO",
      credentials: "FCIM, MCPN",
      imageSrc: "toyin.jpg",
    },
    {
      name: "Engr Samson Olurotimi Oderinde",
      title: "Director (Operation & Logistic)",
      imageSrc: "avatar-1.svg",
    },
    {
      name: "Engr Akinola Michael Olatunji",
      title: "Snr Project Engineer (Civil)",
      credentials: "COREN",
      imageSrc: "avatar-1.svg",
    },
    {
      name: "Engr Akeem ORIOLA",
      title: "Snr Project Engineer (Water)",
      imageSrc: "avatar-1.svg",
    },
    {
      name: "Barrister Oluchi Umeri",
      title: "Company Secretary",
      imageSrc: "avatar-1.svg",
    },
    {
      name: "Ademola Aderoju",
      title: "Water/Mining Consultant",
      credentials: "Ph.D. OAU,Ile-Ife - in view",
      imageSrc: "avatar-1.svg",
    },
    {
      name: "Babanisi Jimi",
      title: "Head of Finance/Account",
      credentials: "ICAN",
      imageSrc: "avatar-1.svg",
    },
    {
      name: "Boladale ORIOLA",
      title: "Head of Logistics",
      credentials: "M.Sc. UNILAG",
      imageSrc: "avatar-1.svg",
    },
    {
      name: "Gyang Fom Samuel",
      title: "Project Analyst",
      credentials: "M.Sc.,UniJos",
      imageSrc: "avatar-1.svg",
    },

    {
      name: "Adesinaoye Oluwasegun Olumide",
      title: "Geological Technologist/Geological Engineer",
      credentials: "B.Sc. & M.Sc. in Applied Geophysics",
      imageSrc: "olumide.jpeg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Management Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src={member.imageSrc}
                alt={name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-center">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.title}</p>
              {member.credentials && (
                <p className="text-gray-500 text-sm mt-1 text-center">
                  {member.credentials}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section className="py-16 bg-amber-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactCard
            icon={MapPin}
            title="Abuja Office"
            details={[
              "Suite 403, The Capital Hub Building",
              "Plot 272. Banex/Gwarimpa Expressway",
              "Mabushi, Abuja",
              "Suite 107. Jinifa Plaza",
              "Central Business District, Abuja",
            ]}
          />
          <ContactCard
            icon={MapPin}
            title="Lagos Office"
            details={["48, Idow Martins Street", "Victoria Island, Lagos"]}
          />
          <ContactCard
            icon={Mail}
            title="Contact Information"
            details={[
              "Phone: 07064620359,",
              "08092145254,",
              "08023696604.",
              "Email: info@paceglotech.com,",
              "paceglotech@gmail.com",
              "Website: www.paceglotech.com",
            ]}
          />
        </div>
      </div>
    </div>
  </section>
);

const ContactCard = ({ icon: Icon, title, details }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <Icon className="w-8 h-8 text-amber-700 mb-4" />
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="space-y-2">
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600">
          {detail}
        </p>
      ))}
    </div>
  </div>
);
ContactCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PGTPage;
