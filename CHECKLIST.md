# デプロイ前チェックリスト

プロジェクトをデプロイする前に、以下の項目を確認してください。

## コンテンツ

- [ ] OGP画像を \`public/ogp.png\` に配置（推奨サイズ: 1200x630px）
- [ ] ファビコンを更新（\`app/favicon.ico\`）
- [ ] サイトタイトルと説明文を更新（\`app/layout.tsx\`）
- [ ] LINE公式アカウントのURLを更新（\`components/sections/Contact.tsx\`, \`components/layout/Footer.tsx\`）
- [ ] 実際の画像・イラストを配置（\`public/\` ディレクトリ）
- [ ] 各セクションのテキストを最終チェック

## microCMS設定

- [ ] microCMSアカウントを作成
- [ ] \`news\` APIを作成し、必要なフィールドを設定
- [ ] \`works\` APIを作成し、必要なフィールドを設定
- [ ] APIキーを取得
- [ ] テストコンテンツを数件追加

## Cloudflare Turnstile設定

- [ ] Cloudflareアカウントを作成
- [ ] Turnstileでサイトを登録
- [ ] サイトキーとシークレットキーを取得
- [ ] 本番ドメインを登録（デプロイ後）

## メール送信設定（オプション）

- [ ] メール送信サービス（Resend、SendGridなど）を選択
- [ ] APIキーを取得
- [ ] \`app/api/contact/route.ts\` の \`sendEmail\` 関数を実装
- [ ] テストメールを送信して動作確認

## 環境変数

Vercelに以下の環境変数を設定：

### 必須
- [ ] \`MICROCMS_SERVICE_DOMAIN\`
- [ ] \`MICROCMS_API_KEY\`
- [ ] \`NEXT_PUBLIC_TURNSTILE_SITE_KEY\`
- [ ] \`TURNSTILE_SECRET_KEY\`

### オプション
- [ ] \`RESEND_API_KEY\`（または他のメールサービスのAPIキー）

## コード品質

- [ ] \`npm run build\` が成功することを確認
- [ ] TypeScriptエラーがないことを確認
- [ ] ローカル環境で動作確認（\`npm run dev\`）
- [ ] 主要ブラウザで表示確認（Chrome, Safari, Firefox, Edge）
- [ ] モバイル・タブレットで表示確認

## SEO・パフォーマンス

- [ ] metadataが適切に設定されている
- [ ] OGP画像が正しく表示される
- [ ] ページ読み込み速度が十分に速い
- [ ] 画像が最適化されている（next/imageを使用）
- [ ] アクセシビリティを確認（コントラスト、フォーカス状態など）

## 法的事項

- [ ] プライバシーポリシーの追加を検討
- [ ] 利用規約の追加を検討（必要に応じて）
- [ ] コピーライト表示の年度を確認

## デプロイ後

- [ ] 本番URLが正常に動作することを確認
- [ ] SSL証明書が正しく設定されている
- [ ] すべてのページが正常に表示される
- [ ] フォーム送信が正常に動作する
- [ ] microCMSのコンテンツが表示される
- [ ] ISRが正常に動作している（コンテンツ更新が約5分で反映）
- [ ] Google Search Consoleにサイトを登録
- [ ] Google Analyticsを設定（必要に応じて）
- [ ] Cloudflare Turnstileに本番ドメインを登録

## 保守・運用

- [ ] 定期的なバックアップの計画
- [ ] コンテンツ更新フローの確立
- [ ] エラーモニタリングの設定（Vercel Analytics、Sentryなど）
- [ ] パフォーマンスモニタリングの設定

## トラブルシューティング用

問題が発生した場合に確認：

- [ ] Vercelのログを確認
- [ ] microCMSのAPI設定を確認
- [ ] 環境変数が正しく設定されているか確認
- [ ] ブラウザの開発者ツールでエラーを確認
- [ ] ネットワークタブでAPI呼び出しを確認

---

すべてのチェックが完了したら、デプロイの準備完了です！ 🚀
