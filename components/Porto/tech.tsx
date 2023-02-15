'use client';
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
import Marquee from 'react-fast-marquee';
import {Accent1} from '../links/Accent';

export const Tech = () => {
  return (
    <div className={styles.tech}>
      <div className={styles.h1_skill}>
        <h1>
          <Accent1>My Current Skill</Accent1>
        </h1>
      </div>
      <TechStack />
    </div>
  );
};

export const TechStack = () => {
  return (
    <div className={`h-full ${styles.ul_container}`}>
      <Marquee gradient={false} pauseOnHover={false} play={true}>
        <TechStacks />
      </Marquee>
    </div>
  );
};

export default function TechStacks() {
  return (
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
      <li>
        <div className={styles.next}>
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
  );
}
