import { Filter } from "../../../components/Filter/Filter";
import { SortType } from "../../../context/filter";
import { useFilters } from "../../../hooks/useFilters";
import style from "./Explore.module.css";
import { HotelList } from "./HotelList";

export function Explore() {
  const { sortBy, setSortBy } = useFilters();
  console.log({ sortBy });
  return (
    <div className={style.explore}>
      <div className={`${style.top}`}>
        <h3>Explore Hotels</h3>
        <div className={`${style.bottom} flex`}>
          <Filter />
          <div className={`${style.right} flex flex-col`}>
            <select
              className={`${style.sort}`}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
            >
              {/* <option value="none">Total People</option> */}
              <option value="none">Sort By</option>
              <option value="a-z">Name: A - Z</option>
              <option value="z-a">Name: Z - A</option>
              <option value="h-l">Rating: Hight to Low</option>
              <option value="l-h">Rating: Low to High</option>
            </select>
            <div className={style.right_bottom}>
              <HotelList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
