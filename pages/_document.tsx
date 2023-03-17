import clsx from 'clsx';
import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={clsx(
          'bg-gradient-to-br from-gray-50 to-sky-50',
          'dark:bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-900 dark:to-black',
          'transition-colors text-gray-700 dark:text-gray-200'
        )}>
        <Main />
        <NextScript />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          async></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          async></script>
      </body>
    </Html>
  );
}
