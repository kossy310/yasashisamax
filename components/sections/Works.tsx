"use client";

import Image from "next/image";
import Link from "next/link";
import type { Works } from "@/types/works";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

type WorksProps = {
  worksList: Works[];
};

export function Works({ worksList }: WorksProps) {
  return (
    <section id="works" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            実績
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary">
            これまでの制作実績をご紹介します
          </p>
        </div>

        {worksList.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {worksList.map((work) => (
              <Link
                key={work.id}
                href={`/works/${work.id}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={work.thumbnail.url}
                    alt={work.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm line-clamp-2">
                      {work.description}
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-2 group-hover:text-pastel-pink transition-colors">
                    {work.title}
                  </h3>
                  {work.tags && work.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {work.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-ivory rounded-full text-text-secondary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-center text-text-secondary">
            現在、実績はありません
          </p>
        )}
      </div>
    </section>
  );
}
