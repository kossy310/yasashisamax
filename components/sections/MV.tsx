"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";
import mvImage from "@/public/mv/mv.jpg";
import mvSpImage from "@/public/mv/mv_sp.jpg";

const MV_ALT =
  "やさしさマックスはHPも名刺も業務の自動化も。少ない予算で、ちゃんと作る";

export function MV() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // matchMedia はレイアウトを強制しない（innerWidth と違い強制リフローを回避）
    const mql = window.matchMedia("(max-width: 767px)");
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="mv"
      className="h-[600px] md:h-[700px] flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        {isMobile ? (
          <Image src={mvSpImage} alt={MV_ALT} fill priority placeholder="blur" sizes="100vw" className="object-cover" quality={75} />
        ) : (
          <Image src={mvImage} alt={MV_ALT} fill priority placeholder="blur" sizes="100vw" className="object-cover" quality={75} />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/70 to-ivory/85" />
      </div>

      {/* 背景装飾（CSS アニメーション） */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-pastel-pink/30 blur-3xl z-[1] animate-pulse-pink" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-pastel-blue/30 blur-3xl z-[1] animate-pulse-blue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-[#2d3748] mb-4 sm:mb-6 leading-tight"
            style={{ textShadow: "0 1px 4px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15)" }}
          >
            <AnimatedText text="HPも名刺も業務の自動化も。" delay={0.2} />
            <br />
            <AnimatedText text="少ない予算で、ちゃんと作る。" delay={0.8} />
          </h1>

          <p
            className="text-sm sm:text-base md:text-xl text-[#4a5568] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2 animate-fade-up"
            style={{
              textShadow: "0 1px 3px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.15)",
              animationDelay: "0.4s",
              animationFillMode: "both",
            }}
          >
            「何から始めればいいかわからない」そんな方に寄り添います。
            <br />
            HP制作は最短7日、名刺・印刷・動画も低価格で。
            <br />
            まずは小さく始めることから、一緒に進めましょう。
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up"
            style={{
              filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))",
              animationDelay: "0.6s",
              animationFillMode: "both",
            }}
          >
            <Button variant="line" href="#contact">LINEで相談する</Button>
            <Button variant="ghost" href="#contact">Webフォームから連絡</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
