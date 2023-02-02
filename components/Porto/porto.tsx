// import Image from 'next/image';
import Link from 'next/link';
import React, {useState} from 'react';
// import me from '../../public/me.webp';
import styles from './porto.module.css';

export const Porto = () => {
  const [porto, setPorto] = useState(false);
  return (
    <div>
      <div className={styles.btnContainer}>
        <button className={styles.button_1} onClick={() => setPorto(!porto)}>
          My {porto ? <>Project</> : <>Slicing UI</>}
        </button>
      </div>
      <div className={styles.bungkus}>
        <div className={styles.portoContainer}>
          {porto ? <KumpulanProject /> : <KumpulanSlicingUI />}
        </div>
      </div>
    </div>
  );
};

const KumpulanProject = () => {
  return (
    <>
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
      <Project />
    </>
  );
};
const KumpulanSlicingUI = () => {
  return (
    <>
      <SlicingUI />
      <SlicingUI />
      <SlicingUI />
      <SlicingUI />
      <SlicingUI />
      <SlicingUI />
    </>
  );
};

// const Project = ({title, src, alt}: any) => {
const Project = () => {
  return (
    <div className={styles.containerProject}>
      <p>My Project</p>
      <div className={styles.project}>
        {/* <Image alt={alt} src={src} width={400} height={200} style={{}} /> */}
      </div>
      <h3>judul</h3>
      <div className={styles.cont_button2}>
        <Link className={styles.button_2} href="/">
          code
        </Link>
        <Link className={styles.button_2} href="/">
          demo
        </Link>
      </div>
    </div>
  );
};
// const SlicingUI = ({title, src, alt}: any) => {
const SlicingUI = () => {
  return (
    <div className={styles.containerProject}>
      <p>My Slicing UI</p>
      <div className={styles.project}>
        {/* <Image alt={alt} src={src} width={400} height={200} style={{}} /> */}
      </div>
      <h3>judul</h3>
      <div className={styles.cont_button2}>
        <Link className={styles.button_2} href="/">
          code
        </Link>
        <Link className={styles.button_2} href="/">
          demo
        </Link>
      </div>
    </div>
  );
};
