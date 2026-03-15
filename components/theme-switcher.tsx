'use client';
import clsx from 'clsx';
import { useTheme } from 'next-themes';
import { useIsServer } from '~/hooks';

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const isServer = useIsServer();

  if (isServer) return null;

  const icon = theme === 'dark' ? 'i-[ph-moon-fill]' : theme === 'light' ? 'i-[heroicons-sun]' : 'i-[gg-dark-mode]';

  return (
    <button
      className={clsx(
        icon,
        'ml-auto cursor-pointer text-muted transition-colors duration-150 hover:text-ink text-base p-1.5 rounded',
      )}
      onClick={() => {
        if (theme === 'light') setTheme('dark');
        else if (theme === 'dark') setTheme('system');
        else setTheme('light');
      }}
    />
  );
}
