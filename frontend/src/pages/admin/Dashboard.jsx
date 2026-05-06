import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FiArrowRight,
  FiCalendar,
  FiClock,
  FiImage,
  FiList,
  FiPlusCircle,
  FiTrendingUp,
} from "react-icons/fi";
import { listTours } from "../../features/admin/addToursSlice.js";

const currencyFormatter = new Intl.NumberFormat("en-IN");

const Dashboard = () => {
  const dispatch = useDispatch();
  const { tours, loading, error } = useSelector((state) => state.tour);
  const adminName = useSelector((state) => state.admin?.admin?.name) || "Admin";

  useEffect(() => {
    dispatch(listTours());
  }, [dispatch]);

  const now = new Date();
  const upcomingTours = tours
    .filter((tour) => new Date(tour.date) >= now)
    .sort((a, b) => new Date(a.date) - new Date(b.date));
  const recentTours = [...tours]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);
  const nextTour = upcomingTours[0];
  const totalValue = tours.reduce((sum, tour) => sum + Number(tour.price || 0), 0);
  const averagePrice = tours.length ? Math.round(totalValue / tours.length) : 0;

  const stats = [
    {
      label: "Total tours",
      value: tours.length,
      icon: FiList,
      tone: "bg-accent/10 text-accent",
    },
    {
      label: "Upcoming",
      value: upcomingTours.length,
      icon: FiCalendar,
      tone: "bg-emerald-50 text-emerald-700",
    },
    {
      label: "Avg. price",
      value: `Rs. ${currencyFormatter.format(averagePrice)}`,
      icon: FiTrendingUp,
      tone: "bg-primary/20 text-amber-700",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl">
      <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            Admin overview
          </p>
          <h2 className="mt-2 text-3xl font-black text-secondary">
            Welcome back, {adminName}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Track tour inventory, review upcoming departures, and jump into the
            admin tasks that keep the booking experience fresh.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            to="/admin/addtours"
            className="inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-secondary/20 transition hover:bg-green-800"
          >
            <FiPlusCircle />
            Add tour
          </Link>
          <Link
            to="/admin/listTours"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-secondary shadow-sm transition hover:border-secondary/30 hover:bg-neutral"
          >
            <FiList />
            Manage tours
          </Link>
        </div>
      </div>

      {error && (
        <div className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error.message || error}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="rounded-2xl border border-white/80 bg-white p-5 shadow-xl shadow-secondary/10"
            >
              <div className={`grid h-11 w-11 place-items-center rounded-xl ${item.tone}`}>
                <Icon size={20} />
              </div>
              <p className="mt-5 text-sm font-semibold text-slate-500">
                {item.label}
              </p>
              <p className="mt-1 text-3xl font-black text-secondary">
                {loading ? "..." : item.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.35fr]">
        <section className="rounded-2xl border border-white/80 bg-white p-6 shadow-xl shadow-secondary/10">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Next departure
              </p>
              <h3 className="mt-2 text-2xl font-black text-secondary">
                {nextTour ? nextTour.tourName : "No upcoming tour"}
              </h3>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-neutral text-secondary">
              <FiClock size={22} />
            </div>
          </div>

          {nextTour ? (
            <div className="mt-5">
              <img
                src={nextTour.image}
                alt={nextTour.tourName}
                className="h-52 w-full rounded-xl object-cover"
              />
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-neutral px-3 py-2 font-semibold">
                  <FiCalendar className="text-accent" />
                  {new Date(nextTour.date).toLocaleDateString()}
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-2 font-bold text-emerald-700">
                  Rs. {currencyFormatter.format(Number(nextTour.price || 0))}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {nextTour.description}
              </p>
            </div>
          ) : (
            <div className="mt-8 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <FiImage className="mx-auto text-4xl text-accent" />
              <p className="mt-3 text-sm font-semibold text-slate-600">
                Add a future dated tour to highlight it here.
              </p>
            </div>
          )}
        </section>

        <section className="rounded-2xl border border-white/80 bg-white p-6 shadow-xl shadow-secondary/10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Latest listings
              </p>
              <h3 className="mt-2 text-2xl font-black text-secondary">
                Tour activity
              </h3>
            </div>
            <Link
              to="/admin/listTours"
              className="grid h-11 w-11 place-items-center rounded-full bg-neutral text-secondary transition hover:bg-secondary hover:text-white"
              aria-label="View all tours"
            >
              <FiArrowRight />
            </Link>
          </div>

          <div className="space-y-3">
            {recentTours.length === 0 ? (
              <p className="rounded-xl bg-slate-50 px-4 py-6 text-center text-sm font-semibold text-slate-500">
                No tour listings yet.
              </p>
            ) : (
              recentTours.map((tour) => (
                <div
                  key={tour._id}
                  className="flex items-center gap-4 rounded-xl border border-slate-100 p-3"
                >
                  <img
                    src={tour.image}
                    alt={tour.tourName}
                    className="h-16 w-20 rounded-lg object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-bold text-slate-900">
                      {tour.tourName}
                    </h4>
                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {new Date(tour.date).toLocaleDateString()} | Rs.{" "}
                      {currencyFormatter.format(Number(tour.price || 0))}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
