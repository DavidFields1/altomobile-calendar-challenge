import { v4 as uuidv4 } from "uuid";

export interface Appointment {
    id: string;
    date: Date;
    name: string;
}

const STORAGE_KEY = "APPOINTMENTS";

const getAppointments = (): Appointment[] => {
    const storedAppointments = localStorage.getItem(STORAGE_KEY);
    if (storedAppointments) {
        return JSON.parse(storedAppointments, (key, value) => {
            if (key === "date") return new Date(value);
            return value;
        });
    }
    return [];
};

const saveAppointments = (appointments: Appointment[]): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appointments));
};

export const createAppointment = (date: Date, name: string): Appointment => {
    const newAppointment: Appointment = {
        id: uuidv4(),
        date,
        name,
    };
    const appointments = getAppointments();
    appointments.push(newAppointment);
    saveAppointments(appointments);
    return newAppointment;
};

export const getAppointmentsByDate = (date: Date): Appointment[] => {
    const appointments = getAppointments();

    const returnApp = appointments.filter((appointment) => {
        return appointment.date.toDateString() === date.toDateString();
    });
    return returnApp;
};

export const deleteAppointment = (id: string): boolean => {
    const appointments = getAppointments();
    const updatedAppointments = appointments.filter(
        (appointment) => appointment.id !== id
    );
    if (updatedAppointments.length !== appointments.length) {
        saveAppointments(updatedAppointments);
        return true;
    }
    return false;
};

export const getSelectedDate = () => {
    const selectedMonth = localStorage.getItem("SELECTED_MONTH");
    const selectedYear = localStorage.getItem("SELECTED_YEAR");

    if (selectedMonth && selectedYear) {
        return new Date(parseInt(selectedYear), parseInt(selectedMonth) - 1);
    }
    return undefined;
};

export const setSelectedDate = (date: Date) => {
    localStorage.setItem("SELECTED_MONTH", JSON.stringify(date.getMonth() + 1));
    localStorage.setItem("SELECTED_YEAR", JSON.stringify(date.getFullYear()));
};
