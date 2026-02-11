import type { Metadata } from "next";
import { Noto_Sans_JP, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-zen-maru",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "やさしさマックス - HPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。",
  description:
    "やさしさマックスでHPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。HP制作は最短7日、名刺・印刷・動画も低価格で承ります。",
  openGraph: {
    title: "やさしさマックス - HPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。",
    description:
      "やさしさマックスでHPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。HP制作は最短7日、名刺・印刷・動画も低価格で承ります。",
    images: ["/ogp.png"],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "やさしさマックス - HPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。",
    description:
      "やさしさマックスでHPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。HP制作は最短7日、名刺・印刷・動画も低価格で承ります。",
    images: ["/ogp.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${zenMaruGothic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
