import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">
            Pace Setters Century Miners
          </h3>
          <p className="text-gray-400">
            Leading the way in mineral exploration and export in Nigeria
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <Link>About Us</Link>
          <Link>Our Mines</Link>
          <Link>Partners</Link>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Minerals</h3>
          <Link>Gold</Link>
          <Link>Copper</Link>
          <Link>Zinc & Lead</Link>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p className="text-gray-400">
            Phone: <br />
            +234(0)7088886966
            <br />
            +234(0)7064620359
            <br />
            <br />
            Email: <br />
            info@pacecenturyminers.com
            <br />
            pacecentminers@gmail.com
            <br />
            <br />
            Address:
            <br />
            Suite 207, The Capital Hub Building,
            <br />
            Plot 272, Mabushi, FCT- Abuja,
            <br />
            Nigeria
          </p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>© 2025 Pace Setters Century Miners. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
export default Footer;
