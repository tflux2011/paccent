import PropTypes from "prop-types";

const MineralCard = ({ name }) => (
  <div className="bg-gray-50 p-6 rounded-lg text-center border border-gray-100">
    <img
      src={name + ".png"}
      alt={name}
      className="w-full h-32 object-cover rounded-lg mb-4"
    />
    <h3 className="text-xl font-bold text-gray-900">{name}</h3>
  </div>
);
MineralCard.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MineralCard;
