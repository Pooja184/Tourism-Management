// src/components/ExperienceCard.jsx

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ExperienceCard = ({ icon, title, description, image, tag, accentClass }) => {
  return (
    <article className="group h-full overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-gray-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        <div className={`absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-full ${accentClass} text-2xl text-white shadow-lg`}>
          {icon}
        </div>
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800">
          {tag}
        </span>
      </div>

      <div className="flex min-h-48 flex-col p-5">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-gray-600">{description}</p>
        <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
          Explore
          <FaArrowRight className="text-xs transition duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};

export default ExperienceCard;
