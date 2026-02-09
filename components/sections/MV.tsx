"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { AnimatedText } from "@/components/ui/AnimatedText";

export function MV() {
  return (
    <section id="mv" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* 背景画像 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg"
          alt="心が解ける優しい世界"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/50 via-ivory/40 to-ivory/60" />
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

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-text-primary mb-6">
            <AnimatedText text="心が解ける" delay={0.2} />
            <br />
            <AnimatedText text="優しい世界へ" delay={0.8} />
          </h1>

          <motion.p
            className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            あなたの心に寄り添い、やわらかく包み込む。
            <br />
            優しさMAXは、新しい優しさの形を提案します。
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button variant="primary" href="#contact">
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
