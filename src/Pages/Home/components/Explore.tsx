import { Filter } from "../../../components/Filter/Filter";
import { FilterProvider } from "../../../hooks/useFilters";
// import { useHotels } from "../../../hooks/useHotels";
import style from "./Explore.module.css";
import { HotelList } from "./HotelList";

export function Explore() {
  return (
    <FilterProvider>
      <div className={style.explore}>
        <div className={`${style.top}`}>
          <h3>Explore Hotels</h3>
          <div className={`${style.bottom} flex`}>
            <Filter />
            <div className={`${style.right} flex flex-col`}>
              <select className={`${style.sort}`}>
                {/* <option value="none">Total People</option> */}
                <option value="none" selected>
                  Sort By
                </option>
                <option value="a-z">Name: A - Z</option>
                <option value="z-a">Name: Z - A</option>
                <option value="h-l">Price: Hight to Low</option>
                <option value="l-h">Price: Low to High</option>
              </select>
              <div className={style.right_bottom}>
                <HotelList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </FilterProvider>
  );
}
