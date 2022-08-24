import styles from "./Main.module.scss";

export function Main({ children }) {
  return (
    <div className={styles.main}>
      <div className={styles.main__titleContainer}>
        <h1 className={styles.main__title}>Polo shirts</h1>
        <input type="text" placeholder="Search..." className={styles.main__searchInput} />
      </div>
      <div className={styles.main__cardsContainer}>{children}</div>
    </div>
  );
}
