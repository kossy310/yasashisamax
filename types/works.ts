export type Works = {
  id: string;
  title: string;
  description: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  images?: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  tags?: string[];
  publishedAt: string;
  url?: string;
  createdAt: string;
  updatedAt: string;
};

export type WorksListResponse = {
  contents: Works[];
  totalCount: number;
  offset: number;
  limit: number;
};
