"use client"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock } from "lucide-react";
import { Appointment } from "../utils/Appointment";

interface RescheduleModalProps {
  appointment: Appointment;
  onClose: () => void;
  onReschedule: (appointmentId: string, newDate: Date) => void;
}

const RescheduleModal: React.FC<RescheduleModalProps> = ({
  appointment,
  onClose,
  onReschedule,
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      const newDateTime = new Date(`${selectedDate}T${selectedTime}`);
      onReschedule(appointment.id, newDateTime);
      onClose();
    }
  };

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);
  const minDateString = minDate.toISOString().split("T")[0];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-yellow-50 rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 relative"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Reschedule Appointment
          </h3>

          <div className="bg-blue-50 rounded-2xl p-4 mb-6">
            <p className="text-sm text-gray-600 mb-2">Current Appointment</p>
            <p className="font-semibold text-gray-800">
              {appointment.serviceType}
            </p>
            <p className="text-gray-600 text-sm">
              {new Date(appointment.appointmentDate).toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>

          <div className="bg-yellow-100 rounded-2xl p-4 mb-6">
            <p className="text-sm font-semibold text-gray-800 mb-1">
              Free Rescheduling
            </p>
            <p className="text-xs text-gray-600">
              No charges apply when rescheduling your appointment. Please select
              a new date and time.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Calendar className="w-5 h-5 mr-2 text-yellow-600" />
                New Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={minDateString}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
              />
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Clock className="w-5 h-5 mr-2 text-yellow-600" />
                New Time
              </label>
              <select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
              >
                <option value="">Select a time</option>
                <option value="09:00">09:00 AM</option>
                <option value="10:00">10:00 AM</option>
                <option value="11:00">11:00 AM</option>
                <option value="13:00">01:00 PM</option>
                <option value="14:00">02:00 PM</option>
                <option value="15:00">03:00 PM</option>
                <option value="16:00">04:00 PM</option>
                <option value="17:00">05:00 PM</option>
              </select>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-full bg-yellow-400 text-white font-semibold hover:bg-yellow-500 transition-colors"
              >
                Confirm Reschedule
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RescheduleModal;
