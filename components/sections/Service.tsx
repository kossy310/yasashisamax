"use client";

import { motion } from "framer-motion";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

const mainServices = [
  {
    title: "IT・AI活用DX支援",
    description:
      "現状の課題をヒアリングし、身の丈に合った最適なデジタル化計画を策定・伴走します。",
    icon: "🤖",
  },
  {
    title: "経営コンサルティング",
    description:
      "データに基づいた客観的な視点から、経営改善のための具体的な戦略を提案します。",
    icon: "📊",
  },
  {
    title: "経営データ分析・可視化",
    description:
      "売上データや顧客データを分析し、直感的に理解できるレポート形式で可視化します。",
    icon: "📈",
  },
];

const supportServices = [
  {
    title: "低価格ホームページ制作",
    description:
      "名刺代わりとなるWebサイトを低コスト・短納期で制作し、デジタル活用の第一歩を支援します。",
    icon: "🌐",
  },
  {
    title: "業務自動化ツール開発",
    description:
      "Google Apps Script等を活用し、日々のルーチンワークを自動化。事務作業の負担を大幅に軽減します。",
    icon: "⚙️",
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
            中小企業のDX推進を優しく、力強く支援します
          </p>
        </motion.div>

        {/* 主力事業セクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-8 text-center">
            主力事業
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-soft"
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
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 導入支援セクション */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-8 text-center">
            導入支援
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {supportServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white rounded-3xl p-8 shadow-soft"
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
                <p className="text-text-secondary leading-relaxed">
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
