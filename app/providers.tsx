'use client'

import { SessionProvider } from 'next-auth/react'

/**
 * Providers component wraps the app with NextAuth session provider
 */
export function Providers({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>
}

