
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full backdrop-blur-md border border-accent/20 flex items-center justify-center transition-all duration-500 hover:border-accent/50 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
          }`}
        >
          <div className="w-full h-full rounded-full bg-accent/20 flex items-center justify-center text-xs">
            ☀
          </div>
        </div>
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isDark ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
        >
          <div className="w-full h-full rounded-full bg-gray-800/20 flex items-center justify-center text-xs">
            ◐
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
