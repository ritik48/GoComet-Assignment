import { Filter } from "../../../components/Filter/Filter";
import style from "./Explore.module.css";

export function Explore() {
  return (
    <div className={style.explore}>
      <div className={`${style.top}`}>
        <h3>Explore Hotels</h3>
        <div className={style.bottom}>
          <Filter />
          <div className={style.right}>
            <select defaultValue={2} className={style.right_top}>
              {/* <option value="none">Total People</option> */}
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <div className={style.right_bottom}>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
