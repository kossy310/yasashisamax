import { Client } from "@line/bot-sdk";
import crypto from "crypto";

const channelAccessToken = process.env.LINE_MESSAGING_API_CHANNEL_ACCESS_TOKEN;
const channelSecret = process.env.LINE_MESSAGING_API_CHANNEL_SECRET;

export const lineClient =
  channelAccessToken && channelSecret
    ? new Client({
        channelAccessToken,
        channelSecret,
      })
    : null;

export function validateSignature(
  body: string,
  signature: string | null
): boolean {
  if (!channelSecret || !signature) return false;

  const hash = crypto
    .createHmac("sha256", channelSecret)
    .update(body)
    .digest("base64");

  return hash === signature;
}
