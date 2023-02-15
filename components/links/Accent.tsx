import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export default function Accent({children, className}: AccentType) {
  return (
    <span
      className={clsx(
        className,
        'transition-colors',
        'bg-gradient-to-tr from-blue-200 to-sky-500',
        // 'from-primary-300 to-primary-400 bg-clip-text text-transparent',
        'dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent'
      )}>
      {children}
    </span>
  );
}

export const Accent1 = ({children, className}: AccentType) => {
  return (
    <span
      className={clsx(
        className,
        'transition-colors',
        'bg-gradient-to-tr from-blue-200 to-sky-500',
        'from-primary-300 to-primary-400 bg-clip-text text-transparent'
        // 'dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent'
      )}>
      {children}
    </span>
  );
};
