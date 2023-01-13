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
    <div>
      <footer className={styles.container}>
        <p>@constantine</p>
        <ul>
          <li>
            <button type="button" onClick={otHome}>
              home
            </button>
          </li>
          <li>
            <button onClick={otUser}>users</button>
          </li>
          <li>
            <button onClick={otBlogs}>blogs</button>
          </li>
        </ul>
      </footer>
    </div>
  );
}
