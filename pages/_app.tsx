import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {SessionProvider} from 'next-auth/react';
import {ThemeProvider} from 'next-themes';

export default function App({Component, pageProps}: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
