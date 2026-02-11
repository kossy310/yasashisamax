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
  title: "やさしさマックス - 中小企業のDX推進を優しく、力強く支援",
  description:
    "データに基づいた確かな分析と、人間味あふれる丁寧なサポートで、中小企業の皆様の事業成長を優しく、力強く後押しします。",
  openGraph: {
    title: "やさしさマックス - 中小企業のDX推進を優しく、力強く支援",
    description:
      "データに基づいた確かな分析と、人間味あふれる丁寧なサポートで、中小企業の皆様の事業成長を優しく、力強く後押しします。",
    images: ["/ogp.png"],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "やさしさマックス - 中小企業のDX推進を優しく、力強く支援",
    description:
      "データに基づいた確かな分析と、人間味あふれる丁寧なサポートで、中小企業の皆様の事業成長を優しく、力強く後押しします。",
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
