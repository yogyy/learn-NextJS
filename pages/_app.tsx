import '/styles/globals.css';
import type {AppProps} from 'next/app';
import {SessionProvider} from 'next-auth/react';
import {ThemeProvider} from 'next-themes';

import {Router} from 'next/router';
import nProgress from 'nprogress';
import '/styles/nprogress.css';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

export default function App({Component, pageProps}: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
