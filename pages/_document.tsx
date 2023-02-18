import {Html, Head, Main, NextScript} from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white transition-colors dark:bg-gray-900 text-gray-700 dark:text-gray-200">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
