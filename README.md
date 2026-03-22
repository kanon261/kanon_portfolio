# Kanon's Portfolio

Next.js + Contentful + Vercel で構築した本格ポートフォリオサイト。

---

## 技術スタック

| 用途 | 技術 |
|------|------|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| アニメーション | Framer Motion |
| CMS | Contentful |
| デプロイ | Vercel |

---

## ローカルで動かす

### 1. リポジトリをクローン

```bash
git clone https://github.com/kanon261/kanon-portfolio.git
cd kanon-portfolio
```

### 2. パッケージをインストール

```bash
npm install
```

### 3. 環境変数を設定

`.env.local.example` をコピーして `.env.local` を作る。

```bash
cp .env.local.example .env.local
```

`.env.local` を開いて Contentful の値を入力（後述）。

```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

> ⚠️ Contentful をまだ設定していない場合は空欄のままでOK。  
> フォールバックデータ（既存の作品5件）が表示されます。

### 4. 開発サーバー起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開く。

---

## Contentful のセットアップ（作品をCMSで管理したい場合）

### Step 1: アカウント作成

https://www.contentful.com/ で無料アカウントを作成。

### Step 2: Spaceを作成

- 「Add Space」→「Free」を選択
- Space名は `kanon-portfolio` など好きな名前で

### Step 3: Content Type を作成

「Content model」→「Add content type」で以下を作成。

**Content Type 名: `work`**

| Field名 | Field Type | 備考 |
|--------|-----------|------|
| `title` | Short text | 作品名（必須） |
| `date` | Short text | 例: `2025.03`（必須） |
| `category` | Short text | `Game App` / `Web App` / `Mobile App` / `Certificate` |
| `thumbnail` | Media | サムネイル画像（必須） |
| `url` | Short text | 作品へのリンクURL（必須） |
| `description` | Long text | 作品の説明（任意） |

### Step 4: 作品を登録

「Content」→「Add entry」で作品を追加していく。

### Step 5: API Keyを取得

「Settings」→「API keys」→「Add API key」

- **Space ID** と **Content Delivery API - access token** をコピー
- `.env.local` に貼り付け

```env
CONTENTFUL_SPACE_ID=xxxxxxxxxxxxxxxx
CONTENTFUL_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

## Vercel にデプロイする

### Step 1: GitHubにpush

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/kanon261/kanon-portfolio.git
git push -u origin main
```

### Step 2: Vercel にログイン

https://vercel.com/ → 「Sign up」→「Continue with GitHub」

### Step 3: プロジェクトをインポート

- 「Add New...」→「Project」
- `kanon-portfolio` リポジトリを選択して「Import」

### Step 4: 環境変数を設定

「Environment Variables」の欄に以下を追加。

| Name | Value |
|------|-------|
| `CONTENTFUL_SPACE_ID` | ContentfulのSpace ID |
| `CONTENTFUL_ACCESS_TOKEN` | ContentfulのAccess Token |

> Contentful を使わない場合は環境変数の追加は不要。

### Step 5: デプロイ

「Deploy」ボタンを押す。1〜2分で完成！

🎉 `https://kanon-portfolio.vercel.app` のようなURLが発行される。

---

## 作品を追加・更新する方法

Contentful を設定した後は、**コードを触らずに作品を更新**できる。

1. https://app.contentful.com にログイン
2. 「Content」→「Add entry (work)」
3. 情報を入力して「Publish」
4. 自動的に（最大1時間以内に）サイトに反映される ✅

> **即反映したい場合**: Vercel のダッシュボードから「Redeploy」を押す。  
> または Contentful の Webhook と Vercel の Deploy Hook を連携すると自動で即反映できる（任意）。

---

## ファイル構成

```
kanon-portfolio/
├── app/
│   ├── layout.tsx        # HTMLのルート、メタデータ
│   ├── page.tsx          # トップページ（サーバーコンポーネント）
│   └── globals.css       # グローバルスタイル、カーソル
├── components/
│   ├── Cursor.tsx        # カスタムカーソル
│   ├── Nav.tsx           # ナビゲーション
│   ├── Hero.tsx          # ファーストビュー
│   ├── Works.tsx         # 作品一覧
│   ├── About.tsx         # 自己紹介
│   └── Contact.tsx       # フッター・SNSリンク
├── lib/
│   └── contentful.ts     # Contentful API連携
├── types/
│   └── index.ts          # 型定義
├── public/
│   └── images/           # ローカル画像（任意）
├── .env.local            # 環境変数（gitignore済み）
├── .env.local.example    # 環境変数のテンプレート
├── next.config.js
└── tsconfig.json
```

---

## カスタマイズ

### 色を変えたい

`app/globals.css` の `:root` 内の CSS 変数を変更する。

```css
:root {
  --pink: #F2B8C6;       /* メインのピンク */
  --pink-light: #FDE8EF; /* 薄いピンク（背景など） */
  --pink-deep: #D97497;  /* 濃いピンク（アクセント） */
  --cream: #FDF6F0;      /* ページ背景 */
  --beige: #F5EDE4;      /* セクション背景 */
}
```

### 自己紹介文を変えたい

`components/About.tsx` のテキスト部分を直接編集する。

### プロフィール画像を変えたい

`public/images/` にファイルを置いて、`Hero.tsx` と `About.tsx` の `src` を変更する。

```tsx
// 例
src="/images/my-photo.jpg"
```
