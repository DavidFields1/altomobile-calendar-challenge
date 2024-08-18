import { createContext, ReactNode, useEffect, useState } from "react";
import { getMonthInfo, getWeeksInMonth } from "../utils/calendar";

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

    const backToCurrentMonth = () => {
        setDate(new Date());
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
