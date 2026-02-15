"use client";

import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    title: "低価格ホームページ制作（最短7日で納品）",
    description:
      "名刺代わりとなるWebサイトを低コストで制作し、デジタル活用の第一歩を支援します。",
    icon: "🌐",
  },
  {
    title: "新規ビジネス設立時の各種ツール制作",
    description:
      "名刺、パンフレット、看板デザイン・メニューデザイン。各種印刷。その他印刷物はほぼ制作可能です。",
    icon: "📋",
  },
  {
    title: "業務自動化ツール開発",
    description:
      "Google Apps Script等を活用し、日々のルーチンワークを自動化。事務作業の負担を大幅に軽減します。",
    icon: "⚙️",
  },
  {
    title: "動画制作",
    description:
      "SNS用動画、プロモーション動画、サイト内で使う説明動画など低価格で承ります。",
    icon: "🎬",
  },
  {
    title: "経営データ分析・可視化",
    description:
      "売上データや顧客データを分析し、直感的に理解できるレポート形式で可視化します。",
    icon: "📈",
  },
];

export function Service() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <section id="service" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? "animate-fade-up" : "scroll-hidden"}`}
        >
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            サービス
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary">
            あなたのビジネスに必要なものを、手の届く価格で。
          </p>
        </div>

        <div ref={cardsRef}>
          <h3
            className={`text-2xl md:text-3xl font-heading font-bold text-text-primary mb-8 text-center ${cardsVisible ? "animate-fade-up" : "scroll-hidden"}`}
          >
            主力事業
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`bg-white rounded-3xl p-8 shadow-soft min-w-0 flex flex-col hover-lift ${cardsVisible ? "animate-fade-up" : "scroll-hidden"}`}
                style={{ animationDelay: `${0.1 * index}s`, animationFillMode: "both" }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-heading font-bold text-text-primary mb-4">
                  {service.title}
                </h4>
                <p className="text-text-secondary leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
