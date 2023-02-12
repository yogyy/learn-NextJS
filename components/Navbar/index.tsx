import Link from 'next/link';
import {useEffect, useState} from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div className={` ${styles.container} ${scrolled ? styles.ContainerScrolled : ''}`}>
      <nav className={styles.header}>
        <p className={styles.logo}>
          <Link href="/">yogyy</Link>
        </p>
        <ul className={styles.ul}>
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
            <Link className={styles.item} href={'/users'}>
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
