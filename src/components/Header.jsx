import styles from "./Header.module.css";
import imageLogo from "../assets/Ignite-logo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <img src={imageLogo} alt="Ignite Logo" />
      <strong>Ignite Feed</strong>
    </div>
  );
}
