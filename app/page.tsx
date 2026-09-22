import { Footer, Hero, Navbar, CarCatalogue } from '@/components';

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Navbar />
      <Hero />
      <CarCatalogue />
      <Footer />
    </main>
  );
}
