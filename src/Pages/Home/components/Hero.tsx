import style from "./Hero.module.css";

import { FaLocationDot } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { useBooking } from "../../../hooks/useBooking";
import { useEffect, useState } from "react";
import { useHotels } from "../../../hooks/useHotels";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type HotelSearch = { id: string; city: string; name: string };

export function Hero() {
  const {
    setCheckInDate,
    setCheckOutDate,
    checkInDate,
    checkOutDate,
    setTotalPeople,
    totalPeople,
  } = useBooking();

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<HotelSearch[]>([]);
  const [hotels, setHotels] = useState<HotelSearch[]>([]);

  const [selectedHotel, setSelectedHotel] = useState("");
  const { fetchHotelForSearch } = useHotels();

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const result = await fetchHotelForSearch();
      setHotels(result);
    })();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inp = e.target.value;
    setSearch(inp);
    if (!inp) {
      setSearchResults([]);
      return;
    }

    const searchResults = hotels.filter(
      (h) =>
        h.name.toLowerCase().includes(inp.toLowerCase()) ||
        h.city.toLowerCase().includes(inp.toLowerCase())
    );

    setSearchResults(searchResults);
  };

  const handleSearchButton = () => {
    if (!selectedHotel) {
      toast.error("Please select a valid hotel first");
      return;
    }

    if (!checkInDate || !checkOutDate) {
      toast.error("Please select check-in and check-out date");
      return;
    }

    navigate(`/hotel/${selectedHotel}`);
  };

  return (
    <div className={style.hero}>
      <div className={`${style.container}`}>
        <div className={`h-full ${style.content}`}>
          <div className={`flex flex-col ${style.content_top}`}>
            <h1>Find the perfect deal, always.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
              iure recusandae corrupti consequuntur error rerum eos dignissimos
              labore, delectus nihil omnis alias architecto vel veritatis minima
              culpa tenetur pariatur ut!
            </p>
          </div>
          <div className={`${style.content_bottom_wrapper}`}>
            <div className={`${style.content_bottom}`}>
              {/* Search Bar */}
              <div className={style.search_outer}>
                <div className={style.search_container}>
                  <FaLocationDot className={style.icon_1} size={15} />
                  <input
                    className={`${style.search_input}`}
                    value={search}
                    onChange={handleSearch}
                    placeholder="Type city, place or hotel name"
                  />
                  <FaRegPaperPlane className={style.icon_2} size={15} />
                </div>
                <div className={style.search_result}>
                  {searchResults.map((s) => (
                    <div
                      key={s.id}
                      onClick={() => {
                        setSearch(`${s.name}, ${s.city}`);
                        setSelectedHotel(s.id);
                        setSearchResults([]);
                      }}
                    >
                      {s.name}, {s.city}
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Inputs */}
              <div className={style.date_container}>
                <input
                  placeholder="Check-in"
                  type="date"
                  className={style.date_input}
                  value={checkInDate || ""}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
                <input
                  placeholder="Check-out"
                  type="date"
                  className={style.date_input}
                  value={checkOutDate || ""}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>

              {/* Total People Selector */}
              <div className={style.total_person}>
                <MdPeopleAlt size={15} className={style.icon_3} />
                <select
                  className={style.select_input}
                  value={totalPeople}
                  onChange={(e) => setTotalPeople(Number(e.target.value))}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>

              {/* Search Button */}
              <button className="btn primary" onClick={handleSearchButton}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
