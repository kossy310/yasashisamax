import { createClient } from "microcms-js-sdk";

// 環境変数が設定されていない場合はダミークライアントを作成（ビルド時のエラー回避）
const serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN || "dummy";
const apiKey = process.env.MICROCMS_API_KEY || "dummy";

export const client = createClient({
  serviceDomain,
  apiKey,
});

export const isMicroCMSConfigured = (): boolean => {
  return (
    process.env.MICROCMS_SERVICE_DOMAIN !== undefined &&
    process.env.MICROCMS_API_KEY !== undefined &&
    process.env.MICROCMS_SERVICE_DOMAIN !== "dummy" &&
    process.env.MICROCMS_API_KEY !== "dummy"
  );
};
