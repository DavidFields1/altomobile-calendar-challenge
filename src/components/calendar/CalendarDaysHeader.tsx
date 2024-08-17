import { DAYS } from "../../data/index";

export const CalendarDaysHeader = () => {
    return (
        <div className="flex justify-around border border-solid font-medium bg-blue-50">
            {DAYS.map((day) => (
                <div key={day}>{day}</div>
            ))}
        </div>
    );
};
