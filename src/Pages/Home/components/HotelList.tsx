import { useFilters } from "../../../hooks/useFilters";
import { useHotels } from "../../../hooks/useHotels";
import { Hotel } from "./Hotel";
import style from "./HotelList.module.css";
import { usePagination } from "../../../hooks/usePagination";

export function HotelList() {
  const { filters } = useFilters();

  const itemsPerPage = 3;
  const { hotels, loading, error } = useHotels();

  const { currentPage, currentHotels, setCurrentPage, totalPages } =
    usePagination(hotels, itemsPerPage);

  return (
    <div>
      <div className={style.hotel_list_container}>
        {loading ? (
          <div className={style.loading}>Loading...</div>
        ) : (
          <div className={style.hotel_list}>
            {currentHotels.map((h) => (
              <Hotel key={h.id} data={h} />
            ))}
          </div>
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
