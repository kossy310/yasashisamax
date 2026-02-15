"use client";

import { m } from "framer-motion";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
};

/**
 * 一文字ずつフェードインするテキストアニメーション（CSS ベースでメインスレッド負荷を軽減）
 */
export function AnimatedText({
  text,
  className = "",
  delay = 0,
  duration = 0.05,
}: AnimatedTextProps) {
  const letters = Array.from(text);

  return (
    <span className={className} style={{ display: "inline-block" }}>
      {letters.map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className="animate-letter-in"
          style={{
            animationDelay: `${delay + index * duration}s`,
            whiteSpace: letter === " " ? "pre" : "normal",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}

type AnimatedSectionTitleProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * スクロール時にアニメーションするセクションタイトル
 */
export function AnimatedSectionTitle({
  children,
  className = "",
}: AnimatedSectionTitleProps) {
  return (
    <m.h2
      className={className}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </m.h2>
  );
}
