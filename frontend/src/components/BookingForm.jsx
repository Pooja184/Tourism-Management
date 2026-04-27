import React, { useEffect, useMemo, useState } from "react";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaMoneyBillWave,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import { toast } from "react-toastify";

const BookingForm = ({ isOpen, onClose, selectedTour }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tourist: 1,
    paymentMethod: "cod",
  });

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: "",
        email: "",
        tourist: 1,
        paymentMethod: "cod",
      });
      return;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const paymentMethodLabel = useMemo(
    () =>
      ({
        cod: "Pay on arrival",
        razorpay: "Razorpay",
        stripe: "Stripe",
      })[formData.paymentMethod],
    [formData.paymentMethod]
  );

  if (!isOpen || !selectedTour) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: name === "tourist" ? Math.max(1, Number(value)) : value,
    }));
  };

  const handleBooking = (event) => {
    event.preventDefault();

    console.log("Booking Details:", {
      ...formData,
      tourId: selectedTour._id,
      tourName: selectedTour.tourName,
      price: selectedTour.price,
    });

    toast.success(
      `Your booking for ${selectedTour.tourName} is confirmed. Payment method: ${paymentMethodLabel}`
    );

    onClose();
  };

  const departureDate = new Date(selectedTour.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const totalPrice = formData.tourist * Number(selectedTour.price || 0);
  const formattedUnitPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number(selectedTour.price || 0));
  const formattedTotalPrice = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(totalPrice);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(15,23,42,0.32)]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-500 shadow-sm transition hover:text-slate-900"
        >
          &times;
        </button>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative overflow-hidden bg-[linear-gradient(160deg,#173c34_0%,#234d42_60%,#315f53_100%)] p-8 text-white sm:p-10">
            <div className="absolute -left-12 top-12 h-28 w-28 rounded-full bg-amber-300/20 blur-2xl" />
            <div className="absolute bottom-0 right-0 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-100">
                Booking summary
              </p>
              <h2 className="mt-5 text-3xl font-black leading-tight">
                {selectedTour.tourName}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-200">
                {selectedTour.description}
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.5rem]">
                <img
                  src={selectedTour.image}
                  alt={selectedTour.tourName}
                  className="h-56 w-full object-cover"
                />
              </div>

              <div className="mt-6 space-y-3 rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center justify-between text-sm text-slate-100">
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-amber-300" />
                    Departure
                  </span>
                  <span className="font-medium">{departureDate}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-100">
                  <span className="flex items-center gap-2">
                    <FaUsers className="text-amber-300" />
                    Guests
                  </span>
                  <span className="font-medium">{formData.tourist}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-100">
                  <span className="flex items-center gap-2">
                    <FaMoneyBillWave className="text-amber-300" />
                    Price per guest
                  </span>
                  <span className="font-medium">{formattedUnitPrice}</span>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-3 text-base font-semibold text-white">
                  <span>Total</span>
                  <span>{formattedTotalPrice}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900">Complete your booking</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in your details, confirm the guest count, and choose the payment option that works best for you.
              </p>
            </div>

            <form onSubmit={handleBooking} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full name
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 focus-within:border-amber-400">
                  <FaUser className="text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email address
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 focus-within:border-amber-400">
                  <FaEnvelope className="text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Number of tourists
                </label>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 focus-within:border-amber-400">
                  <FaUsers className="text-slate-400" />
                  <input
                    type="number"
                    name="tourist"
                    value={formData.tourist}
                    onChange={handleChange}
                    min="1"
                    required
                    className="w-full text-sm text-slate-700 outline-none"
                  />
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-amber-50 p-4 text-sm text-amber-900">
                <p className="font-semibold">Estimated total</p>
                <p className="mt-1 text-2xl font-bold">{formattedTotalPrice}</p>
                <p className="mt-1 text-xs text-amber-800">
                  Includes {formData.tourist} guest{formData.tourist > 1 ? "s" : ""} at {formattedUnitPrice} each.
                </p>
              </div>

              <div>
                <label className="mb-3 block text-sm font-semibold text-slate-700">
                  Payment method
                </label>
                <div className="grid gap-3">
                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                      formData.paymentMethod === "cod"
                        ? "border-secondary bg-emerald-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cod"
                      checked={formData.paymentMethod === "cod"}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">Pay on arrival</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Reserve now and settle the amount when the trip begins.
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                      formData.paymentMethod === "razorpay"
                        ? "border-secondary bg-emerald-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="razorpay"
                      checked={formData.paymentMethod === "razorpay"}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">Razorpay</p>
                      <p className="mt-1 text-sm text-slate-500">
                        Use UPI, cards, or net banking through Razorpay at checkout.
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition ${
                      formData.paymentMethod === "stripe"
                        ? "border-secondary bg-emerald-50"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="stripe"
                      checked={formData.paymentMethod === "stripe"}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <div>
                      <p className="font-semibold text-slate-900">Stripe</p>
                      <p className="mt-1 text-sm text-slate-500">
                        A card-first checkout flow for travellers who prefer online payment.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-secondary py-3 text-sm font-semibold text-white transition hover:bg-[#234d2a]"
              >
                Confirm booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
