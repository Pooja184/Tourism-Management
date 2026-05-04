import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTour } from "../../features/admin/addToursSlice.js";
import { toast } from "react-toastify";
import {
  FiCalendar,
  FiFileText,
  FiImage,
  FiMapPin,
  FiPlusCircle,
} from "react-icons/fi";

const AddTours = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector((state) => state.tour);

  const [formData, setFormData] = useState({
    tourName: "",
    description: "",
    price: "",
    date: "",
    image: null,
  });

  const selectedFileName = formData.image?.name || "Upload tour image";

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (event) => {
    try {
      event.preventDefault();
      const form = new FormData();
      form.append("tourName", formData.tourName);
      form.append("description", formData.description);
      form.append("price", formData.price);
      form.append("date", formData.date);
      form.append("image", formData.image);

      dispatch(addTour(form));
      setFormData({
        tourName: "",
        description: "",
        price: "",
        date: "",
        image: null,
      });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-7">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Tour management
        </p>
        <h2 className="mt-2 text-3xl font-black text-secondary">
          Add a new tour
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
          Create a tour listing with the main details travellers need before
          booking.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/80 bg-white p-5 shadow-xl shadow-secondary/10 sm:p-7"
        >
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Tour name
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-accent focus-within:bg-white">
                <FiMapPin className="text-slate-400" />
                <input
                  type="text"
                  name="tourName"
                  placeholder="Ganpatipule coastal trail"
                  value={formData.tourName}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Description
              </label>
              <div className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-accent focus-within:bg-white">
                <FiFileText className="mt-1 text-slate-400" />
                <textarea
                  name="description"
                  placeholder="Describe route, highlights, duration, and what is included."
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="h-32 w-full resize-none bg-transparent text-sm leading-6 text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Price
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-accent focus-within:bg-white">
                  <span className="font-bold text-slate-400">Rs.</span>
                  <input
                    type="number"
                    name="price"
                    placeholder="2499"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    required
                    className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Departure date
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-accent focus-within:bg-white">
                  <FiCalendar className="text-slate-400" />
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent text-sm text-slate-700 outline-none"
                  />
                </div>
              </div>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                Tour image
              </span>
              <span className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-4 text-sm text-slate-500 transition hover:border-accent hover:bg-white">
                <FiImage className="text-xl text-accent" />
                <span className="truncate">{selectedFileName}</span>
              </span>
              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                required
                className="sr-only"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-md shadow-secondary/20 transition ${
                loading
                  ? "cursor-not-allowed bg-secondary/60"
                  : "bg-secondary hover:bg-green-800"
              }`}
            >
              <FiPlusCircle />
              {loading ? "Adding tour..." : "Add tour"}
            </button>
          </div>
        </form>

        <aside className="rounded-2xl border border-white/80 bg-secondary p-6 text-white shadow-xl shadow-secondary/20">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Publishing checklist
          </p>
          <h3 className="mt-2 text-2xl font-bold">Make each tour clear</h3>
          <div className="mt-5 space-y-4 text-sm leading-6 text-neutral">
            <p>Use a short, destination-focused tour name.</p>
            <p>Include route highlights, timing, inclusions, and pickup notes.</p>
            <p>Choose a sharp landscape photo so the public card looks polished.</p>
          </div>
        </aside>
      </div>

      {success && (
        <p className="mt-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          Tour added successfully.
        </p>
      )}
      {error && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error.message || error}
        </p>
      )}
    </div>
  );
};

export default AddTours;
