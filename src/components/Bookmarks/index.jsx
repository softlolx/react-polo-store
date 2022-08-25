import styles from "./Bookmarks.module.scss";
import { useNavigate } from "react-router-dom";

export function Bookmarks({ children }) {
  const nav = useNavigate();
  return (
    <div className={styles.bookmarks}>
      <div className={styles.bookmarks__titleContainer}>
        <button
          className={styles.bookmarks__backButton}
          onClick={() => {
            nav(-1);
          }}
        ></button>
        <h1 className={styles.bookmarks__title}>My wishlist</h1>
      </div>
      <div className={styles.bookmarks__cardsContainer}>{children}</div>
    </div>
  );
}
