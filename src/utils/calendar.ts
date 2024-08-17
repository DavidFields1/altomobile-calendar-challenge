import { DAYS } from "../data/index";
// export const generateDate = (
//     month = new Date().getMonth() + 1,
//     year = new Date().getFullYear()
// ) => {
//     console.log("month", month);
//     console.log("year", year);

//     const firstMonthDay = new Date(year, month - 1, 1);
//     console.log("first day of month", DAYS[firstMonthDay.getDay()]);
//     console.log(
//         "last day of month",
//         DAYS[
//             new Date(
//                 year,
//                 month - 1,
//                 new Date(year, month, 0).getDate()
//             ).getDay()
//         ]
//     );
//     console.log("current day", new Date().getDate());
// };

export const getMonthInfo = (date: Date) => {
    return {
        currentDay: new Date(),
        currentMonth: date.getMonth() + 1,
        currentYear: date.getFullYear(),
        monthDays: new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDate(),
        firstDayMonth: new Date(
            date.getFullYear(),
            date.getMonth(),
            1
        ).getDay(),
        lastDayMonth: new Date(
            date.getFullYear(),
            date.getMonth() + 1,
            0
        ).getDay(),
    };
};

export const getWeeksInMonth = (date: Date) => {
    const currentDate = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const weeks = [];
    let currentWeek = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
        // currentWeek.unshift(
        //     new Date(
        //         currentDate.getFullYear(),
        //         currentDate.getMonth() - 1,
        //         i == 0 ? i : -i
        //     )
        // );
        currentWeek.push(null);
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
        currentWeek.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    while (currentWeek.length < 7) {
        currentWeek.push(null);
    }
    weeks.push(currentWeek);

    return weeks;
};
