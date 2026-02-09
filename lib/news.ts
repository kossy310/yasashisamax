import { client, isMicroCMSConfigured } from "./microcmsClient";
import type { News, NewsListResponse } from "@/types/news";

/**
 * ニュース一覧を取得
 */
export async function getNewsList(limit = 10): Promise<NewsListResponse> {
  if (!isMicroCMSConfigured()) {
    console.log("microCMS is not configured. Returning empty news list.");
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit,
    };
  }

  try {
    const response = await client.get<NewsListResponse>({
      endpoint: "news",
      queries: {
        limit,
        orders: "-publishedAt",
      },
    });
    return response;
  } catch (error) {
    console.error("Failed to fetch news list:", error);
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit,
    };
  }
}

/**
 * ニュース詳細を取得
 */
export async function getNewsDetail(slug: string): Promise<News | null> {
  if (!isMicroCMSConfigured()) {
    return null;
  }

  try {
    const response = await client.get<News>({
      endpoint: "news",
      contentId: slug,
    });
    return response;
  } catch (error) {
    console.error(`Failed to fetch news detail (${slug}):`, error);
    return null;
  }
}

/**
 * 全ニュースのIDを取得（generateStaticParams用）
 */
export async function getAllNewsIds(): Promise<string[]> {
  if (!isMicroCMSConfigured()) {
    return [];
  }

  try {
    const response = await client.get<NewsListResponse>({
      endpoint: "news",
      queries: {
        fields: "id",
        limit: 1000,
      },
    });
    return response.contents.map((news) => news.id);
  } catch (error) {
    console.error("Failed to fetch all news IDs:", error);
    return [];
  }
}
