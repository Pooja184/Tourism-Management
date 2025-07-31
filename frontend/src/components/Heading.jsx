import React from 'react';

const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center my-6">
      <h2 className="text-3xl md:text-4xl mb-5 font-bold text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-lg text-gray-600 max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default Heading;
