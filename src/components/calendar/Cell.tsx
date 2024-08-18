import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { isToday, showPrompt } from "../../utils/calendar";
import {
    Appointment,
    createAppointment,
    deleteAppointment,
    getAppointmentsByDate,
} from "../../api/appointments";

interface CellProps {
    date: Date;
    // currentMonth: number;
}

export const Cell: React.FC<CellProps> = ({ date }) => {
    const { currentMonth } = useContext(CalendarContext);

    const [appointments, setAppointments] = useState<Appointment[]>(
        getAppointmentsByDate(date)
    );

    useEffect(() => {
        setAppointments(getAppointmentsByDate(date));
    }, [date]);

    const handleAddAppointment = () => {
        const newAppointmentDescription = showPrompt(date);
        if (newAppointmentDescription) {
            const newAppointment = createAppointment(
                date,
                newAppointmentDescription
            );
            setAppointments([...appointments, newAppointment]);
        }
    };

    const handleDeleteAppointment = (appointment: Appointment) => {
        deleteAppointment(appointment.id);
        setAppointments(getAppointmentsByDate(date));
    };

    if (date.getMonth() + 1 != currentMonth) {
        return (
            <div className="bg-gray-300 basis-1/7 h-28 border border-solid p-2 select-none">
                {date.getDate()}
            </div>
        );
    }

    return (
        <div
            className={`basis-1/7  h-28 border border-solid p-2 cursor-pointer hover:bg-slate-50 select-none ${
                isToday(date)
                    ? "bg-blue-400 text-white font-bold hover:bg-blue-500"
                    : ""
            }`}
            onDoubleClick={() => handleAddAppointment()}
        >
            <span>{date.getDate()}</span>
            <div className="text-black max-h-16 overflow-y-scroll">
                {appointments.map((appointment) => (
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
                ))}
            </div>
        </div>
    );
};
