import { Users } from "lucide-react";
import PropTypes from "prop-types";

const PartnerCard = ({ name, location }) => (
  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
    <Users className="w-8 h-8 text-amber-700 mb-4" />
    <h3 className="text-lg font-bold mb-2">{name}</h3>
    <p className="text-gray-600">{location}</p>
  </div>
);

PartnerCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default PartnerCard;
