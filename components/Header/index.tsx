import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <p className={styles.logo}>
          <Link href="/">yogyCons't</Link>
        </p>
        <ul className={styles.ul} id="navbar">
          <li className={styles.list}>
            <Link className={styles.item} href="/">
              Home
            </Link>
          </li>
          <li className={styles.list}>
            <Link className={styles.item} href="/blogs">
              Blog
            </Link>
          </li>
          <li className={styles.list}>
            <Link className={styles.item} href={"/users"}>
              Users
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
