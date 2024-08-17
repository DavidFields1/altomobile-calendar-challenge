import { Calendar } from "../components/calendar/Calendar";
// import { generateDate } from "../utils/calendar";

export const MainView = () => {
    // generateDate();

    return (
        <div className="bg-gray-200 h-screen w-screen flex justify-center p-16">
            <Calendar />
        </div>
    );
};
