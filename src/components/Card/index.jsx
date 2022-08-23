import { useState } from "react";
import styles from "./Card.module.scss";

export function Card({ id, imageUrl, description, price }) {
  const [favorited, setFavorited] = useState(false);
  const [addedToCard, setAddedToCard] = useState(false);

  function addToFavorite() {
    setFavorited((prev) => (prev = !prev));
  }

  function addToCart() {
    setAddedToCard((prev) => (prev = !prev));
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__photoContainer}>
        <button
          className={`${styles.card__favButton} ${
            favorited ? styles.card__favButton_active : null
          }`}
          onClick={addToFavorite}
        ></button>
        <img src={imageUrl} alt="polo image" className={styles.card__productPhoto} />
      </div>
      <p className={styles.card__productTitle}>{description}</p>
      <div className={styles.card__bottomContainer}>
        <div className={styles.card__priceContainer}>
          <p className={styles.card__priceTitle}>Price:</p>
          <p className={styles.card__price}>{`$${price}`}</p>
        </div>
        <button
          className={`${styles.card__addToCartButton} ${
            addedToCard ? styles.card__addToCartButton_active : null
          }`}
          onClick={addToCart}
        ></button>
      </div>
    </div>
  );
}
