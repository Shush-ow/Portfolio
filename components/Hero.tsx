'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <span className="px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-bold tracking-widest uppercase mb-10 inline-block">
          Cybersecurity & Full-stack Student
        </span>
        
        <h1 className="text-8xl md:text-[10rem] font-black tracking-tighter mb-10 leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-700">
          翁 朱司
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed font-light">
          「守り」を意識した技術で、<br />
          <span className="text-white font-semibold">誰かの役に立つもの</span>を創り出す。
        </p>
        
        {/* スクロールを促す小さなラインアニメーション */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-24 w-[1px] h-16 bg-gradient-to-b from-blue-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}