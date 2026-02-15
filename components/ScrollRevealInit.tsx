"use client";

import { useEffect } from "react";

/**
 * グローバル Intersection Observer（1つだけ）で全スクロールアニメーションを制御。
 * data-scroll 属性を持つ要素を監視し、画面に入ったらアニメーションクラスを付与する。
 * MutationObserver で動的に追加された要素も自動検知。
 */
export function ScrollRevealInit() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const anim = el.dataset.scroll;
            if (anim) {
              el.classList.remove("scroll-hidden");
              el.classList.add(`animate-${anim}`);
            }
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const scan = () => {
      document
        .querySelectorAll<HTMLElement>("[data-scroll]:not([data-observed])")
        .forEach((el) => {
          el.setAttribute("data-observed", "");
          io.observe(el);
        });
    };

    scan();

    // 動的インポートで後から追加される要素も検知
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
