import React from "react";
import hero from "../images/temples/hero.jpg";
import HeroComponent from "../components/HeroComponent";
import DestinationsCard from "../components/DestinationsCard";
import img9 from "../images/trekking/img7.jpg";
import img1 from "../images/temples/ganpatipule.jpg";
import img2 from "../images/temples/velneshwarTemple.webp";
import img3 from "../images/temples/img3.jpeg";
import img4 from "../images/temples/img4.jpeg";
import img5 from "../images/temples/img5.jpg";
import img6 from "../images/temples/img6.png";
import img7 from "../images/temples/img7.jpg";
import img8 from "../images/temples/img8.avif";

const Temples = () => {
  return (
    <div className="bg-[#F5EFE6]">
      <HeroComponent
        heading={"Famous Temples to Visit in Ratnagiri"}
        description={
          "Explore Ratnagiri’s ancient temples known for their cultural heritage, beautiful architecture, and spiritual ambiance."
        }
        backgroundImage={hero}
      />
      <div className=" m-8 md:m-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <DestinationsCard
          image={img1}
          title="Ganpatipule Temple"
          description="A famous Swayambhu Ganesh temple on the scenic Ganpatipule Beach, visited by thousands of devotees every year."
          moreInfo={{
            howToReach: "25 km from Ratnagiri, nearest town is Ganpatipule.",
            nearby: "Ganpatipule Beach, Jaigad Fort",
            bestTime: "November to February",
          }}
        />

        <DestinationsCard
          image={img2}
          title="Velneshwar Temple"
          description="A peaceful Shiva temple near Velneshwar Beach, surrounded by coconut trees and natural beauty."
          moreInfo={{
            howToReach: "70 km from Ratnagiri, nearest town is Guhagar.",
            nearby: "Guhagar Beach, Hedvi Temple",
            bestTime: "October to March",
          }}
        />
        <DestinationsCard
          image={img3}
          title="Kadyavarcha Ganpati"
          description="A hilltop Ganesh temple in Anjarle offering stunning sea views and a spiritually uplifting atmosphere."
          moreInfo={{
            howToReach: "75 km from Ratnagiri, nearest town is Dapoli.",
            nearby: "Anjarle Beach, Suvarnadurg Fort",
            bestTime: "November to February",
          }}
        />
        <DestinationsCard
          image={img4}
          title="Marleshwar Temple"
          description="A cave temple of Lord Shiva near a waterfall, known for its serene surroundings and scenic trek."
          moreInfo={{
            howToReach: "60 km from Ratnagiri, nearest town is Sangameshwar.",
            nearby: "Marleshwar Waterfall, Sangameshwar",
            bestTime: "July to February",
          }}
        />
        <DestinationsCard
          image={img5}
          title="Hedvi Dashbhuja Ganesh Temple"
          description="A unique Ganesh temple with a rare ten-armed idol, located near the beautiful Hedvi Beach.."
          moreInfo={{
            howToReach: "90 km from Ratnagiri, nearest town is Hedvi.",
            nearby: "Velneshwar Beach, Hedvi Beach",
            bestTime: "November to March",
          }}
        />
        <DestinationsCard
          image={img6}
          title="Chandika Mandir, Dabhol"
          description="An ancient underground temple of Goddess Chandika, believed to hold great spiritual significance."
          moreInfo={{
            howToReach: "100 km from Ratnagiri, nearest town is Dabhol..",
            nearby: "Dabhol Port, Anjarle Beach",
            bestTime: "October to March",
          }}
        />
        <DestinationsCard
          image={img7}
          title="Vyaghreshwar Temple"
          description="An ancient Shiva temple in Lavel village, popular among devotees and surrounded by nature."
          moreInfo={{
            howToReach: "80 km from Ratnagiri, nearest town is Lavel.",
            nearby: "Murud Beach, Harnai Port",
            bestTime: "November to February",
          }}
        />
        <DestinationsCard
          image={img8}
          title="Parshuram Bhumi"
          description="A massive Lord Parshuram statue on a hilltop, offering breathtaking sea and sunset views."
          moreInfo={{
            howToReach: "85 km from Ratnagiri, nearest town is Chiplun.",
            nearby: "Guhagar Beach, Velneshwar",
            bestTime: "October to February",
          }}
        />
        <DestinationsCard
          image={img9}
          title="Brahmanpuri Temple"
          description="A peaceful Shiva temple near Ratnagiri town, known for its calm surroundings and historic charm."
          moreInfo={{
            howToReach:
              "5 km from Ratnagiri city, nearest place is Ratnagiri town.",
            nearby: "Ratnadurg Fort, Bhatye Beach",
            bestTime: "November to March",
          }}
        />
      </div>
    </div>
  );
};

export default Temples;
