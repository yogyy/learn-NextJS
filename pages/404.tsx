import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import styles from '../styles/404.module.css';

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    console.log('not found 404');
    setTimeout(() => {
      router.push('/');
    }, 5500);
    return () => console.log('dari 404');
  }, []);

  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="website NextJS Basic" />
      </Head>
      <div className={styles.page404}>
        <p className={styles.protate}>i'm going back to</p>
        <Link href="/">
          <h1 className={styles.h1}>404</h1>
        </Link>

        <p>This page could not be found.</p>
        <p></p>
      </div>
    </>
  );
}
