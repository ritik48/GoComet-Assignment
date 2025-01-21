import { useFilters } from "../../../hooks/useFilters";
import { useHotels } from "../../../hooks/useHotels";
import { Hotel, HotelType } from "./Hotel";
import style from "./HotelList.module.css";
import { usePagination } from "../../../hooks/usePagination";
import { applyFilter, applySort } from "../../../lib";
import { useEffect, useState } from "react";

export function HotelList() {
  const [hotels, setHotels] = useState<HotelType[]>([]);
  const { filters, sortBy } = useFilters();

  const itemsPerPage = 3;
  const { fetchHotels, loading, error } = useHotels();
  const filteredHotel = applyFilter(hotels, filters);

  const sortedHotels = applySort(filteredHotel, sortBy);

  const { currentPage, currentHotels, setCurrentPage, totalPages } =
    usePagination(sortedHotels, itemsPerPage);

  useEffect(() => {
    (async () => {
      const results = await fetchHotels();
      setHotels(results);
    })();
  }, []);

  return (
    <div>
      {!loading && !error && (
        <div className={style.results}>
          Total Results: {filteredHotel.length}
        </div>
      )}
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

        {error && <div className={style.error}>{error}</div>}
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
