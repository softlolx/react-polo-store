import styles from "./Main.module.scss";
import { Card } from "../Card";
import { data } from "../../utils/poloApi";

export function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__titleContainer}>
        <h1 className={styles.main__title}>Polo shirts</h1>
        <input type="text" placeholder="Search..." className={styles.main__searchInput} />
      </div>
      <div className={styles.main__cardsContainer}>
        {data?.map((item) => {
          return (
            <Card
              key={item._id}
              id={item._id}
              imageUrl={item.imageUrl}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
}
