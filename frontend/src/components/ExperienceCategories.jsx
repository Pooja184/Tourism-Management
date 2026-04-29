import React from "react";
import { Link } from "react-router-dom";
import Button from './Button';

import { FaUmbrellaBeach, FaHiking, FaWater } from "react-icons/fa";
import { GiTempleGate } from "react-icons/gi";
import Heading from "./Heading";
import ExperienceCard from "./ExperienceCard";
import beachImg from "../images/beaches/beachHero.jpg";
import trekkingImg from "../images/trekking/hero.jpg";
import templeImg from "../images/temples/hero.jpg";
import waterfallImg from "../images/waterfalls/hero.jpg";

const categories = [
  {
    title: 'Beaches',
    icon: <FaUmbrellaBeach />,
    image: beachImg,
    tag: 'Coastal escapes',
    accentClass: 'bg-teal-600',
    path: '/beaches',
    description: 'Slow mornings, sea breeze, and Ratnagiri shores made for sunset walks.',
  },
  {
    title: 'Trekking',
    icon: <FaHiking />,
    image: trekkingImg,
    tag: 'Trail adventures',
    accentClass: 'bg-secondary',
    path: '/trekking',
    description: 'Follow forest paths, hill views, and scenic routes for active explorers.',
  },
  {
    title: 'Temples',
    icon: <GiTempleGate />,
    image: templeImg,
    tag: 'Sacred stops',
    accentClass: 'bg-primary',
    path: '/temples',
    description: 'Discover peaceful shrines, local traditions, and heritage-rich landmarks.',
  },
  {
    title: 'Waterfalls',
    icon: <FaWater />,
    image: waterfallImg,
    tag: 'Monsoon views',
    accentClass: 'bg-accent',
    path: '/waterfalls',
    description: 'Chase cool mist, green valleys, and refreshing nature breaks near Ratnagiri.',
  },
];


const ExperienceCategories = () => {
  return (
    <section className="bg-white px-4 py-16 md:px-20">
      <div className="mx-auto max-w-7xl">
        <Heading
          title="Choose Your Travel Mood"
          subtitle="Pick the kind of Ratnagiri experience you are craving, from quiet beaches to green trails and sacred heritage."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item) => (
            <Link
              to={item.path}
              key={item.title}
              className="block h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
              aria-label={`Explore ${item.title}`}
            >
              <ExperienceCard
                title={item.title}
                icon={item.icon}
                image={item.image}
                tag={item.tag}
                accentClass={item.accentClass}
                description={item.description}
              />
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-lg bg-neutral px-6 py-7 text-center md:flex-row md:px-10 md:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-secondary">
              Need the full itinerary?
            </p>
            <h3 className="mt-2 text-2xl font-bold text-gray-900">
              Browse curated tours that combine these experiences.
            </h3>
          </div>
          <div className="shrink-0">
            <Button to="/tours" className="!mt-0">Book Tour</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceCategories;
