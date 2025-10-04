"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, RefreshCw, CheckCircle, XCircle } from "lucide-react";
import { Appointment } from "../utils/Appointment";

interface AppointmentCardProps {
  appointment: Appointment;
  onReschedule: (appointment: Appointment) => void;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  appointment,
  onReschedule,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "bg-blue-100 text-blue-700";
      case "completed":
        return "bg-green-100 text-green-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      case "rescheduled":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      case "cancelled":
        return <XCircle className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const isPastAppointment = new Date(appointment.appointmentDate) < new Date();
  const canReschedule =
    appointment.status === "scheduled" && !isPastAppointment;

  return (
    <motion.div
      className="bg-yellow-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">
            {appointment.serviceType}
          </h4>
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
              appointment.status
            )}`}
          >
            {getStatusIcon(appointment.status)}
            {appointment.status.charAt(0).toUpperCase() +
              appointment.status.slice(1)}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-700">
          <Calendar className="w-5 h-5 mr-3 text-yellow-600 flex-shrink-0" />
          <span className="text-sm">
            {new Date(appointment.appointmentDate).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        <div className="flex items-center text-gray-700">
          <Clock className="w-5 h-5 mr-3 text-yellow-600 flex-shrink-0" />
          <span className="text-sm">
            {new Date(appointment.appointmentDate).toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        {/* {appointment.notes && (
          <div className="bg-blue-50 rounded-xl p-3 mt-3">
            <p className="text-xs text-gray-600 mb-1 font-semibold">Notes:</p>
            <p className="text-sm text-gray-700">{appointment.notes}</p>
          </div>
        )} */}


{/* 
        {appointment.rescheduleCount > 0 && (
          <div className="bg-yellow-100 rounded-xl p-3 mt-3">
            <p className="text-xs text-gray-600">
              Rescheduled {appointment.rescheduleCount}{" "}
              {appointment.rescheduleCount === 1 ? "time" : "times"}
            </p>
            {appointment.originalDate && (
              <p className="text-xs text-gray-500 mt-1">
                Original date:{" "}
                {new Date(appointment.originalDate).toLocaleDateString()}
              </p>
            )}
          </div>
        )} */}

        
      </div>

      {canReschedule && (
        <motion.button
          onClick={() => onReschedule(appointment)}
          className="w-full mt-4 bg-yellow-400 text-white px-4 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <RefreshCw className="w-5 h-5" />
          Reschedule (No Charge)
        </motion.button>
      )}

      {isPastAppointment && appointment.status === "scheduled" && (
        <div className="mt-4 text-center text-sm text-gray-500">
          This appointment has passed
        </div>
      )}
    </motion.div>
  );
};

export default AppointmentCard;
