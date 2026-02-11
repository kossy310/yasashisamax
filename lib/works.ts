import { client, isMicroCMSConfigured } from "./microcmsClient";
import type { Works, WorksListResponse } from "@/types/works";

/**
 * 実績一覧を取得
 */
export async function getWorksList(limit = 12): Promise<WorksListResponse> {
  if (!isMicroCMSConfigured()) {
    console.log("microCMS is not configured. Returning empty works list.");
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit,
    };
  }

  try {
    const response = await client.get<WorksListResponse>({
      endpoint: "works",
      queries: {
        limit,
        orders: "-publishedAt",
      },
    });
    return response;
  } catch (error) {
    console.error("Failed to fetch works list:", error);
    return {
      contents: [],
      totalCount: 0,
      offset: 0,
      limit,
    };
  }
}

/**
 * 実績詳細を取得
 */
export async function getWorksDetail(slug: string): Promise<Works | null> {
  if (!isMicroCMSConfigured()) {
    return null;
  }

  try {
    const response = await client.get<Works>({
      endpoint: "works",
      contentId: slug,
    });
    return response;
  } catch (error) {
    console.error(`Failed to fetch works detail (${slug}):`, error);
    return null;
  }
}

/**
 * 全実績のIDを取得（generateStaticParams用）
 */
export async function getAllWorksIds(): Promise<string[]> {
  if (!isMicroCMSConfigured()) {
    return [];
  }

  try {
    const response = await client.get<WorksListResponse>({
      endpoint: "works",
      queries: {
        fields: "id",
        limit: 100,
      },
    });
    return response.contents.map((works) => works.id);
  } catch (error) {
    console.error("Failed to fetch all works IDs:", error);
    return [];
  }
}
