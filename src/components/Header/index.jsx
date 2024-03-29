import styles from "./Header.module.scss";
import { HiOutlineViewGrid } from "react-icons/hi";
import UserAvatar from "../UserAvatar";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header-itens"]}>
          <HiOutlineViewGrid className={styles["icon-menu"]} />
          <Link to={"/"}>
            <h2 className={styles["title"]}>Adoção de pets</h2>
          </Link>
          <UserAvatar />
        </div>
      </div>
    </header>
  );
}
