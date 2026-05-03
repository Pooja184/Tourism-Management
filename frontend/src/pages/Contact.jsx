import React, { useState } from "react";
import {
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { toast } from "react-toastify";
import HeroComponent from "../components/HeroComponent";
import heroImage from "../images/topDestinations/topDestinationsHero.jpg";

const contactDetails = [
  {
    icon: <FaPhoneAlt aria-hidden="true" />,
    label: "Call us",
    value: "+91 98765 43210",
    note: "Trip planning and booking support",
  },
  {
    icon: <FaEnvelope aria-hidden="true" />,
    label: "Email",
    value: "hello@ratnagiritours.com",
    note: "We usually reply within one business day",
  },
  {
    icon: <FaMapMarkerAlt aria-hidden="true" />,
    label: "Visit",
    value: "Ratnagiri, Maharashtra",
    note: "Near Ratnagiri railway station",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Thanks for reaching out. We will contact you soon.");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <main className="bg-neutral">
      <HeroComponent
        heading="Contact Ratnagiri Tours"
        description="Need help planning beaches, temples, treks, or a custom coastal trip? Send us a message and we will help you shape the journey."
        backgroundImage={heroImage}
      />

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="mb-9 max-w-3xl">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
            Get in touch
          </p>
          <h2 className="text-3xl font-bold text-secondary sm:text-4xl">
            We are here to help you plan better
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-700 sm:text-base">
            Ask about tour availability, group plans, local transport, or the best
            season for your Ratnagiri itinerary.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            {contactDetails.map((item) => (
              <article
                key={item.label}
                className="rounded-2xl border border-white/80 bg-white p-5 shadow-lg shadow-secondary/10"
              >
                <div className="flex gap-4">
                  <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-primary/20 text-xl text-secondary">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                      {item.label}
                    </p>
                    <h3 className="mt-1 text-xl font-bold text-secondary">
                      {item.value}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                      {item.note}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <article className="rounded-2xl border border-white/80 bg-secondary p-6 text-white shadow-lg shadow-secondary/20">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-white/10 text-xl text-primary">
                  <FaClock aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary">
                    Office hours
                  </p>
                  <h3 className="mt-1 text-2xl font-bold">Mon - Sat</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral">
                    9:00 AM to 7:00 PM. For confirmed tour guests, urgent travel
                    assistance is available on call.
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="rounded-2xl border border-white/80 bg-white p-5 shadow-xl shadow-secondary/10 sm:p-7">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-secondary">
                  Full name
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-neutral/50 px-4 py-3 focus-within:border-accent focus-within:bg-white">
                  <FaUser className="text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-secondary">
                  Email address
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-neutral/50 px-4 py-3 focus-within:border-accent focus-within:bg-white">
                  <FaEnvelope className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-secondary">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell us what kind of trip you are planning"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-neutral/50 px-4 py-3 text-sm leading-6 text-gray-700 outline-none placeholder:text-gray-400 focus:border-accent focus:bg-white"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-white shadow-md shadow-secondary/20 transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                Send message
                <FaPaperPlane aria-hidden="true" />
              </button>
            </form>

            <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100 bg-[linear-gradient(135deg,#f6efe2_0%,#ffffff_55%,#e8f4ed_100%)] p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                Location
              </p>
              <h3 className="mt-2 text-2xl font-bold text-secondary">
                Ratnagiri Tourism Help Desk
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Easy access from the railway station, city hotels, and the main
                coastal route toward Ganpatipule.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
