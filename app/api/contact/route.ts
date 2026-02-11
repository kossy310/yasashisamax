import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
      },
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

// メール送信関数（Gmail SMTP）
async function sendEmail(data: ContactFormData): Promise<boolean> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    console.error("GMAIL_USER or GMAIL_APP_PASSWORD is not set");
    return false;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"やさしさマックス" <${gmailUser}>`,
      to: gmailUser,
      replyTo: data.email,
      subject: `【お問い合わせ】${data.name}様より`,
      text: `
お名前: ${data.name}
メールアドレス: ${data.email}

お問い合わせ内容:
${data.message}
      `.trim(),
      html: `
        <h2>新しいお問い合わせがありました</h2>
        <p><strong>お名前:</strong> ${data.name}</p>
        <p><strong>メールアドレス:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>お問い合わせ内容:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
    });
    return true;
  } catch (error) {
    console.error("Email sending error:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();

    // バリデーション
    if (!data.name || !data.email || !data.message || !data.turnstileToken) {
      return NextResponse.json(
        { error: "必須項目が入力されていません" },
        { status: 400 },
      );
    }

    // Turnstileトークンの検証
    const isValidToken = await verifyTurnstileToken(data.turnstileToken);
    if (!isValidToken) {
      return NextResponse.json(
        { error: "スパム対策の検証に失敗しました" },
        { status: 403 },
      );
    }

    // メール送信
    const emailSent = await sendEmail(data);
    if (!emailSent) {
      return NextResponse.json(
        { error: "メール送信に失敗しました" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { message: "お問い合わせを受け付けました" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "サーバーエラーが発生しました" },
      { status: 500 },
    );
  }
}
