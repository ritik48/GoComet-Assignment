import { useState } from "react";

export function useHotels() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchHotels = async () => {
    try {
      setError("");
      setLoading(true);
      const response = await fetch(
        `https://www.gocomet.com/api/assignment/hotels?size=${30}&page=${1}`
      );

      const data = await response.json();

      return data.hotels || [];
    } catch (error) {
      setError("Could not fetch the hotels");
    } finally {
      setLoading(false);
    }
  };

  const fetchHotelById = async (id: string) => {
    try {
      setError("");
      setLoading(true);
      const response = await fetch(
        `https://www.gocomet.com/api/assignment/hotels/${id}`
      );

      const data = await response.json();
      if (!data.success) {
        setError(data.message || "Cannot get the hotel");
        return;
      }
      return data.hotel;
    } catch (error) {
      setError("Could not fetch the hotels");
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, fetchHotels, fetchHotelById };
}
