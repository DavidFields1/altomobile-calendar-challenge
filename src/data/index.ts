export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const MONTHS = [
    {
        name: "January",
        days: 31,
    },
    {
        name: "February",
        days: new Date().getFullYear() % 4 === 0 ? 28 : 27,
    },
    {
        name: "February",
        days: new Date().getFullYear() % 4 === 0 ? 28 : 27,
    },
];
