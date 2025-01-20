import { MdPeopleAlt } from "react-icons/md";
import { HiOutlineArrowLeftStartOnRectangle } from "react-icons/hi2";
import { HiOutlineArrowRightEndOnRectangle } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { FaRegCalendar } from "react-icons/fa6";

import style from "./Booking.module.css";
import { RoomType } from "./DisplayRooms";
import { AddPeopleForm } from "../../../components/AddPeopleForm";
import { RxCross1 } from "react-icons/rx";

export function Booking({
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
      <div className={style.content}>
        <div className={style.left}>
          <img src={room.image_urls[0]} />
          <div className={`${style.facilities} flex`}>
            <div className={`${style.facility_item}`}>Wifi</div>
            <div className={`${style.facility_item}`}>TV</div>
            <div className={`${style.facility_item}`}>Food</div>
          </div>
          <div className={`${style.booking_date_person} flex`}>
            <div className={`${style.booking_date_left} flex flex-col`}>
              <div
                className={`flex items-center ${style.booking_date_left_item}`}
              >
                <MdPeopleAlt className={style.left_icon} size={18} />
                <div>Person:</div>
              </div>
              <div
                className={`flex items-center ${style.booking_date_left_item}`}
              >
                <HiOutlineArrowLeftStartOnRectangle
                  className={style.left_icon}
                  size={18}
                />
                <div>Check-in:</div>
              </div>
              <div
                className={`flex items-center ${style.booking_date_left_item}`}
              >
                <HiOutlineArrowRightEndOnRectangle
                  className={style.left_icon}
                  size={18}
                />
                <div>Check-out:</div>
              </div>
            </div>
            <div className={`${style.booking_date_right} flex flex-col`}>
              <div className={style.booking_date_right_item}>2</div>
              <div className={style.booking_date_right_item}>14/02/2025</div>
              <div className={style.booking_date_right_item}>16/02/2025</div>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={style.date}>
            <div className={`${style.date_content} flex`}>
              <div>
                <div className={style.date_label}>Check-in</div>
                <input type="date" />
              </div>
              <div>
                <div className={style.date_label}>Check-out</div>
                <input type="date" />
              </div>
            </div>
          </div>

          <AddPeopleForm />
        </div>
      </div>
      <RxCross1 size={20} className={style.close} onClick={onClose} />
    </div>
  );
}
