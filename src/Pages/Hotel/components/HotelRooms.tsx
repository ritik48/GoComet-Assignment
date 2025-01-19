import style from "./HotelRooms.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";

type RoomType = {
  id: string;
  name: string;
  price: number;
  amenities: string[];
  image_urls: string[];
};

export function HotelRooms({ rooms }: { rooms: RoomType[] }) {
  return (
    <div className="">
      <div className={style.room_display}>
        {rooms.map((room) => (
          <div className={style.hotel_container}>
            <img src={room.image_urls[0]} className={style.image} />
            <div className={`flex flex-col ${style.content}`}>
              <div className={`flex items-center ${style.content_top}`}>
                <div className={style.room_name}>{room.name}</div>
                <div className={`${style.rating_container} flex items-center`}>
                  <MdPeopleAlt size={18} />
                  <div className={style.total_people}>2</div>
                </div>
              </div>
              <div className={style.price_content}>
                <span className={style.price}>{room.price}</span> / night
              </div>
              <div className={`flex items-center ${style.action_container}`}>
                <button className={`btn secondary flex items-center`}>
                  View Facilities
                </button>
                <button
                  className={`btn primary flex items-center ${style.view}`}
                >
                  Book Now <IoIosArrowRoundForward size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
