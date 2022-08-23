import styles from "./Main.module.scss";
import { Card } from "../Card";

export function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__titleContainer}>
        <h1 className={styles.main__title}>Polo shirts</h1>
        <input type="text" placeholder="Search..." className={styles.main__searchInput} />
      </div>
      <div className={styles.main__cardsContainer}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}
