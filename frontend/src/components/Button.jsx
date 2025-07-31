
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="inline-block mt-10 px-6 py-3 text-white bg-primary hover:bg-orange-600 font-semibold rounded-full shadow-md transition duration-300"
    >
      {children}
    </Link>
  );
};

export default Button;
