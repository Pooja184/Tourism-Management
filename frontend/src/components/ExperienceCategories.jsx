import React from "react";
import { Link } from "react-router-dom";
import Button from './Button';

import { FaUmbrellaBeach, FaHiking, FaMountain, FaWater } from "react-icons/fa";
import { GiTempleGate } from "react-icons/gi";
import Heading from "./Heading";
import ExperienceCard from "./ExperienceCard";

const categories = [
  { title: 'Beaches', icon: <FaUmbrellaBeach />, bgColor: 'bg-teal-600', path: '/beaches' },
  { title: 'Trekking', icon: <FaHiking />, bgColor: 'bg-green-600', path: '/trekking' },
  { title: 'Temples', icon: <GiTempleGate />, bgColor: 'bg-orange-600', path: '/temples' },
  // { title: 'Mountains', icon: <FaMountain />, bgColor: 'bg-purple-600', path: '/mountains' },
  { title: 'Waterfalls', icon: <FaWater />, bgColor: 'bg-blue-600', path: '/waterfalls' },
];


const ExperienceCategories = () => {
  return (
    <section className="py-14 px-4 min-h-screen md:px-20 bg-white">
      <Heading
        title="Experience Categories"
        subtitle="Find your next adventure by choosing a category that fits your interest."
      />

       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 md:mt-14">
        {categories.map((item, index) => (
          <Link to={item.path} key={index}>
            <ExperienceCard
              title={item.title}
              icon={item.icon}
              bgColor={item.bgColor}
            />
          </Link>
        ))}
      </div>
        <div className="text-center mt-16 md:mt-10">
        <Button to="/book">Book Tour</Button>
      
      </div>
      
    </section>
  );
};

export default ExperienceCategories;
