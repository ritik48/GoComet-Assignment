import { useState } from "react";
import style from "./Hero.module.css";

import { FaLocationDot } from "react-icons/fa6";
import { FaRegPaperPlane } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

export function Hero() {
  const [checkIn, setCheckIn] = useState("");
  console.log({ checkIn });
  console.log(checkIn !== "");
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
              <div className={style.search_container}>
                <FaLocationDot className={style.icon_1} size={15} />
                <input
                  className={`${style.search_input}`}
                  placeholder="Type city, place or hotel name"
                />
                <FaRegPaperPlane className={style.icon_2} size={15} />
              </div>
              <div className={style.date_container}>
                <input
                  placeholder="Check-in"
                  type="date"
                  className={style.date_input}
                />
                <input
                  placeholder="Check-out"
                  type="date"
                  className={style.date_input}
                />
              </div>
              <div className={style.total_person}>
                <MdPeopleAlt size={15} className={style.icon_3} />
                <select defaultValue={2}>
                  {/* <option value="none">Total People</option> */}
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <button className="btn primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
