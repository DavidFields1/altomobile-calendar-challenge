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
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const weeks = [];
    let currentWeek = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
        currentWeek.unshift(
            new Date(date.getFullYear(), date.getMonth(), i == 0 ? i : -i)
        );
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
        if (currentWeek.length === 7) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
        currentWeek.push(new Date(date.getFullYear(), date.getMonth(), i));
    }

    let j = 0;
    while (currentWeek.length < 7) {
        currentWeek.push(
            new Date(date.getFullYear(), date.getMonth() + 2, j + 1)
        );
        j++;
    }
    weeks.push(currentWeek);

    return weeks;
};

export const isToday = (date: Date) => {
    const today = new Date();
    return (
        date.getDate() === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear()
    );
};

export const showPrompt = (date: Date) => {
    const newAppointmentDescription = window.prompt(
        `Description for the appointment at: ${date.toLocaleString("default", {
            dateStyle: "medium",
        })}`
    );
    return newAppointmentDescription;
};
