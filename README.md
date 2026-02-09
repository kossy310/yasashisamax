# 優しさMAX - ブランドサイト

心が解けるような優しい体験を提供するブランドサイトです。

## 技術スタック

- **Frontend**: Next.js 16 (App Router), TypeScript
- **スタイリング**: Tailwind CSS v4
- **アニメーション**: Framer Motion
- **CMS**: microCMS（ニュース・実績管理用）
- **Infrastructure**: Vercel (ISR実装)
- **Security**: Cloudflare Turnstile (フォームのスパム対策)

## 主な機能

- **レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **ISR (Incremental Static Regeneration)**: microCMSのコンテンツを高速表示
- **スパム対策**: Cloudflare Turnstileによるフォーム保護
- **やわらかいアニメーション**: Framer Motionによるスムーズなモーション
- **SEO最適化**: メタデータ、OGP、構造化データ対応

## セットアップ

### 1. 依存関係のインストール

\`\`\`bash
npm install
\`\`\`

### 2. 環境変数の設定

\`.env.local\` ファイルを作成し、以下の環境変数を設定してください：

\`\`\`env
# microCMS
MICROCMS_SERVICE_DOMAIN=your-service-name
MICROCMS_API_KEY=your-api-key

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key
TURNSTILE_SECRET_KEY=your-secret-key

# Email (オプション: Resendなど)
# RESEND_API_KEY=your-resend-api-key
\`\`\`

### 3. microCMSのセットアップ

microCMSで以下の2つのAPIを作成してください：

#### News API

- エンドポイント: \`news\`
- タイプ: リスト形式

| フィールドID | 表示名 | 種類 |
|------------|--------|------|
| title | タイトル | テキストフィールド |
| body | 本文 | リッチエディタ |
| category | カテゴリ | セレクトフィールド（お知らせ、活動報告、イベント、メディア掲載） |
| publishedAt | 公開日 | 日時 |
| eyecatch | アイキャッチ画像 | 画像 |

#### Works API

- エンドポイント: \`works\`
- タイプ: リスト形式

| フィールドID | 表示名 | 種類 |
|------------|--------|------|
| title | タイトル | テキストフィールド |
| description | 説明 | テキストエリア |
| thumbnail | サムネイル | 画像 |
| images | ギャラリー画像 | 複数画像 |
| tags | タグ | 複数選択（カスタムフィールド） |
| publishedAt | 公開日 | 日時 |
| url | リンクURL | テキストフィールド |

### 4. 開発サーバーの起動

\`\`\`bash
npm run dev
\`\`\`

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## Vercelへのデプロイ

### 1. Vercelプロジェクトの作成

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### 2. 環境変数の設定

Vercelダッシュボードで以下の環境変数を設定してください：

- \`MICROCMS_SERVICE_DOMAIN\`
- \`MICROCMS_API_KEY\`
- \`NEXT_PUBLIC_TURNSTILE_SITE_KEY\`
- \`TURNSTILE_SECRET_KEY\`
- \`RESEND_API_KEY\` (オプション)

### 3. ISRの確認

デプロイ後、以下を確認してください：

- ニュース・実績ページが正常に表示される
- microCMSでコンテンツを更新後、約5分（300秒）で反映される
- キャッシュが適切に動作している

## ディレクトリ構成

\`\`\`
.
├── app/
│   ├── api/
│   │   └── contact/           # Contact API Route
│   ├── news/
│   │   └── [slug]/           # ニュース詳細ページ
│   ├── works/
│   │   └── [slug]/           # 実績詳細ページ
│   ├── layout.tsx            # ルートレイアウト
│   ├── page.tsx              # トップページ
│   └── globals.css           # グローバルスタイル
├── components/
│   ├── forms/                # フォームコンポーネント
│   ├── layout/               # Header, Footer
│   ├── sections/             # MV, About, Service, など
│   └── ui/                   # Button などの共通UI
├── lib/
│   ├── microcmsClient.ts     # microCMSクライアント
│   ├── news.ts               # News関連関数
│   └── works.ts              # Works関連関数
├── types/
│   ├── news.ts               # News型定義
│   └── works.ts              # Works型定義
└── public/                   # 静的ファイル
\`\`\`

## カスタマイズ

### カラーパレット

\`app/globals.css\` でカラーパレットをカスタマイズできます：

\`\`\`css
@theme {
  --color-ivory: #faf8f3;
  --color-pastel-pink: #ffd6e8;
  /* その他のカラー */
}
\`\`\`

### アニメーション

Framer Motionを使用したアニメーションは各コンポーネント内で調整できます。
\`components/sections/\` 内のファイルを編集してください。

### ISRの再生成間隔

デフォルトでは300秒（5分）に設定されています。変更する場合は以下のファイルを編集してください：

- \`app/page.tsx\`
- \`app/news/[slug]/page.tsx\`
- \`app/works/[slug]/page.tsx\`

\`\`\`typescript
export const revalidate = 300; // 秒単位で指定
\`\`\`

## トラブルシューティング

### microCMSからデータが取得できない

1. 環境変数が正しく設定されているか確認
2. microCMSのAPIエンドポイント名が正しいか確認（\`news\`, \`works\`）
3. microCMSのAPIキーに適切な権限があるか確認

### Turnstileが表示されない

1. \`NEXT_PUBLIC_TURNSTILE_SITE_KEY\` が設定されているか確認
2. ブラウザの開発者ツールでエラーがないか確認
3. Cloudflareダッシュボードでドメインが登録されているか確認

### ビルドエラー

\`\`\`bash
# キャッシュをクリア
rm -rf .next
npm run build
\`\`\`

## ライセンス

© 2026 優しさMAX. All rights reserved.
# yasashisamax
# yasashisamax
