import React, {useEffect, useState} from 'react';

const ThemeButton = () => {
  const [theme, setTheme] = useState(null || String);

  useEffect(() => {
    // On component mount or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const handleThemeToggle = () => {
    // Whenever the user explicitly chooses light mode
    if (theme === 'dark') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
      setTheme('light');
    } else if (theme === 'light') {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem('theme');
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  };

  return (
    <button
      className="rounded-md mx-5 p-2 focus:outline-none md:p-2.5 border dark:border-gray-600 hover:border-primary-300 hover:text-primary-300 dark:hover:border-primary-300 dark:hover:text-primary-300 focus-visible:border-primary-300 focus-visible:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300 text-lg md:text-xl"
      onClick={handleThemeToggle}>
      {theme === 'dark' ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeButton;

export const Moon = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M9.37 5.51A7.35 7.35 0 0 0 9.1 7.5c0 4.08 3.32 7.4 7.4 7.4c.68 0 1.35-.09 1.99-.27A7.014 7.014 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-2.93 1.81-5.45 4.37-6.49zM12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26a5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"
        />
      </svg>
    </div>
  );
};
export const Sun = () => {
  return (
    <div className="">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM1 13v-2h4v2Zm18 0v-2h4v2Zm-8-8V1h2v4Zm0 18v-4h2v4ZM6.35 7.75L3.875 5.275l1.4-1.4L7.75 6.35Zm12.375 12.375L16.25 17.65l1.4-1.4l2.475 2.475ZM17.65 7.75l-1.4-1.4l2.475-2.475l1.4 1.4ZM5.275 20.125l-1.4-1.4L6.35 16.25l1.4 1.4ZM12 12Z"
        />
      </svg>
    </div>
  );
};
