import styles from "./Header.module.scss";
import logo from "../../images/logo.svg";
import cartIcon from "../../images/cartIcon.svg";
import favoriteIcon from "../../images/favoriteIcon.svg";
import profileIcon from "../../images/profileIcon.svg";
import { Link } from "react-router-dom";

export function Header({ toggleCart }) {
  return (
    <div className={styles.header}>
      <div className={styles.header__logoContainer}>
        <img src={logo} alt="#" className={styles.header__logo} />

        <Link to="/" style={{ textDecoration: "none" }}>
          <div className={styles.header__logoTextContainer}>
            <h2 className={styles.header__logoTitle}>ALLIGATOR POLO</h2>
            <p className={styles.header__logoDescription}>The best polo store</p>
          </div>
        </Link>
      </div>
      <div className={styles.header__iconsContainer}>
        <img src={cartIcon} alt="#" className={styles.header__cartIcon} onClick={toggleCart} />
        <span className={styles.header__totalSum} onClick={toggleCart}>
          $1205.00
        </span>
        <Link to="/bookmarks">
          <img src={favoriteIcon} alt="#" className={styles.header__favoriteIcon} />
        </Link>
        <img src={profileIcon} alt="#" className={styles.header__profileIcon} />
      </div>
    </div>
  );
}
