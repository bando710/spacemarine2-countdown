import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Space Marine 2 Early Unlock Countdown | Warhammer 40,000',
  description: 'Unofficial countdown to the early unlock of Space Marine 2 on PC. Join the Adeptus Astartes in the grim darkness of the far future!',
  keywords: 'Space Marine 2, Warhammer 40000, Adeptus Astartes, countdown, early unlock, PC game',
  openGraph: {
    title: 'Space Marine 2 Early Unlock Countdown',
    description: 'Unofficial countdown to Space Marine 2 PC early unlock. For the Emperor!',
    images: [
      {
        url: 'https://changing-this-with-vercel-link.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Space Marine 2 Countdown',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Space Marine 2 Early Unlock Countdown',
    description: 'Unofficial countdown to Space Marine 2 PC early unlock. For the Emperor!',
    images: ['https://changing-this-with-vercel-link.app/og-image.jpg'],
  },
  robots: 'index, follow',
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