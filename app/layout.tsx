import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Marine 2 Early Access Countdown | Warhammer 40,000",
  description:
    "Unofficial countdown to the early access of Space Marine 2 on PC. Join the Adeptus Astartes in the grim darkness of the far future!",
  keywords:
    "Space Marine 2, Warhammer 40000, Adeptus Astartes, countdown, early access, PC game",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg",
    },
  ],
  openGraph: {
    title: "Space Marine 2 Early Access Countdown",
    description:
      "Unofficial countdown to Space Marine 2 early access, advanced access. For the Emperor!",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Marine 2 Early Access Countdown",
    description:
      "Unofficial countdown to Space Marine 2 early access. For the Emperor!",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
