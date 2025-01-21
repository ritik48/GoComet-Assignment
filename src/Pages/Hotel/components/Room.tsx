import style from "./HotelRooms.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import { RoomType } from "./DisplayRooms";
import { useState } from "react";
import Modal from "../../../components/Modal";
import { Booking } from "./Booking";
import { Facilitiy } from "./Facility";

export function Room({ data }: { data: RoomType }) {
  const [openBookingModal, setOpenBookingModal] = useState(false);
  const [openFacilityModal, setOpenFacilityModal] = useState(false);

  return (
    <>
      <div className={style.hotel_container}>
        <img src={data.image_urls[0]} className={style.image} />
        <div className={`flex flex-col ${style.content}`}>
          <div className={`flex items-center ${style.content_top}`}>
            <div className={style.room_name}>{data.name}</div>
            <div className={`${style.rating_container} flex items-center`}>
              <MdPeopleAlt size={18} />
              <div className={style.total_people}>2</div>
            </div>
          </div>
          <div className={style.price_content}>
            <span className={style.price}>{data.price}</span> / night
          </div>
          <div className={`flex items-center ${style.action_container}`}>
            <button
              onClick={() => setOpenFacilityModal(true)}
              className={`btn secondary flex items-center`}
            >
              View Facilities
            </button>
            <button
              onClick={() => setOpenBookingModal(true)}
              className={`btn primary flex items-center ${style.view}`}
            >
              Book Now <IoIosArrowRoundForward size={18} />
            </button>
          </div>
        </div>
      </div>
      <Modal isOpen={openBookingModal}>
        <Booking room={data} onClose={() => setOpenBookingModal(false)} />
      </Modal>
      <Modal isOpen={openFacilityModal}>
        <Facilitiy room={data} onClose={() => setOpenFacilityModal(false)} />
      </Modal>
    </>
  );
}
