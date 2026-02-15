type AnimatedTextProps = {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
};

/**
 * 一文字ずつフェードインするテキストアニメーション（CSS ベース・サーバーコンポーネント）
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
 * スクロール時にアニメーションするセクションタイトル（data-scroll でグローバル Observer が処理）
 */
export function AnimatedSectionTitle({
  children,
  className = "",
}: AnimatedSectionTitleProps) {
  return (
    <h2 data-scroll="scale-in" className={`scroll-hidden ${className}`}>
      {children}
    </h2>
  );
}
