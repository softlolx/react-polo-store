import styles from "./Card.module.scss";
import { useState, useContext } from "react";
import { ThemeContext } from "../context";

export function Card({
  id,
  imageUrl,
  description,
  price,
  isAddedToCart,
  isFavorited,
  addToFavorite,
  addToCart,
}) {
  // const [favorited, setFavorited] = useState(false);
  // // const [addedToCart, setAddedToCart] = useState(false);

  // function toggleFavButton() {
  //   setFavorited((prev) => (prev = !prev));
  // }

  // function toggleAddButton() {
  //   setAddedToCart((prev) => (prev = !prev));
  // }

  const darkThemeEnabled = useContext(ThemeContext);

  return (
    <div className={`${styles.card} ${!darkThemeEnabled ? styles.card_dark : ""}`}>
      <div className={styles.card__photoContainer}>
        <button
          className={`${styles.card__favButton} ${
            isFavorited ? styles.card__favButton_active : null
          }`}
          onClick={() => {
            addToFavorite(id);
          }}
        ></button>
        <img src={imageUrl} alt="polo image" className={styles.card__productPhoto} />
      </div>
      <p
        className={`${styles.card__productTitle} ${
          !darkThemeEnabled ? styles.card__productTitle_dark : ""
        }`}
      >
        {description}
      </p>
      <div className={styles.card__bottomContainer}>
        <div className={styles.card__priceContainer}>
          <p className={styles.card__priceTitle}>Price:</p>
          <p
            className={`${styles.card__price} ${!darkThemeEnabled ? styles.card__price_dark : ""}`}
          >{`$${price}`}</p>
        </div>
        <button
          className={`${styles.card__addToCartButton} ${
            isAddedToCart ? styles.card__addToCartButton_active : ""
          }`}
          onClick={() => {
            addToCart(id);
          }}
        ></button>
      </div>
    </div>
  );
}
