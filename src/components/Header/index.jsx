import styles from "./Header.module.scss";
import logo from "../../images/logo.svg";
import cartIcon from "../../images/cartIcon.svg";
import favoriteIcon from "../../images/favoriteIcon.svg";
import sun from "../../images/sun.svg";
import moon from "../../images/moon.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context";

export function Header({ toggleCart, orderSum, toggleTheme }) {
  const darkThemeEnabled = useContext(ThemeContext);
  return (
    <div className={`${styles.header} ${!darkThemeEnabled ? styles.header_dark : ""}`}>
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className={styles.header__logoContainer}>
          <img src={logo} alt="#" className={styles.header__logo} />

          <div className={styles.header__logoTextContainer}>
            <h2
              className={`${styles.header__logoTitle} ${
                !darkThemeEnabled ? styles.header__logoTitle_dark : ""
              }`}
            >
              ALLIGATOR POLO
            </h2>
            <p className={styles.header__logoDescription}>The best polo store</p>
          </div>
        </div>
      </Link>
      <div className={styles.header__iconsContainer}>
        <img src={cartIcon} alt="#" className={styles.header__cartIcon} onClick={toggleCart} />
        <span className={styles.header__totalSum} onClick={toggleCart}>
          {`$${orderSum ? orderSum.toFixed(2) : "0"}`}
        </span>
        <Link to="/bookmarks" className={styles.header__favLink}>
          <img src={favoriteIcon} alt="#" className={styles.header__favoriteIcon} />
        </Link>
        <img
          src={darkThemeEnabled ? moon : sun}
          alt="#"
          className={styles.header__themeIcon}
          onClick={toggleTheme}
        />
      </div>
    </div>
  );
}
