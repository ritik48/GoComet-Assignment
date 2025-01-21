import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BookingProvider } from "./context/booking.tsx";
import { FilterProvider } from "./context/filter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BookingProvider>
      <FilterProvider>
        <App />
      </FilterProvider>
    </BookingProvider>
  </StrictMode>
);
