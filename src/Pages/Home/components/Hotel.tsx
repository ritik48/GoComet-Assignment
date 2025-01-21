import { IoIosArrowRoundForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

import style from "./Hotel.module.css";
import { Link } from "react-router-dom";
import { RoomType } from "../../Hotel/components/DisplayRooms";

export type HotelType = {
  name: string;
  city: string;
  rooms: RoomType[];
  image_url: string;
  id: string;
  rating: string; // Assuming rating is stored as a string
  description: string;
};

export function Hotel({ data }: { data: HotelType }) {
  return (
    <div className={style.hotel_container}>
      <img src={data.image_url} className={style.image} />
      <div className={`flex flex-col ${style.top}`}>
        <div className="flex items-center">
          <div className={style.hotel_name}>{data.name}</div>
          <div className={`${style.rating_container} flex items-center`}>
            <FaStar size={15} />
            <div className={style.hotel_rating}>
              {parseFloat(data.rating).toFixed(1)}
            </div>
          </div>
        </div>
        <div className={style.hotel_city}>{data.city}</div>
      </div>
      <div className={`flex items-center ${style.price_container}`}>
        <div className={style.price}>
          {data.rooms[0].price} - {data.rooms[data.rooms.length - 1].price}
        </div>
        <Link to={`/hotel/${data.id}`}>
          <button className={`btn primary flex items-center ${style.view}`}>
            View <IoIosArrowRoundForward size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
}
