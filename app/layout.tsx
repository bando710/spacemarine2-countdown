import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "900"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cinzel.className}>
      <body>{children}</body>
    </html>
  );
}
