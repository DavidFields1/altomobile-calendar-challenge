import { Cell } from "./Cell";

interface WeekRowProps {
    week: (Date | null)[];
}

export const WeekRow: React.FC<WeekRowProps> = ({ week }) => {
    return (
        <div className="flex flex-row text-end">
            {week.map((day, index) => (
                <Cell key={index} date={day!} />
            ))}
        </div>
    );
};
