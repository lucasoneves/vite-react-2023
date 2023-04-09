import styles from "./Header.module.css";
import { HiOutlineViewGrid } from "react-icons/hi";
import UserAvatar from "../UserAvatar";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header-itens"]}>
          <HiOutlineViewGrid className={styles["icon-menu"]} />
          <h2>Adoção de pets</h2>
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
