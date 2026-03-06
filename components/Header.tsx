'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // スクロールされたらヘッダーの背景をすりガラスにするための仕掛け
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // メニューを開いたままリサイズした時の崩れ防止（md以上で自動クローズ）
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-neutral-800' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* 左側のロゴ */}
        <a 
          href="#" 
          className="text-xl font-bold text-white tracking-tighter hover:text-neutral-300 transition-colors"
        >
          TOP
        </a>

        {/* 右側のナビゲーションメニュー */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#tech" className="hover:text-white transition-colors">Tech</a>
          <a href="#works" className="hover:text-white transition-colors">Works</a>
        </nav>

        {/* モバイルメニュー */}
        <button
          type="button"
          aria-label="menu"
          className="md:hidden text-neutral-200 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-[#050505]/90 backdrop-blur-md">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm font-medium text-neutral-300">
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-white transition-colors">About</a>
            <a href="#tech" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Tech</a>
            <a href="#works" onClick={() => setOpen(false)} className="hover:text-white transition-colors">Works</a>
          </nav>
        </div>
      )}
    </header>
  );
}