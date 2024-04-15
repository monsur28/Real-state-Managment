import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";

const EstateCard = ({ data }) => {
  const { image, estate_title, description, status, price, location } = data;
  return (
    <div className="mt-4 card card-compact max-h-fit bg-base-100 shadow-xl border border-black dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600">
      <figure className="relative">
        <img className="w-full h-64" src={image} alt="Shoes" />
        <div className="absolute bg-cyan-400 px-5 py-2 rounded-r-lg top-1 ml-[330px]">
          <h2 className="text-lg">{status}</h2>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold">{estate_title}</h2>
        <p className="text-left">{description}</p>
        <div className="flex justify-between">
          <div className="flex items-center text-lg gap-2">
            <FaDollarSign className="" />
            {price}
          </div>
          <div className="flex items-center text-lg gap-2">
            <CiLocationOn />
            {location}
          </div>
        </div>
        <div className="card-actions justify-end">
          <button className="bg-transparent w-full hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Click to view Details
          </button>
        </div>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
  data: PropTypes.object,
};

export default EstateCard;
