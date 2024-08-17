import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { OutlinedButton } from "../common/Button";
import { MONTHS } from "../../data/index";

export const CalendarNav = () => {
    const { currentMonth, currentYear, prevMonth, nextMonth } =
        useContext(CalendarContext);

    return (
        <div className="flex justify-around p-8 items-center">
            <div>
                <OutlinedButton onClick={prevMonth}>
                    {currentMonth == 1 ? "December" : MONTHS[currentMonth - 2]}
                </OutlinedButton>
            </div>

            <div className="font-bold text-xl">
                <h1>
                    {MONTHS[currentMonth - 1]}, {currentYear}
                </h1>
            </div>

            <div>
                <div>
                    <OutlinedButton onClick={nextMonth}>
                        {currentMonth == 12 ? "January" : MONTHS[currentMonth]}
                    </OutlinedButton>
                </div>
            </div>
        </div>
    );
};
