import styles from "./Main.module.scss";
import { Card } from "../Card";

export function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__titleContainer}>
        <h1 className={styles.main__title}>All Polos</h1>
        <input type="text" className={styles.main__searchInput} />
      </div>
      <div className={styles.main__cardsContainer}>
        <Card />
      </div>
    </div>
  );
}
