"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-ivory-dark">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <AnimatedSectionTitle className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            お問い合わせ
          </AnimatedSectionTitle>
          <p className="text-lg text-text-secondary">
            ご質問やご相談など、お気軽にお問い合わせください
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-soft mb-8"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">
              LINEで気軽に相談
            </h3>
            <p className="text-text-secondary mb-6">
              LINEからもお問い合わせいただけます。
              <br />
              お友だち追加後、お気軽にメッセージをお送りください。
            </p>
            <Button variant="primary" href="https://line.me/R/ti/p/@yasashisa-max">
              LINE公式アカウントを追加
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-soft"
        >
          <h3 className="text-2xl font-heading font-bold text-text-primary mb-6 text-center">
            Webフォームから送信
          </h3>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
