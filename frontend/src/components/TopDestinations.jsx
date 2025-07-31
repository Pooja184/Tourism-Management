import React from 'react';
import Heading from '../components/Heading';
import SingleCart from '../components/SingleCart';

import ganpatipule_beach from '../images/ganpatipule_beach.jpeg';
import fortImg from '../images/fort.jpg';
import templeImg from '../images/temple.jpg';
import Button from './Button';

const destinations = [
  {
    image: ganpatipule_beach,
    title: 'Ganpatipule Beach',
    description: 'A serene beach known for clean sand and a famous Ganesh temple.',
  },
  {
    image: fortImg,
    title: 'Suvarndurg Fort',
    description: 'Historic sea fort built by Shivaji Maharaj, rich in Maratha history.',
  },
  {
    image: templeImg,
    title: 'Velneshwar Temple',
    description: 'Peaceful Shiva temple surrounded by nature near the coastline.',
  },
];

const TopDestinations = () => {
  return (
    <div className="py-12 px-10 min-h-screen md:px-20 bg-neutral">
      <Heading 
        title="Top Destinations in Ratnagiri" 
        subtitle="Explore the most popular and scenic places to visit on your next trip." 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {destinations.map((place, index) => (
          <SingleCart
            key={index}
            image={place.image}
            title={place.title}
            description={place.description}
          />
        ))}
      </div>
       <div className="text-center mt-16 md:mt-10">
        <Button to="/destinations">View All Destinations</Button>
      
      </div>
    </div>
  );
};

export default TopDestinations;
