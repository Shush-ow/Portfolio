import './globals.css';
import type { Metadata } from 'next';
import Header from '../components/Header'; // ← 追加: Headerを読み込む

export const metadata: Metadata = {
  title: 'Shush | Portfolio',
  description: 'サイバーセキュリティとフルスタック開発を学ぶ大学生のポートフォリオサイト',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // ↓ ここに scroll-smooth を追加して、滑らかなスクロールを実現！
    <html lang="ja" className="scroll-smooth"> 
      {/* fixed header の分だけ上に余白を確保 */}
      <body className="pt-20">
        <Header /> {/* 全ページ共通で一番上にHeaderを表示 */}
        {children}
      </body>
    </html>
  );
}