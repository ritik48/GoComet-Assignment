import { useEffect, useState } from "react";
import { HotelType } from "../Pages/Home/components/Hotel";

export function useHotels() {
  const [hotels, setHotels] = useState<HotelType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchHotels = async () => {
    try {
      setError("");
      setLoading(true);
      await new Promise((r) => setTimeout(r, 2000));
      const response = await fetch(
        `https://www.gocomet.com/api/assignment/hotels?size=${30}&page=${1}`
      );

      const data = await response.json();
      console.log(data);

      setHotels(data.hotels || []);
    } catch (error) {
      setError("Could not fetch the hotels");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  return { loading, hotels, error };
}
