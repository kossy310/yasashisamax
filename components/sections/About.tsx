"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const keywords = [
  "専門性と親しみやすさ",
  "伴走型サポート",
  "スモールスタート",
  "予算内で妥協しない",
  "Web・印刷・効率化",
  "信頼",
];

export function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: leftRef, isVisible: leftVisible } = useScrollReveal();
  const { ref: rightRef, isVisible: rightVisible } = useScrollReveal();
  const { ref: keywordsRef, isVisible: keywordsVisible } = useScrollReveal();
  const { ref: linkRef, isVisible: linkVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 bg-ivory-dark">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? "animate-fade-up" : "scroll-hidden"}`}
        >
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            やさしさマックスについて
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
            「何から始めればいいかわからない」—— そんな方に寄り添います。
            <br />
            ホームページ制作も、名刺デザインも、業務の効率化も。
            <br />
            予算が限られていても、妥協せずに。小さく始めて、着実に成長するお手伝いをします。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div
            ref={leftRef}
            className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft ${leftVisible ? "animate-fade-left" : "scroll-hidden"}`}
          >
            <Image src="/about/about1.jpg" alt="寄り添う優しさ" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>

          <div
            ref={rightRef}
            className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft ${rightVisible ? "animate-fade-right" : "scroll-hidden"}`}
          >
            <Image src="/about/about2.jpg" alt="心が解ける瞬間" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>

        <div
          ref={keywordsRef}
          className={`flex flex-wrap justify-center gap-3 mb-12 ${keywordsVisible ? "animate-fade-up" : "scroll-hidden"}`}
        >
          {keywords.map((keyword, index) => (
            <span
              key={keyword}
              className="px-6 py-3 bg-white rounded-full text-text-primary font-normal shadow-soft hover-scale"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {keyword}
            </span>
          ))}
        </div>

        <div
          ref={linkRef}
          className={`text-center ${linkVisible ? "animate-fade-up" : "scroll-hidden"}`}
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <Link
            href="/vision"
            className="inline-block px-8 py-4 bg-pastel-pink text-text-primary rounded-full font-normal hover:bg-opacity-80 transition-all duration-300 shadow-soft hover:shadow-soft-hover hover:-translate-y-1"
          >
            やさしさマックスのビジョン
          </Link>
        </div>
      </div>
    </section>
  );
}
