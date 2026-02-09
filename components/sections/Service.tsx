"use client";

import { motion } from "framer-motion";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

const services = [
  {
    title: "コンサルティング",
    description:
      "お客様の課題に寄り添い、心が解けるようなコミュニケーションを通じて、最適なソリューションをご提案します。",
    icon: "💡",
  },
  {
    title: "ワークショップ",
    description:
      "優しさを学び、体験するためのワークショップを開催。参加者同士が安心して交流できる場を提供します。",
    icon: "🤝",
  },
  {
    title: "コミュニティ運営",
    description:
      "オンライン・オフラインでのコミュニティを運営し、優しさが循環する温かい居場所を作ります。",
    icon: "🌸",
  },
  {
    title: "コンテンツ制作",
    description:
      "優しさをテーマにしたコンテンツを企画・制作し、より多くの人に優しい世界観をお届けします。",
    icon: "✨",
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
            優しさを軸にした、様々なサービスを提供しています
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
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
              <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
