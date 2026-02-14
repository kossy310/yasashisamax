"use client";

import Link from "next/link";
import Image from "next/image";
import type { News } from "@/types/news";

type NewsListProps = {
  newsList: News[];
};

/** HTMLタグを除去してプレーンテキストの抜粋を取得（最大100文字） */
function getExcerpt(html: string, maxLength = 100): string {
  const text = html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
  return text.length > maxLength ? text.substring(0, maxLength) + "…" : text;
}

export function NewsList({ newsList }: NewsListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  if (newsList.length === 0) {
    return (
      <p className="text-center text-text-secondary py-16">
        現在、お知らせはありません
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {newsList.map((news) => (
        <Link
          key={news.id}
          href={`/news/${news.id}`}
          className="block bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex flex-col md:flex-row">
            {/* サムネイル */}
            <div className="relative w-full md:w-64 h-48 md:h-auto md:min-h-[200px] flex-shrink-0 bg-ivory">
              {news.eyecatch ? (
                <Image
                  src={news.eyecatch.url}
                  alt={news.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 256px"
                  className="object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center text-text-secondary/50 text-4xl">
                  📰
                </div>
              )}
            </div>

            <div className="p-6 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <time className="text-text-secondary text-sm">
                  {formatDate(news.publishedAt)}
                </time>
                <span className="px-3 py-1 bg-pastel-blue rounded-full text-text-primary text-xs font-medium">
                  {news.category}
                </span>
              </div>

              <h2 className="text-xl font-heading font-bold text-text-primary mb-3">
                {news.title}
              </h2>

              <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                {getExcerpt(news.body, 100)}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
