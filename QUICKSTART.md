# クイックスタートガイド

## 開発環境のセットアップ（5分）

### 1. 依存関係のインストール

\`\`\`bash
npm install
\`\`\`

### 2. 開発サーバーの起動

\`\`\`bash
npm run dev
\`\`\`

ブラウザで http://localhost:3000 を開いてください。

**注意**: 初回起動時、microCMSの環境変数が設定されていないため、ニュースと実績のセクションは空で表示されます。これは正常な動作です。

### 3. microCMSの設定（オプション）

ニュースと実績を表示したい場合：

1. [microCMS](https://microcms.io/)でアカウント作成
2. サービスを作成し、\`news\` と \`works\` のAPIを作成（詳細は[README.md](README.md)参照）
3. \`.env.local\` に環境変数を追加：

\`\`\`env
MICROCMS_SERVICE_DOMAIN=your-service-name
MICROCMS_API_KEY=your-api-key
\`\`\`

4. 開発サーバーを再起動

### 4. Cloudflare Turnstileの設定（オプション）

お問い合わせフォームのスパム対策を有効化したい場合：

1. [Cloudflare](https://www.cloudflare.com/)でアカウント作成
2. Turnstileでサイトを登録（localhost も登録すること）
3. \`.env.local\` に環境変数を追加：

\`\`\`env
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key
TURNSTILE_SECRET_KEY=your-secret-key
\`\`\`

4. 開発サーバーを再起動

## 基本的なカスタマイズ

### カラーの変更

\`app/globals.css\` を編集：

\`\`\`css
@theme {
  --color-ivory: #faf8f3;        /* 背景色 */
  --color-pastel-pink: #ffd6e8;  /* アクセントカラー */
  /* ... */
}
\`\`\`

### コンテンツの編集

- **MV（メインビジュアル）**: \`components/sections/MV.tsx\`
- **About**: \`components/sections/About.tsx\`
- **Service**: \`components/sections/Service.tsx\`
- **その他**: \`components/sections/\` 内の各ファイル

### サイト情報の更新

\`app/layout.tsx\` のメタデータを編集：

\`\`\`typescript
export const metadata: Metadata = {
  title: "あなたのサイト名",
  description: "あなたのサイト説明",
  // ...
};
\`\`\`

## デプロイ

詳細は [DEPLOYMENT.md](DEPLOYMENT.md) を参照してください。

### Vercelへの簡単デプロイ

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

環境変数を設定後、本番デプロイ：

\`\`\`bash
vercel --prod
\`\`\`

## トラブルシューティング

### ビルドエラー

\`\`\`bash
rm -rf .next
npm run build
\`\`\`

### ポート3000が使用中

\`\`\`bash
# 別のポートで起動
PORT=3001 npm run dev
\`\`\`

### スタイルが反映されない

ブラウザのハードリフレッシュ（Cmd+Shift+R / Ctrl+Shift+R）を試してください。

## 次のステップ

- [ ] OGP画像を \`public/ogp.png\` に配置
- [ ] ロゴ画像を追加
- [ ] 実際の写真・イラストを配置
- [ ] microCMSにコンテンツを追加
- [ ] LINE公式アカウントのURLを更新（\`components/sections/Contact.tsx\`）
- [ ] メール送信機能を実装（\`app/api/contact/route.ts\`）

## サポート

- [README.md](README.md) - 詳細なドキュメント
- [DEPLOYMENT.md](DEPLOYMENT.md) - デプロイガイド
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
