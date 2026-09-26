import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Modules from '@/components/Modules';
import Commands from '@/components/Commands';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Modules />
        <Commands />
        <Team />
      </main>

      <Footer />
    </div>
  );
}
