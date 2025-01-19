import { FaStar } from "react-icons/fa";
import style from "./HotelHeader.module.css";
import { FaLocationDot } from "react-icons/fa6";

export function HotelHeader({
  name,
  city,
  rating,
  image,
}: {
  name: string;
  city: string;
  rating: string;
  image: string;
}) {
  return (
    <div className={style.header}>
      <div
        className={`flex flex-col ${style.header_content}`}
        style={{
          background: `
      linear-gradient(
        rgba(0, 0, 0, 0.9), /* Darker layer */
        rgba(0, 0, 0, 0.6)  /* Slightly lighter */
      ),
      url(${image})
    `,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          // height: "100vh", // Example height for the container
          // width: "100%",   // Example width for the container
        }}
      >
        <div className={`${style.name}`}>{name}</div>
        <div className={`flex items-center ${style.details}`}>
          <div className={`${style.city} flex items-center`}>
            <FaLocationDot className={style.icon_1} size={18} />
            <div>{city}, India</div>
          </div>
          <div className={`${style.rating_container} flex items-center`}>
            <FaStar size={18} />
            <div className={style.hotel_rating}>
              {parseFloat(rating).toFixed(1)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
