import React, { useState } from "react";
import {
  FaArrowLeft,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaRoute,
} from "react-icons/fa";

const DestinationsCard = ({ image, title, description, moreInfo }) => {
  const [showMore, setShowMore] = useState(false);

  const detailItems = [
    {
      icon: <FaRoute aria-hidden="true" />,
      label: "How to reach",
      value: moreInfo?.howToReach,
    },
    {
      icon: <FaMapMarkerAlt aria-hidden="true" />,
      label: "Nearby attractions",
      value: moreInfo?.nearby,
    },
    {
      icon: <FaRegCalendarAlt aria-hidden="true" />,
      label: "Best time",
      value: moreInfo?.bestTime,
    },
  ].filter((item) => item.value);

  return (
    <article className="mx-auto h-full w-full max-w-md p-2">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/80 bg-white shadow-lg shadow-secondary/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-secondary/20">
        {!showMore ? (
          <div className="flex h-full flex-col">
            <div className="relative overflow-hidden">
              <img
                src={image}
                alt={title}
                loading="lazy"
                decoding="async"
                className="h-44 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-secondary shadow-sm">
                Ratnagiri
              </span>
            </div>
            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <h3 className="mb-2 text-xl font-bold leading-tight text-secondary sm:text-2xl">
                {title}
              </h3>
              <p className="line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-gray-600">
                {description}
              </p>
              <button
                type="button"
                onClick={() => setShowMore(true)}
                className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-secondary/20 transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
                aria-label={`Show more information about ${title}`}
              >
                <FaInfoCircle aria-hidden="true" />
                More info
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-5">
            <button
              type="button"
              onClick={() => setShowMore(false)}
              className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-neutral px-3 py-2 text-sm font-semibold text-secondary transition hover:bg-primary/30 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              aria-label={`Go back to ${title} summary`}
            >
              <FaArrowLeft aria-hidden="true" />
              Back
            </button>

            <div className="mb-5 flex items-start gap-4">
              <img
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-16 w-20 flex-shrink-0 rounded-xl object-cover sm:h-20 sm:w-24"
              />
              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent">
                  Travel details
                </p>
                <h3 className="text-xl font-bold leading-tight text-secondary sm:text-2xl">
                  {title}
                </h3>
              </div>
            </div>

            <div className="space-y-2.5">
              {detailItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-100 bg-neutral/60 p-3.5"
                >
                  <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-secondary">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-accent shadow-sm">
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                  <p className="text-sm leading-6 text-gray-700">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default DestinationsCard;
