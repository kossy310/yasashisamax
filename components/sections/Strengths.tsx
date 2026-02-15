"use client";

import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const strengths = [
  {
    title: "ライトなホームページ",
    description:
      "WordPressではなく、Next.jsという先進技術でセキュリティに強いホームページを制作。スタートに合った低価格で、安心して使い続けられるサイトをご提供します。",
    icon: "🌐",
  },
  {
    title: "ビジネス成長サポート",
    description:
      "案件管理、請求書の自動作成、経営データの見える化を一つの流れで実現。バラバラだった業務が自動でつながり、手間を大幅に削減できます。",
    icon: "📊",
  },
  {
    title: "DX伴走パック",
    description:
      "デジタル化を、難しい専門用語を使わずにお客様と一緒に進めます。何から始めればいいか分からない方も、一歩ずつ確実に前進できるようサポートします。",
    icon: "🚀",
  },
];

export function Strengths() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <section id="strengths" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? "animate-fade-up" : "scroll-hidden"}`}
        >
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            やさしさマックスの強み
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary">
            選ばれる理由は、この3つ。
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <div
              key={strength.title}
              className={`bg-ivory-dark rounded-3xl p-8 shadow-soft hover-lift ${cardsVisible ? "animate-fade-up" : "scroll-hidden"}`}
              style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "both" }}
            >
              <div className="text-5xl mb-4">{strength.icon}</div>
              <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                {strength.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
