import styles from "./OrderDoneCart.module.scss";
import orderDoneCartImage from "../../images/orderDoneCart.svg";
import { useContext } from "react";
import { ThemeContext } from "../context";

export function OrderDoneCart({ resetOrder }) {
  const darkThemeEnabled = useContext(ThemeContext);

  return (
    <li className={styles.orderDoneCart}>
      <img src={orderDoneCartImage} alt="#" className={styles.orderDoneCart__image} />
      <h4
        className={`${styles.orderDoneCart__title} ${
          !darkThemeEnabled ? styles.orderDoneCart__title_dark : ""
        }`}
      >
        Congratulations!
      </h4>
      <p
        className={`${styles.orderDoneCart__subtitle} ${
          !darkThemeEnabled ? styles.orderDoneCart__subtitle_dark : ""
        }`}
      >
        Now you can patiently wait for shipping :D
      </p>
      <button className={styles.orderDoneCart__button} onClick={resetOrder}>
        Got it!
      </button>
    </li>
  );
}
