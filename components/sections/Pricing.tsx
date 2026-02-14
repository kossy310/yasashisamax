"use client";

import { motion } from "framer-motion";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

const plans = [
  {
    name: "ライトホームページプラン",
    subtitle: "Next.js / CMSなし",
    icon: "🌐",
    description:
      "名刺代わりの1ページサイト。お問い合わせフォーム（スパム対策付き）・独自ドメイン取得・スマホ対応。",
    initial: "100,000",
    monthly: "11,000",
    note: "税抜／月額は管理費（ドメイン・サーバー・軽微な修正含む）",
    recommended: false,
  },
  {
    name: "ビジネス成長サポートプラン",
    subtitle: "CMSあり ＋ アナリティクス",
    icon: "📊",
    description:
      "お知らせ・ブログを自分で更新できるCMS導入。アクセス解析＋月1回の解析レポートで集客改善をサポート。",
    initial: "150,000",
    monthly: "16,500",
    note: "税抜／月額にCMS利用・月1回解析レポート含む",
    recommended: true,
  },
  {
    name: "DX伴走パック",
    subtitle: "複数ページ ＋ 業務自動化",
    icon: "🚀",
    description:
      "3〜5ページのWebサイト＋ヘッドレスCMS。問い合わせをスプレッドシートに自動保存し、LINEへ通知。月1回のオンラインMTGで解析・改善を伴走。",
    initial: "300,000〜",
    monthly: "33,000〜",
    note: "税抜／ページ数・機能によりお見積り",
    recommended: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            料金プランの一例
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            まずは小さく、始めやすく。必要に応じて、段階的に拡張できるプランです。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-white rounded-3xl p-8 shadow-soft ${
                plan.recommended ? "ring-2 ring-pastel-pink ring-offset-4 ring-offset-ivory-dark" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{
                y: -8,
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.12)",
              }}
            >
              {plan.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-pastel-pink rounded-full text-sm font-medium text-text-primary">
                  おすすめ
                </span>
              )}
              <div className="text-4xl mb-4">{plan.icon}</div>
              <h3 className="text-xl font-heading font-bold text-text-primary mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-text-secondary mb-4">{plan.subtitle}</p>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {plan.description}
              </p>
              <div className="border-t border-ivory-dark pt-6">
                <p className="text-text-secondary text-sm mb-1">初期費用</p>
                <p className="text-2xl font-heading font-bold text-text-primary">
                  {plan.initial}
                  <span className="text-base font-normal">円（税抜）</span>
                </p>
                <p className="text-text-secondary text-sm mt-3 mb-1">月額管理費</p>
                <p className="text-xl font-heading font-bold text-text-primary">
                  {plan.monthly}
                  <span className="text-base font-normal">円（税抜）</span>
                </p>
                <p className="text-text-secondary text-xs mt-2">{plan.note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-pastel-pink/30 rounded-3xl p-8 md:p-10 shadow-soft"
        >
          <h4 className="text-xl font-heading font-bold text-text-primary mb-4">
            ホームページ制作、なぜWordPressじゃないの？
          </h4>
          <p className="text-text-secondary leading-relaxed mb-4">
            WordPressは世界中で使われていますが、「セキュリティの不安」と「更新の手間」が課題です。
            実際、ハッキングされて10万通以上のスパムメールが送信され、Google検索から除外されるといったトラブルを何度も見てきました。
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            やさしさマックスでは、「Headless CMS + Next.js」という最新の技術を使っています。
            管理画面（CMS）と表示部分（Next.js）が完全に分かれているため、攻撃される入口を大幅に減らせます。
            セキュリティの面倒はサービス側が対応するので、お客様の手間も削減できます。
          </p>
          <p className="text-text-secondary leading-relaxed">
            「安全に、速く、長く使える」—— そんなホームページをお届けします。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
