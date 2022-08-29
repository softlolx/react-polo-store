import styles from "./Cart.module.scss";
import closeButton from "../../images/closeButton.svg";
import { useEffect } from "react";

export function Cart({ toggleCart, orderSum, onOrder, children, resetOrder }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      resetOrder();
    };
  }, []);

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
          <ul className={styles.order__list}>{children}</ul>
        </div>
        <div className={styles.order__total}>
          <p className={styles.order__totalSum}>{`Total: $${orderSum.toFixed(2)}`}</p>
          <p className={styles.order__totalTax}>{`Tax (5%): $${(orderSum * 0.05).toFixed(2)}`}</p>
          <button className={styles.order__button} disabled={!orderSum} onClick={onOrder}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
