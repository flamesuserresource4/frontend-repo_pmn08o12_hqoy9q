import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b12] text-white selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
