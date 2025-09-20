import React, { useState } from "react";

const BookingForm = ({ isOpen, onClose, selectedTour }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tourist: 1,
    paymentMethod: "cod", // default option
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();

    console.log("Booking Details:", {
      ...formData,
      tourId: selectedTour._id,
      tourName: selectedTour.tourName,
      price: selectedTour.price,
    });

    alert(
      `Your booking for ${selectedTour.tourName} is confirmed! 🎉 \nPayment Method: ${formData.paymentMethod}`
    );

    setFormData({ name: "", email: "", tourist: 1, paymentMethod: "cod" });
    onClose();
  };

  if (!isOpen || !selectedTour) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Book Tour: {selectedTour.tourName}
        </h2>

        <form onSubmit={handleBooking} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              No. of Tourist
            </label>
            <input
              type="number"
              name="tourist"
              value={formData.tourist}
              onChange={handleChange}
              min="1"
              required
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <p className="text-green-600 font-semibold">
            Total Price: ₹{formData.tourist * selectedTour.price}
          </p>

          {/* Payment Options */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method
            </label>
            <div className="flex justify-between gap-2">
              <label className="flex items-center gap-2 border p-2 rounded-lg cursor-pointer flex-1">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>

              <label className="flex items-center gap-2 border p-2 rounded-lg cursor-pointer flex-1">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="razorpay"
                  checked={formData.paymentMethod === "razorpay"}
                  onChange={handleChange}
                />
                Razorpay
              </label>

              <label className="flex items-center gap-2 border p-2 rounded-lg cursor-pointer flex-1">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="stripe"
                  checked={formData.paymentMethod === "stripe"}
                  onChange={handleChange}
                />
                Stripe
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
