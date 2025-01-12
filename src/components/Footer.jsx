import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-to-b from-amber-900 to-gray-900 text-white relative overflow-hidden">
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 text-amber-400">
            Pace Setters Century Miners
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Leading the way in mineral exploration and export in Nigeria
          </p>
          <div className="pt-4">
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-400 rounded"></div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 text-amber-400">Quick Links</h3>
          <div className="space-y-3">
            <Link
              to="about"
              className="block text-gray-300 hover:text-amber-400 transform hover:translate-x-2 transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              to="/gallery"
              className="block text-gray-300 hover:text-amber-400 transform hover:translate-x-2 transition-all duration-300"
            >
              Gallery
            </Link>
            <Link
              to="/contact-us"
              className="block text-gray-300 hover:text-amber-400 transform hover:translate-x-2 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="pt-4">
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-400 rounded"></div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-4 text-amber-400">Contact</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-amber-400 mt-1" />
              <div className="text-gray-300">
                +234(0)7088886966
                <br />
                +234(0)7064620359
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-amber-400 mt-1" />
              <div className="text-gray-300">
                info@pacecenturyminers.com
                <br />
                pacecentminers@gmail.com
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-amber-400 mt-1" />
              <div className="text-gray-300">
                Suite 207, The Capital Hub Building,
                <br />
                Plot 272, Mabushi, FCT- Abuja,
                <br />
                Nigeria
              </div>
            </div>
          </div>
          <div className="pt-4">
            <div className="h-1 w-20 bg-gradient-to-r from-amber-500 to-amber-400 rounded"></div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-amber-900/50 mt-12 pt-8 text-center text-gray-400">
        <p className="hover:text-amber-400 transition-colors duration-300">
          © 2025 Pace Setters Century Miners. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
