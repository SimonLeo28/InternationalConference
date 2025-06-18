import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tech Global 2025',
  description: 'AIEMS Tech Global 2025',
  generator: 'Technical Team',
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
