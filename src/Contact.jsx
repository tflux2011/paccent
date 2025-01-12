import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-amber-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <MessageSquare className="w-16 h-16 mx-auto mb-6 text-amber-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              We&rsquo;re here to answer any questions about our mining
              operations and partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 -mt-12 relative z-10 mt-2">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ContactCard
              icon={<Phone className="w-6 h-6" />}
              title="Phone Numbers"
              details={["+234(0)7088886966", "+234(0)7064620359"]}
            />
            <ContactCard
              icon={<Mail className="w-6 h-6" />}
              title="Email Addresses"
              details={[
                "info@pacecenturyminers.com",
                "pacecentminers@gmail.com",
              ]}
            />
            <ContactCard
              icon={<MapPin className="w-6 h-6" />}
              title="Office Address"
              details={[
                "Suite 207, The Capital Hub Building,",
                "Plot 272, Mabushi, FCT- Abuja,",
                "Nigeria",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
              {submitted && (
                <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg">
                  Thank you for your message! We&rsquo;ll get back to you soon.
                </div>
              )}
            </div>

            {/* Additional Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <div className="space-y-4">
                  <BusinessHours
                    day="Monday - Friday"
                    hours="8:00 AM - 6:00 PM"
                  />
                  <BusinessHours day="Saturday" hours="9:00 AM - 3:00 PM" />
                  <BusinessHours day="Sunday" hours="Closed" />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
                  {/* Replace this div with your map component */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

import PropTypes from "prop-types";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ContactCard = ({ icon, title, details }) => (
  <div className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
    <div className="text-amber-600 mb-4">{icon}</div>
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
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const BusinessHours = ({ day, hours }) => (
  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
    <Clock className="w-5 h-5 text-amber-600" />
    <div>
      <div className="font-medium">{day}</div>
      <div className="text-gray-600">{hours}</div>
    </div>
  </div>
);

BusinessHours.propTypes = {
  day: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
};

export default ContactPage;