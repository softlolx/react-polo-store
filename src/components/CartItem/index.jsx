import styles from "./CartItem.module.scss";

export function CartItem({ id, imageUrl, description, price }) {
  return (
    <li className={styles.item}>
      <img src={imageUrl} alt="#" className={styles.item__image} />
      <div className={styles.item__descriptionContainer}>
        <p className={styles.item__title}>{description}</p>
        <p className={styles.item__price}>{`$${price}`}</p>
      </div>
      <button className={styles.item__deleteButton}></button>
    </li>
  );
}
