// import { useContext } from "react";
import { useContext, useState } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { CalendarDaysHeader } from "./CalendarDaysHeader";
import { CalendarNav } from "./CalendarNav";
import { WeekRow } from "./WeekRow";

export const Calendar: React.FC = () => {
    const { weeks } = useContext(CalendarContext);

    return (
        <div className="m-auto w-full h-full bg-white rounded-md shadow-sm">
            <CalendarNav />

            <div className="w-4/5 h-3/4 m-auto">
                <CalendarDaysHeader />

                {weeks.map((week, index) => (
                    <WeekRow key={index} week={week} />
                ))}
            </div>
        </div>
    );
};
