import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTour } from "../../features/admin/addToursSlice.js";
import { toast } from "react-toastify";

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
  try {
      e.preventDefault();
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
    toast.error(error.message)
  }
    
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Add New Tour
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="tourName"
          placeholder="Tour Name"
          value={formData.tourName}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="file"
          name="image"
          onChange={handleChange}
          accept="image/*"
          className="w-full border rounded-lg px-4 py-2 bg-gray-50 focus:outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white font-semibold ${
            loading
              ? "bg-blue-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Adding..." : "Add Tour"}
        </button>
      </form>

      {success && (
        <p className="mt-4 text-green-600 font-medium">
          ✅ Tour added successfully!
        </p>
      )}
      {error && (
        <p className="mt-4 text-red-600 font-medium">
          ❌ {error.message || error}
        </p>
      )}
    </div>
  );
};

export default AddTours;
