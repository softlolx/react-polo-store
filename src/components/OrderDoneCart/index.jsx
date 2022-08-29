import styles from "./OrderDoneCart.module.scss";
import orderDoneCartImage from "../../images/orderDoneCart.svg";

export function OrderDoneCart() {
  return (
    <li className={styles.orderDoneCart}>
      <img src={orderDoneCartImage} alt="#" className={styles.orderDoneCart__image} />
      <h4 className={styles.orderDoneCart__title}>Congratulations!</h4>
      <p className={styles.orderDoneCart__subtitle}>Now you can patiently wait for shipping :D</p>
    </li>
  );
}
