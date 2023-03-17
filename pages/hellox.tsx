import clsx from 'clsx';
import {useSession} from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import {Accent1} from '../components/links/Accent';
import UnstyledLink from '../components/links/UnstyledLink';
import pic from '../public/me.webp';

export default function HelloPage() {
  const {data: session} = useSession();

  return (
    <Layout pageTitle={session ? `${session.user?.name}` : `hellow , please sign in`}>
      <div className="min-h-[120vh] pt-28">
        <div className="layout">
          {links.map((link) => (
            <UnstyledLink
              key={link.href}
              href={link.href}
              className={clsx(
                'inline-flex items-center gap-1 text-base font-medium md:text-base',
                'text-gray-600 hover:text-sky-500 dark:text-gray-400 dark:hover:text-sky-500',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors mr-3'
              )}>
              {/* <IoNewspaperSharp className="shrink-0" /> */}
              <span>{link.text}</span>
            </UnstyledLink>
          ))}
        </div>
        <div className="profil me sm:layout">
          <>
            <div className="bg-zinc-600 justify-center flex mt-5 rounded aspect-video max-h-80 w-full">
              {!session ? (
                <h1 className="self-center -rotate-12">Sign in to show your profile</h1>
              ) : (
                ''
              )}
            </div>
            <div className="relative flex justify-center md:justify-start md:ml-10">
              <div className="absolute items-center -top-24 lg:-top-16 mt-5 flex flex-col-reverse md:flex-row-reverse">
                <h1 className="text-xl self-center md:mt-5 md:ml-5 lg:mt-0">
                  <Accent1>
                    {session?.user?.name} {!session && 'Muhammad Yogi Firman Syah'}
                  </Accent1>
                </h1>
                <div
                  className="w-44 flex flex-1 justify-center cursor-pointer dark:bg-gray-900 p-1 rounded-full"
                  contextMenu="return false">
                  <Image
                    src={session?.user?.image || pic}
                    alt="yogyy"
                    width={168}
                    height={168}
                    className="rounded-full bg-white dark:bg-gray-900 active:scale-95"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </Layout>
  );
}

const links = [
  {href: '/posts', text: 'posts'},
  {href: '/blogs', text: 'blogs'},
  {href: '/users', text: 'users'},
  {href: '/product', text: 'product'},
  {href: '/docs', text: 'docs'},
  {href: '/news', text: 'news'},
  {href: '/dashboard', text: 'dashboard'},
  {href: '/events', text: 'events'},
  {href: '/comments', text: 'comments'},
];
