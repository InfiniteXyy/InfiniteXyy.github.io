import type { Metadata } from 'next';
import { Providers } from './providers';

import './globals.css';

export const metadata: Metadata = {
  title: 'Xyy Next',
  description: 'Xyy\'s personal website',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
