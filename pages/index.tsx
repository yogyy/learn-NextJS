import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';
import pic from '../public/pic.png';
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

  return (
    <Layout pageTitle={'yogyy'}>
      <div className={styles.content}>
        <section className={styles.hero}>
          <Image
            width={300}
            height={300}
            src={pic}
            alt={"it's me"}
            priority
            data-aos="fade-right"
          />
          <div className="name" data-aos="fade-left">
            <h1>Hello \∘</h1>
            <p>
              My name is <span className={styles.namafull}>Muhammad Yogi Firman Syah</span>, <br />
              i'm a <span className={styles.textgrad}>Frontend</span> Developer.
              <br />
              <i>maybe..</i>
            </p>
          </div>
        </section>
      </div>
      <div className={styles.content1} data-aos="flip-up">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti culpa quos blanditiis
          repellendus aliquam eveniet, reprehenderit maxime voluptates? Quisquam iusto et saepe
          illum fuga culpa adipisci impedit. Hic dolor doloremque commodi porro vitae ab veniam!
          Cupiditate quod cum nobis dolorum inventore. Totam nobis id tempora repellat quia qui vero
          ipsum dolores.
        </p>
      </div>
      {/* <Image src={"/iamge1.webp"} alt={"gambar1"} width={700} height={400} /> */}
    </Layout>
  );
}
