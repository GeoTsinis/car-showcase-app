import { Navbar, Footer } from '@/components';

import './globals.css';

export const metadata = {
  title: 'Car Showcase App',
  description: 'NextJS project app by GeoTsinis',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className="relative">{children}</body>
      <Footer />
    </html>
  );
}
