import styles from "./CartItem.module.scss";
import { ThemeContext } from "../context";
import { useContext } from "react";

export function CartItem({ id, imageUrl, description, price, removeFromCart }) {
  const darkThemeEnabled = useContext(ThemeContext);

  return (
    <li className={`${styles.item} ${!darkThemeEnabled ? styles.item_dark : ""}`}>
      <img src={imageUrl} alt="#" className={styles.item__image} />
      <div className={styles.item__descriptionContainer}>
        <p className={`${styles.item__title} ${!darkThemeEnabled ? styles.item__title_dark : ""}`}>
          {description}
        </p>
        <p
          className={`${styles.item__price} ${!darkThemeEnabled ? styles.item__price_dark : ""}`}
        >{`$${price}`}</p>
      </div>
      <button className={styles.item__deleteButton} onClick={() => removeFromCart(id)}></button>
    </li>
  );
}
