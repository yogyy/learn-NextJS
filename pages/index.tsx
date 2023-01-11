import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const handleOrder = () => {
    router.replace("/product");
  };
  return (
    <Layout pageTitle={"Home Page"}>
      <div className={styles.content}>
        <h1>Hi, i'm Muhammad Yogi Firman Syah</h1>
        <p>
          I'm a <span className={styles.textgrad}>Frontend</span> Developer
        </p>
        <p>
          Saya adalah seorang website developer yang memiliki kemampuan dalam
          membuat dan mengembangkan situs web yang fungsional dan berkualitas.
          Saya memiliki pengalaman dalam menggunakan berbagai bahasa pemrograman
          seperti <span className={styles.textgrad}>HTML, CSS, JavaScript</span>
          , dan serta framework React seperti NextJS. Saya juga memiliki
          kemampuan dalam menggunakan alat seperti Git, GitHub, dan command line
          untuk mengelola proyek dan mengelola versi kode sumber. Saya senang
          belajar dan selalu terbuka untuk mencoba teknologi baru untuk
          memastikan bahwa situs web yang saya kembangkan selalu menggunakan
          teknologi terbaru dan terbaik
        </p>
        {/* <div>
          <button onClick={handleOrder}>place order</button>
          <Link href={"/posts"}>post page</Link>
        </div> */}
      </div>
      {/* <Image src={"/iamge1.webp"} alt={"gambar1"} width={700} height={400} /> */}
    </Layout>
  );
}
