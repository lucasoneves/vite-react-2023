import { Button } from "../Button";
import styles from "./AdoptedPet.module.scss";

export const AdoptedPet = ({ name, thumb }) => {
  return (
    <div className={styles["adopted-pet"]}>
      <h2>My new friend</h2>
      <img src={thumb} alt="" className={styles["avatar"]} />
      <h2>{name}</h2>
      <Button className={styles['button']}>Confirm adoption</Button>
    </div>
  );
};
