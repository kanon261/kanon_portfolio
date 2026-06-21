import { createClient } from 'contentful'
import type { Work, ContentfulWork } from '@/types'

// 作品一覧を取得（日付の新しい順）
export async function getWorks(): Promise<Work[]> {
  if (!process.env.CONTENTFUL_SPACE_ID || !process.env.CONTENTFUL_ACCESS_TOKEN) {
    return FALLBACK_WORKS
  }

  try {
    const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    })

    const response = await client.getEntries({
      content_type: 'work',
      order: ['-fields.date'],
    })

    return (response.items as unknown as ContentfulWork[]).map((item) => ({
      id: item.sys.id,
      title: item.fields.title,
      date: item.fields.date,
      category: item.fields.category,
      thumbnail: 'https:' + item.fields.thumbnail.fields.file.url,
      url: item.fields.url,
      description: item.fields.description,
    }))
  } catch (error) {
    console.error('Contentful fetch error:', error)
    return FALLBACK_WORKS
  }
}

// Contentful 未設定時のフォールバックデータ
const FALLBACK_WORKS: Work[] = [
  {
    id: '9',
    title: 'Miroé',
    date: '2026.06',
    category: 'Web App',
    thumbnail: '/images/miroe.png',
    url: 'https://miroe-frontend.onrender.com/',
    detail: {
      subtitle: 'コスメ管理 × メイクシミュレーターアプリ（継続開発中）',
      technologies: [
        { name: 'React', icon: 'https://kanon261.github.io/images/icon-react-.png' },
        { name: 'JavaScript', icon: 'https://kanon261.github.io/images/icon-javascript.png' },
        { name: 'Python', icon: '/images/python.png' },
      ],
      table: [
        { label: 'GitHub', value: 'kanon261/Miroe', link: 'https://github.com/kanon261/Miroe' },
        { label: 'デモ', value: 'miroe-frontend.onrender.com', link: 'https://miroe-frontend.onrender.com/' },
        { label: 'ステータス', value: '継続開発中🔧' },
        { label: '使用技術', value: 'Next.js / Python（FastAPI）/ MySQL / AWS' },
        { label: '制作人数', value: '個人開発' },
      ],
      sections: [
        {
          title: 'アプリ概要',
          paragraphs: [
            'Miroé（ミロエ）は、持っているコスメを管理しながら、自分に似合う色の傾向を見つけていくアプリ。フランス語の「Miroir（鏡）」が語源で、語尾の「é」には「映し出された」という意味を込めた。鏡が自分を映すように、まだ知らなかった自分の似合う色を映し出すアプリを目指している。',
            '2ヶ月でMVP（最低限動く版）を開発・デプロイし、現在は個人開発として機能を追加中。',
          ],
        },
        {
          title: '作った理由',
          paragraphs: [
            'プチプラ・オンラインコスメを買うとき、購入前に自分の顔で色を確認できず、失敗購入が続くことが多い。SNSやモデルの写真は加工されていたり顔タイプが違ったりして参考にならず、「自分に似合うかどうか」は結局買ってみるまでわからない状況がある。',
            'そこで「持っているコスメを記録して似合う色の傾向を把握する」「自分の顔写真で色を仮想試着する」という2段階のアプローチで、この問題を解決するアプリを作ることにした。',
          ],
        },
        {
          title: '実装済み機能',
          items: [
            'ユーザー登録・ログイン',
            'コスメ登録・一覧表示・編集・削除（カラーピッカーで色を記録）',
            'カテゴリフィルター（リップ / アイシャドウ / チーク）',
            'コスメ詳細（カラーコード・評価・ステータス管理）',
            'パーソナル管理（パーソナルカラー・骨格タイプ・顔タイプの登録）',
          ],
        },
        {
          title: '今後追加予定の機能',
          items: [
            '顔写真にリップ・アイシャドウを仮想試着できるAIメイクシミュレーター（MediaPipe + Canvas API）',
            'コスメの傾向分析（よく使うカラーやカテゴリをグラフで可視化）',
            'コスメの写真からカラーコードを自動取得する機能',
            'ウィッシュリスト機能・ユーザープロフィール編集',
          ],
        },
        {
          title: '技術選定の理由',
          items: [
            'フロントエンドにNext.js：将来のシミュレーター実装でCanvas APIと組み合わせやすく、就職市場での需要も高い',
            'バックエンドにPython（FastAPI）：将来的に顔認識ライブラリ（MediaPipe・OpenCV）と同じ言語で統一でき、記述がシンプルで開発しやすい',
            'AWSにデプロイ：実務に近い環境を経験するため、EC2・RDSを使って本番環境を構築',
          ],
        },
        {
          title: '学んだこと',
          paragraphs: [
            '2ヶ月間で要件定義・設計・実装・デプロイまでを一人でやり切り、フルスタック開発の一連の流れを経験した。時間内にすべての機能は実装できなかったが、デプロイまで完走することができた。「動くものを届ける」ことを優先しながら、設計の段階で将来の拡張性を意識することの大切さを学んだ。',
          ],
        },
      ],
    },
  },
  {
    id: '7',
    title: 'Flush Code Hack',
    date: '2026.06/06',
    category: 'Hackathon',
    thumbnail: '/images/FCH_20_07_18.png',
    url: '',
    detail: {
      subtitle: 'ポーカーAIハッカソン 総合優勝',
      technologies: [
        { name: 'JavaScript', icon: 'https://kanon261.github.io/images/icon-javascript.png' },
        { name: 'Node.js', icon: 'https://kanon261.github.io/images/icon-ノードjs.png' },
      ],
      table: [
        { label: '結果', value: '総合優勝🏆' },
        { label: '背景', value: 'Flush Code Hack ポーカーAIハッカソン' },
        { label: '制作人数', value: '3名' },
        { label: '発表日', value: '2026/06/06' },
      ],
      sections: [
        {
          title: 'プロジェクト概要',
          paragraphs: [
            '5枚ドローポーカーのAI対戦ゲーム。各チームがプレイヤープログラムを実装し、100ラウンド後に最もポイントが多いチームが優勝。ゲームエンジン・UIは主催側が提供済みで、各チームは start / bet / draw / end の4メソッドだけを実装する形式。3名チームで参加し、総合優勝を果たした。',
          ],
        },
        {
          title: 'ベット戦略',
          items: [
            '場の賭けが初期ポイントの半分超（minBetPoint > initialPoint / 2）→ Drop（ハイリスクを回避）',
            'bet-1フェーズで誰も賭けていない → Bet（先手で場をリード）',
            'bet-2フェーズで賭けが initialPoint/10 未満 → Raise（安い場ならレイズで押す）',
            '上記以外 → Check / Call（様子見）',
            '1/1000の確率でAll-in（ランダム奇襲）',
            'betUnit（レイズ量）はラウンド開始時に200〜500のランダム値に設定し、相手に読まれにくくした',
          ],
        },
        {
          title: 'ドロー戦略',
          items: [
            'ストレート以上（役強度≥5）→ 全枚キープ（強い役は崩さない）',
            'ワンペア → ペアの2枚をキープし、残り3枚を交換',
            'ハイカード → 各カードを50%確率でランダム交換',
          ],
        },
        {
          title: '手役評価エンジン',
          paragraphs: [
            'フレームワーク提供の utils/hand.ts を活用。ハイカード（1）〜ロイヤルストレートフラッシュ（10）の完全評価を実装し、countRanks でランク別枚数を集計してワンペア・スリーカード・フルハウス等を判定。isFlush / isStraight でスート・連番チェックを行い、同役の場合はカードの数字→スート（スペード最強）でタイブレーク。',
          ],
        },
        {
          title: '工夫した点',
          items: [
            'ベット量のランダム化：毎ラウンド betUnit を乱数で決定し、相手AIにベットパターンを学習されにくくした',
            'ドロップの閾値設定：minBetPoint > initialPoint / 2 という明確な撤退条件で無駄な失点を防ぐ',
            'ペア保持ロジック：countRanks でペアのカードだけを特定し、それ以外を捨てる合理的な交換',
          ],
        },
        {
          title: '難しかった点',
          items: [
            '自分の手札しか見えない：他プレイヤーのカードはゲームエンジン側で隠されるため、相手の強さを推定できない不完全情報ゲームの難しさ',
            'フェーズ管理の複雑さ：bet-1 → draw-1 → bet-2 → draw-2 の二段構成で、各フェーズで最適な行動が異なる',
            'All-inとDropの判定：追加賭けポイントの正負・スタック残量でアクションが変わる複雑なロジックへの対応',
          ],
        },
        {
          title: '学んだこと',
          paragraphs: [
            '不完全情報ゲームでは相手の手札が見えないため、ポイント比や場の状況という間接情報だけで判断する必要があり、その難しさを実感した。また、複雑な統計的推論より明確なルールベース戦略（「初期ポイントの半分超ならドロップ」等）の方が実装・デバッグが容易で堅牢であることも学んだ。チーム開発では役割分担・コミュニケーションの重要性を実践的に体験し、Gemini CLIをはじめてAIをツールとして活用することで作業効率が大きく向上した。',
          ],
        },
      ],
      extraImage: '/images/FCH_certifcate.jpg',
    },
  },
  {
    id: '8',
    title: '生成AI・データ分析実践プログラム',
    date: '2026.04/24',
    category: 'Data Analysis',
    thumbnail: '/images/doda.png',
    url: 'https://campus.doda.jp/aiprogram',
    detail: {
      subtitle: '販促予算を最適化する顧客ターゲティング戦略 第7位',
      table: [
        { label: '結果', value: '第7位🎖️（合計点平均: 13.47点）' },
        { label: '主催', value: 'dodaキャンパス × キカガク' },
        { label: '期間', value: '2026年3月中旬〜5月中旬（約2ヶ月）' },
        { label: '発表日', value: '2026/04/24' },
        { label: 'チーム', value: 'チーム68' },
      ],
      sections: [
        {
          title: 'プロジェクト概要',
          paragraphs: [
            'dodaキャンパスとキカガクが共同主催する約2ヶ月間のデータ分析・AI活用プログラム。最終課題では、実際の店舗の購買データ（64,000件）を使って「どの顧客にクーポンを送れば最も効率よく売上が上がるか」をデータで明らかにし、マーケティング部長への提案資料としてまとめた。',
            '現状は全顧客に一律でクーポンを配信しているが、コストに見合っていない可能性がある。そこで「買ってくれそうな顧客だけに絞って配信する」戦略を提案。配信数を約60%削減しながら、対象顧客の購入率を18.3%→23.3%に引き上げる（効率1.27倍）という結論を出した。',
          ],
        },
        {
          title: '分析の進め方',
          items: [
            '①クーポンの効果を比較：「割引クーポン・BOGO（1つ買えばもう1つ無料）・配信なし」の3パターンで購入率を集計。割引クーポンが最も効果的（購入率18.3%）と確認',
            '②どの要素が購入につながるかをスクリーニング：年齢・購入履歴・居住地など各変数を個別に調べたが、単独では購入率との関係が弱く、組み合わせでの分析が必要と判断',
            '③複数要因を同時に分析（重回帰分析）：「割引・BGOの利用経験あり」の顧客ほど購入しやすいと定量化。一方、紹介経由の顧客は直感に反して購入率が低いことを発見',
            '④顧客を自動でグループ分け（クラスタリング）：購買傾向の似た顧客を4グループに分類。電話チャネル利用者が最も購入率が低いことが新たに判明',
          ],
        },
        {
          title: '独自スコアの設計',
          paragraphs: [
            '4つの分析結果を組み合わせ、「この顧客はクーポンに反応しやすいか」を0〜5点で数値化する「販促反応スコア」を独自に設計。スコアが高いほど購入率も高く、1点の顧客（8.0%）と5点の顧客（35.6%）では4.5倍の差が生まれた。',
          ],
          items: [
            '+1点：過去にBOGO（1つ買えばもう1つ無料）を利用したことがある',
            '+1点：過去に割引クーポンを利用したことがある',
            '+1点：知人からの紹介ではなく、自分で来店している（紹介経由の顧客は意外にも購入率が低い）',
            '+1点：農村部（Rural）に住んでいる（都市部より購入率が高い）',
            '+1点：WebまたはMultichannelで購入している（電話のみの顧客は購入率が最低）',
          ],
        },
        {
          title: '提案と期待効果',
          paragraphs: [
            'スコア3点以上の顧客（全体の40%・約25,800人）にのみ割引クーポンを配信する施策を提案。配信件数を約60%減らしながら、対象顧客の購入率は23.3%まで向上する。割引コストが一定水準を超えていれば、全員配信より利益額でも上回ることを試算で示した。',
          ],
        },
        {
          title: '評価スコアとフィードバック',
          items: [
            '①論理性・明瞭さ：4.37点',
            '②目的・課題設定：4.53点',
            '③結論・施策の提案：4.58点',
            '「結論ファーストかつデータに基づいた施策設計で、聴き手が理解しやすかった」',
            '「販促反応スコアという独自の基準を設けているところが素晴らしい」',
            '「スライドの完成度がとても高くて驚きました」',
          ],
        },
        {
          title: '学んだこと',
          paragraphs: [
            '複数の分析手法を組み合わせることで、単独では気づけなかった発見（紹介経由の顧客がなぜか購入率が低いなど）が見えてきた。また、分析の正確さだけでなく「誰に・何を・どう伝えるか」を意識した資料構成が、評価に大きく影響することを実感した。データの裏にあるビジネスの文脈を読む視点が身についた。',
          ],
        },
      ],
      extraImage: '/images/ai_data.jpg',
    },
  },
  {
    id: '6',
    title: 'Style AI',
    date: '2026.04/18',
    category: 'Web App',
    thumbnail: '/images/style-ai-thumbnail.svg',
    url: 'https://style-ai-wheat.vercel.app/',
    detail: {
      subtitle: '「似合う」を可視化するAIスタイリスト',
      technologies: [
        { name: 'TypeScript', icon: 'https://kanon261.github.io/images/icon-javascript.png' },
        { name: 'Vue.js', icon: 'https://kanon261.github.io/images/icon-react-.png' },
        { name: 'Tailwind CSS', icon: 'https://kanon261.github.io/images/icon-css.png' },
      ],
      table: [
        { label: 'GitHub', value: 'kanon261/Style-AI', link: 'https://github.com/kanon261/Style-AI' },
        { label: 'デモ', value: 'style-ai-wheat.vercel.app', link: 'https://style-ai-wheat.vercel.app/' },
        { label: '背景', value: '株式会社Relic 1dayインターン（AI×プロダクト開発体験）', link: 'https://relic.co.jp/' },
        { label: '使用技術', value: 'TypeScript, Vue.js, Tailwind CSS' },
        { label: '制作人数', value: '1名（個人開発）' },
        { label: '制作時期', value: '2026.04/18' },
      ],
      sections: [
        {
          title: 'プロジェクト概要',
          paragraphs: [
            '簡単な質問に答えるだけで、AIがパーソナルカラー（イエベ・ブルベ）と骨格診断を行い、似合うメイク・ファッション・NG例まで提案するWebアプリ。無料・登録不要・約3分で診断が完了する。',
            'コンセプトは「自分に似合うメイクや服が分からない」「パーソナルカラー診断は高くて気軽に試せない」という悩みをAIで手軽に解決すること。',
          ],
        },
        {
          title: '制作背景',
          paragraphs: ['株式会社Relicが主催する1dayインターン「AI×プロダクト開発体験」に参加し、企画・設計・実装・発表を1日で行った。MVPとして診断機能とUI実装を優先し、短時間で動くプロダクトを完成させることを目標とした。'],
        },
        {
          title: '主な機能',
          items: [
            'パーソナルカラー診断（イエベ・ブルベ）',
            '骨格診断（似合うシルエット提案）',
            'AIによるメイク・ファッション・NG例の提案',
            '今日のコーデ提案（天気×シーン別に毎日更新）',
            'ワードローブ管理（手持ちアイテムの相性チェック）',
            '診断履歴・季節変化トラッキング',
            '2人診断（ペアコーデ相性チェック）',
            '結果のURLシェア機能',
          ],
        },
        {
          title: '診断システム',
          paragraphs: ['diagnosisEngine.ts にルールベースのロジックを実装し、ユーザーの肌トーン・雰囲気・好きな系統・悩みの入力をもとにパーソナルカラーと骨格タイプを判定。①タイプ診断 ②特徴 ③メイク提案 ④ファッション提案 ⑤NG例 ⑥一言コメント の6項目を出力する。'],
        },
        {
          title: '学んだこと',
          paragraphs: ['1日という制約の中で、企画からデプロイまでを一人でやり切った。自分の作りたいものの理想にできるだけ近づけ、とにかく動くものを時間以内に完成させることを目標に開発を進めた。', 'APIの接続がうまくいかなかったが、完成を優先して切り替えを決断し、ルールベースのロジックで診断機能を実装した。「動くものを届けること」への意識と、状況に応じて柔軟に方針を変える判断力を学んだ。'],
        },
      ],
    },
  },
  {
    id: '1',
    title: '麻雀学習ゲーム',
    date: '2026.01',
    category: 'Game App',
    thumbnail: 'https://kanon261.github.io/images/mahjong.png',
    url: 'https://kanon261.github.io/mahjong.html',
    detail: {
      subtitle: 'AIが最適な打牌をレコメンドする麻雀練習アプリ',
      technologies: [
        { name: 'Unity', icon: 'https://kanon261.github.io/images/icon-unity.png' },
        { name: 'C#', icon: 'https://kanon261.github.io/images/icon-c.png' },
      ],
      table: [
        { label: 'GitHub', value: 'kanon261/unity_-mahjong-game', link: 'https://github.com/kanon261/unity_-mahjong-game' },
        { label: '使用技術', value: 'Unity, C#' },
        { label: '対応OS', value: 'Windows, macOS' },
        { label: '制作人数', value: '1名（個人開発）' },
        { label: '制作時期', value: '2026.01' },
      ],
      sections: [
        {
          title: 'プロジェクト概要',
          paragraphs: ['初心者向けの麻雀学習アプリケーション。AIによるレコメンドシステムを搭載し、牌効率を練習することができる。'],
        },
        {
          title: '目的',
          paragraphs: ['麻雀ゲームを制作しようと考えた理由は、AIを組み込んだプログラムを実際に作ってみたかったからである。本来は機械学習を用いたAIの実装に挑戦したかったが、制作期間の制約から十分な検証や学習を行う時間を確保できなかった。そのため、今回はルールベースAIを採用し、麻雀の打牌ロジックを設計・実装することに注力した。'],
        },
        {
          title: '実装済み機能',
          items: [
            '基本的なゲームフロー（配牌、ツモ、打牌）',
            'AIによる最適打牌のハイライト表示',
            '和了判定',
            '流局判定',
          ],
        },
        {
          title: 'アーキテクチャ',
          note: 'コードベースは2層構造で設計されている：',
          subitems: [
            'Core層：ゲームロジックとAI（Unity非依存）',
            'Engine層：UIとゲーム進行（Unity依存）',
          ],
        },
        {
          title: 'AIシステム',
          note: 'レコメンドエンジンはルールベースのロジックを使用し、以下の2つの基準で評価を行う：',
          subitems: [
            'シャンテン数：和了までの距離',
            '受け入れ枚数：進行可能な有効牌の数',
          ],
        },
      ],
    },
  },
  {
    id: '2',
    title: '2025 GCI summer',
    date: '2025.09',
    category: 'Certificate',
    thumbnail: '/images/GCI.png',
    url: 'https://kanon261.github.io/gci.html',
    detail: {
      subtitle: '東京大学グローバル消費インテリジェンス寄付講座',
      sections: [
        {
          title: 'GCIとは？',
          paragraphs: ['東京大学の松尾・岩澤研究室が主催する日本国内の学生を対象としたAI・データサイエンスを学べる公開講座（東京大学グローバル消費インテリジェンス寄付講座）'],
        },
        {
          title: 'GCI講座（Summer）の特徴',
          items: [
            '内容：データサイエンスやAIの基礎〜応用までを学ぶ講義・実践課題中心のプログラム',
            '主催：東京大学工学系研究科 松尾・岩澤研究室による寄附講座',
            '形式：オンライン講義＋課題・コンペ形式の実践学習中心',
            '対象：主に学生（中学生〜大学生まで幅広い年齢層）',
            '費用：学生向けは原則無料',
            '修了者の機会：優秀者には海外視察研修などの追加機会がある場合もある',
          ],
        },
        {
          title: '学んだこと',
          paragraphs: [
            '本プログラム（GCI）を通して、私はAIやデータサイエンスに関する知識だけでなく、それらを社会課題や実際の問題解決にどのように活用するかという視点を学ぶことができた。',
            'これまでAIについては、アルゴリズムや手法を個別に学ぶことが中心であったが、GCIでは「何のために分析を行うのか」「どのような価値を生み出すのか」を常に意識する必要があった点が印象的であった。',
          ],
        },
      ],
      extraImage: 'https://kanon261.github.io/images/gci-certificate.jpeg',
    },
  },
  {
    id: '3',
    title: 'キタクル',
    date: '2025.03',
    category: 'Mobile App',
    thumbnail: 'https://kanon261.github.io/images/kitakuru-thumbnail.png',
    url: 'https://kanon261.github.io/kitakuru.html',
    detail: {
      subtitle: '北九州の魅力を伝えるアプリ',
      technologies: [
        { name: 'Flutter', icon: 'https://kanon261.github.io/images/icon-flutter.png' },
        { name: 'Dart', icon: 'https://kanon261.github.io/images/icon-dart.png' },
        { name: 'C++', icon: 'https://kanon261.github.io/images/icon-c++.png' },
        { name: 'Swift', icon: 'https://kanon261.github.io/images/icon-swift.png' },
        { name: 'HTML', icon: 'https://kanon261.github.io/images/icon-html.png' },
      ],
      table: [
        { label: '背景', value: 'DigItKITAQのハッカソンで制作 キタクルを通して北九州の魅力を伝える' },
        { label: '発表資料', value: 'digit.pdf', link: 'https://kanon261.github.io/digit.pdf' },
        { label: '制作人数', value: '5名' },
        { label: '担当箇所', value: '投稿画面のUI' },
        { label: '発表プロダクト', value: '2025/3/16 DigItKITAQ' },
        { label: '制作期間', value: '2025/3/3〜2025/3/16' },
      ],
      sections: [
        {
          title: 'DigItKITAQについて',
          items: [
            '技術学習・勉強会（オンライン）：ITスキルの基礎〜実践をオンラインで学ぶ勉強会がある',
            'アイデアソン（対面）：テーマに沿ってチームでアイデアを出し合い、アプリの設計を行うイベント',
            'ハッカソン（対面）：チームでアプリを制作し、現役エンジニアのメンタリングを受けながら開発する',
            '成果発表会・交流会：完成したアプリをプレゼンテーション形式で発表し、企業の担当者とも交流できる。優秀作品は表彰される。',
          ],
        },
        {
          title: '学んだこと',
          paragraphs: ['今回の経験を通して、チームワーク、時間配分、そして発表準備の重要性を学んだ。制作に集中するあまり、これらは軽視されがちであるが、どれほど完成度の高い作品であっても、その価値が他者に伝わらなければ意味がないと感じた。'],
        },
      ],
    },
  },
  {
    id: '4',
    title: 'Game.gpt',
    date: '2024.06',
    category: 'Web App',
    thumbnail: 'https://kanon261.github.io/images/gamegpt-thumbnail.png',
    url: 'https://kanon261.github.io/gamegpt.html',
    detail: {
      subtitle: 'ChatGPT APIを活用したゲームアプリ',
      technologies: [
        { name: 'React', icon: 'https://kanon261.github.io/images/icon-react-.png' },
        { name: 'Unity', icon: 'https://kanon261.github.io/images/icon-unity.png' },
        { name: 'JavaScript', icon: 'https://kanon261.github.io/images/icon-javascript.png' },
        { name: 'Node.js', icon: 'https://kanon261.github.io/images/icon-ノードjs.png' },
      ],
      table: [
        { label: 'GitHub', value: 'uedasatosi/chatg-app', link: 'https://github.com/uedasatosi/chatg-app' },
        { label: '機能', value: 'ChatGPTのAPIを使った質問サイト ゲーム（シューティングゲーム、玉転ゲーム）' },
        { label: '制作人数', value: '4名' },
        { label: '担当箇所', value: '2名でゲームを担当し、私はUnityでシューティングゲームを作成した' },
        { label: '発表プロダクト', value: '2024/6/16 ハックツハッカソン ステゴカップ' },
        { label: '制作期間', value: '2024/6/15〜2024/6/16' },
      ],
      sections: [
        {
          title: '学んだこと',
          paragraphs: [
            '前回の経験での反省を生かし、今回は事前準備に力を入れて取り組んだ。その結果、自分の担当箇所であるゲーム部分を完成させることができた。Unityを用いた制作は今回が初めてであったが、インターネットで情報を調べながら試行錯誤を重ね、最終的に形のある成果物として完成させることができた。',
            'これまで個人で一つの作品を最後まで作り上げた経験は少なかったため、自分の力で制作を完遂できたことに大きな達成感を得た。この経験を通して、技術的な成長だけでなく、自分自身への自信にもつながったと感じている。',
          ],
        },
      ],
    },
  },
  {
    id: '5',
    title: 'uzatodo',
    date: '2024.05',
    category: 'Web App',
    thumbnail: 'https://kanon261.github.io/images/uzatodo-thumbnail.png',
    url: 'https://kanon261.github.io/uzatodo.html',
    detail: {
      subtitle: '焦りを具現化するTodoアプリ',
      technologies: [
        { name: 'HTML', icon: 'https://kanon261.github.io/images/icon-html.png' },
        { name: 'CSS', icon: 'https://kanon261.github.io/images/icon-css.png' },
        { name: 'JavaScript', icon: 'https://kanon261.github.io/images/icon-javascript.png' },
        { name: 'Azure', icon: 'https://kanon261.github.io/images/icon-azure.png' },
      ],
      table: [
        { label: 'GitHub', value: 'kuro1985345/hackson1', link: 'https://github.com/kuro1985345/hackson1' },
        { label: '背景', value: 'すべきことが多いと、何かをし忘れたり、後回しにしがち' },
        { label: '目的', value: 'Todoの焦りを具現化し、やるべきこと後回しにしないようにする' },
        { label: '機能', value: 'TO DO LIST機能、CALENDAR機能、LOGIN機能 当日までに目標を解決しないと、大事な予定を消される' },
        { label: '制作人数', value: '4名' },
        { label: '担当箇所', value: 'フロント画面作成、カレンダー機能' },
        { label: '発表プロダクト', value: '2024/5/19 ハックツハッカソン コロカップ' },
        { label: '制作期間', value: '2024/5/18〜2024/5/19' },
      ],
      sections: [
        {
          title: '学んだこと',
          paragraphs: [
            '初めてハッカソンに参加し、サークルの先輩2名と同級生1名とチームを組んで計4名で制作を行った。開催時期は5月頃で、ハッカソンへの参加自体が初めての経験であったため、右も左も分からない状態での参加となった。',
            'ハッカソン当日までの期間に、先輩方が勉強会を開催してくださり、HTMLやCSSの基礎について教えてもらった。実際の制作では、フロントエンドの画面作成とカレンダー機能を担当した。しかし、知識や経験が十分でない中での本番は想像以上に難しく、このハッカソンを一言で表すと「絶望」であった。',
            '何をすべきか分からないまま時間だけが過ぎていき、自分から積極的に動くことができなかった。それでも、メンターの方の助言を受けながら作業を進め、自分の担当箇所をなんとか完成させることができた。先輩方の支えもあり、最終的にはチームとして成果物を形にすることができた。',
            'この経験を通して、チームで協力することの重要性や、自身の役割りを明確にした上で行動することの大切さを学んだ。',
          ],
        },
      ],
    },
  },
]
