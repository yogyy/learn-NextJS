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
    <button onClick={handleThemeToggle}>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</button>
  );
};

export default ThemeButton;
