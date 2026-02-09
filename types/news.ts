export type NewsCategory = "お知らせ" | "活動報告" | "イベント" | "メディア掲載";

export type News = {
  id: string;
  title: string;
  body: string;
  category: NewsCategory;
  publishedAt: string;
  eyecatch?: {
    url: string;
    height: number;
    width: number;
  };
  createdAt: string;
  updatedAt: string;
};

export type NewsListResponse = {
  contents: News[];
  totalCount: number;
  offset: number;
  limit: number;
};
