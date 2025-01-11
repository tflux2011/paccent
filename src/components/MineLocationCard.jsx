import { MapPin } from "lucide-react";
import PropTypes from "prop-types";

const MineLocationCard = ({ title, location, minerals, status }) => (
  <div className="bg-white p-6 rounded-lg border border-gray-100">
    <div className="flex items-start">
      <MapPin className="w-6 h-6 text-amber-700 mt-1" />
      <div className="ml-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-2">{location}</p>
        {minerals && <p className="text-gray-600 mb-2">{minerals}</p>}
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm ${
            status === "Active"
              ? "bg-green-100 text-green-800"
              : status === "Ongoing"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-amber-100 text-amber-800"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  </div>
);
MineLocationCard.propTypes = {
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  minerals: PropTypes.string,
  status: PropTypes.string.isRequired,
};

export default MineLocationCard;
