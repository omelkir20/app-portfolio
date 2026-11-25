'use client';

import { useEffect, useState } from 'react';

// Mode sombre : le thème est stocké dans localStorage et appliqué via data-theme sur <html>.
export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* stockage indisponible : on ignore */
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label="Basculer entre le mode clair et le mode sombre"
    >
      {theme === 'dark' ? '☀️ Mode clair' : '🌙 Mode sombre'}
    </button>
  );
}
