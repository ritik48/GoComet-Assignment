import { useFilters } from "../../../hooks/useFilters";
import { useHotels } from "../../../hooks/useHotels";
import { Hotel } from "./Hotel";
import style from "./HotelList.module.css";
import { usePagination } from "../../../hooks/usePagination";
import { applyFilter } from "../../../lib";

export function HotelList() {
  const { filters } = useFilters();

  const itemsPerPage = 3;
  const { hotels, loading, error } = useHotels();

  const filteredHotel = applyFilter(hotels, filters);

  const { currentPage, currentHotels, setCurrentPage, totalPages } =
    usePagination(filteredHotel, itemsPerPage);

  return (
    <div>
      <div className={style.hotel_list_container}>
        {loading ? (
          <div className={style.loading}>Loading...</div>
        ) : currentHotels.length > 0 ? (
          <div className={style.hotel_list}>
            {currentHotels.map((h) => (
              <Hotel key={h.id} data={h} />
            ))}
          </div>
        ) : (
          <div className={style.info}>No hotels found.</div>
        )}
      </div>
      <div>
        <button
          className="btn primary"
          onClick={() => {
            if (currentPage === 1) return;
            setCurrentPage((prev) => prev - 1);
          }}
        >
          Previous
        </button>
        <button
          className="btn secondary"
          onClick={() => {
            if (currentPage === totalPages) return;
            setCurrentPage((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
}
