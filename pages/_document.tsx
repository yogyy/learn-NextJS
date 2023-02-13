import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html className="dark" lang="en">
      <Head />
      <body className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
