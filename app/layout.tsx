import type { Metadata } from 'next';
import { Noto_Sans_JP, Playfair_Display } from 'next/font/google';
import './globals.css';
import { publicAsset } from '@/src/config/site';

const notoSansJp = Noto_Sans_JP({
  variable: '--font-noto',
  subsets: ['latin'],
});
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'LI YANG | Java Backend Engineer',
  icons: { icon: publicAsset('/favicon.svg') },
  description:
    '李陽の履歴書・職務経歴書。Java / Spring Bootを中心とするバックエンド開発経験を紹介します。',
  openGraph: {
    title: 'LI YANG | Java Backend Engineer',
    description:
      '履歴書と職務経歴書を一つにまとめたプロフェッショナルプロフィール。',
    type: 'profile',
  },
  twitter: {
    card: 'summary',
    title: 'LI YANG | Java Backend Engineer',
    description:
      '履歴書と職務経歴書を一つにまとめたプロフェッショナルプロフィール。',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJp.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
