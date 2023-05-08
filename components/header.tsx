import clsx from 'clsx';
import { useIsServer } from 'hooks';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';

const routes = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
];

export function Header() {
  const router = useRouter();
  const isServer = useIsServer();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <header className="flex w-full items-center border-b border-neutral-200 bg-neutral-100 px-4 py-1 dark:border-neutral-700 dark:bg-neutral-900 dark:shadow">
      {routes.map((route) => {
        const isActive = route.route === router.pathname;
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
      {!isServer && (
        <div
          className="ml-auto cursor-pointer rounded p-2 hover:bg-neutral-200 dark:hover:bg-neutral-800"
          onClick={() => (resolvedTheme === 'light' ? setTheme('dark') : setTheme('light'))}
        >
          <div
            className={clsx(resolvedTheme === 'light' ? 'i-[ph-moon-fill]' : 'i-[heroicons-solid-sun]', 'text-lg')}
          />
        </div>
      )}
    </header>
  );
}
