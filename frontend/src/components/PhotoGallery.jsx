import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Button from "./Button";
import templeImg from "../images/temple.jpg";
import fortImg from "../images/fort.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const images = [templeImg, img1, img2, img3, fortImg];

const PhotoGallery = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getIndex = (i) => (i + images.length) % images.length;

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center bg-[#191923] text-primary ] px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center drop-shadow-md">
        Photo Gallery
      </h2>

      {/* Image Slider */}
      <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap sm:flex-nowrap">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-lg p-3 sm:p-4 rounded-full transition text-lg sm:text-xl shadow-lg"
        >
          <FaArrowLeft />
        </button>

        {/* Previous Image (Hidden on small) */}
        <div className="hidden md:block w-[100px] sm:w-[120px] h-[140px] sm:h-[160px] opacity-30 scale-90 transition-all duration-300 rounded-xl overflow-hidden shadow-md hover:scale-95">
          <img
            src={images[getIndex(index - 1)]}
            alt="previous"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Image */}
        <div className="w-[90vw] max-w-[320px] sm:max-w-[360px] h-[300px] sm:h-[400px] md:h-[420px] scale-100 transition-all duration-300 rounded-2xl overflow-hidden shadow-2xl hover:scale-105">
          <img
            src={images[index]}
            alt="center"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Next Image (Hidden on small) */}
        <div className="hidden md:block w-[100px] sm:w-[120px] h-[140px] sm:h-[160px] opacity-30 scale-90 transition-all duration-300 rounded-xl overflow-hidden shadow-md hover:scale-95">
          <img
            src={images[getIndex(index + 1)]}
            alt="next"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="bg-white/10 hover:bg-white/20 backdrop-blur-lg p-3 sm:p-4 rounded-full transition text-lg sm:text-xl shadow-lg"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* View More Button */}
      {/* <button className="mt-10 px-6 py-3 bg-[#FFB347] text-[#2C5F2D] font-semibold rounded-full shadow-md hover:bg-[#386FA4] hover:text-white transition text-sm sm:text-base">
        View More Photos
      </button> */}
      <Button to="/photosgallery">View More Photos</Button>
    </section>
  );
};

export default PhotoGallery;
