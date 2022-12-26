import Link from "next/link";
import React from "react";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header className={styles.header}>
        <p className={styles.logo}>yogy</p>
        <ul className={styles.ul}>
          <li className={styles.list}>
            <Link className={styles.item} href="/">
              Home
            </Link>
          </li>
          <li className={styles.list}>
            <Link className={styles.item} href="/blog">
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
