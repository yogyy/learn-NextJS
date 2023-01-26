import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import pic from '../public/me.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: false,
      duration: 1200,
    });
    window.scrollTo(0, 0);
  }, []);

  const fullName = 'Muhammad Yogi Firman Syah';
  return (
    <Layout pageTitle={'yogyy'}>
      <div className={styles.content}>
        <div className={styles.content_intro}>
          <div data-aos="zoom-in" className={styles.bungkusImg}>
            <Image
              className={styles.img}
              src={pic}
              alt={'me'}
              priority
              style={{
                maxWidth: '100% ',
                height: 'auto',
                borderRadius: '50%',
                display: 'flex',
                border: '2px white solid',
              }}
            />
          </div>
          <div className={styles.intro}>
            <h1>hello \∘</h1>
            <h2>
              I'm <span className={styles.fullname}>yogyy</span>
            </h2>
            <h3>i'm a Front End Web Dev</h3>
          </div>
        </div>
      </div>
      <div className={styles.content1}>
        <div className={styles.about}>
          <h1>About 🤷‍♂️</h1>
          <p>
            Hello, my name is {fullName}, I'm 20 years old now , I started my web-development
            journey in 2021 when I took a year off after high school. At that time, I was learning
            by doing, I know a lot about the fundamentals of web development, and the most important
            thing is I got a new burning passion to this day.
          </p>
          <p>
            Fast forward to today, I'm still enjoying upgrading my new skills, learning up-to-date
            new tech stack, and I make sure that I've learned the fundamentals before.
          </p>
        </div>
        <div className={styles.education}>
          <h1>Education 📚</h1>
          <div className={styles.timeline}>
            <div className={`${styles.container} ${styles.right}`}>
              <div className={styles.titik}>♦</div>
              <div data-aos="fade-left" className={styles.text}>
                <h2>SMK N2 Kab. Tangerang</h2>
                <small>2019 - 2021</small>
                <p>Lorem ipsum dolor sit amet.</p>
                <span className={styles.rightArrow}></span>
              </div>
            </div>
            <div className={`${styles.container} ${styles.right} ${styles.lefts1}`}>
              <div className={styles.titik}>♦</div>
              <div data-aos="fade-left" className={styles.text}>
                <h2>Self Taught</h2>
                <small>2021 - now</small>
                <p>Lorem ipsum dolor sit amet.</p>
                <span className={styles.rightArrow}></span>
              </div>
            </div>
            <div className={`${styles.container} ${styles.left} ${styles.lefts2}`}>
              <div className={styles.titik}>♦</div>
              <div data-aos="fade-right" className={styles.text}>
                <h2>Self Taught</h2>
                <small>2021 - now</small>
                <p>Lorem ipsum dolor sit amet.</p>
                <span className={styles.leftArrow}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
