import Footer from './components/Footer/footer';
import Hero from './components/Hero/hero';
import Navigation from './components/Navigation/navigation';

export default function Home() {
  return (
    <main className='bg-base-content brightness-150, contrast-150 min-h-screen flex flex-col justify-between'>
      <Navigation />
      <Hero />
      <Footer />
    </main>
  );
}
