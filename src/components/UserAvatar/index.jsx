import styles from "./UserAvatar.module.css";
export default function UserAvatar() {
  return (
    <div className={styles["avatar"]}>
      <img src="https://i.pravatar.cc/30" alt="User" />
    </div>
  );
}
