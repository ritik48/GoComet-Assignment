import style from "./Filter.module.css";
import { IoCloseSharp } from "react-icons/io5";

const priceFilter = [
  { label: "Up to Rs. 1000", value: "upto-1000" },
  { label: "Rs. 1001 to Rs. 2000", value: "1001-2000" },
  { label: "Rs. 2001 to Rs. 5000", value: "2001-5000" },
  { label: "Above Rs. 5000", value: "above-5000" },
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
  return (
    <div className={style.filter}>
      <div className={`${style.top} flex flex-col`}>
        <div className={`flex items-center ${style.top_first}`}>
          <div>Filters</div>
          <button>Clear All</button>
        </div>
        <div className={`flex ${style.selected_filter_container}`}>
          <div className={`${style.selected_filter} flex items-center`}>
            <div>Mumbai</div>
            <IoCloseSharp size={15} className={style.selected_filter_close} />
          </div>
          <div className={`${style.selected_filter} flex items-center`}>
            <div>Up to Rs. 1000</div>
            <IoCloseSharp size={15} className={style.selected_filter_close} />
          </div>
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
              <input type="checkbox" value={price.value} id={price.value} />
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
              <input type="checkbox" value={rating.value} id={rating.value} />
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
              <input type="checkbox" value={city.value} id={city.value} />
              <label htmlFor={city.value}>{city.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
