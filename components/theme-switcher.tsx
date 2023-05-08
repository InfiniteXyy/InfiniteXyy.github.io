'use client';
import { useTheme } from 'next-themes';
import { clsx } from 'clsx';
import { useIsServer } from 'hooks';

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  const isServer = useIsServer();

  if (isServer) return null;
  return (
    <div
      className="ml-auto cursor-pointer rounded p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
      onClick={() => (resolvedTheme === 'light' ? setTheme('dark') : setTheme('light'))}
    >
      <div className={clsx(resolvedTheme === 'light' ? 'i-[ph-moon-fill]' : 'i-[heroicons-solid-sun]', 'text-lg')} />
    </div>
  );
}
