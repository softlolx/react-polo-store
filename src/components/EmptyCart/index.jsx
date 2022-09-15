import styles from "./EmptyCart.module.scss";
import emptyBoxImage from "../../images/emptyCart.svg";
import { useContext } from "react";
import { ThemeContext } from "../context";

export function EmptyCart() {
  const darkThemeEnabled = useContext(ThemeContext);

  return (
    <li className={styles.emptyCart}>
      <img src={emptyBoxImage} alt="#" className={styles.emptyCart__image} />
      <h4
        className={`${styles.emptyCart__title} ${
          !darkThemeEnabled ? styles.emptyCart__title_dark : ""
        }`}
      >
        Cart is empty
      </h4>
      <p
        className={`${styles.emptyCart__subtitle} ${
          !darkThemeEnabled ? styles.emptyCart__subtitle_dark : ""
        }`}
      >
        Get back and choose some polo shirt and they'll appear here
      </p>
    </li>
  );
}
