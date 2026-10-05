import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Albums from '@/components/Albums';
import Tour from '@/components/Tour';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Albums />
      <Tour />
      <Gallery />
      <Footer />
    </div>
  );
}
