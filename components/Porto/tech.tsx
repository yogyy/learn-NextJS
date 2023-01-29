import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import css from '../../public/tech/css.svg';
import html from '../../public/tech/html.svg';
import js from '../../public/tech/js.svg';
import typescript from '../../public/tech/typescript.svg';
import react from '../../public/tech/react.svg';
import nextjs from '../../public/tech/nextjs.svg';

import styles from './tech.module.css';

export const Tech = () => {
  return (
    <div className={styles.tech}>
      <h1>My Tech</h1>
      <p>i'm currently using these </p>
      <div className={styles.ul_container}>
        <ul className={styles.ul}>
          <li>
            <Link href={'/'}>
              <Image width={50} src={css} alt={'css'} />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <Image width={50} height={50} src={html} alt={'html'} />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <Image width={50} height={50} src={js} alt={'javascript'} />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <Image width={50} height={50} src={typescript} alt={'typescript'} />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <Image width={50} height={50} src={react} alt={'reactJS'} />
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <Image width={50} height={50} src={nextjs} alt={'NextJS'} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
