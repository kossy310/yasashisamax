import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "トップ", href: "/#mv" },
  { label: "やさしさマックスとは", href: "/#about" },
  { label: "サービス", href: "/#service" },
  { label: "ニュース", href: "/#news" },
  { label: "お問い合わせ", href: "/#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ivory-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
              やさしさマックス
            </h3>
            <p className="text-text-secondary text-sm">
              低予算でも、品質にこだわる。
              <br />
              Web、印刷、業務効率化まで。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-text-primary mb-4">
              サイトマップ
            </h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-medium text-text-primary mb-4">
              SNS / お問い合わせ
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://lin.ee/XLVGmjf"
                className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm inline-flex items-center gap-2"
              >
                <Image
                  src="/icon/linelogo.png"
                  alt="LINE"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                LINE公式アカウント
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-text-secondary/20 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <Link
              href="/terms"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              利用規約
            </Link>
            <Link
              href="/privacypolicy"
              className="text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              プライバシーポリシー
            </Link>
          </div>
          <p className="text-text-secondary text-sm text-center mt-4">
            &copy; {currentYear} やさしさマックス. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
