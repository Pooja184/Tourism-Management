import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaMapMarkedAlt,
  FaSearch,
} from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import { getAllTours } from "../features/user/tours";

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const formatPrice = (price) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(price || 0));

const Tours = () => {
  const dispatch = useDispatch();
  const { tours, loading, error } = useSelector((state) => state.allTours);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("upcoming");

  useEffect(() => {
    dispatch(getAllTours());
  }, [dispatch]);

  const visibleTours = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    const filteredTours = (tours ?? []).filter((tour) => {
      if (!query) return true;

      return (
        tour.tourName?.toLowerCase().includes(query) ||
        tour.description?.toLowerCase().includes(query)
      );
    });

    return [...filteredTours].sort((firstTour, secondTour) => {
      if (sortBy === "price-low") {
        return Number(firstTour.price) - Number(secondTour.price);
      }

      if (sortBy === "price-high") {
        return Number(secondTour.price) - Number(firstTour.price);
      }

      if (sortBy === "name") {
        return firstTour.tourName.localeCompare(secondTour.tourName);
      }

      return new Date(firstTour.date) - new Date(secondTour.date);
    });
  }, [searchTerm, sortBy, tours]);

  const openBookingModal = (tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6efe2_0%,#fffaf2_34%,#ffffff_100%)] text-slate-900">
      <section className="relative overflow-hidden border-b border-amber-100 bg-[radial-gradient(circle_at_top_left,_rgba(255,179,71,0.28),_transparent_34%),linear-gradient(135deg,#133c33_0%,#234b41_55%,#315e52_100%)] px-6 py-16 text-white md:px-10 lg:px-16">
        <div className="absolute -right-16 top-8 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-28 w-28 rounded-full bg-amber-300/20 blur-2xl" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium tracking-wide text-amber-100 backdrop-blur">
              Curated Ratnagiri escapes
            </p>
            <h1 className="max-w-2xl text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Book your next coastal getaway with a smoother checkout flow.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Browse handpicked tours, compare dates and prices, and confirm your trip with a clearer booking summary before checkout.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:max-w-md">
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Tours</p>
              <p className="mt-3 text-3xl font-bold">{tours?.length ?? 0}</p>
              <p className="mt-2 text-sm text-slate-200">Ready to book</p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Booking</p>
              <p className="mt-3 text-3xl font-bold">Fast</p>
              <p className="mt-2 text-sm text-slate-200">Live price preview</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 md:px-10 lg:px-16">
        <div className="rounded-[2rem] border border-amber-100 bg-white/90 p-5 shadow-[0_24px_70px_rgba(19,60,51,0.08)] backdrop-blur sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Find the right tour</h2>
              <p className="mt-1 text-sm text-slate-500">
                Search by name or description, then sort by what matters most.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[28rem]">
              <label className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-amber-400 focus-within:bg-white">
                <FaSearch className="text-slate-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search tours"
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </label>

              <select
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none focus:border-amber-400 focus:bg-white"
              >
                <option value="upcoming">Sort: Upcoming first</option>
                <option value="price-low">Sort: Price low to high</option>
                <option value="price-high">Sort: Price high to low</option>
                <option value="name">Sort: Name A-Z</option>
              </select>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="rounded-full bg-amber-50 px-3 py-1 text-amber-700">
              {visibleTours.length} tours available
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
              Flexible payment selection
            </span>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-sky-700">
              Quick confirmation modal
            </span>
          </div>
        </div>

        {loading ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="h-56 animate-pulse bg-slate-200" />
                <div className="space-y-4 p-6">
                  <div className="h-6 w-2/3 animate-pulse rounded-full bg-slate-200" />
                  <div className="h-4 animate-pulse rounded-full bg-slate-100" />
                  <div className="h-4 w-5/6 animate-pulse rounded-full bg-slate-100" />
                  <div className="h-12 animate-pulse rounded-2xl bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="mt-10 rounded-[2rem] border border-red-200 bg-red-50 p-8 text-red-700 shadow-sm">
            <h3 className="text-xl font-semibold">We could not load tours right now.</h3>
            <p className="mt-2 text-sm">
              {typeof error === "string" ? error : error?.message || "Please try again in a moment."}
            </p>
          </div>
        ) : visibleTours.length === 0 ? (
          <div className="mt-10 rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900">No tours match your search.</h3>
            <p className="mt-3 text-sm text-slate-500">
              Try a different keyword or reset your filters to browse all available tours.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSortBy("upcoming");
              }}
              className="mt-6 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f4c24]"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {visibleTours.map((tour) => (
              <article
                key={tour._id}
                className="group overflow-hidden rounded-[2rem] border border-amber-100 bg-white shadow-[0_18px_50px_rgba(24,39,75,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(19,60,51,0.14)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={tour.image}
                    alt={tour.tourName}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-900/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                    {formatDate(tour.date)}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{tour.tourName}</h2>
                      <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                        <FaMapMarkedAlt className="text-amber-500" />
                        Ratnagiri, Maharashtra
                      </div>
                    </div>
                    <div className="rounded-2xl bg-emerald-50 px-3 py-2 text-right">
                      <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">
                        Starting at
                      </p>
                      <p className="text-lg font-bold text-emerald-800">{formatPrice(tour.price)}</p>
                    </div>
                  </div>

                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                    {tour.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <FaCalendarAlt className="text-accent" />
                      Departure on {formatDate(tour.date)}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Limited slots
                    </span>
                  </div>

                  <button
                    onClick={() => openBookingModal(tour)}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#234d2a]"
                  >
                    Book this tour
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        <BookingForm
          isOpen={isModalOpen}
          onClose={closeBookingModal}
          selectedTour={selectedTour}
        />
      </section>
    </div>
  );
};

export default Tours;
