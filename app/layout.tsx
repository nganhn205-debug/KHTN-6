import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  subsets: ['latin', 'vietnamese'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'KHTN Learn - Khám phá khoa học cùng NyNy',
  description:
    'Nền tảng tự học Khoa học tự nhiên 6 với bài giảng E-learning, Quiz, trợ lý AI NyNy và theo dõi tiến độ học tập.',
  generator: 'v0.app',
};

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#4A90E2',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="bg-background">
      <body className={`${nunito.className} antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}