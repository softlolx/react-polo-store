import styles from "./Bookmarks.module.scss";

export function Bookmarks({ children }) {
  return (
    <div className={styles.bookmarks}>
      <div className={styles.bookmarks__titleContainer}>
        <button className={styles.bookmarks__backButton}></button>
        <h1 className={styles.bookmarks__title}>My wishlist</h1>
      </div>
      <div className={styles.bookmarks__cardsContainer}>{children}</div>
    </div>
  );
}
