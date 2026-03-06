import Hero from '../components/Hero';
import About from '../components/About';
import Works from '../components/Works';
import TechStack from '../components/TechStack';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* 背景のグロウ演出 */}
      <div className="bg-glow" />
      
      {/* max-w-5xlに調整し、mx-autoで中央寄せを確実にします */}
      <div className="max-w-5xl mx-auto px-8 md:px-12">
        <Hero />
        
        {/* セクション間の余白を広げ、ゆとりを持たせます */}
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