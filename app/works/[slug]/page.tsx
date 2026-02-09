import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getWorksDetail, getAllWorksIds } from "@/lib/works";
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
    const ids = await getAllWorksIds();
    return ids.map((id) => ({
      slug: id,
    }));
  } catch (error) {
    console.log("Failed to generate static params for works");
    return [];
  }
}

// メタデータを動的に生成
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const work = await getWorksDetail(slug);

  if (!work) {
    return {
      title: "実績が見つかりません",
    };
  }

  return {
    title: `${work.title} | 優しさMAX`,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      images: [work.thumbnail.url],
    },
  };
}

export default async function WorksDetailPage({ params }: Props) {
  const { slug } = await params;
  const work = await getWorksDetail(slug);

  if (!work) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-24 min-h-screen bg-ivory">
        <article className="max-w-5xl mx-auto px-6">
          <Link
            href="/#works"
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

          <div className="bg-white rounded-3xl overflow-hidden shadow-soft mb-8">
            <div className="relative aspect-[16/9]">
              <Image
                src={work.thumbnail.url}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-6">
                {work.title}
              </h1>

              {work.tags && work.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {work.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-ivory rounded-full text-text-secondary text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                {work.description}
              </p>

              {work.url && (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-pastel-pink rounded-full text-text-primary font-medium hover:bg-opacity-80 transition-all"
                >
                  サイトを見る
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {work.images && work.images.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {work.images.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft"
                >
                  <Image
                    src={image.url}
                    alt={`${work.title} - ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
