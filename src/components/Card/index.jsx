import styles from "./Card.module.scss";

export function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__photoContainer}>
        <button className={styles.card__favButton}></button>
        <img
          src="https://cdn-images.farfetch-contents.com/16/06/99/07/16069907_31286542_1000.jpg"
          alt="polo image"
          className={styles.card__productPhoto}
        />
      </div>
      <p className={styles.card__productTitle}>Cool red polo shirt for men</p>
      <div className={styles.card__bottomContainer}>
        <div className={styles.card__priceContainer}>
          <p className={styles.card__priceTitle}>Price:</p>
          <p className={styles.card__price}>$120</p>
        </div>
        <button className={`${styles.card__addToCartButton}`}></button>
      </div>
    </div>
  );
}
