import clsx from 'clsx';
import {useTheme} from 'next-themes';
import React from 'react';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function ThemeButton() {
  const {theme, setTheme} = useTheme();
  return (
    <div className="relative ml-4 ">
      <select
        className="rounded-md p-1 bg-white dark:bg-gray-900"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      {/* <ul>
        <li>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            theme?
          </select>
          <ul className="dropdown ">
            <li onClick={() => setTheme('dark')}>dark</li>
            <li onClick={() => setTheme('light')}>light</li>
          </ul>
        </li>
      </ul> */}
    </div>
  );
}

// still has error when refresh on light
export function ThemeButtonOld({className, ...rest}: ThemeButtonProps) {
  const {theme, setTheme} = useTheme();
  return (
    <button
      className={clsx(
        'rounded-md p-2 focus:outline-none md:p-2.5',
        'border dark:border-gray-600',
        'hover:border-primary-300 hover:text-primary-300 dark:hover:border-primary-300 dark:hover:text-primary-300',
        'focus-visible:border-primary-300 focus-visible:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300',
        'text-lg md:text-xl',
        className
      )}
      {...rest}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
}

export const Moon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      className="ionicon"
      viewBox="0 0 512 512">
      <path
        d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};

export const Sun = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM1 13v-2h4v2Zm18 0v-2h4v2Zm-8-8V1h2v4Zm0 18v-4h2v4ZM6.35 7.75L3.875 5.275l1.4-1.4L7.75 6.35Zm12.375 12.375L16.25 17.65l1.4-1.4l2.475 2.475ZM17.65 7.75l-1.4-1.4l2.475-2.475l1.4 1.4ZM5.275 20.125l-1.4-1.4L6.35 16.25l1.4 1.4ZM12 12Z"
      />
    </svg>
  );
};
