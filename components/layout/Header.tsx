"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
  { label: "トップ", href: "#mv" },
  { label: "私たちについて", href: "#about" },
  { label: "サービス", href: "#service" },
  { label: "実績", href: "#works" },
  { label: "ニュース", href: "#news" },
  { label: "お問い合わせ", href: "#contact" },
];

export function Header() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
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
          <Link href="/" className="text-2xl font-heading font-bold text-text-primary">
            やさしさマックス
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
            className="md:hidden text-text-primary"
            aria-label="メニューを開く"
          >
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
          </button>
        </div>
      </div>
    </motion.header>
  );
}
