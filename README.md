## このリポジトリについて

テスト環境です。データベースにDockerを使っているだけなのでアプリ自体を今後Dokcerに移行する必要あり。

## 設定

- `yarn install`
- `docker compose up`
- .envを作成して.env.exampleを貼り付け

## ダミーデータ

メールアドレス：a@a.com
パスワード：password123

## スキーマいじったら

- フォーマット: `yarn prisma format`
- erdに反映: `yarn prisma generate`
