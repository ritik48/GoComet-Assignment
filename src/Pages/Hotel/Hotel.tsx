import { useParams } from "react-router-dom";
import { HotelHeader } from "./components/HotelHeader";
import { HotelRooms } from "./components/DisplayRooms";
import { HotelDescription } from "./components/HotelDescription";
import { useEffect, useState } from "react";
import { useHotels } from "../../hooks/useHotels";
import { HotelType } from "../Home/components/Hotel";

export function Hotel() {
  const params = useParams();
  const hotelId = params.hotelId;
  const [hotelData, sethotelData] = useState<HotelType>();

  const { loading, error, fetchHotelById } = useHotels();

  useEffect(() => {
    (async () => {
      const result = await fetchHotelById(hotelId!);
      sethotelData(result);
    })();
  }, []);

  return (
    <div>
      {loading && <div className={"loading"}>Loading...</div>}
      {error && <div className={"error"}>{error}</div>}
      {!loading &&
        !error &&
        hotelData &&
        Object.entries(hotelData).length > 0 && (
          <>
            <HotelHeader
              name={hotelData?.name}
              rating={hotelData.rating}
              city={hotelData?.city}
              image={hotelData?.image_url}
            />
            <HotelRooms rooms={hotelData?.rooms} />
            <HotelDescription
              name={hotelData?.name}
              description={hotelData?.description}
            />
          </>
        )}
    </div>
  );
}
