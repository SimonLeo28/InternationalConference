import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ICASNXT2025',
  description: 'International Conference AIEMS 2025',
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
