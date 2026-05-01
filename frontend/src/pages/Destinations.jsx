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

const destinations = [
  {
    image: velneshwarTemple,
    title: "Velneshwar Temple",
    description:
      "Velneshwar Temple is a serene Shiva temple located near a quiet beach in Ratnagiri. Surrounded by coconut trees, it offers peace, spirituality, and scenic beauty.",
    moreInfo: {
      howToReach: "70 km from Ratnagiri by road via bus or taxi.",
      nearby: "Guhagar Beach, Hedvi Temple, Velneshwar Beach.",
      bestTime: "October to March",
    },
  },
  {
    image: thibawPalace,
    title: "Thibaw Palace",
    description:
      "A historic palace built for the exiled king of Burma. Offers panoramic views and royal-era architecture.",
    moreInfo: {
      howToReach: "Located in Ratnagiri town; easily accessible by local transport.",
      nearby: "Bhatye Beach, Ratnadurg Fort",
      bestTime: "October to March",
    },
  },
  {
    image: aareWareBeach,
    title: "Aare Ware Beach",
    description:
      "Aare and Ware are twin crescent-shaped beaches surrounded by lush greenery. Known for their peaceful vibe, they're perfect for quiet walks and photography.",
    moreInfo: {
      howToReach: "Located 10 km from Ganpatipule; accessible by road.",
      nearby: "Ganpatipule, Bhandarpule Beach",
      bestTime: "November to February",
    },
  },
  {
    image: jaigadFort,
    title: "Jaigad Fort",
    description:
      "Jaigad Fort stands at the confluence of the Sangameshwar river and the sea, with strong bastions and sweeping views of Jaigad creek.",
    moreInfo: {
      howToReach: "Situated 20 km from Ganpatipule; private transport preferred.",
      nearby: "Jaigad Lighthouse, Ganpatipule Beach",
      bestTime: "October to February",
    },
  },
  {
    image: tilakAliMuseum,
    title: "Tilak Ali Museum",
    description:
      "This museum is the ancestral house of Lokmanya Tilak. It displays rare photos, personal belongings, and literature from his early life.",
    moreInfo: {
      howToReach: "Located in Ratnagiri city; well connected by local transport.",
      nearby: "Thibaw Palace, Bhatye Beach",
      bestTime: "All year round",
    },
  },
  {
    image: chandikaDeviTemple,
    title: "Chandika Mandir, Dabhol",
    description:
      "Chandika Mandir is a cave temple dedicated to Goddess Chandika, hidden beneath a hill in Dabhol with a narrow cave entrance.",
    moreInfo: {
      howToReach:
        "Located near Dabhol port; best accessed by car or local transport from Dapoli.",
      nearby: "Dabhol Port, Dabhol Beach, Anjarle Beach",
      bestTime: "October to March",
    },
  },
  {
    image: marleshwar,
    title: "Marleshwar Temple",
    description:
      "Marleshwar is a cave temple dedicated to Lord Shiva, nestled in the Sahyadri hills near the beautiful Dhareshwar Waterfall.",
    moreInfo: {
      howToReach: "Located 17 km from Devrukh; 500+ steps from the base village.",
      nearby: "Dhareshwar Waterfall, Sahyadri ranges",
      bestTime: "July to February",
    },
  },
  {
    image: guhagarBeach,
    title: "Guhagar Beach",
    description:
      "Guhagar Beach is a peaceful, long coastline surrounded by temples and coconut groves, ideal for quiet beach time.",
    moreInfo: {
      howToReach: "Reach Chiplun by train, then 40 km by road to Guhagar.",
      nearby: "Hedvi Ganesh Temple, Velneshwar",
      bestTime: "November to February",
    },
  },
  {
    image: ganpatipule,
    title: "Ganpatipule",
    description:
      "Ganpatipule is a scenic beach town known for its 400-year-old Ganpati temple, clean sands, and peaceful coastal charm.",
    moreInfo: {
      howToReach: "Reach Ratnagiri by train, then 25 km by road to Ganpatipule.",
      nearby: "Prachin Konkan Museum, Malgund, Aare Ware Beach",
      bestTime: "October to March",
    },
  },
  {
    image: ganpatipule,
    title: "Kadyavarcha Ganpati",
    description:
      "Kadyavarcha Ganpati is a cliffside temple offering Arabian Sea views, greenery, and a calm spiritual setting.",
    moreInfo: {
      howToReach: "Reach Dapoli by road, then 25 km to Anjarle.",
      nearby: "Anjarle Beach, Suvarnadurg Fort, Murud Beach",
      bestTime: "October to March",
    },
  },
];

const Destinations = () => {
  return (
    <main className="bg-neutral">
      <HeroComponent
        heading="Must-Visit Spots in Ratnagiri"
        description="Explore Ratnagiri's stunning beaches, historic forts, and peaceful temples in one unforgettable journey."
        backgroundImage={img1}
      />

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
              Curated for Ratnagiri
            </p>
            <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
              Top places to explore
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-700 sm:text-base">
              A balanced mix of coast, culture, history, and quiet viewpoints
              for planning a compact Konkan itinerary.
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/80 bg-white shadow-sm">
            <div className="px-4 py-3 text-center">
              <p className="text-xl font-bold text-secondary">
                {destinations.length}
              </p>
              <p className="text-xs font-medium text-gray-500">spots</p>
            </div>
            <div className="border-x border-neutral px-4 py-3 text-center">
              <p className="text-xl font-bold text-secondary">3</p>
              <p className="text-xs font-medium text-gray-500">themes</p>
            </div>
            <div className="px-4 py-3 text-center">
              <p className="text-xl font-bold text-secondary">Oct</p>
              <p className="text-xs font-medium text-gray-500">best start</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationsCard key={destination.title} {...destination} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Destinations;
