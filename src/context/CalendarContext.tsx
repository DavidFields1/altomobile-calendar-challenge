import { createContext, ReactNode, useEffect, useState } from "react";
import { getMonthInfo, getWeeksInMonth } from "../utils/calendar";
import {
    Appointment,
    createAppointment,
    getAppointmentsByDate,
    getSelectedDate,
    setSelectedDate,
    syncAppointments,
    deleteAppointment,
} from "../api/appointments";

interface CalendarContextType {
    currentDay: Date;
    currentMonth: number;
    currentYear: number;
    monthDays: number;
    firstDayMonth: number;
    lastDayMonth: number;
    weeks: Date[][];
    appointments: Appointment[];
    prevMonth: () => void;
    nextMonth: () => void;
    backToCurrentMonth: () => void;
    addAppointment: (date: Date, newAppointmentName: string) => void;
    removeAppointment: (id: string) => void;
}

export const CalendarContext = createContext<CalendarContextType>(
    {} as CalendarContextType
);

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
    const [dateFromStorage, _] = useState(getSelectedDate());

    const [date, setDate] = useState(
        dateFromStorage ? dateFromStorage : new Date()
    );
    const [calendarState, setCalendarState] = useState(getMonthInfo(date));
    const [weeks, setWeeks] = useState(getWeeksInMonth(date));

    const [appointments, setAppointments] = useState<Appointment[]>(
        getAppointmentsByDate(date)
    );

    useEffect(() => {
        setCalendarState(getMonthInfo(date));
        setAppointments(getAppointmentsByDate(date));
        setWeeks(getWeeksInMonth(date));
    }, [date]);
    useEffect(() => {
        const fetchAppointments = async () => {
            const syncedAppointments = await syncAppointments();
            setAppointments(syncedAppointments);
        };
        fetchAppointments();
    }, []);

    const prevMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() - 1);
        setDate(newDate);
        setSelectedDate(newDate);
    };

    const nextMonth = () => {
        const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
        setDate(newDate);
        setSelectedDate(newDate);
    };

    const backToCurrentMonth = () => {
        const newDate = new Date();
        setDate(newDate);
        setSelectedDate(newDate);
    };

    const addAppointment = (date: Date, appointmentName: string) => {
        createAppointment(date, appointmentName);
        setAppointments(getAppointmentsByDate(date));
    };

    const removeAppointment = (id: string) => {
        deleteAppointment(id);
        setAppointments(getAppointmentsByDate(date));
    };

    return (
        <CalendarContext.Provider
            value={{
                appointments,
                ...calendarState,
                weeks,
                prevMonth,
                nextMonth,
                backToCurrentMonth,
                addAppointment,
                removeAppointment,
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
};
