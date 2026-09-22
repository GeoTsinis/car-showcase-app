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
      <body className="relative bg-white text-black-100">{children}</body>
    </html>
  );
}
