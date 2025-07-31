import React from "react";
import HeroComponent from "../components/HeroComponent";
import velneshwarTemple from "../images/topDestinations/velneshwarTemple.jpg";
import thibawPalace from "../images/topDestinations/thibawPalace.jpg";
import jaigadFort from "../images/topDestinations/jaigadFort.jpg";
import aareWareBeach from "../images/topDestinations/aareWareBeach.jpeg";
import tilakAliMuseum from "../images/topDestinations/tilak-ali-museum.jpg";
import chandikaDeviTemple from "../images/topDestinations/chandikaDeviTemple.png";
import marleshwar from "../images/topDestinations/marleshwar.jpg";
import guhagarBeach from "../images/topDestinations/guhagarBeach.webp";
import ganpatipule from "../images/topDestinations/ganpatipule.jpg";

import img1 from "../images/topDestinations/topDestinationsHero.jpg";
import DestinationsCard from "../components/DestinationsCard";

const Destinations = () => {
  return (
    <div className="bg-[#F5EFE6]">
      <HeroComponent
        heading={"Must-Visit Spots in Ratnagiri"}
        description={
          "Explore Ratnagiri’s stunning beaches, historic forts, and peaceful temples — all in one unforgettable journey"
        }
        backgroundImage={img1}
      />
     <div className="p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       <DestinationsCard
        image={velneshwarTemple}
        title="Velneshwar Temple"
        description="Velneshwar Temple is a serene Shiva temple located near a quiet beach in Ratnagiri. Surrounded by coconut trees, it offers peace, spirituality, and scenic beauty."
        moreInfo={{
          howToReach: "70 km from Ratnagiri by road via bus or taxi.",
          nearby: "Guhagar Beach, Hedvi Temple, Velneshwar Beach.",
          bestTime: "October to March",
        }}
      />
       <DestinationsCard
        image={thibawPalace}
        title="Thibaw Palace"
        description="A historic palace built for the exiled king of Burma. Offers panoramic views and royal-era architecture."
        moreInfo={{
          howToReach: "Located in Ratnagiri town; easily accessible by local transport.",
          nearby: "Bhatye Beach, Ratnadurg Fort",
          bestTime: "October to March",
        }}
      />
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
        image={jaigadFort}
        title="Jaigad Fort"
        description="Jaigad Fort stands majestically at the confluence of the Sangameshwar river and the sea. It features strong bastions and scenic views of the Jaigad creek. The fort played a key role in Maratha naval defense."
        moreInfo={{
          howToReach: "Situated 20 km from Ganpatipule; private transport preferred..",
          nearby: "Jaigad Lighthouse, Ganpatipule Beach",
          bestTime: "October to February",
        }}
      />


       <DestinationsCard
        image={tilakAliMuseum}
        title="Tilak Ali Museum"
        description="This museum is the ancestral house of Lokmanya Tilak, one of India’s greatest freedom fighters. It displays rare photos, personal belongings, and literature. The museum gives insight into Tilak’s early life and patriotism."
        moreInfo={{
          howToReach: "Located in Ratnagiri city; well connected by local transpor",
          nearby: "Thibaw Palace, Bhatye Beach",
          bestTime: "All year round",
        }}
      />
       <DestinationsCard
        image={chandikaDeviTemple}
        title="Chandika Mandir, Dabhol"
        description="Chandika Mandir is a cave temple dedicated to Goddess Chandika, hidden beneath a hill in Dabhol. It features an idol naturally formed from a rock and surrounded by a mystical ambiance. The temple’s entrance is through a narrow cave, adding to its uniqueness."
        moreInfo={{
          howToReach: "Located near Dabhol port; best accessed by car or local transport from Dapoli.",
          nearby: "Dabhol Port,Dabhol Beach, Anjarle Beach",
          bestTime: "October to March",
        }}
      />
       <DestinationsCard
        image={marleshwar}
        title="Marleshwar Temple"
        description="Marleshwar is a cave temple dedicated to Lord Shiva, nestled in the Sahyadri hills. The trek to the temple involves scenic steps with stunning views of the surrounding mountains and waterfalls. It’s especially magical during monsoon when Dhareshwar Waterfall flows beside it."
        moreInfo={{
          howToReach: "Located 17 km from Devrukh; 500+ steps from the base village.",
          nearby: "Dhareshwar Waterfall, Sahyadri ranges",
          bestTime: "July to February",
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
        image={ganpatipule}
        title="Ganpatipule"
        description="Ganpatipule is a scenic beach town known for its 400-year-old Ganpati temple near the seashore. It offers clean sands, clear waters, and a peaceful vibe. A perfect mix of devotion and coastal beauty."
        moreInfo={{
          howToReach: "Reach Ratnagiri by train, then 25 km by road to Ganpatipule",
          nearby: "Prachin Konkan Museum, Malgund, Aare Ware Beach",
          bestTime: "Prachin Konkan Museum, Malgund, Aare Ware Beach",
        }}
      />
       <DestinationsCard
        image={ganpatipule}
        title="Kadyavarcha Ganpati"
        description="Kadyavarcha Ganpati is a cliffside temple offering stunning views of the Arabian Sea. It's a peaceful spiritual spot surrounded by lush greenery and ocean breeze."
        moreInfo={{
          howToReach: "Reach Dapoli by road, then 25 km to Anjarle.",
          nearby: "Anjarle Beach, Suvarnadurg Fort, Murud Beach",
          bestTime: "October to March",
        }}
      />
     </div>
    </div>
  );
};

export default Destinations;
