import clsx from 'clsx';
import {useSession} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import {ThemeButtonHeadless} from '../button/ThemeButton';
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
      className={`bg-white transition-colors dark:bg-gray-900 font-bold w-full fixed block z-10 ${
        !scrolled ? 'shadow-md' : ''
      } `}>
      <div className="h-2 bg-gradient-to-tr from-sky-300 via-sky-500 to-sky-700" />
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
        <Menu as="div" className="relative ml-4 ">
          <Menu.Button className="flex focus-within::border-sky-600">
            {session ? (
              <Image
                src={session?.user?.image || ''}
                alt={'you'}
                width={36}
                height={36}
                className="rounded-full"
                priority
              />
            ) : (
              'login'
            )}
          </Menu.Button>
          <Transition
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Menu.Items className="absolute flex right-0 flex-col w-[60vw] min-w-[200px] text-sm border bg-white dark:bg-gray-900 border-sky-300 dark:border-sky-700 mt-2 rounded-md py-2 focus:outline-none">
              <Menu.Item>
                {({active}) => (
                  <Link className={`pl-5 py-2 ${active && 'bg-blue-500'}`} href="/">
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
                    href={!session ? '/api/auth/signin' : '/api/auth/signout'}
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
