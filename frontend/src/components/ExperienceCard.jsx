// src/components/ExperienceCard.jsx

import React from 'react';

const ExperienceCard = ({ icon, title, bgColor }) => {
  return (
    <div className={`flex flex-col items-center p-6 rounded-xl shadow-md ${bgColor} text-white transition hover:scale-110`}>
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
};

export default ExperienceCard;
