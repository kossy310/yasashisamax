"use client";

import { motion } from "framer-motion";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

const examples = [
  {
    title: "案件管理・請求業務の自動化",
    icon: "📋",
    items: [
      "Googleフォームからスプレッドシートへの案件登録",
      "スプレッドシートからの自動請求書作成",
    ],
    detail:
      "お問い合わせ・見積もり依頼をフォームで受け、案件情報を一元管理。請求書を自動生成し、転記ミスや請求漏れを防ぎます。",
  },
  {
    title: "各種サイト更新の自動転記",
    icon: "🔄",
    items: [
      "スプレッドシートから複数サイトへ自動反映",
      "キャンペーン情報・営業日などを一括更新",
    ],
    detail:
      "1つのスプレッドシートに入力するだけで、自社サイト・告知サイト・ブログなど複数チャネルへ自動反映。更新の手間を大幅に削減します。",
  },
  {
    title: "LINEを使った顧客対応の自動化",
    icon: "💬",
    items: [
      "LINEでの依頼内容をスプレッドシートに自動保存",
      "依頼が来たことをLINEで自動通知",
    ],
    detail:
      "お客様からの依頼・質問をLINEで受け取り、内容を自動でスプレッドシートに記録。担当者にはLINEで即時通知し、取りこぼしを防ぎます。",
  },
];

export function AutomationExamples() {
  return (
    <section id="automation-examples" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            こんな自動化・DX支援ができます！
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            日々の事務作業や情報更新を自動化し、人件費削減やミス削減につながる仕組みづくりもお手伝いします。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {examples.map((example, index) => (
            <motion.div
              key={example.title}
              className="bg-white rounded-3xl p-8 shadow-soft"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{
                y: -8,
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
              }}
            >
              <div className="text-4xl mb-4">{example.icon}</div>
              <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                {example.title}
              </h3>
              <ul className="space-y-2 mb-4">
                {example.items.map((item) => (
                  <li
                    key={item}
                    className="text-text-secondary text-sm flex items-start gap-2"
                  >
                    <span className="text-pastel-pink mt-0.5">・</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-text-secondary text-sm leading-relaxed">
                {example.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-text-secondary max-w-2xl mx-auto"
        >
          上記は一例です。現在の業務フローやお使いのツールをヒアリングし、
          「どこを自動化すると一番ラクになるか」を一緒に設計し、仕組みの構築まで伴走します。
        </motion.p>
      </div>
    </section>
  );
}
