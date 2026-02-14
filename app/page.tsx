import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MV } from "@/components/sections/MV";
import { About } from "@/components/sections/About";
import { Strengths } from "@/components/sections/Strengths";
import { Service } from "@/components/sections/Service";
import { Pricing } from "@/components/sections/Pricing";
import { AutomationExamples } from "@/components/sections/AutomationExamples";
import { News } from "@/components/sections/News";
import { Contact } from "@/components/sections/Contact";
import { getNewsList } from "@/lib/news";

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
