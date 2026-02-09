import { NextResponse } from "next/server";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  turnstileToken: string;
};

// Turnstileトークンを検証
async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not set");
    return false;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

// メール送信関数（例: Resendを使用する場合）
async function sendEmail(data: ContactFormData): Promise<boolean> {
  // 実際のメール送信ロジックをここに実装
  // 例: Resend, SendGrid, Nodemailer など
  
  // デモ用のログ出力
  console.log("Contact form submission:", {
    name: data.name,
    email: data.email,
    message: data.message,
  });

  // 実際の実装例（Resendを使用する場合）:
  /*
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    console.error("RESEND_API_KEY is not set");
    return false;
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@yasashisa-max.com",
        to: "info@yasashisa-max.com",
        subject: `お問い合わせ: ${data.name}様より`,
        html: `
          <h2>新しいお問い合わせがありました</h2>
          <p><strong>お名前:</strong> ${data.name}</p>
          <p><strong>メールアドレス:</strong> ${data.email}</p>
          <p><strong>お問い合わせ内容:</strong></p>
          <p>${data.message}</p>
        `,
      }),
    });

    return response.ok;
  } catch (error) {
    console.error("Email sending error:", error);
    return false;
  }
  */

  // デモ用に常に成功を返す
  return true;
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // バリデーション
    if (!data.name || !data.email || !data.message || !data.turnstileToken) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 }
      );
    }

    // Turnstileトークンの検証
    const isValidToken = await verifyTurnstileToken(data.turnstileToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: "スパム対策の検証に失敗しました" },
        { status: 403 }
      );
    }

    // メール送信
    const emailSent = await sendEmail(data);
    if (!emailSent) {
      return NextResponse.json(
        { error: "メール送信に失敗しました" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "お問い合わせを受け付けました" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 }
    );
  }
}
