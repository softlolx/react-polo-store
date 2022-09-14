import styles from "./Main.module.scss";
import { useContext } from "react";
import { ThemeContext } from "../context";

export function Main({ children }) {
  const darkThemeEnabled = useContext(ThemeContext);
  return (
    <div className={`${styles.main} ${!darkThemeEnabled ? styles.main_dark : ""}`}>
      <div className={styles.main__titleContainer}>
        <h1 className={`${styles.main__title} ${!darkThemeEnabled ? styles.main__title_dark : ""}`}>
          Polo shirts
        </h1>
      </div>
      <div className={styles.main__cardsContainer}>{children}</div>
    </div>
  );
}
