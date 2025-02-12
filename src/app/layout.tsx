import type { Metadata } from 'next'
import { ThemeProvider } from './providers/ThemeProvider'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import './globals.css'

export const metadata: Metadata = {
  title: 'Marcela Hersch',
  description: 'Pianista y Compositora'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: 'rgb(251,241,236)' }}>
        <ThemeProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
