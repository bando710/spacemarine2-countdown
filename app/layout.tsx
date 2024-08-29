import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Space Marines 2 Countdown',
  description: 'Countdown to Space Marines 2 release',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}