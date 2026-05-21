import { BookOpen, Cloud, Monitor, ShieldCheck } from 'lucide-react';

export default function About() {
  const skills = [
    { title: 'Security', icon: <ShieldCheck size={28} />, desc: '攻撃されにくい仕組みや安全な設計に関心があります' },
    { title: 'Frontend', icon: <Monitor size={28} />, desc: 'React / Next.jsで見やすく使いやすい画面を作ります' },
    { title: 'Backend', icon: <Cloud size={28} />, desc: 'PythonやAWS Lambdaで小さなAPI開発に挑戦しています' },
    { title: 'Learning', icon: <BookOpen size={28} />, desc: '作ったものを振り返り、改善しながら学んでいます' },
  ];

  return (
    <section id="about" className="scroll-mt-20">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <div className="section-line" />
      </div>

      <div className="grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5 space-y-8 text-lg text-neutral-400 leading-loose">
          <p>
            専門学校でITとサイバーセキュリティを専攻しています。システムを攻撃から「守る」という役割に魅力を感じ、日々学習を続けています。
          </p>
          <p>
            ただ動くものを作るのではなく、安全性が高く、かつユーザーにとって心地よいデザインを両立させることを目標にしています。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-7 gap-6">
          {skills.map((skill) => (
            <div key={skill.title} className="glass-card p-8 rounded-[2rem] flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-neutral-900 rounded-2xl flex items-center justify-center mb-6 text-neutral-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-sm text-neutral-500">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
