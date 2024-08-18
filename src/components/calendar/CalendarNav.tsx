import { useContext } from "react";
import { CalendarContext } from "../../context/CalendarContext";
import { OutlinedButton } from "../common/Button";
import { MONTHS } from "../../data/index";

export const CalendarNav = () => {
    const {
        currentMonth,
        currentYear,
        prevMonth,
        nextMonth,
        backToCurrentMonth,
    } = useContext(CalendarContext);

    return (
        <div className="flex justify-around p-8 items-center">
            <div>
                <OutlinedButton onClick={prevMonth}>
                    {currentMonth == 1 ? "December" : MONTHS[currentMonth - 2]}
                </OutlinedButton>
            </div>

            <div className="font-bold text-xl text-center">
                <h1>
                    {MONTHS[currentMonth - 1]}, {currentYear}
                </h1>
                {currentMonth != new Date().getMonth() + 1 ? (
                    <button onClick={backToCurrentMonth}>
                        <p className="text-sm font-thin underline">
                            Back to current month
                        </p>
                    </button>
                ) : null}
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
