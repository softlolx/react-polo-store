import styles from "./Header.module.scss";
import logo from "../../images/logo.svg";
import cartIcon from "../../images/cartIcon.svg";
import favoriteIcon from "../../images/favoriteIcon.svg";
import profileIcon from "../../images/profileIcon.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__logoContainer}>
        <img src={logo} alt="#" className={styles.header__logo} />

        <div className={styles.header__logoTextContainer}>
          <h2 className={styles.header__logoTitle}>ALLIGATOR POLO</h2>
          <p className={styles.header__logoDescription}>The best polo store</p>
        </div>
      </div>
      <div className={styles.header__iconsContainer}>
        <img src={cartIcon} alt="#" className={styles.header__cartIcon} />
        <span className={styles.header__totalSum}>$1205.00</span>
        <img src={favoriteIcon} alt="#" className={styles.header__favoriteIcon} />
        <img src={profileIcon} alt="#" className={styles.header__profileIcon} />
      </div>
    </div>
  );
}
