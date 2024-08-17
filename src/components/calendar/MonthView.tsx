import React from "react";
import { WeekRow } from "./WeekRow";

interface MonthViewProps {
    currentDate: Date;
}

export const MonthView: React.FC<MonthViewProps> = ({ currentDate }) => {
    const getWeeksInMonth = (date: Date) => {
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        const weeks = [];
        let currentWeek = [];

        for (let i = 0; i < firstDay.getDay(); i++) {
            currentWeek.push(null);
        }

        for (let i = 1; i <= lastDay.getDate(); i++) {
            if (currentWeek.length === 7) {
                weeks.push(currentWeek);
                currentWeek = [];
            }
            currentWeek.push(new Date(date.getFullYear(), date.getMonth(), i));
        }

        while (currentWeek.length < 7) {
            currentWeek.push(null);
        }
        weeks.push(currentWeek);

        return weeks;
    };

    const weeks = getWeeksInMonth(currentDate);

    return (
        <div className="month-view">
            {weeks.map((week, index) => (
                <WeekRow key={index} week={week} />
            ))}
        </div>
    );
};
