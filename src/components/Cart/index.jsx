import styles from "./Cart.module.scss";
import closeButton from "../../images/closeButton.svg";

export function Cart({ toggleCart }) {
  return (
    <div className={styles.cart} onClick={toggleCart}>
      <div className={styles.order}>
        <div className={styles.order__header}>
          <div className={styles.order__titleWrap}>
            <h2 className={styles.order__title}>Cart</h2>
            <img
              src={closeButton}
              alt="#"
              className={styles.order__cartCloseButton}
              onClick={toggleCart}
            />
          </div>
          <ul className={styles.order__list}>
            <li className={styles.item}>
              <img
                src="https://cdn-images.farfetch-contents.com/17/75/79/01/17757901_39581136_1000.jpg"
                alt="#"
                className={styles.item__image}
              />
              <div className={styles.item__descriptionContainer}>
                <p className={styles.item__title}>DAwesome polo shirt fro men</p>
                <p className={styles.item__price}>$120.00</p>
              </div>
              <button className={styles.item__deleteButton}></button>
            </li>
          </ul>
        </div>
        <div className={styles.order__total}>
          <p className={styles.order__totalSum}>Total:</p>
          <p className={styles.order__totalTax}>Tax:</p>
          <button className={styles.order__button}>Order</button>
        </div>
      </div>
    </div>
  );
}
