"use client";

import React, { useState } from "react";

interface TherapyFormProps {
  onClose: () => void;
}

const TherapyForm: React.FC<TherapyFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    therapyType: "Individual",
    time: "",
    via: "Online",
    fees: "600",
    termsAccepted: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;

    let newFormData = {
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    };

    // Auto-update fees based on therapy type
    if (name === "therapyType") {
      if (value === "Individual") {
        newFormData.fees = "600";
      } else if (value === "Couples" || value === "Other") {
        newFormData.fees = "900";
      }
    }

    setFormData(newFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert("Please accept Terms & Conditions to proceed.");
      return;
    }
    alert("Form Submitted");
    onClose(); // close modal after submit
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  backdrop-blur-md bg-white/10 ">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Therapy Booking Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Grid Layout for Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Type of Therapy */}
            <div>
              <label className="block text-gray-700">Type of Therapy</label>
              <select
                name="therapyType"
                value={formData.therapyType}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
              >
                <option>Individual</option>
                <option>Couples</option>
                <option>Other</option>
              </select>
            </div>

            {/* Time */}
            <div>
              <label className="block text-gray-700">Time of Therapy</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Via */}
            <div>
              <label className="block text-gray-700">Via</label>
              <select
                name="via"
                value={formData.via}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-400"
              >
                <option>Online</option>
                <option>Offline</option>
              </select>
            </div>

            {/* Fees */}
            <div className="md:col-span-2">
              <label className="block text-gray-700">Fees</label>
              <input
                type="text"
                name="fees"
                value={formData.fees}
                readOnly
                className="w-full border rounded-lg px-3 py-2 mt-1 bg-gray-100 text-gray-700 cursor-not-allowed"
              />
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700">
              I accept the Terms & Conditions
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-blue-900 font-semibold py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TherapyForm;
