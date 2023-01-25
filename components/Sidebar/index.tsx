import Link from 'next/link';
import React from 'react';
import styles from './Sidebar.module.css';
import Image from 'next/image';
import gh from '../../public/github.png';
import fb from '../../public/facebook.png';
import li from '../../public/linkedin.png';

export default function Sidebar() {
  return (
    <div className={styles.nav}>
      <ul className={styles.ul}>
        <li data-aos="fade-up" data-aos-duration="8000">
          <Link href={'https://www.facebook.com/iogiy'} target="_blank">
            <Image className={styles.logo} width={35} height={35} src={fb} alt={'facebook'} />
          </Link>
        </li>
        <li data-aos="fade-up" data-aos-duration="4000">
          <Link href={'/'}>
            <Image className={styles.logo} width={35} height={35} src={li} alt={'linkedin'} />
          </Link>
        </li>
        <li data-aos="fade-up" data-aos-duration="2000">
          <Link href={'https://github.com/yogyy'} target="_blank">
            <Image className={styles.logo} width={35} height={35} src={gh} alt={'github'} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
