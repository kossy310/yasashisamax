import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "ページが見つかりません | やさしさマックス",
  description: "お探しのページは見つかりませんでした。",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-24 min-h-[70vh] flex items-center justify-center bg-ivory">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-6xl md:text-8xl font-heading font-bold text-pastel-pink/80 mb-4">
            404
          </p>
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
            ページが見つかりません
          </h1>
          <p className="text-text-secondary mb-10">
            お探しのページは存在しないか、移動した可能性があります。
            <br />
            トップページからお探しください。
          </p>
          <Button href="/" variant="primary">
            トップページへ戻る
          </Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
