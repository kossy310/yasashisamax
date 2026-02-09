"use client";

import Link from "next/link";
import type { News } from "@/types/news";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

type NewsProps = {
  newsList: News[];
};

export function News({ newsList }: NewsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <section id="news" className="py-24 bg-ivory-dark">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            お知らせ
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary">
            最新のニュースや活動報告をお届けします
          </p>
        </div>

        {newsList.length > 0 ? (
          <div className="space-y-4">
            {newsList.map((news) => (
              <Link
                key={news.id}
                href={`/news/${news.id}`}
                className="block bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <time className="text-text-secondary text-sm whitespace-nowrap">
                    {formatDate(news.publishedAt)}
                  </time>
                  <span className="px-3 py-1 bg-pastel-blue rounded-full text-text-primary text-sm font-medium w-fit">
                    {news.category}
                  </span>
                  <h3 className="text-text-primary font-medium flex-1">
                    {news.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-text-secondary">
            現在、お知らせはありません
          </p>
        )}
      </div>
    </section>
  );
}
