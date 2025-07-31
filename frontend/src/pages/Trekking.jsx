import React from "react";
import hero from "../images/trekking/hero.jpg";
import HeroComponent from "../components/HeroComponent";
import DestinationsCard from "../components/DestinationsCard";
import img1 from "../images/trekking/img1.jpeg";
import img2 from "../images/trekking/img2.jpg";
import img3 from "../images/trekking/img3.jpg";
import img4 from "../images/trekking/img4.jpg";
import img5 from "../images/trekking/img5.jpg";
import img6 from "../images/trekking/img6.jpg";
import img7 from "../images/trekking/img7.jpg";
import img8 from "../images/trekking/img8.webp";


const Trekking = () => {
  return (
    <div className="bg-[#F5EFE6]">
      <HeroComponent
        heading={"Adventure Treks in Ratnagiri"}
        description={
          "Discover thrilling trekking trails in Ratnagiri, from historic forts to scenic hills. Perfect for nature lovers, history buffs, and adventure seekers."
        }
        backgroundImage={hero}
      />
      <div className=" p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <DestinationsCard
          image={img1} // import the image at the top
          title="Jaigad Fort Trek"
          description="Jaigad Fort offers a short and scenic trek with stunning sea views and historical charm. Perfect for history lovers and nature seekers."
          moreInfo={{
            howToReach: "20 km from Ganpatipule; accessible by car or taxi.",
            nearby: "Jaigad Lighthouse, Ganpatipule Beach",
            bestTime: "November to February",
          }}
        />
        <DestinationsCard
          image={img2}
          title="Purnagad Fort Trek"
          description="A peaceful trek with stunning sea views and historical importance, perfect for sunset visits."
          moreInfo={{
            howToReach: "12 km from Devgad town; buses and taxis available.",
            nearby: "Purnagad Beach, Devgad",
            bestTime: "November to March",
          }}
        />
        <DestinationsCard
          image={img3}
          title="Vijaydurg Fort Trek"
          description="A historical trek to Maharashtra’s oldest sea fort, offering a mix of adventure and heritage."
          moreInfo={{
            howToReach: "12 km from Devgad town; autos and cabs available.",
            nearby: "Vijaydurg Beach, Devgad Mango Orchards",
            bestTime: "October to February",
          }}
        />

        <DestinationsCard
          image={img4}
          title="Suvarnadurg Fort Trek"
          description="A sea-fort trek with mesmerizing Arabian Sea views, rich in Maratha history."
          moreInfo={{
            howToReach:
              "From Harnai port (1 km); boats available for the fort.",
            nearby: "Harnai Port, Murud Beach",
            bestTime: "November to March",
          }}
        />

        <DestinationsCard
          image={img5}
          title="Yashwantgad Fort Trek"
          description="An offbeat trek to a historic fort near Redi, surrounded by greenery and sea views."
          moreInfo={{
            howToReach:
              "1 km from Redi Market; walking distance from Redi Beach.",
            nearby: "Redi Beach, Ganpatipule",
            bestTime: "October to March",
          }}
        />

        <DestinationsCard
          image={img6}
          title="Sumargad Trek"
          description="A hidden fort trek amidst dense forests, perfect for adventure seekers and history lovers."
          moreInfo={{
            howToReach:
              "100 km from Ratnagiri; reachable via bus or private vehicle.",
            nearby: "Mahipatgad, Rasalgad",
            bestTime: "November to February",
          }}
        />

        <DestinationsCard
          image={img6}
          title="Gopalgad Fort Trek"
          description="Located near Anjanvel, Gopalgad Fort trek is scenic and easy. It is surrounded by the sea on one side and lush greenery on the other."
          moreInfo={{
            howToReach: "2 km from Anjanvel village; easy walk or auto ride.",
            nearby: "Velneshwar Beach, Hedvi Temple",
            bestTime: "October to March",
          }}
        />

        <DestinationsCard
          image={img7}
          title="Rasalgad Trek"
          description="A historical hill fort trek with breathtaking views and old Maratha-era structures."
          moreInfo={{
            howToReach: "85 km from Ratnagiri; easily accessible via Khed.",
            nearby: "Mahipatgad, Sumargad",
            bestTime: "October to March",
          }}
        />

        <DestinationsCard
          image={img8}
          title="Kanakadurg Fort Trek"
          description="A coastal trek to a sea fort surrounded by the Arabian Sea, offering amazing photography spots."
          moreInfo={{
            howToReach:
              "65 km from Ratnagiri; boat rides available from Harne.",
            nearby: "Harnai Port, Suvarnadurg Fort",
            bestTime: "November to March",
          }}
        />
      </div>
    </div>
  );
};

export default Trekking;
