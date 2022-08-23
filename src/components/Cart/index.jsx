import styles from "./Cart.module.scss";
import closeButton from "../../images/closeButton.svg";

export function Cart({ onCartClick }) {
  return (
    <div className={styles.cart}>
      <div className={styles.order}>
        <div className={styles.order__header}>
          <div className={styles.order__titleWrap}>
            <h2 className={styles.order__title}>Cart</h2>
            <img
              src={closeButton}
              alt="#"
              className={styles.order__cartCloseIcon}
              onClick={onCartClick}
            />
          </div>
          <li className={styles.order__list}>ur order</li>
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
