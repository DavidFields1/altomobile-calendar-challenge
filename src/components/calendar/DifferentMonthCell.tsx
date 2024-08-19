interface CellProps {
    date: Date;
}

export const DifferentMonthCell: React.FC<CellProps> = ({ date }) => {
    return (
        <div className="bg-gray-300 basis-1/7 h-28 border border-solid p-2 select-none">
            {date.getDate()}
        </div>
    );
};
