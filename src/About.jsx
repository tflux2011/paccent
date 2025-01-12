import { Shield, Target, Users, ChevronRight } from "lucide-react";
import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900 to-amber-700"></div>
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative container mx-auto px-4 py-32">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 text-white transform transition-all duration-1000 hover:translate-x-2">
                <div className="inline-block bg-amber-600 px-4 py-2 rounded-full text-sm font-medium mb-6 hover:bg-amber-500 transition-colors duration-300 transform hover:scale-105">
                  Est. 2018
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight transform transition-all duration-500">
                  About Our
                  <br />
                  <span className="text-amber-300 inline-block hover:translate-x-2 transition-transform duration-300">
                    Mining Legacy
                  </span>
                </h1>
                <p className="text-xl mb-8 text-gray-100 transform transition-all duration-500 hover:translate-x-2">
                  Pioneering sustainable mining practices across Nigeria,
                  setting new standards in mineral exploration and community
                  development.
                </p>
                <div className="grid grid-cols-3 gap-6">
                  <div className="border-l-2 border-amber-400 pl-4 transform transition-all duration-500 hover:border-amber-300 hover:translate-y-[-4px] hover:shadow-lg">
                    <div className="text-3xl font-bold text-amber-300 transition-all duration-300 hover:scale-110 inline-block">
                      4+
                    </div>
                    <div className="text-sm text-gray-200">Active Mines</div>
                  </div>
                  <div className="border-l-2 border-amber-400 pl-4 transform transition-all duration-500 hover:border-amber-300 hover:translate-y-[-4px] hover:shadow-lg">
                    <div className="text-3xl font-bold text-amber-300 transition-all duration-300 hover:scale-110 inline-block">
                      7+
                    </div>
                    <div className="text-sm text-gray-200">Partners</div>
                  </div>
                  <div className="border-l-2 border-amber-400 pl-4 transform transition-all duration-500 hover:border-amber-300 hover:translate-y-[-4px] hover:shadow-lg">
                    <div className="text-3xl font-bold text-amber-300 transition-all duration-300 hover:scale-110 inline-block">
                      500+
                    </div>
                    <div className="text-sm text-gray-200">Employees</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:rotate-1">
                      <img
                        src="slider1.jpg"
                        alt="Mining Operations"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-rotate-1 translate-x-4">
                      <img
                        src="slider3.jpg"
                        alt="Mining Site"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:rotate-1 -translate-x-4">
                      <img
                        src="slider5.jpg"
                        alt="Mining Equipment"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-rotate-1">
                      <img
                        src="slider4.jpg"
                        alt="Mining Team"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <img
                  src="mining.jpg"
                  alt="Mining Operations History"
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2018, Pace Setters Century Miners emerged from a
                  vision to transform Nigeria&rsquo;s mining sector. Starting
                  with a single mining operation in Bauchi State, we&rsquo;ve
                  grown to become one of the country&rsquo;s leading mineral
                  exploration and export companies.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we operate multiple mining sites across Nigeria,
                  partnering with local communities and international
                  organizations to ensure sustainable and responsible mining
                  practices while contributing to the nation&rsquo;s economic
                  growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Our Mission & Values</h2>
              <p className="text-gray-600">
                We are committed to responsible resource extraction while
                creating value for our stakeholders and supporting local
                communities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard
                icon={<Shield className="w-12 h-12 text-amber-700" />}
                title="Responsible Mining"
                description="We prioritize environmental sustainability and safety in all our operations"
              />
              <ValueCard
                icon={<Target className="w-12 h-12 text-amber-700" />}
                title="Innovation"
                description="Continuously improving our processes and adopting modern mining technologies"
              />
              <ValueCard
                icon={<Users className="w-12 h-12 text-amber-700" />}
                title="Community Impact"
                description="Creating lasting positive impact in our host communities through employment and development"
              />
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Leadership
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TeamMemberCard
                name="Samuel Johnson"
                position="Chief Executive Officer"
                imageSrc="/api/placeholder/400/400"
              />
              <TeamMemberCard
                name="Sarah Ahmed"
                position="Chief Operations Officer"
                imageSrc="/api/placeholder/400/400"
              />
              <TeamMemberCard
                name="Michael Okonkwo"
                position="Head of Exploration"
                imageSrc="/api/placeholder/400/400"
              />
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <AchievementCard number="4" label="Active Mining Sites" />
              <AchievementCard number="500+" label="Local Jobs Created" />
              <AchievementCard number="7" label="International Partners" />
              <AchievementCard number="5+" label="Years of Excellence" />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover partnership opportunities and be part of
                Nigeria&rsquo;s mining future
              </p>
              <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center">
                Contact Us
                <ChevronRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

const ValueCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg text-center border border-gray-100">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

ValueCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const TeamMemberCard = ({ name, position, imageSrc }) => (
  <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
    <div className="aspect-square relative">
      <img src={imageSrc} alt={name} className="object-cover w-full h-full" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{position}</p>
    </div>
  </div>
);

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

const AchievementCard = ({ number, label }) => (
  <div className="bg-white p-6 rounded-lg text-center border border-gray-100">
    <div className="text-4xl font-bold text-amber-700 mb-2">{number}</div>
    <p className="text-gray-600">{label}</p>
  </div>
);
AchievementCard.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
};

export default About;
