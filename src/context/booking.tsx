import { createContext, useState, ReactNode, SetStateAction } from "react";

interface BookingContextType {
  totalPeople: number;
  checkInDate: string | null;
  checkOutDate: string | null;
  setTotalPeople: React.Dispatch<SetStateAction<number>>;
  setCheckInDate: React.Dispatch<SetStateAction<string>>;
  setCheckOutDate: React.Dispatch<SetStateAction<string>>;
  resetBooking: () => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(
  undefined
);

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [totalPeople, setTotalPeople] = useState<number>(1);
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");

  const resetBooking = () => {
    setTotalPeople(1);
    setCheckInDate("");
    setCheckOutDate("");
  };

  return (
    <BookingContext.Provider
      value={{
        totalPeople,
        checkInDate,
        checkOutDate,
        setTotalPeople,
        setCheckInDate,
        setCheckOutDate,
        resetBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
