"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";

// Blur Up用のプレースホルダー（アイボリー系のぼかし）
const BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBEQACEQA/AMf/2Q==";

export function MV() {
  return (
    <section
      id="mv"
      className="h-[600px] md:h-[700px] flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        {/* PC用背景画像 */}
        <Image
          src="/mv/mv.jpg"
          alt="やさしさマックスはHPも名刺も業務の自動化も。少ない予算で、ちゃんと作る"
          fill
          sizes="(max-width: 768px) 100vw, 1920px"
          className="object-cover hidden md:block"
          priority
          quality={85}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        {/* スマホ用背景画像 */}
        <Image
          src="/mv/mv_sp.jpg"
          alt="やさしさマックスはHPも名刺も業務の自動化も。少ない予算で、ちゃんと作る"
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-cover block md:hidden"
          priority
          quality={85}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/80 via-ivory/70 to-ivory/85" />
      </div>

      {/* 背景装飾 */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-pastel-pink/30 blur-3xl z-[1]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-pastel-blue/30 blur-3xl z-[1]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-[#2d3748] mb-4 sm:mb-6 leading-tight"
            style={{
              textShadow:
                "0 1px 4px rgba(0, 0, 0, 0.2), 0 2px 8px rgba(0, 0, 0, 0.15)",
            }}
          >
            <AnimatedText text="HPも名刺も業務の自動化も。" delay={0.2} />
            <br />
            <AnimatedText text="少ない予算で、ちゃんと作る。" delay={0.8} />
          </h1>

          <motion.p
            className="text-sm sm:text-base md:text-xl text-[#4a5568] mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2"
            style={{
              textShadow:
                "0 1px 3px rgba(0, 0, 0, 0.2), 0 2px 6px rgba(0, 0, 0, 0.15)",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            「何から始めればいいかわからない」そんな方に寄り添います。
            <br />
            HP制作は最短7日、名刺・印刷・動画も低価格で。
            <br />
            まずは小さく始めることから、一緒に進めましょう。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{
              filter:
                "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3)) drop-shadow(0 4px 12px rgba(0, 0, 0, 0.2))",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="line" href="#contact">
              LINEで相談する
            </Button>
            <Button variant="ghost" href="#contact">
              Webフォームから連絡
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
