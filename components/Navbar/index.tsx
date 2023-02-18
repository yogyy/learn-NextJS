import clsx from 'clsx';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import useLoaded from '../../pages/hooks/useLoaded';
import ThemeButton from '../button/ThemeButton';
import {LogoLink} from '../links/LogoName';
// import styles from './Navbar.module.css';

function NavbarLink({href, label}: dink) {
  const router = useRouter();
  const arrOfRoute = router.route.split('/');
  const baseRoute = '/' + arrOfRoute[1];
  return (
    <div className={router.pathname === href ? 'active' : ''}>
      <Link href={href} passHref>
        <span
          className={clsx(
            'transition-colors',
            'bg-gradient-to-tr from-blue-200 to-sky-500 bg-clip-text',
            href === baseRoute && '!from-primary-300 to-primary-400 bg-clip-text text-transparent'
          )}>
          {label}
        </span>
      </Link>
    </div>
  );
}

export default function Navbar() {
  const isLoaded = useLoaded();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <div
      className={`bg-white transition-colors dark:bg-gray-900 font-bold w-full fixed block z-10 ${
        scrolled ? 'shadow-md' : ''
      } `}>
      <div className="h-2 bg-gradient-to-tr from-sky-300 via-sky-500 to-sky-700" />

      {/* .ul {
  display: flex;
  gap: 30px;
  padding: 0;
} */}

      <nav
        className={clsx(
          `layout sticky top-0 z-50 transition-shadow flex py-4 items-center`,
          isLoaded && 'fade-in-start'
        )}>
        <p className="mr-auto text-2xl bg-transparent">
          <Link href="/">
            <LogoLink />
          </Link>
        </p>
        <ul className="flex ml-9 gap-9 ">
          {links.map((link) => (
            <li className="hidden sm:block" key={link.href}>
              <NavbarLink href={link.href} label={link.label} />
            </li>
          ))}
          {/* <li className={styles.list}>
            <Link className={styles.item} href="/">
              Home
            </Link>
          </li>
          <li className={styles.list}>
            <Link className={styles.item} href="/blogs">
              Blog
            </Link>
          </li>
          <li className={styles.list}>
            <Link className={styles.item} href={'/users'}>
              Users
            </Link>
          </li> */}
        </ul>
        <ThemeButton />
      </nav>
    </div>
  );
}

type dink = {
  href: string;
  label: string;
};

const links = [
  {href: '/', label: 'Home'},
  {href: '/blogs', label: 'Blog'},
  // {href: '/projects', label: 'Projects'},
  // {href: '/library', label: 'Library'},
  {href: '/about', label: 'About'},
];
