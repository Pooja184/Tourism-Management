import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTours } from "../features/user/tours";
import BookingForm from "../components/BookingForm";

const Tours = () => {
  const dispatch = useDispatch();
  const { tours, loading, error } = useSelector((state) => state.allTours);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);

  useEffect(() => {
    dispatch(getAllTours());
  }, [dispatch]);

  if (loading) return <p>Loading tours...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="p-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tours?.map((tour) => (
          <div
            key={tour._id}
            className="border p-4 rounded-xl shadow hover:shadow-lg bg-white transition duration-300"
          >
            <img
              src={tour.image}
              alt={tour.tourName}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />

            <h2 className="text-xl font-bold text-gray-800">{tour.tourName}</h2>
            <p className="text-gray-600 text-sm mt-1">{tour.description}</p>

            <div className="flex justify-between items-center mt-3">
              <span className="text-green-600 font-semibold">₹{tour.price}</span>
              <span className="text-gray-500 text-xs">
                {new Date(tour.date).toLocaleDateString()}
              </span>
            </div>

            <button
              onClick={() => {
                setSelectedTour(tour);
                setIsModalOpen(true);
              }}
              className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      <BookingForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTour={selectedTour}
      />
    </div>
  );
};

export default Tours;
