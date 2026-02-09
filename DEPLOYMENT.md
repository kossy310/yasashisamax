# デプロイガイド

このドキュメントでは、優しさMAXブランドサイトをVercelにデプロイする手順を説明します。

## 事前準備

### 1. microCMSのセットアップ

1. [microCMS](https://microcms.io/)でアカウントを作成
2. 新しいサービスを作成
3. 以下の2つのAPIを作成：

#### News API（ニュース）

- **エンドポイント**: \`news\`
- **APIの種類**: リスト形式
- **フィールド設定**:
  - \`title\` (テキスト) - 必須
  - \`body\` (リッチエディタ) - 必須
  - \`category\` (セレクト) - 必須
    - 選択肢: お知らせ、活動報告、イベント、メディア掲載
  - \`publishedAt\` (日時) - 必須
  - \`eyecatch\` (画像) - 任意

#### Works API（実績）

- **エンドポイント**: \`works\`
- **APIの種類**: リスト形式
- **フィールド設定**:
  - \`title\` (テキスト) - 必須
  - \`description\` (テキストエリア) - 必須
  - \`thumbnail\` (画像) - 必須
  - \`images\` (複数画像) - 任意
  - \`tags\` (複数テキスト) - 任意
  - \`publishedAt\` (日時) - 必須
  - \`url\` (テキスト) - 任意

4. APIキーを取得（設定 > APIキー）

### 2. Cloudflare Turnstileのセットアップ

1. [Cloudflare](https://www.cloudflare.com/)でアカウントを作成
2. Turnstileセクションに移動
3. 新しいサイトを追加
4. サイトキーとシークレットキーを取得

### 3. メール送信サービスのセットアップ（オプション）

お問い合わせフォームからのメール送信には、以下のいずれかのサービスを推奨：

- **Resend** (推奨): [https://resend.com/](https://resend.com/)
- SendGrid
- Mailgun
- AWS SES

\`app/api/contact/route.ts\` の \`sendEmail\` 関数を、選択したサービスに合わせて実装してください。

## Vercelへのデプロイ

### ステップ1: Gitリポジトリの準備

プロジェクトをGitリポジトリにプッシュ（GitHub, GitLab, Bitbucketなど）

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repository-url>
git push -u origin main
\`\`\`

### ステップ2: Vercelプロジェクトの作成

1. [Vercel](https://vercel.com/)でアカウントを作成
2. 「New Project」をクリック
3. GitリポジトリをインポートVercel CLIを使用する場合：

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### ステップ3: 環境変数の設定

Vercelダッシュボードで「Settings > Environment Variables」に移動し、以下を追加：

#### 必須の環境変数

| 変数名 | 値 | 説明 |
|--------|-----|------|
| \`MICROCMS_SERVICE_DOMAIN\` | \`your-service-name\` | microCMSのサービスドメイン |
| \`MICROCMS_API_KEY\` | \`your-api-key\` | microCMSのAPIキー |
| \`NEXT_PUBLIC_TURNSTILE_SITE_KEY\` | \`your-site-key\` | Turnstileのサイトキー |
| \`TURNSTILE_SECRET_KEY\` | \`your-secret-key\` | Turnstileのシークレットキー |

#### オプションの環境変数

| 変数名 | 値 | 説明 |
|--------|-----|------|
| \`RESEND_API_KEY\` | \`your-resend-api-key\` | Resend APIキー（メール送信用） |

**注意**: 
- \`NEXT_PUBLIC_\` プレフィックスがある変数はクライアント側で使用されます
- それ以外はサーバー側でのみ使用されます

### ステップ4: デプロイの実行

1. Vercelダッシュボードで「Deploy」をクリック
2. ビルドとデプロイが完了するのを待つ（通常2〜3分）
3. デプロイが完了すると、本番URLが表示されます

または、CLIから：

\`\`\`bash
vercel --prod
\`\`\`

## デプロイ後の確認事項

### 1. 基本動作の確認

- [ ] トップページが正常に表示される
- [ ] 各セクション（MV, About, Service, Works, News, Contact）が表示される
- [ ] レスポンシブデザインが機能している（モバイル・タブレット・デスクトップ）

### 2. microCMS連携の確認

- [ ] ニュース一覧が表示される
- [ ] 実績一覧が表示される
- [ ] ニュース詳細ページが開ける
- [ ] 実績詳細ページが開ける

### 3. ISRの動作確認

1. microCMSで新しいニュースを作成
2. 約5分待つ
3. サイトを再読み込みして、新しいニュースが表示されるか確認

### 4. フォームの動作確認

- [ ] Turnstileウィジェットが表示される
- [ ] フォーム送信が成功する
- [ ] エラーハンドリングが適切に動作する
- [ ] メールが届く（メール送信を実装した場合）

### 5. パフォーマンスの確認

以下のツールでパフォーマンスをチェック：

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

目標スコア:
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

### 6. SEOの確認

- [ ] OGP画像が正しく表示される
- [ ] メタタグが適切に設定されている
- [ ] 構造化データが有効（検討中の場合）

## 本番運用

### コンテンツの更新

microCMSでコンテンツを更新すると、ISRにより約5分後にサイトに反映されます。

即座に反映させたい場合：

1. Vercelダッシュボードで「Deployments」に移動
2. 「Redeploy」をクリック

### ドメインの設定

1. Vercelダッシュボードで「Settings > Domains」に移動
2. カスタムドメインを追加
3. DNSレコードを設定
4. SSL証明書が自動的に発行されます

### モニタリング

Vercelの分析機能を使用：

- **Analytics**: トラフィック、パフォーマンス指標
- **Speed Insights**: 実際のユーザー体験データ
- **Logs**: エラーログ、API呼び出しログ

### バックアップとロールバック

Vercelでは、すべてのデプロイが保存されます。

問題が発生した場合：

1. 「Deployments」に移動
2. 以前の正常なデプロイを選択
3. 「Promote to Production」をクリック

## トラブルシューティング

### ビルドエラー

**症状**: デプロイが失敗する

**解決策**:
1. ローカルで \`npm run build\` を実行して問題を特定
2. 依存関係が正しくインストールされているか確認
3. 環境変数が正しく設定されているか確認

### microCMSからデータが取得できない

**症状**: ニュースや実績が表示されない

**解決策**:
1. 環境変数が正しく設定されているか確認
2. microCMSのAPIエンドポイント名が \`news\` と \`works\` になっているか確認
3. APIキーに適切な権限があるか確認
4. Vercelのログを確認（Function Logs）

### ISRが動作しない

**症状**: コンテンツ更新が反映されない

**解決策**:
1. \`revalidate\` が正しく設定されているか確認
2. キャッシュをクリアして再デプロイ
3. Vercelのキャッシュ設定を確認

### Turnstileが動作しない

**症状**: フォームのスパム対策が機能しない

**解決策**:
1. サイトキーが \`NEXT_PUBLIC_TURNSTILE_SITE_KEY\` として設定されているか確認
2. Cloudflareダッシュボードでドメインが登録されているか確認
3. 開発環境では \`localhost\` も登録が必要

## サポート

問題が解決しない場合：

1. [Next.js ドキュメント](https://nextjs.org/docs)
2. [Vercel サポート](https://vercel.com/support)
3. [microCMS ヘルプ](https://help.microcms.io/)
4. [Cloudflare サポート](https://support.cloudflare.com/)

---

デプロイ完了おめでとうございます！ 🎉
