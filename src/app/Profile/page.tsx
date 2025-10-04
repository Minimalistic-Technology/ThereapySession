"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, Calendar, RefreshCw } from 'lucide-react';
import { Appointment, UserProfile as UserProfileType } from '../utils/Appointment';
import AppointmentCard from '../Components/AppointmentCard';
import RescheduleModal from '../Components/RescheduleModal';

const UserProfile: React.FC = () => {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const [userProfile] = useState<UserProfileType>({
    id: '1',
    fullName: 'Maria Silva',
    email: 'maria.silva@example.com',
    phone: '+55 11 98765-4321',
  });

  const [appointments, setAppointments] = useState<Appointment[]>([
    {
      id: '1',
      serviceType: 'Individual Therapy',
      appointmentDate: new Date('2025-10-15T14:00:00'),
      status: 'scheduled',
      notes: 'First session - anxiety and stress management',
      rescheduleCount: 0,
    },
    {
      id: '2',
      serviceType: 'Couples Therapy',
      appointmentDate: new Date('2025-10-22T16:00:00'),
      status: 'scheduled',
      notes: 'Communication improvement session',
      rescheduleCount: 1,
      originalDate: new Date('2025-10-20T16:00:00'),
    },
    {
      id: '3',
      serviceType: 'Individual Therapy',
      appointmentDate: new Date('2025-09-28T10:00:00'),
      status: 'completed',
      notes: 'Follow-up session',
      rescheduleCount: 0,
    },
  ]);

  const handleReschedule = (appointmentId: string, newDate: Date) => {
    setAppointments((prev) =>
      prev.map((apt) => {
        if (apt.id === appointmentId) {
          return {
            ...apt,
            originalDate: apt.originalDate || apt.appointmentDate,
            appointmentDate: newDate,
            rescheduleCount: apt.rescheduleCount + 1,
            status: 'scheduled' as const,
          };
        }
        return apt;
      })
    );
  };

  const upcomingAppointments = appointments.filter(
    (apt) => apt.status === 'scheduled' && new Date(apt.appointmentDate) >= new Date()
  );

  const pastAppointments = appointments.filter(
    (apt) => apt.status === 'completed' || new Date(apt.appointmentDate) < new Date()
  );

  return (
    <div className="min-h-screen bg-yellow-50/80 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 rounded-3xl shadow-xl p-6 sm:p-8 mb-8"
        >
          <div className="flex items-start gap-6">
            <motion.div
              className="w-20 h-20 sm:w-24 sm:h-24 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0"
              whileHover={{ scale: 1.05 }}
            >
              <User className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-600" />
            </motion.div>

            <div className="flex-1">
              <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
                {userProfile.fullName}
              </h1>

              <div className="space-y-3">
                <div className="flex items-center sm:items-center  sm:flex-row  flex-col text-gray-700">
                  <Mail className="w-5 h-5 mr-3 text-yellow-600 flex-shrink-0" />
                  <span className="text-xs sm:text-base mt-2 sm:break-normal ">
                    {userProfile.email}
                  </span>
                </div>

                {userProfile.phone && (
                  <div className="flex items-center text-gray-700">
                    <Phone className="w-5 h-5 mr-3 text-yellow-600 flex-shrink-0" />
                    <span className="text-xs sm:text-base">
                      {userProfile.phone}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 mt-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-7 h-7 text-yellow-600" />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Upcoming Appointments
            </h2>
          </div>

          {upcomingAppointments.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingAppointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onReschedule={setSelectedAppointment}
                />
              ))}
            </div>
          ) : (
            <motion.div
              className="bg-yellow-50 rounded-2xl p-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">No upcoming appointments</p>
              <p className="text-gray-500 text-sm mt-2">
                Schedule your next session to continue your journey
              </p>
            </motion.div>
          )}
        </motion.section>

        {/*
        {pastAppointments.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <RefreshCw className="w-7 h-7 text-yellow-600" />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Past Appointments
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {pastAppointments.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  onReschedule={setSelectedAppointment}
                />
              ))} 
            </div>
          </motion.section>
        )}*/}
      </div>

      {selectedAppointment && (
        <RescheduleModal
          appointment={selectedAppointment}
          onClose={() => setSelectedAppointment(null)}
          onReschedule={handleReschedule}
        />
      )}
    </div>
  );
};

export default UserProfile;
