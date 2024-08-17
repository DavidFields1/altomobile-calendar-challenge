import { DAYS } from "../data/index";
export const generateDate = (
    month = new Date().getMonth() + 1,
    year = new Date().getFullYear()
) => {
    console.log("month", month);
    console.log("year", year);

    const firstMonthDay = new Date(year, month - 1, 1);
    console.log("first day of month", DAYS[firstMonthDay.getDay()]);
    console.log("current day", new Date().getDate());
};
