import styles from "./EmptyCart.module.scss";
import orderDoneCartImage from "../../images/orderDoneCart.svg";

export function OrderDoneCart() {
  return (
    <li className={styles.orderDoneCart}>
      <img src={orderDoneCartImage} alt="#" className={styles.orderDoneCart__image} />
      <h4 className={styles.orderDoneCart__title}>Cart is empty</h4>
      <p className={styles.orderDoneCart__subtitle}>
        Get back and choose some polo shirt and they'll appear here
      </p>
    </li>
  );
}
