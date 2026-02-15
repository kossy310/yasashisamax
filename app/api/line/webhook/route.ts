import { NextResponse } from "next/server";
import { lineClient, validateSignature } from "@/lib/lineClient";
import { getReplyMessage } from "@/lib/lineMessages";
import type { LineWebhookBody } from "@/types/line";

export async function POST(request: Request) {
  try {
    const signature = request.headers.get("x-line-signature");
    const body = await request.text();

    if (!validateSignature(body, signature)) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!lineClient) {
      console.error("LINE client is not configured. Check environment variables.");
      return new NextResponse("Internal Server Error", { status: 500 });
    }

    const data: LineWebhookBody = JSON.parse(body);

    if (!data.events || data.events.length === 0) {
      return NextResponse.json({ ok: true });
    }

    for (const event of data.events) {
      // follow イベントはLINE GUIで設定済みのためスキップ
      if (event.type === "follow") {
        continue;
      }

      if (event.type === "message" && event.message?.type === "text") {
        const text = event.message.text;
        if (!text) continue; // textが存在しない場合はスキップ
        const replyMessage = getReplyMessage(text);

        if (replyMessage === null) continue; // 自由文のときは返信しない

        const message =
          typeof replyMessage === "string"
            ? { type: "text" as const, text: replyMessage }
            : replyMessage;

        await lineClient.replyMessage(event.replyToken, message);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("LINE webhook error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
