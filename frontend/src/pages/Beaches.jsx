import React from "react";
import HeroComponent from "../components/HeroComponent";
import beach from "../images/beaches/beachHero.jpg";
import DestinationsCard from "../components/DestinationsCard";
import aareWareBeach from "../images/topDestinations/aareWareBeach.jpeg";
import guhagarBeach from "../images/topDestinations/guhagarBeach.webp";
import velneshwarBeach from "../images/beaches/velneshwarBeach.avif";
import bhatyeBeach from "../images/beaches/bhatyeBeach.jpeg";
import mandaviBeach from "../images/beaches/mandaviBeach.jpg";
import purnagadBeach from "../images/beaches/purnagadBeach.jpg";
import miryaBeach from "../images/beaches/miryaBeach.jpeg";
import pandreBeach from "../images/beaches/pandreBeach.png";
import anjarleBeach from "../images/beaches/anjarleBeach.jpeg";



const Beaches = () => {
  return (
    <div className="bg-[#F5EFE6]">
      <HeroComponent
        heading={"Must-Visit Spots in Ratnagiri"}
        description={
          "Ratnagiri is home to some of Maharashtra’s most stunning beaches, offering clean sands, calm waters, and scenic views."
        }
        backgroundImage={beach}
      />
      <div className=" p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
     <DestinationsCard
        image={aareWareBeach}
        title="Aare Ware Beach"
        description="Aare and Ware are twin crescent-shaped beaches surrounded by lush greenery. Known for their peaceful vibe, they're perfect for quiet walks and photography."
        moreInfo={{
          howToReach: "Located 10 km from Ganpatipule; accessible by road.",
          nearby: "Ganpatipule, Bhandarpule Beach",
          bestTime: "November to February",
        }}
      />
      <DestinationsCard
        image={guhagarBeach}
        title="Guhagar Beach"
        description="Guhagar Beach is a peaceful, long coastline perfect for nature lovers and spiritual travelers. It’s surrounded by temples and coconut groves. The clear blue water and less crowd make it a serene getaway."
        moreInfo={{
          howToReach: "Reach Chiplun by train, then 40 km by road to Guhagar",
          nearby: "Hedvi Ganesh Temple, Velneshwar",
          bestTime: "November to February",
        }}
      />
       <DestinationsCard
        image={velneshwarBeach}
        title="Velneshwar Beach"
        description="Velneshwar Beach is known for its calm waves, coconut groves, and a peaceful environment. It is ideal for swimming, relaxing, and visiting the nearby Shiva temple."
        moreInfo={{
          howToReach: "About 70 km from Ratnagiri via road.",
          nearby: "Hedvi Ganesh Temple, Guhagar Beach",
          bestTime: "October to March",
        }}
      />
       <DestinationsCard
        image={bhatyeBeach}
        title="Bhatye Beach"
        description="Bhatye Beach is a long and flat beach popular for evening walks and local street food stalls. It offers a beautiful view of the Ratnadurg Fort."
        moreInfo={{
          howToReach: "3 km from Ratnagiri city center.",
          nearby: "Ratnadurg Fort, Mandavi Beach",
          bestTime: "October to March",
        }}
      />
       <DestinationsCard
        image={mandaviBeach}
        title="Mandavi Beach"
        description="Mandavi Beach is a lively beach near Ratnagiri town. It is known for black sand, street food stalls, and views of Ratnadurg Fort."
        moreInfo={{
          howToReach: "2 km from Ratnagiri city center.",
          nearby: "Bhatye Beach, Ratnadurg Fort",
          bestTime: "October to March",
        }}
      />
       <DestinationsCard
        image={purnagadBeach}
        title="Purnagad Beach"
        description="Purnagad Beach is a peaceful, clean beach close to Purnagad Fort. It offers scenic sunset views and is perfect for evening walks."
        moreInfo={{
          howToReach: "25 km from Ratnagiri via road.",
          nearby: "Purnagad Fort, Devgad",
          bestTime: "November to February",
        }}
      />
       <DestinationsCard
        image={miryaBeach}
        title="Mirya Beach"
        description="Mirya Beach is a small, less crowded beach ideal for fishing and boating. It offers calm waters and a scenic environment."
        moreInfo={{
          howToReach: "Only 15 minutes away from Ratnagiri city center.",
          nearby: "Bhatye Beach, Ratnadurg Fort",
          bestTime: "October to March",
        }}
      />
       <DestinationsCard
        image={pandreBeach}
        title="Pandre Samudra Beach"
        description="GPandre Samudra is known for its white sand and peaceful surroundings. It is a great spot for evening relaxation and photography."
        moreInfo={{
          howToReach: "5–10 minutes drive from Ratnagiri bus stand.",
          nearby: "Mandavi Beach, Ratnadurg Fort",
          bestTime: "November to February",
        }}
      />
       <DestinationsCard
        image={anjarleBeach}
        title="Anjarle Beach"
        description="Anjarle Beach is a pristine and less commercialized beach known for turtle nesting and the famous Kadyavarcha Ganpati Temple."
        moreInfo={{
          howToReach: "About 30 mins drive from dapoli city.",
          nearby: "Kadyavarcha Ganpati Temple, Ladghar Beach",
          bestTime: "November to February",
        }}
      />
      
      </div>
    </div>
  );
};

export default Beaches;
