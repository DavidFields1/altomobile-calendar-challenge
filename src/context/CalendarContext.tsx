import { createContext, ReactNode, useEffect, useState } from "react";
import { getMonthInfo, getWeeksInMonth } from "../utils/calendar";
import { getSelectedDate, setSelectedDate } from "../api/appointments";

interface CalendarContextType {
    currentDay: Date;
    currentMonth: number;
    currentYear: number;
    monthDays: number;
    firstDayMonth: number;
    lastDayMonth: number;
    weeks: Date[][];
    prevMonth: () => void;
    nextMonth: () => void;
    backToCurrentMonth: () => void;
}

export const CalendarContext = createContext<CalendarContextType>(
    {} as CalendarContextType
);

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
    const [dateFromStorage, setDateFromStorage] = useState(getSelectedDate());

    const [date, setDate] = useState(
        dateFromStorage ? dateFromStorage : new Date()
    );
    const [calendarState, setCalendarState] = useState(getMonthInfo(date));
    const [weeks, setWeeks] = useState(getWeeksInMonth(date));

    useEffect(() => {
        setCalendarState(getMonthInfo(date));
        setWeeks(getWeeksInMonth(date));
    }, [date]);

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

    return (
        <CalendarContext.Provider
            value={{
                ...calendarState,
                weeks,
                prevMonth,
                nextMonth,
                backToCurrentMonth,
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
};
