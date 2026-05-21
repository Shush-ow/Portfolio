import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="bg-glow" />
      
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <Hero />
        
        <div className="space-y-48 pb-32">
          <About />
          <TechStack />
          <Works />
        </div>
        
        <footer className="py-20 text-center text-neutral-600 border-t border-white/5">
          © 2026 Shuji. Portfolio
        </footer>
      </div>
    </main>
  );
}