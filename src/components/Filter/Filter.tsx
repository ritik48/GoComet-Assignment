import React from "react";
import { FilterItem, FilterType, useFilters } from "../../hooks/useFilters";
import style from "./Filter.module.css";
import { IoCloseSharp } from "react-icons/io5";

const priceFilter = [
  { label: "Up to Rs. 1000", value: "0-1000" },
  { label: "Rs. 1001 to Rs. 2000", value: "1001-2000" },
  { label: "Rs. 2001 to Rs. 5000", value: "2001-5000" },
  { label: "Above Rs. 5000", value: "5001-1000000000" },
];

const ratingFilter = [
  { label: "0 - 1 Star", value: "0-1" },
  { label: "1 - 2 Star", value: "1-2" },
  { label: "2 - 3 Star", value: "2-3" },
  { label: "3 - 4 Star", value: "3-4" },
  { label: "4 - 5 Star", value: "4-5" },
];

const cityFilter = [
  { label: "Mumbai", value: "mumbai" },
  { label: "Kolkata", value: "kolkata" },
  { label: "Bangalore", value: "bangalore" },
  { label: "Jaipur", value: "jaipur" },
];

export function Filter() {
  const { filters, addFilter, removeFilter, clearFilters, selectedFilters } =
    useFilters();

  // to remove filters based on input is checked or not
  const handleAddFilter = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterType: keyof FilterType,
    item: FilterItem
  ) => {
    if (e.target.checked) {
      addFilter(filterType, item);
    } else {
      removeFilter(filterType, item.value);
    }
  };

  return (
    <div className={style.filter}>
      <div className={`${style.top} flex flex-col`}>
        <div className={`flex items-center ${style.top_first}`}>
          <div>Filters</div>
          <button onClick={clearFilters}>Clear All</button>
        </div>
        <div className={`flex ${style.selected_filter_container}`}>
          {/* {Object.entries(filters).map((filter) => filter.map())} */}

          {selectedFilters().map((selected) => (
            <div className={`${style.selected_filter} flex items-center`}>
              <div>{selected.label}</div>
              <IoCloseSharp
                size={15}
                className={style.selected_filter_close}
                onClick={() =>
                  removeFilter(
                    selected.type as keyof FilterType,
                    selected.value
                  )
                }
              />
            </div>
          ))}
        </div>
      </div>
      <div className={`${style.filter_box} flex flex-col`}>
        <h2>PRICE RANGE</h2>
        <div className={`${style.filter_box_item_list} flex flex-col`}>
          {priceFilter.map((price) => (
            <div
              key={price.value}
              className={`flex items-center ${style.filter_item}`}
            >
              <input
                type="checkbox"
                checked={filters.priceRange.some(
                  (item) => item.value === price.value
                )}
                onChange={(e) =>
                  handleAddFilter(e, "priceRange", {
                    label: price.label,
                    value: price.value,
                  })
                }
                value={price.value}
                id={price.value}
              />
              <label htmlFor={price.value}>{price.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className={`${style.filter_box} flex flex-col`}>
        <h2>RATING</h2>
        <div className={`${style.filter_box_item_list} flex flex-col`}>
          {ratingFilter.map((rating) => (
            <div
              key={rating.value}
              className={`flex items-center ${style.filter_item}`}
            >
              <input
                type="checkbox"
                checked={filters.rating.some(
                  (item) => item.value === rating.value
                )}
                onChange={(e) =>
                  handleAddFilter(e, "rating", {
                    label: rating.label,
                    value: rating.value,
                  })
                }
                value={rating.value}
                id={rating.value}
              />
              <label htmlFor={rating.value}>{rating.label}</label>
            </div>
          ))}
        </div>
      </div>

      <div className={`${style.filter_box} flex flex-col`}>
        <h2>CITY</h2>
        <div className={`${style.filter_box_item_list} flex flex-col`}>
          {cityFilter.map((city) => (
            <div
              key={city.value}
              className={`flex items-center ${style.filter_item}`}
            >
              <input
                type="checkbox"
                checked={filters.city.some((item) => item.value === city.value)}
                onChange={(e) =>
                  handleAddFilter(e, "city", {
                    label: city.label,
                    value: city.value,
                  })
                }
                value={city.value}
                id={city.value}
              />
              <label htmlFor={city.value}>{city.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
