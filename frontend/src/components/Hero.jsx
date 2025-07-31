// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen bg-hero-img bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-neutral px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">
          Discover the Beauty of Ratnagiri
        </h2>
        <p className="text-xl md:text-2xl max-w-xl">
          Explore beaches, forts, temples, and hidden nature trails.
        </p>
        <button className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-secondary transition">
          Book a Tour
        </button>
      </div>
    </div>
  );
};

export default Hero;
