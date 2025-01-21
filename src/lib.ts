import { FilterType } from "./hooks/useFilters";
import { HotelType } from "./Pages/Home/components/Hotel";

export function applyFilter(hotels: HotelType[], filters: FilterType) {
  return hotels.filter((hotel) => {
    // Filter by city
    if (
      filters.city.length > 0 &&
      !filters.city.some(
        (filter) => filter.value.toLowerCase() === hotel.city.toLowerCase()
      )
    ) {
      return false;
    }

    // Filter by rating
    if (
      filters.rating.length > 0 &&
      !filters.rating.some((filter) => {
        const [min, max] = filter.value.split("-");
        return (
          parseFloat(hotel.rating) >= parseInt(min) &&
          parseFloat(hotel.rating) <= parseInt(max)
        );
      })
    ) {
      return false;
    }

    // Filter by price range
    if (
      filters.priceRange.length > 0 &&
      !filters.priceRange.some((filter) => {
        const [min, max] = filter.value.split("-").map(Number);
        return hotel.rooms.some(
          (room) => room.price >= min && room.price <= max
        );
      })
    ) {
      return false;
    }

    return true;
  });
}
