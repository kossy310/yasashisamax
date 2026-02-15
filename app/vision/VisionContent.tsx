"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function VisionContent() {
  return (
    <>
      <Header />
      <main className="bg-ivory">
        {/* ヒーローセクション */}
        <section className="relative pt-32 pb-24 overflow-hidden">
          {/* 背景画像 */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/news/優しさマックスにできること.jpg"
              alt="やさしさマックスにできること"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ivory/90 via-ivory/80 to-ivory-dark/95" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-sm text-text-secondary mb-4 tracking-wider">
                VISION
              </p>
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-text-primary mb-8 leading-tight">
                事業ビジョン
              </h1>
              <p className="text-lg text-text-secondary">
                やさしさマックスが目指す未来
              </p>
            </m.div>
          </div>
        </section>

        {/* メインビジョン */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8">
                ビジョン（実現したい未来）
              </h2>
              <div className="mb-8">
                <p className="text-2xl md:text-3xl font-medium text-pastel-pink mb-6">
                  Digital × Gentleness = Empowerment
                </p>
                <p className="text-xl md:text-2xl font-bold text-text-primary mb-8">
                  デジタルの力と人のやさしさで、
                  <br />
                  すべての中小企業を主役に。
                </p>
              </div>
              <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
                急速に変化するデジタル社会において、技術は「格差」を生むものではなく、誰もが「可能性」を広げるための道具であるべきです。私たちは、ITという冷淡に感じられがちな手段に「人の体温」を吹き込み、規模を問わずすべての企業が明日への希望を持てる社会を実現します。
              </p>
            </m.div>
          </div>
        </section>

        {/* ミッション */}
        <section className="py-24 bg-ivory-dark">
          <div className="max-w-5xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8 text-center">
                ミッション（解決すべき課題と使命）
              </h2>
              <p className="text-xl md:text-2xl font-bold text-text-primary mb-8 text-center">
                「デジタル化の不自由」を解消する。
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                現在、多くの中小企業には2つの「不自由」が存在します。
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-soft"
                >
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                    活用の不自由
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    専門知識の欠如やコストの壁により、便利なツールを使いこなせない。
                  </p>
                </m.div>

                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-soft"
                >
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                    変化の不自由
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    時代のスピードについていけず、旧来のやり方から抜け出せない。
                  </p>
                </m.div>
              </div>

              <p className="text-lg text-text-secondary leading-relaxed text-center max-w-3xl mx-auto">
                私たちは、この「不自由」を「やさしさ」という独自の伴走スタイルで解消します。ITやAIを「難解な敵」から「頼れる相棒」へと変えることが私たちの使命です。
              </p>
            </m.div>
          </div>
        </section>

        {/* アプローチ */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8 text-center">
                アプローチ（私たちの手法）
              </h2>
              <p className="text-xl md:text-2xl font-bold text-text-primary mb-8 text-center">
                Humanity × Technology
                <br />
                <span className="text-lg font-normal text-text-secondary">
                  （人間味 × 技術）
                </span>
              </p>
              <p className="text-lg text-text-secondary leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                どれだけAIが進化しても、ビジネスの根幹には「人」がいます。
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-ivory-dark rounded-3xl p-8"
                >
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                    専門性と親しみやすさ
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    高度な技術（Next.jsやHeadless CMS等）を、誰にでもわかる言葉で届けます。
                  </p>
                </m.div>

                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-ivory-dark rounded-3xl p-8"
                >
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                    徹底した「伴走型」
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    提案して終わりではなく、成果が出るまで二人三脚で歩みます。
                  </p>
                </m.div>

                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-ivory-dark rounded-3xl p-8"
                >
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
                    スモールスタートの推奨
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    リスクを最小限に抑え、小さく始めて確実に成功体験を積み上げます。
                  </p>
                </m.div>
              </div>
            </m.div>
          </div>
        </section>

        {/* バリュー */}
        <section className="py-24 bg-ivory-dark">
          <div className="max-w-5xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8 text-center">
                バリュー（行動指針）
              </h2>
              <p className="text-xl md:text-2xl font-bold text-text-primary mb-12 text-center">
                三つの「マックス」
              </p>

              <div className="space-y-8">
                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-soft"
                >
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                    寄り添いマックス
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Empathy First
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    お客様の「困った」に誰よりも深く共感し、自分事として考え抜きます。
                  </p>
                </m.div>

                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 shadow-soft"
                >
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                    分かりやすさマックス
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Simple & Clear
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    専門用語を翻訳し、誰もが納得できる透明性の高いコミュニケーションを徹底します。
                  </p>
                </m.div>

                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-3xl p-8 shadow-soft"
                >
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-2">
                    挑戦へのハードル最小マックス
                  </h3>
                  <p className="text-sm text-text-secondary mb-4">
                    Low Barrier, High Impact
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    導入の壁を極限まで低くし、得られる効果を最大化（マックス）させる方法を提案します。
                  </p>
                </m.div>
              </div>
            </m.div>
          </div>
        </section>

        {/* 社名の由来 */}
        <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8">
                社名の由来
              </h2>
              <p className="text-xl md:text-2xl font-bold text-text-primary mb-8">
                やさしさマックス（Yasashisa Max）
              </p>
              <div className="bg-ivory-dark rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
                <p className="text-lg text-text-secondary leading-relaxed">
                  「やさしさ」とは、単なる甘さではありません。お客様が直面している課題を解決するために、最後まで見捨てない「強さ」と、変化を恐れる心に寄り添う「温かさ」を兼ね備えた姿勢です。
                  <br />
                  <br />
                  その「やさしさ」を最大（マックス）限に発揮することで、ITの恩恵をすべての企業に届けたい。そんな想いがこの名前に込められています。
                </p>
              </div>
            </m.div>
          </div>
        </section>

        {/* CTAセクション */}
        <section className="py-24 bg-ivory-dark">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-text-secondary mb-8">
                私たちのビジョンに共感いただけましたら、ぜひお気軽にご相談ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/#contact"
                  className="px-8 py-4 bg-pastel-pink text-text-primary rounded-full font-medium hover:bg-opacity-80 transition-all duration-300 inline-block"
                >
                  お問い合わせ
                </Link>
                <Link
                  href="/"
                  className="px-8 py-4 bg-white text-text-primary rounded-full font-medium hover:bg-opacity-80 transition-all duration-300 inline-block"
                >
                  トップページへ
                </Link>
              </div>
            </m.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
