import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useRef} from 'react';
import Typewriter from 'typewriter-effect';
import {Tech} from '../components/Porto/tech';
import clsx from 'clsx';
import ButtonLink from '../components/links/ButtonLink';
import UnstyledLink from '../components/links/UnstyledLink';
import {About} from './about';
import useLoaded from './hooks/useLoaded';
import Marquee from 'react-fast-marquee';
import {LogoLink} from '../components/links/LogoName';
import {ThemeButtonOld} from '../components/button/ThemeButton';
import {Accent1} from '../components/links/Accent';
import IonIcons from '../components/IonIcons';
import YG from '../components/YG';

export default function Home() {
  const isLoaded = useLoaded();
  const about = useRef(null);
  useEffect(() => {
    AOS.init({
      // disable: true,
      once: true,
      duration: 700,
    });
    // window.scrollTo(0, Number(localStorage.getItem('scrollPos')) || 0);
  }, []);
  // useEffect(() => {
  //   // Save scroll position on beforeunload event
  //   const saveScrollPos = (): void => {
  //     localStorage.setItem('scrollPos', String(window.pageYOffset));
  //   };
  //   window.addEventListener('beforeunload', saveScrollPos);

  //   return () => {
  //     window.removeEventListener('beforeunload', saveScrollPos);
  //   };
  // }, []);

  return (
    <Layout pageTitle={'yogyy - Portofolio'}>
      <section
        className={clsx(' h-screen flex flex-col justify-center', isLoaded && 'fade-in-start')}>
        <article className={`mx-auto layout -mt-14 ${styles.intro}`}>
          <div className={`${styles.bungkusH1}`}>
            <h1 gaya-fade="1">
              <span
                className={`text-sky-500 tracking-widest md:tracking-wide xl:tracking-tight ${styles.greetings}`}>
                hi
              </span>
            </h1>
          </div>
          <h2 gaya-fade="2" className=" mt-1">
            You can call me <LogoLink />
          </h2>
          <div className={`mt-1  ${styles.bungkusFullname}`}>
            <h3 gaya-fade="3" className="flex flex-wrap">
              I&apos;m a <span className="mr-2"> </span>
              <span className={`flex flex-wrap text-sky-500 ${styles.fullname}`}>
                <Typewriter
                  gaya-fade="4"
                  options={{
                    strings: ['Frontend Engineer', 'Web Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h3>
          </div>
          <p gaya-fade="5" className="mt-4 max-w-4xl md:mt-6 md:text-lg 2xl:text-xl">
            I work with react js and next js. Lorem ipsum dolor sit. <br /> Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Eveniet.
          </p>
          <div gaya-fade="6" className="mt-8 flex flex-wrap gap-4 md:!text-lg">
            <ThemeButtonOld />
            <div className="group relative">
              <div
                className={clsx(
                  'absolute -inset-1 animate-tilt rounded blur',
                  // 'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 via-green-700 to-gray-300',
                  // 'dark:from-sky-200 dark:via-sky-300',
                  'opacity-70 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                )}
              />
              <ButtonLink href="#about">
                <Accent1>Read the blog</Accent1>
              </ButtonLink>
            </div>
            <ButtonLink href="/about">Learn more about me</ButtonLink>
          </div>
          <div
            gaya-fade="7"
            data-aos="fade-up"
            data-aos-delay="700"
            className="mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8">
            <UnstyledLink
              href="/hellox"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}>
              <IonIcons name="newspaper" />
              <span>Resume</span>
            </UnstyledLink>
            <UnstyledLink
              href="https://twitter.com/yogyxx"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}>
              <span className="shrink-0 transition-colorsflex group-hover:text-[#1da1f2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 "
                  viewBox="0 0 512 512"
                  fill="currentColor">
                  <title>Logo Twitter</title>
                  <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                </svg>
              </span>
              <span>@yogyy</span>
            </UnstyledLink>
            <UnstyledLink
              href="https://github.com/yogyy"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}>
              <IonIcons name="logo-github" />
              <span>Constantine</span>
            </UnstyledLink>
          </div>
        </article>
      </section>
      <YG
        className={clsx(
          'absolute bottom-0 right-6',
          'translate-y-[37%] transform-gpu',
          'w-[calc(100%-3rem)] md:w-[600px] 2xl:w-[900px]',
          'z-[-1] opacity-70 dark:opacity-40'
        )}
      />
      <section>
        <Marquee
          className={clsx(
            'text-sky-500 dark:text-sky-800 layout absolute runningtext text-5xl -z-10',
            isLoaded && 'fade-in-start'
          )}
          style={{top: '100px'}}
          gradient={false}>
          <span gaya-fade="4" className={``}>
            Batman
          </span>
          <span className="w-9"></span>
          <span gaya-fade="5" className="runningtextBold">
            The Joker
          </span>
          <span className="w-9"></span>
          <span gaya-fade="4" className={``}>
            The Penguin
          </span>
          <span className="w-9"></span>
          <span gaya-fade="5" className="runningtextBold">
            Nightwing
          </span>
          <span className="w-9"></span>
          <span gaya-fade="4" className={``}>
            Riddler
          </span>
          <span className="w-9"></span>
          <span gaya-fade="5" className="runningtextBold">
            Bane
          </span>
          <span className="w-9"></span>
          <span gaya-fade="4" className={``}>
            Harley Quinn
          </span>
          <span className="w-9"></span>
          <span gaya-fade="5" className="runningtextBold">
            Mister Freeze
          </span>
          <span className="w-9"></span>
        </Marquee>
      </section>
      <section id="about" ref={about} className="relative h-full">
        <article
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          className={`items-center relative md:flex-row md:justify-start md:gap-4 ${styles.about}`}>
          <About />
        </article>
      </section>
      <section className={clsx(`mx-auto layout h-full py-20 `, isLoaded && 'fade-in-start')}>
        <h1 gaya-fade="0">Journey</h1>
        <article className="mt-8">
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6">
              <span
                gaya-fade="2"
                className="absolute flex items-center justify-center w-6 h-6 bg-sky-500 rounded-full -left-3 ring-8 ring-transparent dark:bg-sky-700"></span>
              <h3
                gaya-fade="4"
                className="mb-1 text-lg  font-semibold text-gray-700 dark:text-white">
                Self Taught
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2022 - now
              </time>
              <p gaya-fade="5" className="text-base font-normal text-gray-500 dark:text-gray-400">
                Most people believe that learning how to program is a <u>difficult</u> and{' '}
                <u>time-consuming</u> task. In reality, this is not always the case. In fact, with
                the right approach and some hard work, you can learn how to program without any
                prior experience whatsoever.
              </p>
            </li>
            <li className="ml-6">
              <span
                gaya-fade="2"
                className="absolute flex items-center justify-center w-6 h-6 bg-sky-500 rounded-full -left-3 ring-8 ring-transparent dark:bg-sky-700"></span>
              <h3
                gaya-fade="4"
                className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                SMKN 2 Kab. Tangerang
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                2019- 2022{' '}
              </time>
              <p gaya-fade="5" className="text-base font-normal text-gray-500 dark:text-gray-400">
                &apos;Diburu karna mutu, Teratas karna kualitas.&apos; idk, their&apos;s moto
              </p>
            </li>
          </ol>
        </article>
      </section>
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className={`layout py-20 `}>
        <Tech />
      </section>

      {/* <div className={`layout ${styles.porto}`}>
        <Porto />
      </div> */}
    </Layout>
  );
}
