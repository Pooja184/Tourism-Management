// src/pages/Home.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Heading from "../components/Heading";
import TopDestinations from "../components/TopDestinations";
import ExperienceCategories from "../components/ExperienceCategories";
import PhotoGallery from "../components/PhotoGallery";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TopDestinations/>
      <ExperienceCategories/>
      <PhotoGallery/>
     
    </>
  );
};

export default Home;
