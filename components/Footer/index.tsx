import Link from 'next/link';
import {useRouter} from 'next/router';
import React from 'react';

import styles from './Footer.module.css';

export default function Footer() {
  const router = useRouter();
  function otHome() {
    if (window.location.pathname === '/') {
      window.scroll({top: 0, behavior: 'smooth'});
    } else {
      return router.push('/');
    }
  }
  function otUser() {
    if (window.location.pathname === '/users') {
      window.scroll({top: 0, behavior: 'smooth'});
    } else {
      return router.push('/users');
    }
  }
  function otBlogs() {
    if (window.location.pathname === '/blogs') {
      window.scroll({top: 0, behavior: 'smooth'});
    } else {
      return router.push('/blogs');
    }
  }
  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p className={styles.p}>@yogyy</p>
        <ul className={styles.ul}>
          <li className={styles.list}>
            <button className={styles.button89} type="button" onClick={otHome}>
              home
            </button>
          </li>
          <li className={styles.list}>
            <button className={styles.button89} onClick={otUser}>
              users
            </button>
          </li>
          <li className={styles.list}>
            <button className={styles.button89} onClick={otBlogs}>
              blogs
            </button>
          </li>
        </ul>
      </footer>
    </div>
  );
}
