import { useState } from "react";
import { HotelType } from "../Pages/Home/components/Hotel";

export function usePagination(hotels: HotelType[], itemsPerPage: number) {
  const totalPages = Math.ceil(hotels.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const currentHotels = hotels.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    currentHotels,
    currentPage,
    totalPages,
    setCurrentPage,
  };
}
