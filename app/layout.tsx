import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import { ScrollRevealInit } from "@/components/ScrollRevealInit";
import "./globals.css";

const GTM_ID = "GTM-PB64MRCV";

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
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body
        className={`${notoSansJP.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollRevealInit />
        {children}
      </body>
    </html>
  );
}
