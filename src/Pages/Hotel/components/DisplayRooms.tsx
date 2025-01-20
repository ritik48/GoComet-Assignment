import style from "./HotelRooms.module.css";
import { Room } from "./Room";

export type RoomType = {
  id: string;
  name: string;
  price: number;
  amenities: string[];
  image_urls: string[];
  hotel_name?: string
};

export function HotelRooms({ rooms }: { rooms: RoomType[] }) {
  return (
    <div>
      <div className={style.room_display}>
        {rooms.map((room) => (
          <Room data={room} />
        ))}
      </div>
    </div>
  );
}
