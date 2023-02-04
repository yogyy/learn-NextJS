import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import pic from '../public/me.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import {Porto} from '../components/Porto/porto';
import {ageCounter} from '../components/countAge';
import Typewriter from 'typewriter-effect';
import {Tech} from '../components/Porto/tech';
import ContactForm from '../components/Porto/contact';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1200,
    });
    window.scrollTo(0, 0);
  }, []);

  const fullName = 'Muhammad Yogi Firman Syah';
  return (
    <Layout pageTitle={'yogyy'}>
      <div className={styles.content}>
        <div className={styles.content_intro}>
          <div className={styles.imgContainer}>
            <div data-aos="zoom-in" className={styles.test}>
              <div className={styles.bungkusImg}>
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
              </div>
            </div>
          </div>

          <div className={styles.intro}>
            <div className={styles.bungkusH1}>
              <h1>
                hello <span className={styles.wave}>\</span>∘
              </h1>
            </div>
            <div className={styles.bungkusFullname}>
              I&apos;m
              <span className={styles.fullname}>
                <Typewriter
                  options={{
                    strings: ['yogyy', 'a Frontend Engineer', 'a Web Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.about}>
          <h1>About 🤷‍♂️</h1>
          <p>
            Hello, my name is {fullName}, I&apos;m {ageCounter('2003-02-02')} years old now , I
            started my web-development journey in 2021 when I took a year off after high school. At
            that time, I was learning by doing, I know a lot about the fundamentals of web
            development, and the most important thing is I got a new burning passion to this day.
          </p>
          <p>
            Fast forward to today, I&apos;m still enjoying upgrading my new skills, learning
            up-to-date new tech stack, and I make sure that I&apos;ve learned the fundamentals
            before.
          </p>
        </div>
        <div className={styles.education}>
          <h1>Education 📚</h1>
          <div className={styles.timeline}>
            <div className={`${styles.container} ${styles.right}`}>
              <div className={styles.titik}>♦</div>
              <div data-aos="fade-left" className={styles.text}>
                <h2>SMKN 2 Kab.Tangerang</h2>
                <small>2019 - 2021</small>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</p>
                <span className={styles.rightArrow}></span>
              </div>
            </div>
            <div className={`${styles.container} ${styles.right} ${styles.lefts1}`}>
              <div className={styles.titik}>♦</div>
              <div data-aos="fade-left" className={styles.text}>
                <h2>Self Taught</h2>
                <small>2021 - now</small>
                <p>Lorem ipsum dolor sit amet. </p>
                <span className={styles.rightArrow}></span>
              </div>
            </div>
            <div className={`${styles.container} ${styles.left} ${styles.lefts2}`}>
              <div className={styles.titik}>♦</div>
              <div data-aos="fade-right" className={styles.text}>
                <h2>Self Taught</h2>
                <small>2021 - now</small>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit</p>
                <span className={styles.leftArrow}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tech}>
        <Tech />
      </div>

      <div className={styles.porto}>
        <Porto />
      </div>
      <ContactForm />
    </Layout>
  );
}
