import Head from 'next/head';
import React, {ReactNode} from 'react';
import {PreloadProvider} from '../../context/PreloadContext';
import Footer from '../Footer';
import Navbar from '../Navbar';
// import Sidebar from '../Sidebar';
// import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}

export default function Layout(props: LayoutProps) {
  const {children, pageTitle} = props;
  return (
    <>
      <Head>
        <title>{`${pageTitle}`}</title>
        <meta name="description" content="website NextJS Basic" />
      </Head>
      {/* <Sidebar /> */}

      <React.Fragment>
        <header>
          <Navbar />
        </header>
        <PreloadProvider>
          <main>{children}</main>
        </PreloadProvider>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    </>
  );
}
