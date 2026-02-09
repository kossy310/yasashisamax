import Link from "next/link";

const navItems = [
  { label: "トップ", href: "#mv" },
  { label: "私たちについて", href: "#about" },
  { label: "サービス", href: "#service" },
  { label: "実績", href: "#works" },
  { label: "ニュース", href: "#news" },
  { label: "お問い合わせ", href: "#contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ivory-dark py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
              優しさMAX
            </h3>
            <p className="text-text-secondary text-sm">
              心が解けるような優しい体験を提供します
            </p>
          </div>

          <div>
            <h4 className="text-lg font-medium text-text-primary mb-4">
              サイトマップ
            </h4>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-medium text-text-primary mb-4">
              SNS / お問い合わせ
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm inline-flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.6 21h-3.2c-5.5 0-7.4-1.9-7.4-7.4V10.4C3 4.9 4.9 3 10.4 3h3.2c5.5 0 7.4 1.9 7.4 7.4v3.2c0 5.5-1.9 7.4-7.4 7.4z" />
                </svg>
                LINE公式アカウント
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-text-secondary/20 pt-6 text-center">
          <p className="text-text-secondary text-sm">
            &copy; {currentYear} 優しさMAX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
