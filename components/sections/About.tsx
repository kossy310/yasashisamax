"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

const keywords = [
  "専門性と親しみやすさ",
  "伴走型サポート",
  "スモールスタート",
  "予算内で妥協しない",
  "Web・印刷・効率化",
  "信頼",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-ivory-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            やさしさマックスについて
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
            「何から始めればいいかわからない」—— そんな方に寄り添います。
            <br />
            ホームページ制作も、名刺デザインも、業務の効率化も。
            <br />
            予算が限られていても、妥協せずに。小さく始めて、着実に成長するお手伝いをします。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft"
          >
            <Image
              src="/about/about1.jpg"
              alt="寄り添う優しさ"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-soft"
          >
            <Image
              src="/about/about2.jpg"
              alt="心が解ける瞬間"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {keywords.map((keyword, index) => (
            <motion.span
              key={keyword}
              className="px-6 py-3 bg-white rounded-full text-text-primary font-medium shadow-soft"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -2 }}
            >
              {keyword}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/vision"
            className="inline-block px-8 py-4 bg-pastel-pink text-text-primary rounded-full font-medium hover:bg-opacity-80 transition-all duration-300 shadow-soft hover:shadow-soft-hover hover:-translate-y-1"
          >
            やさしさマックスのビジョン
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
