import React from 'react'
import hero from "../images/waterfalls/hero.jpg";
import HeroComponent from "../components/HeroComponent";
import DestinationsCard from "../components/DestinationsCard";
import img1 from "../images/waterfalls/img1.jpg";
import img2 from "../images/waterfalls/img2.jpg";
import img3 from "../images/waterfalls/img3.jpg";

const Waterfalls = () => {
  return (
     <div className="bg-[#F5EFE6]">
      <HeroComponent
        heading={"Explore the Hidden Waterfalls of Ratnagiri"}
        description={
          "Enjoy nature’s beauty with Ratnagiri’s scenic waterfalls, ideal for relaxation and adventure. These spots are best during monsoon for breathtaking views."
        }
        backgroundImage={hero}
      />
      <div className=" p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <DestinationsCard
          image={img1} // import the image at the top
          title="Marleshwar Waterfall"
          description="Located near Marleshwar Temple, this waterfall is a stunning sight during monsoon, surrounded by lush greenery and hills."
          moreInfo={{
            howToReach: "60 km from Ratnagiri; nearest town is Sangameshwar.",
            nearby: "Marleshwar Temple, Chandoli National Park",
            bestTime: "July to September",
          }}
        />
     <DestinationsCard
          image={img2} // import the image at the top
          title="Ladghar Waterfall"
          description="A small but picturesque waterfall near Dapoli, surrounded by hills and lush vegetation, ideal for a short trip."
          moreInfo={{
            howToReach: "70 km from Ratnagiri; nearest town is Dapoli.",
            nearby: "Ladghar Beach, Murud Beach",
            bestTime: "July to September",
          }}
        />
     <DestinationsCard
          image={img3} // import the image at the top
          title="Bamnoli Waterfall"
          description="A scenic seasonal waterfall near Rajapur, offering breathtaking views especially during monsoon."
          moreInfo={{
            howToReach: "85 km from Ratnagiri; nearest town is Rajapur.",
            nearby: "Rajapur Ganga, Pawas",
            bestTime: "July to September",
          }}
        />

        
     

    
      
      </div>
    </div>
  )
}

export default Waterfalls
