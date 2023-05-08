import clsx from 'clsx';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';

const routes = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
];

export function Header({ currentPath }: { currentPath: string }) {
  return (
    <header className="flex w-full items-center border-b border-neutral-200 bg-neutral-100 px-4 py-1 dark:border-neutral-700 dark:bg-neutral-900 dark:shadow">
      {routes.map((route) => {
        const isActive = route.route === currentPath;
        return (
          <Link
            href={route.route}
            key={route.route}
            passHref
            className={clsx(
              'mr-6 flex h-10 items-center justify-center text-lg transition',
              isActive && 'cursor-default font-bold text-blue-500 dark:text-blue-400',
              !isActive && 'cursor-pointer text-neutral-400 hover:text-neutral-700'
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
