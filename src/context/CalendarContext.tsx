import { createContext, ReactNode, useEffect, useState } from "react";
import { getMonthInfo, getWeeksInMonth } from "../utils/calendar";

interface CalendarContextType {
    // date: Date;
    currentDay: Date;
    currentMonth: number;
    currentYear: number;
    monthDays: number;
    firstDayMonth: number;
    lastDayMonth: number;
    weeks: (Date | null)[][];
    prevMonth: () => void;
    nextMonth: () => void;
}

export const CalendarContext = createContext<CalendarContextType>(
    {} as CalendarContextType
);

export const CalendarProvider = ({ children }: { children: ReactNode }) => {
    const [date, setDate] = useState(new Date());
    const [calendarState, setCalendarState] = useState(getMonthInfo(date));
    const [weeks, setWeeks] = useState(getWeeksInMonth(date));

    useEffect(() => {
        setCalendarState(getMonthInfo(date));
        setWeeks(getWeeksInMonth(date));
    }, [date]);

    const prevMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() - 1));
    };

    const nextMonth = () => {
        setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1));
    };

    return (
        <CalendarContext.Provider
            value={{
                ...calendarState,
                weeks,
                prevMonth,
                nextMonth,
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
};
