import PropTypes from "prop-types";

const MissionCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-lg shadow-sm text-center group hover:shadow-md transition-shadow">
    <div className="text-amber-700 mb-6 transform group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

MissionCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default MissionCard;
