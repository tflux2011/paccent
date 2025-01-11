import React from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-dark shadow-sm" style={{ backgroundColor: "black" }}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/* <span className="text-2xl font-bold text-amber-700">
              Pace Setters Century Miners
            </span> */}
            <img
              src="logo-white.png"
              className="h-16"
              alt="Pace Setters Century Miners"
            />
          </div>

          <div className="hidden md:flex space-x-8 text-white ">
            <Link to="#home" className="hover:text-amber-700">
              Home
            </Link>
            <Link to="#minerals" className="hover:text-amber-700">
              Minerals
            </Link>
            <Link to="#mines" className="hover:text-amber-700">
              Our Mines
            </Link>
            <Link to="#partners" className="hover:text-amber-700">
              Partners
            </Link>
            <Link to="#contact" className="hover:text-amber-700">
              Contact
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-50 hover:text-amber-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="#home">Home</Link>
              <Link to="#minerals">Minerals</Link>
              <Link to="#mines">Our Mines</Link>
              <Link to="#partners">Partners</Link>
              <Link to="#contact">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
