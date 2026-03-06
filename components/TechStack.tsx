'use client';
import { Code2, Cloud, Wrench } from 'lucide-react';

export default function TechStack() {
  const techCategories = [
    {
      title: "Frontend",
      icon: <Code2 size={24} className="text-white" />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      description: "コンポーネント指向のUI設計と、型安全で保守しやすいコードを意識して学習しています。"
    },
    {
      title: "Backend & Cloud",
      icon: <Cloud size={24} className="text-white" />,
      skills: ["AWS", "Python", "Amazon Bedrock"],
      description: "S3やLambdaを使ったサーバーレス構成や、生成AI（RAG）の組み込みに挑戦しました。"
    },
    {
      title: "Tools",
      icon: <Wrench size={24} className="text-white" />,
      skills: ["Git", "GitHub", "VS Code"],
      description: "バージョン管理を通じたコードの保存や、開発環境の構築に使用しています。"
    }
  ];

  return (
    <section id="tech">
      <div className="section-header">
        <h2 className="section-title">Tech Stack</h2>
        <div className="section-line" />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {techCategories.map((category) => (
          <div key={category.title} className="monochrome-card flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              {category.icon}
              <h3 className="text-lg font-bold text-white">{category.title}</h3>
            </div>
            
            <p className="text-sm text-neutral-400 mb-6 flex-grow leading-relaxed">
              {category.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}