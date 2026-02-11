import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "プライバシーポリシー | やさしさマックス",
  description: "やさしさマックスのプライバシーポリシーです。",
};

export default function PrivacyPolicyPage() {
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
              プライバシーポリシー
            </h1>
            <p className="text-text-secondary text-sm mb-8">
              制定日：2026年2月11日
            </p>

            <div className="prose prose-lg max-w-none text-text-secondary leading-relaxed space-y-8">
              <section>
                <p>
                  やさしさマックス（以下「当社」）は、お客様の個人情報の保護を重要視し、個人情報の保護に関する法令及びその他の規範を遵守するとともに、以下のプライバシーポリシーに従って適切な取り扱いと保護に努めます。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  1. 個人情報の定義
                </h2>
                <p>
                  本ポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）を指します。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  2. 収集する個人情報
                </h2>
                <p className="mb-4">
                  当社は、以下の個人情報を収集することがあります。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>お名前</li>
                  <li>メールアドレス</li>
                  <li>電話番号</li>
                  <li>会社名・団体名</li>
                  <li>
                    LINEのユーザーID（LINE公式アカウントを通じたお問い合わせの場合）
                  </li>
                  <li>お問い合わせ内容</li>
                  <li>その他、お問い合わせフォーム等でご提供いただく情報</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  3. 個人情報の利用目的
                </h2>
                <p className="mb-4">
                  当社は、収集した個人情報を以下の目的で利用いたします。
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>お問い合わせへの対応</li>
                  <li>サービスの提供、契約の履行</li>
                  <li>サービスの改善・新サービスの開発</li>
                  <li>重要なお知らせやご案内の送付</li>
                  <li>
                    統計データの作成（個人を特定できない形式に加工した場合）
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  4. 個人情報の第三者提供
                </h2>
                <p>
                  当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。なお、業務の委託先に対して個人情報を預ける場合は、適切な管理体制をとり、個人情報の保護に努めます。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  5. 個人情報の管理
                </h2>
                <p>
                  当社は、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じ、個人情報へのアクセスを必要最小限の担当者に限定するなど、厳重に管理いたします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  6. 個人情報の保存期間
                </h2>
                <p>
                  当社は、利用目的の達成に必要な期間、個人情報を保存いたします。お問い合わせ内容については、対応完了後、適切な期間が経過した時点で削除いたします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  7. お客様の権利
                </h2>
                <p>
                  お客様は、当社に対してご自身の個人情報の開示、訂正、削除、利用停止等を請求することができます。ご請求の際は、当社ウェブサイトのお問い合わせフォームよりご連絡ください。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  8. Cookie・アクセス解析について
                </h2>
                <p>
                  当社ウェブサイトでは、利便性の向上やアクセス解析のため、Cookieを使用する場合があります。Cookieの使用を希望されない場合は、ブラウザの設定により拒否することが可能です。ただし、その場合、一部の機能が正常に動作しない可能性があります。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  9. プライバシーポリシーの改定
                </h2>
                <p>
                  当社は、法令の変更や社会情勢の変化に応じて、本ポリシーを改定することがあります。改定した場合は、当社ウェブサイトに掲載いたします。
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-bold text-text-primary mb-4">
                  10. お問い合わせ
                </h2>
                <p>
                  本ポリシーに関するお問い合わせは、当社ウェブサイトのお問い合わせフォーム、またはLINE公式アカウントよりお願いいたします。
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
