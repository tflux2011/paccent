import React from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/gallery", label: "Gallery" },
    { path: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav className="relative bg-gradient-to-r from-gray-900 to-black border-b border-amber-900/20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 to-transparent"></div>

      <div className="relative container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link
            to="/"
            className="flex items-center transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src="logo-white.png"
              className="h-16"
              alt="Pace Setters Century Miners"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? "text-amber-400"
                    : "text-gray-300 hover:text-amber-400"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                {/* Hover and active background effect */}
                <div
                  className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isActive(link.path)
                      ? "bg-amber-900/20"
                      : "bg-transparent group-hover:bg-amber-900/10"
                  }`}
                ></div>
                {/* Active indicator line */}
                {isActive(link.path) && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-400"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-amber-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-amber-900/20">
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive(link.path)
                        ? "text-amber-400 bg-amber-900/20"
                        : "text-gray-300 hover:text-amber-400 hover:bg-amber-900/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
