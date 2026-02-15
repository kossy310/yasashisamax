/** 全返信の共通フッター（予約URLなし・LINEチャットで相談内容を促す） */
const FOOTER = "\n\nご相談内容をLINEのチャットでお教えください。";

const MESSAGES: Record<string, string> = {
  "1": `HP制作をご検討いただきありがとうございます！お客様のフェーズに合わせて3つのプランをご用意しています。

スタートアッププラン
「まずは名刺代わりに」という方に。スピーディーに作成します。

CMS（更新機能）付きプラン
ニュースや実績などを、お客様ご自身で簡単に更新したい方向け。

ビジネス伴走プラン
HP制作に加え、問い合わせのLINE通知やスプレッドシート自動保存を実装。月1回のオンラインMTGでデータ分析・改善までトータルサポートします。

具体的なご要望に合わせてお見積もりしますので、お気軽にご相談ください。`,

  "2": `ビジネスに欠かせないツール制作を承ります。

名刺デザイン
初回：1,100円〜（修正3回まで）
モノクロ印刷：1,650円〜

パンフレット（A3二つ折り）
デザイン：33,000円
印刷（10部〜）：5,500円〜

看板デザイン
デザイン：33,000円〜（修正5回まで）
※施工は別途ご相談

その他、各種印刷物も柔軟に対応可能です！`,

  "3": `「これ、自動でできたら楽なのに…」というルーティーンワークをITで解決します。

・案件管理の自動化
・請求書作成のワンクリック化
・フォーム入力の自動化　など

日々の事務作業の負担をグッと軽くするお手伝いをいたします。`,

  "4": `SNS用や商品紹介などの動画編集を承ります。

15秒程度の編集（非広告用）：11,000円〜
※企画・撮影・プロモーション用動画については別途ご相談ください。

お客様の「伝えたい」を形にする動画をお作りします。`,

  "5": `散らばっている売上やコストのデータを、パッと見て状況がわかる「グラフ」にまとめます。

・1人あたりのコスト分析
・人件費と売上のバランス可視化
・広告や営業強化の判断材料に

データに基づいた次の一手を見つけるお手伝いをします。料金は内容により応相談となります。`,

  "6": `個別のご相談は、ZoomまたはGoogle Meetにて【30分無料】で承っております。
現状のお悩みや「こんなことできる？」といったお話を、ざっくばらんにお聞かせください。`,
};

const DEFAULT_MESSAGE = "1〜6の数字でお選びください。";

const BASE_URL = "https://www.yasashisa-max.com";

/** 料金プランカルーセル用のカラムデータ */
const PRICING_CAROUSEL_COLUMNS = [
  {
    title: "🌐 ライトホームページプラン",
    text: "初期100,000円・月額11,000円（税抜）。名刺代わりの1ページサイト。",
    actions: [
      { type: "uri" as const, label: "詳しく見る", uri: `${BASE_URL}/#pricing` },
      { type: "uri" as const, label: "お問い合わせ", uri: `${BASE_URL}/#contact` },
    ],
  },
  {
    title: "📊 ビジネス成長サポートプラン おすすめ",
    text: "初期150,000円・月額16,500円（税抜）。CMS＋月1回解析レポート。",
    actions: [
      { type: "uri" as const, label: "詳しく見る", uri: `${BASE_URL}/#pricing` },
      { type: "uri" as const, label: "お問い合わせ", uri: `${BASE_URL}/#contact` },
    ],
  },
  {
    title: "🚀 DX伴走パック",
    text: "初期300,000円〜・月額33,000円〜（税抜）。業務自動化＋伴走支援。",
    actions: [
      { type: "uri" as const, label: "詳しく見る", uri: `${BASE_URL}/#pricing` },
      { type: "uri" as const, label: "お問い合わせ", uri: `${BASE_URL}/#contact` },
    ],
  },
];

/** 料金プランカルーセルテンプレートメッセージを返す（メニュー用） */
export function getPricingCarousel(): {
  type: "template";
  altText: string;
  template: {
    type: "carousel";
    columns: Array<{
      title: string;
      text: string;
      actions: Array<{ type: "uri"; label: string; uri: string }>;
    }>;
  };
} {
  return {
    type: "template",
    altText: "料金プラン一覧。Webサイトでご確認ください。",
    template: {
      type: "carousel",
      columns: PRICING_CAROUSEL_COLUMNS.map((col) => ({
        title: col.title,
        text: col.text,
        actions: col.actions,
      })),
    },
  };
}

/** 返信メッセージ：テキストまたはテンプレート（カルーセル） */
export type ReplyMessage =
  | string
  | ReturnType<typeof getPricingCarousel>;

/**
 * 選択肢（1〜6）または「メニュー」に応じた返信を取得
 * 「メニュー」の場合はカルーセル、それ以外はテキスト（共通フッター付き）
 */
export function getReplyMessage(choice: string): ReplyMessage {
  const text = choice.trim();

  if (text === "メニュー" || text.toLowerCase() === "menu") {
    return getPricingCarousel();
  }

  if (MESSAGES[text]) {
    return MESSAGES[text] + FOOTER;
  }

  return DEFAULT_MESSAGE;
}
