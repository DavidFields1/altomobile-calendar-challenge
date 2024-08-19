import React from "react";
import { Appointment } from "../../api/appointments";

interface AppointmentBadgeProps {
    appointment: Appointment;
    handleDeleteAppointment: (appointment: Appointment) => void;
}

export const AppointmentBadge: React.FC<AppointmentBadgeProps> = ({
    appointment,
    handleDeleteAppointment,
}) => {
    return (
        <div
            key={appointment.id}
            className="flex bg-green-600 mb-1 text-center justify-between items-stretch px-2 rounded-lg text-white max-h-7"
        >
            <p className="font-semibold" key={appointment.id}>
                {appointment.name}
            </p>
            <button
                className="hover:bg-green-700 px-2 rounded-xl flex items-center"
                onClick={() => handleDeleteAppointment(appointment)}
            >
                <p className="mb-0.5">x</p>
            </button>
        </div>
    );
};
