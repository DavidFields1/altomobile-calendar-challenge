// import React from "react";
// import { Cell } from "./Cell";

// import { ReactNode, useContext } from "react";
// import { CalendarContext } from "../../context/CalendarContext";
import { Cell } from "./Cell";

// import { ReactNode } from "react";

interface WeekRowProps {
    week: (Date | null)[];
}

export const WeekRow: React.FC<WeekRowProps> = ({ week }) => {
    return (
        <div className="flex flex-row text-end">
            {week.map((day, index) => (
                <Cell key={index} date={day} />
            ))}
        </div>
    );
};
