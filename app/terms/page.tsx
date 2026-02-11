import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "利用規約 | やさしさマックス",
  description: "やさしさマックスの利用規約です。",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 min-h-screen bg-ivory">
        <article className="max-w-4xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors mb-8"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            トップに戻る
          </Link>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-8">
              利用規約
            </h1>
            <p className="text-text-secondary text-sm mb-8">
              制定日：2026年2月11日
            </p>

            <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-8">
              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  第1条（適用）
                </h2>
                <p>
                  本規約は、やさしさマックス（以下「当社」）が提供するウェブサイト、LINE公式アカウント、その他一切のサービス（以下「本サービス」）の利用に関する条件を定めるものです。お客様が本サービスをご利用いただく際には、本規約に同意いただいたものとみなします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  第2条（サービスの内容）
                </h2>
                <p>
                  当社は、IT・AI活用DX支援、経営コンサルティング、経営データ分析・可視化、ホームページ制作、業務自動化ツール開発等のサービスを提供いたします。サービスの詳細は当社ウェブサイトに掲載する内容に準じます。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  第3条（お問い合わせ・相談）
                </h2>
                <p>
                  本サービスに関するお問い合わせやご相談は、ウェブサイトのお問い合わせフォーム、またはLINE公式アカウントより受け付けております。お問い合わせいただいた内容について、当社よりご連絡させていただく場合がございます。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  第4条（禁止事項）
                </h2>
                <p className="mb-4">
                  お客様は、本サービスの利用に際して以下の行為を行ってはなりません。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>当社または第三者の知的財産権を侵害する行為</li>
                  <li>当社または第三者の名誉、信用を毀損する行為</li>
                  <li>
                    不正アクセス、スパム行為、その他システムに過度な負荷をかける行為
                  </li>
                  <li>他のお客様または第三者に不利益を与える行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  第5条（サービスの変更・中断）
                </h2>
                <p>
                  当社は、お客様に事前の通知なく、本サービスの内容の変更、または提供の一時的な中断を行う場合があります。この場合、当社はお客様に対して特段の責任を負わないものとします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  第6条（個人情報の取り扱い）
                </h2>
                <p>
                  お客様の個人情報の取り扱いについては、当社のプライバシーポリシーに従い、適切に管理いたします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  第7条（規約の変更）
                </h2>
                <p>
                  当社は、必要に応じて本規約を変更することがあります。変更後の規約は、当社ウェブサイトへの掲載をもって効力を生じるものとします。変更後に本サービスをご利用いただいた場合、変更後の規約に同意したものとみなします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  第8条（準拠法・管轄裁判所）
                </h2>
                <p>
                  本規約の解釈にあたっては、日本法に準拠するものとします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </section>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
