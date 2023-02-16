import Head from 'next/head';
import Link from 'next/link';
import {useRouter} from 'next/router';
import React, {useEffect} from 'react';
import {Accent1} from '../components/links/Accent';

export default function Custom404() {
  const router = useRouter();
  useEffect(() => {
    console.log('not found 404');
    setTimeout(() => {
      router.push('/');
    }, 5500);
    return () => console.log('dari 404');
  }, [router]);

  return (
    <>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="website NextJS Basic" />
      </Head>
      <div className="bg-black">
        <div className="relative h-screen -top-16 flex flex-col items-center justify-center">
          <Link href="/">
            <h1 className="text-6xl xl:text-9xl drop-shadow-glow animate-flicker">
              <Accent1>404</Accent1>
            </h1>
          </Link>
          <p className="text-xl text text-red-500">Page not found.</p>
          <span>auto redirect, wait...</span>
        </div>
      </div>
    </>
  );
}
