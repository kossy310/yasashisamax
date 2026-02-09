import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MV } from "@/components/sections/MV";
import { About } from "@/components/sections/About";
import { Service } from "@/components/sections/Service";
import { News } from "@/components/sections/News";
import { Works } from "@/components/sections/Works";
import { Contact } from "@/components/sections/Contact";
import { getNewsList } from "@/lib/news";
import { getWorksList } from "@/lib/works";

// ISRを有効化（300秒ごとに再生成）
export const revalidate = 300;

export default async function Home() {
  // microCMSからデータを取得（本番環境では実際のAPIから取得）
  const newsResponse = await getNewsList(5);
  const newsList = newsResponse.contents;

  const worksResponse = await getWorksList(6);
  const worksList = worksResponse.contents;

  return (
    <>
      <Header />
      <main>
        <MV />
        <About />
        <Service />
        <Works worksList={worksList} />
        <News newsList={newsList} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
