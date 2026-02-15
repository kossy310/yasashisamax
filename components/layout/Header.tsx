"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-ivory/90 backdrop-blur-md shadow-soft"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
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
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-[100] md:hidden bg-pastel-pink flex flex-col items-center justify-center h-screen w-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {/* ロゴ */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 flex justify-center"
            >
              <Image
                src="/logo/logo_yasashisaMax_ol.png"
                alt="やさしさマックス"
                width={258}
                height={110}
                className="h-20 w-auto"
              />
            </motion.div>

            {/* ナビゲーション */}
            <nav className="w-full max-w-sm px-6">
              <ul className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="block py-4 px-6 text-xl font-medium text-text-primary hover:text-pastel-pink hover:bg-ivory-dark rounded-xl transition-colors duration-300 text-center"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* 閉じるボタン */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-text-primary hover:text-pastel-pink transition-colors"
              aria-label="メニューを閉じる"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
