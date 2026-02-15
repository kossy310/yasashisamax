import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { AnimatedSectionTitle } from "@/components/ui/AnimatedText";

export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-ivory-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div data-scroll="fade-up" className="scroll-hidden text-center mb-12 sm:mb-16">
          <AnimatedSectionTitle className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-text-primary mb-4 sm:mb-6">
            お問い合わせ
          </AnimatedSectionTitle>
          <p className="text-base sm:text-lg text-text-secondary px-2">
            まずは気軽に、ご相談ください。どんな小さなことでも大丈夫です。
          </p>
        </div>

        <div
          data-scroll="fade-up"
          className="scroll-hidden bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-soft mb-6 sm:mb-8"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary mb-3 sm:mb-4">LINEで気軽に相談</h3>
            <p className="text-sm sm:text-base text-text-secondary mb-4 sm:mb-6 px-2">
              LINEからもお問い合わせいただけます。<br />お友だち追加後、お気軽にメッセージをお送りください。
            </p>
            <Button variant="line" href="https://lin.ee/XLVGmjf">LINE公式アカウントを追加</Button>
          </div>
        </div>

        <div
          data-scroll="fade-up"
          className="scroll-hidden bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-soft"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <h3 className="text-xl sm:text-2xl font-heading font-bold text-text-primary mb-4 sm:mb-6 text-center">Webフォームから送信</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
