import styles from "./Bookmarks.module.scss";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context";
import { useContext } from "react";

export function Bookmarks({ children }) {
  const darkThemeEnabled = useContext(ThemeContext);
  const nav = useNavigate();

  return (
    <div className={`${styles.bookmarks} ${!darkThemeEnabled ? styles.bookmarks_dark : ""}`}>
      <div className={styles.bookmarks__titleContainer}>
        <button
          className={styles.bookmarks__backButton}
          onClick={() => {
            nav(-1);
          }}
        ></button>
        <h1
          className={`${styles.bookmarks__title} ${
            !darkThemeEnabled ? styles.bookmarks__title_dark : ""
          }`}
        >
          My wishlist
        </h1>
      </div>
      <div className={styles.bookmarks__cardsContainer}>{children}</div>
    </div>
  );
}
