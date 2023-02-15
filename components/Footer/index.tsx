import {useRouter} from 'next/router';
import React, {useState} from 'react';
import CustomLink from '../links/CustomLink';
import {LogoLink} from '../links/LogoName';
import UnstyledLink from '../links/UnstyledLink';
import ContactForm from '../Porto/contact';

import styles from './Footer.module.css';

export function OldFooter() {
  const router = useRouter();
  function otHome() {
    if (window.location.pathname === '/') {
      window.scroll({top: 0, behavior: 'smooth'});
    } else {
      return router.push('/');
    }
  }
  function otUser() {
    if (window.location.pathname === '/users') {
      window.scroll({top: 0, behavior: 'smooth'});
    } else {
      return router.push('/users');
    }
  }
  function otBlogs() {
    if (window.location.pathname === '/blogs') {
      window.scroll({top: 0, behavior: 'smooth'});
    } else {
      return router.push('/blogs');
    }
  }

  return (
    <div className={styles.container}>
      <footer className={styles.footer}>
        <p className={styles.p}>@yogyy</p>
        <ul className={styles.ul}>
          <li className={styles.list}>
            <button className={styles.button89} type="button" onClick={otHome}>
              home
            </button>
          </li>
          <li className={styles.list}>
            <button className={styles.button89} onClick={otUser}>
              users
            </button>
          </li>
          <li className={styles.list}>
            <button className={styles.button89} onClick={otBlogs}>
              blogs
            </button>
          </li>
        </ul>
      </footer>
      <div className={styles.bottomm}>build with 🧠</div>
    </div>
  );
}

export default function Footer() {
  const [showModal, setShowModal] = useState(false);

  function handleClick() {
    setShowModal(!showModal);
  }
  return (
    <>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <footer className="py-4 layout bg-white  dark:bg-gray-900">
        <div className="md:flex md:justify-between">
          <div className="mb-6">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <LogoLink />
            </span>
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center place-items-center gap-6 md:flex-row md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 Constantine .{' '}
            <CustomLink href="https://www.github.com/yogyy">got any feedback?.</CustomLink>
          </span>
          <div className="relative flex text-center space-x-3 md:space-x-6 sm:place-content-center ">
            <button onClick={handleClick}>
              <FiMail />
            </button>
            <UnstyledLink href="https://github.com/yogyy">
              <SiGithub />
            </UnstyledLink>
            <UnstyledLink href="https://facebook.com/iogiy">
              <SiFacebok />
            </UnstyledLink>
            <UnstyledLink href="https://www.linkedin.com/in/yogyy/">
              <SiLinkedIn />
            </UnstyledLink>
            <UnstyledLink href="https://twitter.com/yogyxx">
              <SiTwitter />
            </UnstyledLink>
          </div>
        </div>
        {showModal && (
          <div>
            <div className="pt-7">
              <ContactForm />
            </div>
          </div>
        )}
      </footer>
      <div className="h-2 bg-gradient-to-tr from-sky-300 via-sky-500 to-sky-700" />
    </>
  );
}

const SiGithub = () => {
  return (
    <svg
      className="h-6 w-6 align-middle text-gray-600 hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-600 "
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <title></title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
    </svg>
  );
};

const SiFacebok = () => {
  return (
    <svg
      className="h-6 w-6 align-middle text-gray-600 hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-500"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <title></title>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
    </svg>
  );
};

const SiLinkedIn = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      className="my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-500"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <title></title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
    </svg>
  );
};

const FiMail = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7 align-middle text-gray-600 hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-500"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
};

const SiTwitter = () => {
  return (
    <svg
      className="my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-sky-500 dark:text-gray-300 dark:hover:text-sky-500"
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      role="img"
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg">
      <title></title>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
    </svg>
  );
};
