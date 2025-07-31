import React from 'react';

const DestinationCard = ({ image, title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-secondary mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
