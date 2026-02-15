"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "トップ", href: "/#mv" },
  { label: "やさしさマックスとは", href: "/#about" },
  { label: "サービス", href: "/#service" },
  { label: "ニュース", href: "/#news" },
  { label: "お問い合わせ", href: "/#contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuReady, setMenuReady] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const hash = href.includes("#") ? href.split("#")[1] : null;
    if (hash && window.location.pathname === "/") {
      e.preventDefault();
      const target = document.querySelector(`#${hash}`);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
    // 少し遅らせてアニメーション用クラスを付与
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setMenuReady(true));
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuReady(false);
    // フェードアウト後に DOM から削除
    setTimeout(() => setIsMenuOpen(false), 400);
  }, []);

  // メニュー表示中は body スクロールを無効に
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md shadow-soft animate-slide-down">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/logo_yasashisaMax3_ol.png"
              alt="やさしさマックス"
              width={200}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden text-text-primary p-2 -m-2"
            aria-label="メニューを開く"
            onClick={openMenu}
          >
            <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* モバイルメニュー（CSS トランジション） */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] md:hidden bg-pastel-pink flex flex-col items-center justify-center h-screen w-screen menu-overlay"
          style={{ opacity: menuReady ? 1 : 0 }}
        >
          {/* ロゴ */}
          <div
            className="mb-12 flex justify-center transition-all duration-500"
            style={{
              opacity: menuReady ? 1 : 0,
              transform: menuReady ? "translateY(0)" : "translateY(-20px)",
              transitionDelay: "0.2s",
            }}
          >
            <Image
              src="/logo/logo_yasashisaMax_ol.png"
              alt="やさしさマックス"
              width={258}
              height={110}
              className="h-20 w-auto"
            />
          </div>

          {/* ナビゲーション */}
          <nav className="w-full max-w-sm px-6">
            <ul className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className="transition-all duration-500"
                  style={{
                    opacity: menuReady ? 1 : 0,
                    transform: menuReady ? "translateX(0)" : "translateX(-20px)",
                    transitionDelay: `${0.3 + index * 0.1}s`,
                  }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-4 px-6 text-xl font-normal text-text-primary hover:text-pastel-pink hover:bg-ivory-dark rounded-xl transition-colors duration-300 text-center"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 閉じるボタン */}
          <button
            onClick={closeMenu}
            className="absolute top-6 right-6 p-2 text-text-primary hover:text-pastel-pink transition-all duration-500"
            style={{ opacity: menuReady ? 1 : 0, transitionDelay: "0.6s" }}
            aria-label="メニューを閉じる"
          >
            <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      )}
    </header>
  );
}
