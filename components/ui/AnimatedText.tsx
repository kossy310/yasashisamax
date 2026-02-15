"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
};

/**
 * 一文字ずつフェードインするテキストアニメーション（CSS ベース）
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
 * スクロール時にアニメーションするセクションタイトル（CSS + Intersection Observer）
 */
export function AnimatedSectionTitle({
  children,
  className = "",
}: AnimatedSectionTitleProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <h2
      ref={ref}
      className={`${className} ${isVisible ? "animate-scale-in" : "scroll-hidden"}`}
    >
      {children}
    </h2>
  );
}
