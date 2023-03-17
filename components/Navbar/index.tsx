import clsx from 'clsx';
import {signOut, useSession} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {ThemeButtonHeadless, ThemeButtonOld} from '../button/ThemeButton';
// import {LogoLink} from '../links/LogoName';
import UnstyledLink from '../links/UnstyledLink';
import {Menu, Transition} from '@headlessui/react';
import {LogoLink} from '../links/LogoName';

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(true);
  const {data: session} = useSession();

  const router = useRouter();
  const arrOfRoute = router.route.split('/');
  const baseRoute = '/' + arrOfRoute[1];

  const handleLogout = () => {
    signOut();
  };
  const handleLogin = () => {
    window.open('/auth/signin', '_blank');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`font-bold w-full fixed block z-10 ${
        !scrolled
          ? 'bg-gradient-to-br from-gray-50 to-sky-50 transition-colors dark:bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-900 dark:to-black'
          : ''
      } `}>
      <nav
        className={clsx(
          `layout sticky top-0 z-50 transition-shadow flex py-4 items-center min-w-[200px]`
        )}>
        <p className=" text-2xl bg-transparent sm:hidden">
          <Link href="/">
            <LogoLink />
          </Link>
        </p>
        <ul className="flex ml-9 gap-9 mr-auto">
          {links.map(({label, href}: dink) => (
            <li className="hidden sm:block" key={`${href} ${label}`}>
              <UnstyledLink
                href={href}
                passHref
                className={clsx(
                  'rounded-sm py-1 transition-colors',
                  'text-black dark:text-white',
                  'group dark:hover:text-primary-300',
                  'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
                )}>
                <span
                  className={clsx(
                    'transition-colors',
                    'bg-gradient-to-tr from-blue-200 to-sky-500 bg-clip-text',
                    href === baseRoute &&
                      '!from-primary-300 to-primary-400 bg-clip-text text-transparent'
                  )}>
                  {label}
                </span>
              </UnstyledLink>
            </li>
          ))}
        </ul>
        <ThemeButtonOld />
        <Menu as="div" className="relative ml-4 ">
          <Menu.Button className="flex focus:outline-none">
            <Image
              src={
                session
                  ? session.user?.image ?? ''
                  : 'https://www.svgrepo.com/show/496485/profile-circle.svg'
              }
              alt={session ? session.user?.name ?? '' : 'not login'}
              width={36}
              height={36}
              className="rounded-full active:scale-95 outline active:outline-sky-300 active:outline-1 bg-slate-300 dark:bg-slate-500"
              priority
              draggable={false}
            />
            {/* {session ? (
              <Image
                src={session?.user?.image || ''}
                alt={session?.user?.name || ''}
                width={36}
                height={36}
                className="rounded-full active:scale-95 outline active:outline-sky-300 active:outline-1 "
                priority
                onMouseDown={(e) => e.preventDefault()}
              />
            ) : (
              <Image
                // className="bg-white rounded-full dark:bg-gray-800"
                src="https://www.svgrepo.com/show/496485/profile-circle.svg"
                alt="no login"
                width={40}
                height={40}
                onMouseDown={(e) => e.preventDefault()}
              />
            )} */}
          </Menu.Button>
          <Transition
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Menu.Items
              className={clsx(
                'absolute flex right-0 flex-col w-[60vw] sm:w-[300px] text-sm border  mt-2 rounded-md py-2 focus:outline-none',
                'bg-white dark:bg-gray-900 border-sky-300 dark:border-sky-700'
              )}>
              <Menu.Item>
                {({active}) => (
                  <Link className={`pl-5 py-2 ${active && 'bg-blue-500'}`} href="/hellox">
                    Account settings
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({active}) => (
                  <span className={`${active && 'bg-blue-500'}`}>
                    <ThemeButtonHeadless />
                  </span>
                )}
              </Menu.Item>
              <Menu.Item>
                {({active}) => (
                  <Link
                    // href={(!session && '/api/auth/signin') || (session && '/api/auth/signout')}
                    href=""
                    onClick={session ? handleLogout : handleLogin}
                    className={`py-2 pl-5 ${active && 'bg-blue-500'}`}>
                    {!session && <span className="">Login</span>}
                    {session && <span className="">LogOut</span>}
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
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
