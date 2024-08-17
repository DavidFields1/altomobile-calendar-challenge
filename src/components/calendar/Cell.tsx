import React from "react";

interface DayCellProps {
    date: Date | null;
}

export const Cell: React.FC<DayCellProps> = ({ date }) => {
    if (!date) {
        return (
            <div className="bg-gray-300 basis-1/7 h-28 border border-solid p-2 select-none">
                {}
            </div>
        );
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
        <div
            className={`basis-1/7  h-28 border border-solid p-2 cursor-pointer hover:bg-slate-50 select-none ${
                isToday(date)
                    ? "bg-blue-400 text-white font-bold hover:bg-blue-700"
                    : ""
            }`}
            onDoubleClick={() => console.log("event", date)}
        >
            <span>{date.getDate()}</span>
        </div>
    );
};
