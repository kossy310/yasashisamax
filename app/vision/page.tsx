import type { Metadata } from "next";
import VisionContent from "./VisionContent";

export const metadata: Metadata = {
  title: "事業ビジョン - やさしさマックス",
  description:
    "デジタルの力と人のやさしさで、すべての中小企業を主役に。やさしさマックスが目指す未来と使命、アプローチ、バリューをご紹介します。",
  openGraph: {
    title: "事業ビジョン - やさしさマックス",
    description:
      "デジタルの力と人のやさしさで、すべての中小企業を主役に。やさしさマックスが目指す未来と使命、アプローチ、バリューをご紹介します。",
    images: ["/ogp.png"],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "事業ビジョン - やさしさマックス",
    description:
      "デジタルの力と人のやさしさで、すべての中小企業を主役に。やさしさマックスが目指す未来と使命、アプローチ、バリューをご紹介します。",
    images: ["/ogp.png"],
  },
};

export default function VisionPage() {
  return <VisionContent />;
}
