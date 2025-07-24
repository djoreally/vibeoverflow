'use client';

import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';

export default function NextAuthProvider({
  children,
  session
}: {
  children: React.ReactNode,
  session: any
}) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
