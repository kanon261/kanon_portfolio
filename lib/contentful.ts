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
