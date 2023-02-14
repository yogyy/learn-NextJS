import pic from '../public/me.webp';
import Image from 'next/image';
import * as React from 'react';
import Layout from '../components/Layout';
import AOS from 'aos';
import clsx from 'clsx';
import useLoaded from './hooks/useLoaded';
import {TechStack} from '../components/Porto/tech';

export default function AboutPage() {
  const isLoaded = useLoaded();

  React.useEffect(() => {
    AOS.init({
      once: false,
      duration: 1200,
    });
  }, []);
  return (
    <Layout pageTitle={'About'}>
      <main className="h-full py-20">
        <About />
        <section>
          <div className={clsx('layout py-6', isLoaded && 'fade-in-start')}>
            <h2 gaya-fade="7">Contact</h2>
            <article gaya-fade="8" className="">
              <h3 className="mt-12 mb-12">Current Favorite Tech Stack</h3>
              <figure className="mt-2 mb-5 h-20">
                <TechStack />
              </figure>

              <p>
                Do contact me if you need my opinion about web development, especially frontend
                works. I’ll be happy to help! (find my email in the footer)
              </p>
            </article>
          </div>
        </section>
      </main>
    </Layout>
  );
}
// className={clsx(
//   'h-screen dark:bg-zinc-900 flex flex-col justify-center',
//   isLoaded && 'fade-in-start'
// )}>
export const About = () => {
  const isLoaded = useLoaded();

  return (
    <section className={clsx('layout py-5 ', isLoaded && 'fade-in-start')}>
      <h2 gaya-fade="1" className="text-2xl md:text-4xl 2xl:text-3xl">
        About
      </h2>
      <h1 className="font-bold mt-1 text-2xl md:text-4xl 2xl:text-2xl" gaya-fade="2">
        me
      </h1>
      <div className="mt-4 " gaya-fade="3">
        <Image
          className="float-left mr-6  w-40 md:w-72 "
          src={pic}
          alt={'me'}
          priority
          style={{
            maxWidth: 'auto',
            height: 'auto',
            borderRadius: '5%',
            display: 'flex',
          }}
        />
      </div>

      <article className="max-w-5xl mt-4 text-gray-700 dark:text-gray-200 md:mt-6 md:text-lg 2xl:text-xl ">
        <p gaya-fade="5" className="mb-4 leading-6">
          Hello, my name is yogi. i started programming in early high school, which is the start of
          the pandemic that is currently sweeping the world. Initially, I was just writing basic
          code and progressed to HTML and CSS.
        </p>
        <p gaya-fade="6" className="mb-4 leading-6">
          There are a lot of things and technologies to learn in frontend development and I am
          motivated to learn as much as possible. I enjoy learning something new and getting
          feedback to make myself better and improve.
        </p>
        <p gaya-fade="7" className="mb-4 leading-6">
          The website will showcase my projects and blogs. I &apos;ve tried to make the code easy to
          understand and will use pre-installed components that can be reused across platforms. My
          studio work will be displayed when it is finished on this website. Having spent a lot of
          time and effort on it, I will treat it as one of my own creations.
        </p>
      </article>
    </section>
  );
};
