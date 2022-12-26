import Link from "next/link";
import React from "react";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <footer className={styles.container}>
        <p>@constantine</p>
      </footer>
    </div>
  );
}
