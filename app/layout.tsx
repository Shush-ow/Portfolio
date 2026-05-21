import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'Shuji | Portfolio',
  description: 'サイバーセキュリティとフルスタック開発を学ぶ学生のポートフォリオサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="pt-20">
        <Header />
        {children}
      </body>
    </html>
  );
}
