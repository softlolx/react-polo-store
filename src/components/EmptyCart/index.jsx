import styles from "./EmptyCart.module.scss";
import emptyBoxImage from "../../images/emptyCart.svg";

export function EmptyCart() {
  return (
    <li className={styles.emptyCart}>
      <img src={emptyBoxImage} alt="#" className={styles.emptyCart__image} />
      <h4 className={styles.emptyCart__title}>Cart is empty</h4>
      <p className={styles.emptyCart__subtitle}>
        Get back and choose some polo shirt and they'll apper here
      </p>
    </li>
  );
}
