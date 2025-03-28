'use client';

import React from 'react';
import './globals.css';
import TopBar from './components/TopBar';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  const pathname = usePathname();
  const isLoginPage = pathname === '/login';

  return (
    <html lang="fr">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>

        {!isLoginPage && <TopBar />}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
