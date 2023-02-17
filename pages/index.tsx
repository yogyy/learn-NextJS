import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useRef} from 'react';
// import {Porto} from '../components/Porto/porto';
import Typewriter from 'typewriter-effect';
import {Tech} from '../components/Porto/tech';
import clsx from 'clsx';
import ButtonLink from '../components/links/ButtonLink';
import UnstyledLink from '../components/links/UnstyledLink';
import {About} from './about';
import useLoaded from './hooks/useLoaded';
import Marquee from 'react-fast-marquee';
import {LogoLink} from '../components/links/LogoName';

export default function Home() {
  const isLoaded = useLoaded();
  const about = useRef(null);
  useEffect(() => {
    AOS.init({
      // disable: true,
      once: false,
      duration: 700,
    });
    window.scrollTo(0, Number(localStorage.getItem('scrollPos')) || 0);
    return window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);
  useEffect(() => {
    // Save scroll position on beforeunload event
    const saveScrollPos = (): void => {
      localStorage.setItem('scrollPos', String(window.pageYOffset));
    };
    window.addEventListener('beforeunload', saveScrollPos);

    return () => {
      window.removeEventListener('beforeunload', saveScrollPos);
    };
  }, []);

  return (
    <Layout pageTitle={'yogyy'}>
      <section
        className={clsx('h-screen flex flex-col justify-center', isLoaded && 'fade-in-start')}>
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
            <div className="group relative">
              <div
                className={clsx(
                  'absolute -inset-0.5 animate-tilt rounded blur',
                  'bg-gradient-to-r from-primary-300 to-primary-400',
                  'dark:from-primary-200 dark:via-primary-300',
                  'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                )}
              />
              <ButtonLink href="#about">Read the blog</ButtonLink>
            </div>
            <ButtonLink href="/about">Learn more about me</ButtonLink>
          </div>
          <div
            gaya-fade="7"
            data-aos="fade-up"
            data-aos-delay="700"
            className="mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8">
            <UnstyledLink
              href="/"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}>
              {/* <IoNewspaperSharp className="shrink-0" /> */}
              <span>Resume</span>
            </UnstyledLink>
            <UnstyledLink
              href="https://twitter.com/yogyy"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}>
              {/* <SiTwitter className="shrink-0 transition-colors group-hover:text-[#1da1f2]" /> */}
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
              {/* <SiGithub className="shrink-0" /> */}
              <span>constantine</span>
            </UnstyledLink>
            <UnstyledLink
              href="/users"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}>
              {/* <SiGithub className="shrink-0" /> */}
              <span>user</span>
            </UnstyledLink>
            <UnstyledLink
              href="/posts"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}>
              {/* <SiGithub className="shrink-0" /> */}
              <span>post</span>
            </UnstyledLink>
          </div>
        </article>
      </section>
      <section>
        <Marquee
          className={clsx(
            'text-sky-500 dark:text-sky-800 layout absolute runningtext text-5xl -z-10',
            isLoaded && 'fade-in-start'
          )}
          style={{top: '100px'}}
          gradient={false}>
          <span gaya-fade="4" className={``}>
            Muhammad
          </span>
          <span className="w-9"></span>
          <span gaya-fade="5" className="runningtextBold">
            yogi
          </span>
          <span className="w-9"></span>
          <span gaya-fade="4" className={``}>
            firman
          </span>
          <span className="w-9"></span>
          <span gaya-fade="5" className="runningtextBold">
            syah
          </span>
          <span className="w-9"></span>
          <span gaya-fade="4" className={``}>
            Muhammad
          </span>
          <span className="w-9"></span>
          <span gaya-fade="5" className="runningtextBold">
            yogi
          </span>
          <span className="w-9"></span>
          <span gaya-fade="4" className={``}>
            firman
          </span>
          <span className="w-9"></span>
          <span gaya-fade="5" className="runningtextBold">
            syah
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
        {/* <article className="mx-auto layout min-h-main py-20">
          <div className={styles.timeline}>
            <div className={`${styles.container} ${styles.right}`}>
              <div className={styles.titik}>♦</div>
              <div className={styles.text}>
                <h2>SMKN 2 Kab.Tangerang</h2>
                <small>2019 - 2021</small>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                <span className={styles.rightArrow}></span>
              </div>
            </div>
            <div className={`${styles.container} ${styles.right} ${styles.lefts1}`}>
              <div className={styles.titik}>♦</div>
              <div className={styles.text}>
                <h2>Self Taught</h2>
                <small>2021 - now</small>
                <p>Lorem ipsum dolor sit amet. </p>
                <span className={styles.rightArrow}></span>
              </div>
            </div>
            <div className={`${styles.container} ${styles.left} ${styles.lefts2}`}>
              <div className={styles.titik}>♦</div>
              <div className={styles.text}>
                <h2>Self Taught</h2>
                <small>2021 - now</small>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit</p>
                <span className={styles.leftArrow}></span>
              </div>
            </div>
          </div>
        </article> */}
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
