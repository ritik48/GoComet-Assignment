import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import style from "./Booking.module.css";
import { RoomType } from "./DisplayRooms";
import { RxCross1 } from "react-icons/rx";

export function Facilitiy({
  room,
  onClose,
}: {
  room: RoomType;
  onClose: () => void;
}) {
  return (
    <div className={style.booking}>
      <div className={`flex items-center ${style.header}`}>
        <div className={style.hotel}>The Peninsula Hotel</div>
        <HiOutlineArrowSmallRight size={18} />
        <div className={style.room}>{room.name}</div>
      </div>
      <div className={style.facility_content}>
        <div className={style.facility_head}>Amenities Provided</div>
        <div className={style.facility_list}>
          {room.amenities.map((am, index) => (
            <div key={index} className={style.amenity}>
              {am}
            </div>
          ))}
        </div>
      </div>
      <RxCross1 size={20} className={style.close} onClick={onClose} />
    </div>
  );
}
