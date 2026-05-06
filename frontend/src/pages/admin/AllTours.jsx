import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiCalendar, FiImage, FiSearch, FiTrash2 } from "react-icons/fi";
import { deleteTour, listTours } from "../../features/admin/addToursSlice.js";

const currencyFormatter = new Intl.NumberFormat("en-IN");

const AllTours = () => {
  const dispatch = useDispatch();
  const { tours, loading, error } = useSelector((state) => state.tour);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      dispatch(deleteTour(id));
    }
  };

  useEffect(() => {
    dispatch(listTours());
  }, [dispatch]);

  const visibleTours = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const filteredTours = tours.filter((tour) => {
      const searchableText = `${tour.tourName || ""} ${tour.description || ""}`.toLowerCase();
      return searchableText.includes(normalizedSearch);
    });

    return [...filteredTours].sort((a, b) => {
      if (sortBy === "priceLow") return Number(a.price || 0) - Number(b.price || 0);
      if (sortBy === "priceHigh") return Number(b.price || 0) - Number(a.price || 0);
      if (sortBy === "oldest") return new Date(a.date) - new Date(b.date);
      return new Date(b.date) - new Date(a.date);
    });
  }, [searchTerm, sortBy, tours]);

  if (loading) {
    return (
      <div className="mx-auto max-w-7xl rounded-2xl bg-white p-8 text-center shadow-xl shadow-secondary/10">
        <p className="text-lg font-semibold text-secondary">Loading tours...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl rounded-2xl bg-red-50 p-8 text-center text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Tour inventory
          </p>
          <h2 className="mt-2 text-3xl font-black text-secondary">
            All added tours
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Review live tour listings and remove outdated entries.
          </p>
        </div>
        <div className="w-fit rounded-2xl bg-white px-5 py-3 text-center shadow-lg shadow-secondary/10">
          <p className="text-2xl font-black text-secondary">{tours.length}</p>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            tours
          </p>
        </div>
      </div>

      <div className="mb-5 grid gap-3 rounded-2xl border border-white/80 bg-white p-4 shadow-lg shadow-secondary/10 md:grid-cols-[1fr_220px]">
        <label className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-accent focus-within:bg-white">
          <FiSearch className="text-slate-400" />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by tour name or description"
            className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </label>
        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 outline-none transition focus:border-accent focus:bg-white"
        >
          <option value="newest">Newest date first</option>
          <option value="oldest">Oldest date first</option>
          <option value="priceLow">Price: low to high</option>
          <option value="priceHigh">Price: high to low</option>
        </select>
      </div>

      {tours.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-xl shadow-secondary/10">
          <FiImage className="mx-auto text-4xl text-accent" />
          <h3 className="mt-4 text-2xl font-bold text-secondary">
            No tours added yet
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Add your first tour to show it on the public booking page.
          </p>
        </div>
      ) : visibleTours.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center shadow-xl shadow-secondary/10">
          <FiSearch className="mx-auto text-4xl text-accent" />
          <h3 className="mt-4 text-2xl font-bold text-secondary">
            No matching tours
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            Try a different search term or clear the search box.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-white/80 bg-white shadow-xl shadow-secondary/10">
          <div className="hidden grid-cols-[0.8fr_1.1fr_1.6fr_0.7fr_0.8fr_0.4fr] bg-secondary px-5 py-4 text-xs font-semibold uppercase tracking-wide text-white md:grid">
            <span>Image</span>
            <span>Tour Name</span>
            <span>Description</span>
            <span>Price</span>
            <span>Date</span>
            <span>Delete</span>
          </div>

          <div className="divide-y divide-slate-100">
            {visibleTours.map((tour) => (
              <div
                key={tour._id}
                className="grid grid-cols-1 gap-4 px-5 py-5 transition duration-200 hover:bg-neutral/70 md:grid-cols-[0.8fr_1.1fr_1.6fr_0.7fr_0.8fr_0.4fr] md:items-center"
              >
                <div className="flex justify-center md:justify-start">
                  <img
                    src={tour.image}
                    alt={tour.tourName}
                    className="h-24 w-28 rounded-xl object-cover shadow-sm"
                  />
                </div>

                <div className="flex items-center justify-center text-center font-bold text-slate-900 md:justify-start md:text-left">
                  {tour.tourName}
                </div>

                <div className="flex items-center text-center text-sm leading-6 text-slate-600 md:text-left">
                  {tour.description.length > 50
                    ? `${tour.description.substring(0, 50)}...`
                    : tour.description}
                </div>

                <div className="flex items-center justify-center font-bold text-emerald-700 md:justify-start">
                  Rs. {currencyFormatter.format(Number(tour.price || 0))}
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-slate-500 md:justify-start">
                  <FiCalendar className="text-accent" />
                  {new Date(tour.date).toLocaleDateString()}
                </div>

                <div className="flex items-center justify-center md:justify-start">
                  <button
                    type="button"
                    onClick={() => handleDelete(tour._id)}
                    className="grid h-10 w-10 place-items-center rounded-full text-red-500 transition hover:bg-red-50 hover:text-red-700"
                    aria-label={`Delete ${tour.tourName}`}
                  >
                    <FiTrash2 size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllTours;
