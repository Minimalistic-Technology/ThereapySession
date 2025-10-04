export interface Appointment {
  id: string;
  serviceType: string;
  appointmentDate: Date;
  status: "scheduled" | "completed" | "cancelled" | "rescheduled";
  notes?: string;
  rescheduleCount: number;
  originalDate?: Date;
}

export interface UserProfile {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
}
