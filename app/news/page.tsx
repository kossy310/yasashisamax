import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getNewsList } from "@/lib/news";
import { NewsList } from "./NewsList";

// ISRを有効化（300秒ごとに再生成）
export const revalidate = 300;

export const metadata = {
  title: "お知らせ - やさしさマックス",
  description:
    "やさしさマックスの最新ニュース、活動報告、イベント情報をお届けします。",
  openGraph: {
    title: "お知らせ - やさしさマックス",
    description:
      "やさしさマックスの最新ニュース、活動報告、イベント情報をお届けします。",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "お知らせ - やさしさマックス",
    description:
      "やさしさマックスの最新ニュース、活動報告、イベント情報をお届けします。",
  },
};

export default async function NewsPage() {
  const newsResponse = await getNewsList(20);
  const newsList = newsResponse.contents;

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 min-h-screen bg-ivory">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4 text-center">
            お知らせ
          </h1>
          <p className="text-lg text-text-secondary text-center mb-16">
            最新のニュースや活動報告をお届けします
          </p>

          <NewsList newsList={newsList} />
        </div>
      </main>
      <Footer />
    </>
  );
}
