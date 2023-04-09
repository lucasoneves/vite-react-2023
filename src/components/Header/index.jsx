import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles["header-itens"]}>
          <span>Menu</span>
          <h2>Adoção de pets</h2>
          <div className={styles["avatar"]}>
            <img src="https://i.pravatar.cc/30" alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
}
