import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.yasashisa-max.com"),
  title: "やさしさマックス - HPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。",
  description:
    "やさしさマックスでHPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。HP制作は最短7日、名刺・印刷・動画も低価格で承ります。",
  openGraph: {
    title: "やさしさマックス - HPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。",
    description:
      "やさしさマックスでHPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。HP制作は最短7日、名刺・印刷・動画も低価格で承ります。",
    images: ["/ogp.jpg"],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "やさしさマックス - HPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。",
    description:
      "やさしさマックスでHPも名刺も業務の自動化も。少ない予算で、ちゃんと作る。HP制作は最短7日、名刺・印刷・動画も低価格で承ります。",
    images: ["/ogp.jpg"],
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
        className={`${notoSansJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
