import React from "react";

interface DayCellProps {
    date: Date | null;
}

export const Cell: React.FC<DayCellProps> = ({ date }) => {
    if (!date) {
        return <div className="day-cell empty"></div>;
    }

    const isToday = (date: Date) => {
        const today = new Date();
        return (
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
        );
    };

    return (
        <div className={`day-cell ${isToday(date) ? "today" : ""}`}>
            <span className="date">{date.getDate()}</span>
        </div>
    );
};
