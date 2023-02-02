import React from 'react';
import styles from './tech.module.css';
import Logonextjs from '../tech/nextjs';
import Logohtml from '../tech/html';
import Logocss from '../tech/css';
import Logojs from '../tech/js';
import Logots from '../tech/ts';
import Logoreact from '../tech/react';
import {TailwindLogo} from '../tech/tailwind';
import {LogoGit} from '../tech/git';
import {LogoFigma} from '../tech/figma';

export const Tech = () => {
  return (
    <div className={styles.tech}>
      <h1>My Skills</h1>
      <p>i&lsquo;m currently using these</p>
      <div className={styles.ul_container}>
        <ul className={styles.ul}>
          <li>
            <div className={styles.html}>
              <Logohtml />
            </div>
          </li>
          <li>
            <div className={styles.css}>
              <Logocss />
            </div>
          </li>
          <li>
            <div className={styles.js}>
              <Logojs />
            </div>
          </li>
          <li>
            <div className={styles.ts}>
              <Logots />
            </div>
          </li>
          <li>
            <div className={styles.react}>
              <Logoreact />
            </div>
          </li>
          <li className={styles.next}>
            <div>
              <Logonextjs />
            </div>
          </li>
          <li className={styles.tailwind}>
            <div>
              <TailwindLogo />
            </div>
          </li>
          <li className={styles.git}>
            <div>
              <LogoGit />
            </div>
          </li>
          <li className={styles.figma}>
            <div>
              <LogoFigma />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
