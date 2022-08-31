import styles from "./Main.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../context";

export function Main({ children, searchInputValue, changeSearchInputValue }) {
  const darkThemeEnabled = useContext(ThemeContext);
  return (
    <div className={`${styles.main} ${!darkThemeEnabled ? styles.main_dark : ""}`}>
      <div className={styles.main__titleContainer}>
        <h1 className={styles.main__title}>Polo shirts</h1>
        {/* <input
          type="text"
          placeholder="Search..."
          className={styles.main__searchInput}
          onChange={changeSearchInputValue}
          value={searchInputValue}
        /> */}
      </div>
      <div className={styles.main__cardsContainer}>{children}</div>
    </div>
  );
}
