import { IoIosArrowRoundForward } from "react-icons/io";
import style from "./Hotel.module.css";

type HotelType = {
  name: string;
  city: string;
  rooms: {
    id: string;
    name: string;
    price: number;
  }[];
  image_url: string;
  id: string;
  rating: string; // Assuming rating is stored as a string
};

export function Hotel({ data }: { data: HotelType }) {
  return (
    <div className={style.hotel_container}>
      <img src={data.image_url} className={style.image} />
      <div className={`flex flex-col ${style.top}`}>
        <div className="flex items-center">
          <div className={style.hotel_name}>{data.name}</div>
          <div className={style.rating_container}>
            <div className={style.hotel_rating}>{data.rating}</div>
          </div>
        </div>
        <div className={style.hotel_city}>{data.city}</div>
      </div>
      <div className={`flex items-center ${style.price_container}`}>
        <div className={style.price}>
          {data.rooms[0].price} - {data.rooms[data.rooms.length - 1].price}
        </div>
        <button className="btn primary flex items-center">
          View <IoIosArrowRoundForward size={15} />
        </button>
      </div>
    </div>
  );
}
