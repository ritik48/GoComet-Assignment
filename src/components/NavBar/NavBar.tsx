import { Link, useLocation } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div className={`${styles.nav}`}>
      <div className={`container ${styles.nav_container}`}>
        <div className={`${styles.nav_content} flex items-center`}>
          <Link to={"/"}>
            <img className={styles.brand} src={"/book-my-hotel-logo.svg"} />
          </Link>
          <div className={`flex items-center ${styles.nav_items}`}>
            <Link
              to={"/"}
              className={`${path === "/" && styles.selected} ${
                styles.nav_link
              }`}
            >
              Home
            </Link>
          </div>
          <button className="btn">Sign In</button>
        </div>
      </div>
    </div>
  );
}
