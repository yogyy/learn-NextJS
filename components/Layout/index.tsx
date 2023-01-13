import Head from 'next/head';
import Link from 'next/link';
import React, {ReactNode} from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Navbar from '../Navbar';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const {children, pageTitle} = props;
  return (
    <>
      <Head>
        <title>{`${pageTitle} - NextJS Basic`}</title>
        <meta name="description" content="website NextJS Basic" />
      </Head>
      <Navbar />
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </>
  );
}
