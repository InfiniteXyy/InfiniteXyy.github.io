import clsx from 'clsx';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';

const routes = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
] as const;

export function Header({ currentPath }: { currentPath: string }) {
  return (
    <header
      className="flex w-full items-center px-6 md:px-16 py-3.5"
      style={{ borderBottom: '1px solid var(--rule)', backgroundColor: 'var(--bg)' }}
    >
      <Link
        href="/"
        className="font-display italic font-light text-xl mr-8 leading-none"
        style={{ color: 'var(--accent)' }}
      >
        xyy
      </Link>

      <nav className="flex items-center gap-6 mr-auto">
        {routes.map((route) => {
          const isActive = route.route === currentPath;
          return (
            <Link
              href={route.route}
              key={route.route}
              className={clsx(
                'text-sm font-medium transition-colors duration-150',
                isActive ? 'text-ink' : 'text-muted hover:text-ink',
              )}
            >
              {route.name}
            </Link>
          );
        })}
      </nav>

      <ThemeSwitcher />
    </header>
  );
}
