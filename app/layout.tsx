import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ICAINXT-26',
  description: 'International Conference AIEMS 2026',
  generator: 'AIEMS Technical Team',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
