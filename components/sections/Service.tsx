"use client";

import { motion } from "framer-motion";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

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
  return (
    <section id="service" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            サービス
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary">
            あなたのビジネスに必要なものを、手の届く価格で。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-8 text-center">
            主力事業
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-soft min-w-0 flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
                }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-heading font-bold text-text-primary mb-4">
                  {service.title}
                </h4>
                <p className="text-text-secondary leading-relaxed flex-1">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
