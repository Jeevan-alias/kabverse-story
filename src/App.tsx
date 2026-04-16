import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Hero from './components/Hero';
import ScrollStory from './components/ScrollStory';
import About from './components/About';
import Services from './components/Services';
import AuraPortfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import { Contact, Footer } from './components/ContactFooter';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black text-white selection:bg-gold-primary selection:text-black cinematic-scroll">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <>
          <nav className="fixed top-0 left-0 w-full z-50 p-10 flex justify-between items-center pointer-events-none">
            <div className="flex items-center space-x-2 pointer-events-auto">
              <span className="text-2xl font-cinzel font-black tracking-widest uppercase text-white">
                Kabir<span className="text-gold-primary">Verse</span>
              </span>
            </div>
          </nav>

          <main>
            <Hero />
            <ScrollStory />
            <About />
            <Services />
            <Pricing />
            <AuraPortfolio />
            <Contact />
          </main>
          
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
