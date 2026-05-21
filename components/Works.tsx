'use client';
import Image from 'next/image';
import { AlertTriangle, Github } from 'lucide-react';

const projects = [
  {
    title: 'AI搭載避難所ナビ',
    description:
      'Amazon BedrockとRAG（検索拡張生成）を活用した、リアルタイム防災支援アプリ。位置情報から近くの避難所を特定し、AIが適切な行動アドバイスを提供します。',
    image: '/images/home.png',
    tags: ['React', 'TypeScript', 'AWS Lambda', 'Python', 'Amazon Bedrock'],
    links: {
      github: 'https://github.com/Shush-ow/aws',
    },
    status: 'Maintenance',
    highlights: [
      'S3+CloudFrontで月間コストを数円に抑制',
      'rapidfuzzによる避難所の曖昧検索を実装',
    ],
  },
];

export default function Works() {
  return (
    <section id="works" className="scroll-mt-20">
      <div className="section-header">
        <h2 className="section-title">Works</h2>
        <div className="section-line" />
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="monochrome-card group">
            <div className="flex flex-col md:flex-row gap-8">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-2/5 aspect-video rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 block cursor-pointer shrink-0"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105"
                />
              </a>

              <div className="md:w-3/5 flex flex-col justify-center space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-2xl font-bold text-white">
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-neutral-300 transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>

                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-link shrink-0"
                    aria-label={`${project.title} のGitHubを開く`}
                  >
                    <Github size={22} />
                  </a>
                </div>

                <p className="text-neutral-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2">
                  {project.highlights.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm text-neutral-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {project.status === 'Maintenance' && (
                  <div className="mt-4 flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900 p-3 rounded-lg border border-neutral-800">
                    <AlertTriangle size={14} className="shrink-0" />
                    <span>AWS環境刷新のため、現在ソースコードのみ公開しています</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
