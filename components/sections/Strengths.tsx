"use client";

import { motion } from "framer-motion";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

const strengths = [
  {
    title: "専門性と親しみやすさの両立",
    description:
      "ITやAIの専門知識を持ちながらも、難しい用語を使わず、お客様に分かりやすく説明します。技術的な専門性と人間味のある対応を両立させ、安心してご相談いただける関係性を構築します。",
    icon: "🤝",
  },
  {
    title: "徹底した「伴走型」サポート",
    description:
      "一方的な提案ではなく、お客様と二人三脚で進めます。導入後も継続的にサポートし、成果が出るまで寄り添い続けることで、確実な成長を実現します。",
    icon: "🚶",
  },
  {
    title: "スモールスタートからの段階的DX",
    description:
      "いきなり大きな投資は不要です。小さく始めて効果を確認しながら、段階的にデジタル化を進めます。リスクを最小限に抑えながら、着実に事業成長を目指せます。",
    icon: "📈",
  },
];

export function Strengths() {
  return (
    <section id="strengths" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            当社の強み
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary">
            選ばれる理由は、この3つ。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              className="bg-ivory-dark rounded-3xl p-8 shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{
                y: -8,
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)",
              }}
            >
              <div className="text-5xl mb-4">{strength.icon}</div>
              <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                {strength.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
