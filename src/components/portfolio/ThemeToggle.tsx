
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 w-14 h-14 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center transition-all duration-500 hover-scale hover:bg-accent/30"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isDark ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
        >
          🌙
        </div>
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-180 scale-0'
          }`}
        >
          ☀️
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
