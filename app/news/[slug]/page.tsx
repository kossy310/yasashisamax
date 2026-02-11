import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getNewsDetail, getAllNewsIds } from "@/lib/news";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

type Props = {
  params: Promise<{ slug: string }>;
};

// ISRを有効化（300秒ごとに再生成）
export const revalidate = 300;

// 静的パスを生成
export async function generateStaticParams() {
  try {
    const ids = await getAllNewsIds();
    return ids.map((id) => ({
      slug: id,
    }));
  } catch (error) {
    console.log("Failed to generate static params for news");
    return [];
  }
}

// メタデータを動的に生成
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const news = await getNewsDetail(slug);

  if (!news) {
    return {
      title: "ニュースが見つかりません",
    };
  }

  return {
    title: `${news.title} | やさしさマックス`,
    description: news.body.substring(0, 100),
    openGraph: {
      title: news.title,
      description: news.body.substring(0, 100),
      images: news.eyecatch ? [news.eyecatch.url] : [],
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const news = await getNewsDetail(slug);

  if (!news) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 min-h-screen bg-ivory">
        <article className="max-w-4xl mx-auto px-6">
          <Link
            href="/#news"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            一覧に戻る
          </Link>

          <div className="bg-white rounded-3xl overflow-hidden shadow-soft">
            {news.eyecatch && (
              <div className="relative aspect-[16/9]">
                <Image
                  src={news.eyecatch.url}
                  alt={news.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <time className="text-text-secondary text-sm">
                  {formatDate(news.publishedAt)}
                </time>
                <span className="px-3 py-1 bg-pastel-blue rounded-full text-text-primary text-sm font-medium">
                  {news.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8">
                {news.title}
              </h1>

              <div
                className="prose prose-lg max-w-none text-text-secondary leading-relaxed"
                dangerouslySetInnerHTML={{ __html: news.body }}
              />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
