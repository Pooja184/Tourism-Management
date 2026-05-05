import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiCalendar, FiImage, FiTrash2 } from "react-icons/fi";
import { deleteTour, listTours } from "../../features/admin/addToursSlice.js";

const AllTours = () => {
  const dispatch = useDispatch();
  const { tours, loading, error } = useSelector((state) => state.tour);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this tour?")) {
      dispatch(deleteTour(id));
    }
  };

  useEffect(() => {
    dispatch(listTours());
  }, [dispatch]);

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
            {tours.map((tour) => (
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
                  Rs. {tour.price}
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
