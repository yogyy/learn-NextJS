// import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
// import pic from '../public/me.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import {Porto} from '../components/Porto/porto';
import {ageCounter} from '../components/countAge';
import Typewriter from 'typewriter-effect';
import {Tech} from '../components/Porto/tech';
import ContactForm from '../components/Porto/contact';
import clsx from 'clsx';
import ButtonLink from '../components/links/ButtonLink';
import UnstyledLink from '../components/links/UnstyledLink';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1200,
    });
    return window.scrollTo(0, 0);
  }, []);

  const fullName = 'Muhammad Yogi Firman Syah';
  return (
    <Layout pageTitle={'yogyy'}>
      <div className="dark:bg-zinc-900 justify-center">
        <section className="h-screen mb-20 flex flex-col justify-center">
          <div>
            <div data-aos="zoom-in">
              {/* <div className={styles.bungkusImg}>
                <Image
                  className={styles.img}
                  src={pic}
                  alt={'me'}
                  priority
                  style={{
                    maxWidth: 'auto',
                    height: 'auto',
                    borderRadius: '50%',
                    display: 'flex',
                  }}
                />
              </div> */}
            </div>
          </div>

          <article className={`mx-auto layout -mt-14 ${styles.intro}`}>
            <div className={`${styles.bungkusH1}`}>
              <h1
                data-aos="fade-up"
                data-aos-delay="100"
                className="className='text-2xl md:text-4xl 2xl:text-5xl">
                <span className={styles.greetings}>hello </span>
              </h1>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-bold mt-1 text-3xl md:text-5xl 2xl:text-6xl">
              You can call me{' '}
              <span className="text-blue-300">
                <span className="text-4xl md:text-6xl 2xl:text-7xl ">y</span>ogyy
              </span>
            </h2>
            <div className={`mt-1 text-3xl md:text-5xl 2xl:text-6xl ${styles.bungkusFullname}`}>
              <h3 data-aos="fade-up" data-aos-delay="300" className="flex flex-wrap">
                I&apos;m a
                <span className={`ml-2 ${styles.fullname}`}>
                  <Typewriter
                    data-aos="fade-up"
                    data-aos-delay="400"
                    options={{
                      strings: [' Frontend Engineer', ' Web Developer'],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </h3>
            </div>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="mt-4 max-w-4xl text-gray-700 dark:text-gray-200 md:mt-6 md:text-lg 2xl:text-xl">
              I work with React Ecosystem, and write to teach people how to rebuild and redefine
              fundamental concepts through mental models.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="mt-8 flex flex-wrap gap-4 md:!text-lg">
              <div className="group relative">
                <div
                  className={clsx(
                    'absolute -inset-0.5 animate-tilt rounded blur',
                    'bg-gradient-to-r from-primary-300 to-primary-400',
                    'dark:from-primary-200 dark:via-primary-300',
                    'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                  )}
                />
                <ButtonLink href="#intro">Read the blog</ButtonLink>
              </div>
              <ButtonLink href="/about">Learn more about me</ButtonLink>
            </div>
            <div
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
            </div>
          </article>
        </section>
      </div>
      <div className={styles.content1}>
        <div className={styles.about}>
          <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            About 🤷‍♂️
          </h1>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom-bottom ">
            Hello, my name is {fullName}, I&apos;m {ageCounter('2003-02-02')} years old now , I
            started my web-development journey in 2021 when I took a year off after high school. At
            that time, I was learning by doing, I know a lot about the fundamentals of web
            development, and the most important thing is I got a new burning passion to this day.
          </p>
          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            Fast forward to today, I&apos;m still enjoying upgrading my new skills, learning
            up-to-date new tech stack, and I make sure that I&apos;ve learned the fundamentals
            before.
          </p>
        </div>
        <div className={styles.education}>
          <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            Education 📚
          </h1>
          <div className={styles.timeline}>
            <div className={`${styles.container} ${styles.right}`}>
              <div className={styles.titik}>♦</div>
              <div
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className={styles.text}>
                <h2>SMKN 2 Kab.Tangerang</h2>
                <small>2019 - 2021</small>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                <span className={styles.rightArrow}></span>
              </div>
            </div>
            <div className={`${styles.container} ${styles.right} ${styles.lefts1}`}>
              <div className={styles.titik}>♦</div>
              <div
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className={styles.text}>
                <h2>Self Taught</h2>
                <small>2021 - now</small>
                <p>Lorem ipsum dolor sit amet. </p>
                <span className={styles.rightArrow}></span>
              </div>
            </div>
            <div className={`${styles.container} ${styles.left} ${styles.lefts2}`}>
              <div className={styles.titik}>♦</div>
              <div
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                className={styles.text}>
                <h2>Self Taught</h2>
                <small>2021 - now</small>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit</p>
                <span className={styles.leftArrow}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-anchor-placement="center-bottom" className={styles.tech}>
        <Tech />
      </div>

      <div className={styles.porto}>
        <Porto />
      </div>
      <ContactForm />
    </Layout>
  );
}
