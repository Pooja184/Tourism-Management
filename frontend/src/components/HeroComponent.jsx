import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import { FaArrowLeft } from "react-icons/fa";

const HeroComponent = ({ heading, description, backgroundImage }) => {
  return (
    <div
      className="relative h-[45vh] md:h-[70vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-800 bg-opacity-60 z-0"></div>

      {/* Back Button */}
      <Link
        to="/"
        className="absolute top-4 left-4 z-20 flex items-center gap-2 text-white hover:bg-[#386FA4] px-3 py-2 rounded-full text-sm md:text-base transition"
      >
        <FaArrowLeft />
        
      </Link>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-neutral px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          {heading}
        </h2>
        <p className="text-xl md:text-2xl max-w-xl">{description}</p>
      </div>
    </div>
  );
};

export default HeroComponent;
