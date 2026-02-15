import Link from "next/link";
import Image from "next/image";
import type { News } from "@/types/news";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

type NewsProps = {
  newsList: News[];
};

function getExcerpt(html: string, maxLength = 100): string {
  const text = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  return text.length > maxLength ? text.substring(0, maxLength) + "…" : text;
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("ja-JP", { year: "numeric", month: "2-digit", day: "2-digit" });
}

export function News({ newsList }: NewsProps) {
  const displayList = newsList.slice(0, 3);

  return (
    <section id="news" className="py-24 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            お知らせ
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary">最新のニュースや活動報告をお届けします</p>
        </div>

        {displayList.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {displayList.map((news, i) => (
                <div
                  key={news.id}
                  data-scroll="fade-up"
                  className="scroll-hidden"
                  style={{ animationDelay: `${0.1 * i}s`, animationFillMode: "both" }}
                >
                  <Link
                    href={`/news/${news.id}`}
                    className="block bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-2 h-full"
                  >
                    <div className="relative aspect-[16/9] bg-ivory">
                      {news.eyecatch ? (
                        <Image src={news.eyecatch.url} alt={news.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-text-secondary/50 text-4xl">📰</div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <time className="text-text-secondary text-sm">{formatDate(news.publishedAt)}</time>
                        <span className="px-3 py-1 bg-pastel-blue rounded-full text-text-primary text-xs font-normal">{news.category}</span>
                      </div>
                      <h3 className="text-lg font-heading font-bold text-text-primary mb-3 line-clamp-2">{news.title}</h3>
                      <p className="text-text-secondary text-sm leading-relaxed line-clamp-3">{getExcerpt(news.body, 100)}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div data-scroll="fade-up" className="scroll-hidden text-center">
              <Link
                href="/news"
                className="inline-block px-8 py-4 bg-pastel-pink text-text-primary rounded-full font-normal hover:bg-opacity-80 transition-all duration-300 shadow-soft hover:shadow-soft-hover hover:-translate-y-1"
              >
                ニュース一覧を見る
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-text-secondary">現在、お知らせはありません</p>
        )}
      </div>
    </section>
  );
}
