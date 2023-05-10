import clsx from 'clsx';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';

const routes = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
] as const;

export function Header({ currentPath }: { currentPath: string }) {
  return (
    <header className="flex w-full items-center bg-neutral-50 px-4 py-1 shadow-sm dark:border-b dark:border-neutral-700 dark:bg-neutral-950">
      {routes.map((route) => {
        const isActive = route.route === currentPath;
        return (
          <Link
            href={route.route}
            key={route.route}
            passHref
            className={clsx(
              'text-md mr-6 flex h-10 items-center justify-center transition',
              isActive && 'cursor-default text-blue-500 dark:text-blue-400',
              !isActive && 'cursor-pointer text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200'
            )}
          >
            {route.name}
          </Link>
        );
      })}
      <ThemeSwitcher />
    </header>
  );
}
