"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

const keywords = [
  "専門性と親しみやすさ",
  "伴走型サポート",
  "スモールスタート",
  "データ分析",
  "DX支援",
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
            株式会社やさしさMAXについて
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary leading-relaxed max-w-3xl mx-auto">
            「IT」や「AI」といった言葉は、時に冷たく難解な印象を与えますが、
            <br />
            私たちはそれを「温かい手助け」のツールとして活用します。
            <br />
            <br />
            データに基づいた確かな分析と、人間味あふれる丁寧なサポートを融合させ、
            <br />
            お客様の困りごとを解決し、事業の成長を優しく、力強く後押しします。
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
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
              alt="寄り添う優しさ"
              fill
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
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
              alt="心が解ける瞬間"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
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
      </div>
    </section>
  );
}
