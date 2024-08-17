import React from "react";
import { Cell } from "./Cell";

interface WeekViewProps {
    week: (Date | null)[];
}

export const WeekView: React.FC<WeekViewProps> = ({ week }) => {
    return (
        <div className="week-view">
            {week.map((day, index) => (
                <Cell key={index} date={day} />
            ))}
        </div>
    );
};
