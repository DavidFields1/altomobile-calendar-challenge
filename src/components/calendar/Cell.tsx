import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { isToday, showPrompt } from "../../utils/calendar";
import { Appointment } from "../../api/appointments";
import { DifferentMonthCell } from "./DifferentMonthCell";
import { AppointmentBadge } from "./AppointmentBadge";

interface CellProps {
    date: Date;
}

export const Cell: React.FC<CellProps> = ({ date }) => {
    const { currentMonth, appointments, addAppointment, removeAppointment } =
        useContext(CalendarContext);

    const handleAddAppointment = () => {
        const newAppointmentName = showPrompt(date);
        if (newAppointmentName) {
            addAppointment(date, newAppointmentName);
        }
    };

    const handleDeleteAppointment = (appointment: Appointment) => {
        removeAppointment(appointment.id);
    };

    if (date.getMonth() + 1 != currentMonth) {
        return <DifferentMonthCell date={date} />;
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
                    <div key={appointment.id}>
                        {appointment.date.toDateString() ===
                        date.toDateString() ? (
                            <AppointmentBadge
                                key={appointment.id}
                                appointment={appointment}
                                handleDeleteAppointment={
                                    handleDeleteAppointment
                                }
                            />
                        ) : null}
                    </div>
                ))}
            </div>
        </div>
    );
};
