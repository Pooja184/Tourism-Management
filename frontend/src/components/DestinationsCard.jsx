import React, { useState } from "react";
import { FaRoute, FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";

const DestinationsCard = ({ image, title, description, moreInfo }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className=" m-7 ">
      <div className="bg-white h-full shadow-xl rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 max-w-md  relative">
        {!showMore ? (
          <div className="relative">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-2xl font-bold text-green-800 mb-2">{title}</h3>
              <p className="text-gray-700 text-sm">{description}</p>
            </div>
            <button
              onClick={() => setShowMore(true)}
              className="absolute top-4 right-4 bg-secondary text-white px-4 py-1 text-sm rounded-full hover:bg-green-800 shadow"
            >
              More Info
            </button>
          </div>
        ) : (
          <div className="p-5 relative">
            <h3 className="text-2xl font-bold text-green-800 mb-4">{title}</h3>
            <div className="bg-gray-100 p-4 rounded-lg text-gray-800 border border-gray-300 text-sm space-y-4">
              <p className="flex items-center gap-2">
                <FaRoute className="text-green-700" />
                <strong>How to Reach:</strong> {moreInfo.howToReach}
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-green-700" />
                <strong>Nearby Attractions:</strong> {moreInfo.nearby}
              </p>
              <p className="flex items-center gap-2">
                <FaRegCalendarAlt className="text-green-700" />
                <strong>Best Time:</strong> {moreInfo.bestTime}
              </p>
            </div>
            <button
              onClick={() => setShowMore(false)}
              className="absolute top-4 right-4 bg-secondary text-white px-4 py-1 text-sm rounded-full hover:bg-green-800 shadow"
            >
              Back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsCard;
