'use client';
import { clsx } from 'clsx';
import { useIsServer } from 'hooks';
import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  const isServer = useIsServer();

  if (isServer) return null;
  return (
    <div
      className="i-heroicons-auto ml-auto cursor-pointer rounded p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
      onClick={() => {
        if (theme === 'light') setTheme('dark');
        if (theme === 'dark') setTheme('system');
        if (theme === 'system') setTheme('light');
      }}
    >
      <div
        className={clsx('text-lg', {
          'i-[ph-moon-fill]': theme === 'dark',
          'i-[heroicons-sun]': theme === 'light',
          'i-[gg-dark-mode]': theme === 'system',
        })}
      />
    </div>
  );
}
