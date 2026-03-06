import { ShieldCheck, Monitor, Gamepad2, Headphones } from 'lucide-react';

export default function About() {
  const skills = [
    { title: "Security", icon: <ShieldCheck size={28} />, desc: "機密性を守る設計" },
    { title: "Frontend", icon: <Monitor size={28} />, desc: "直感的な操作性" },
    { title: "Gaming", icon: <Gamepad2 size={28} />, desc: "戦略的な思考" },
    { title: "Music", icon: <Headphones size={28} />, desc: "集中とインプット" },
  ];

  return (
    <section id="about" className="scroll-mt-20">
      <div className="flex flex-col items-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">About Me</h2>
        <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-16 items-start">
        {/* 左側：自己紹介文（中央寄りに配置） */}
        <div className="lg:col-span-5 space-y-8 text-lg text-neutral-400 leading-loose">
          <p>
            専門学校でITとサイバーセキュリティを専攻しています。システムを攻撃から「守る」という役割に魅力を感じ、日々学習を続けています。
          </p>
          <p>
            ただ動くものを作るのではなく、安全性が高く、かつユーザーにとって心地よいデザインを両立させることを目標にしています。
          </p>
        </div>

        {/* 右側：趣味・スキルのタイル配置 */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.title} className="glass-card p-8 rounded-[2rem] flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 text-neutral-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}