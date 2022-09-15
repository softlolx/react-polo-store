import styles from "./Cart.module.scss";
import closeButton from "../../images/closeButton.svg";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../context";

export function Cart({ toggleCart, orderSum, onOrder, children, resetOrder }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
      resetOrder();
    };
  }, []);

  const darkThemeEnabled = useContext(ThemeContext);

  return (
    <div className={styles.cart} onClick={toggleCart}>
      <div className={`${styles.order} ${!darkThemeEnabled ? styles.order_dark : ""}`}>
        <div className={styles.order__header}>
          <div className={styles.order__titleWrap}>
            <h2
              className={`${styles.order__title} ${
                !darkThemeEnabled ? styles.order__title_dark : ""
              }`}
            >
              Cart
            </h2>

            <button className={styles.order__cartCloseButton} onClick={toggleCart}></button>
          </div>
          <ul className={styles.order__list}>{children}</ul>
        </div>
        <div className={styles.order__total}>
          <p
            className={`${styles.order__totalSum} ${
              !darkThemeEnabled ? styles.order__totalSum_dark : ""
            }`}
          >{`Total: $${orderSum.toFixed(2)}`}</p>
          <p
            className={`${styles.order__totalTax} ${
              !darkThemeEnabled ? styles.order__totalTax_dark : ""
            }`}
          >{`Tax (5%): $${(orderSum * 0.05).toFixed(2)}`}</p>
          <button className={styles.order__button} disabled={!orderSum} onClick={onOrder}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
