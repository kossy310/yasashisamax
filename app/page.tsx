import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MV } from "@/components/sections/MV";
import { About } from "@/components/sections/About";
import { Strengths } from "@/components/sections/Strengths";
import dynamic from "next/dynamic";
import { getNewsList } from "@/lib/news";

// 下部のセクションを遅延読み込み（初期 JS を削減）
const Service = dynamic(() => import("@/components/sections/Service").then(mod => ({ default: mod.Service })));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => ({ default: mod.Pricing })));
const AutomationExamples = dynamic(() => import("@/components/sections/AutomationExamples").then(mod => ({ default: mod.AutomationExamples })));
const News = dynamic(() => import("@/components/sections/News").then(mod => ({ default: mod.News })));
const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="min-h-screen" />,
});

// ISRを有効化（300秒ごとに再生成）
export const revalidate = 300;

export default async function Home() {
  // microCMSからデータを取得（本番環境では実際のAPIから取得）
  const newsResponse = await getNewsList(3);
  const newsList = newsResponse.contents;

  return (
    <>
      <Header />
      <main>
        <MV />
        <About />
        <Strengths />
        <Service />
        <Pricing />
        <AutomationExamples />
        <News newsList={newsList} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
