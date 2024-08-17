import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CalendarApp } from "./CalendarApp.tsx";
import "./index.css";
import { CalendarProvider } from "./context/CalendarContext.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CalendarProvider>
            <CalendarApp />
        </CalendarProvider>
    </StrictMode>
);
