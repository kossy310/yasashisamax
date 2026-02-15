export type LineWebhookEvent = {
  type: "follow" | "message" | "unfollow" | "postback";
  replyToken: string;
  source: {
    userId: string;
    type: "user" | "group" | "room";
  };
  timestamp: number;
  message?: {
    id: string;
    type: "text" | "image" | "video";
    text?: string;
  };
};

export type LineWebhookBody = {
  destination: string;
  events: LineWebhookEvent[];
};
