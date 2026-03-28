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
    // Contentful 未設定時はフォールバックデータを返す
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
  },
  {
    id: '2',
    title: '2025 GCI summer',
    date: '2025.09',
    category: 'Certificate',
    thumbnail: '/images/GCI.png',
    url: 'https://kanon261.github.io/gci.html',
  },
  {
    id: '3',
    title: 'キタクル',
    date: '2025.03',
    category: 'Mobile App',
    thumbnail: 'https://kanon261.github.io/images/kitakuru-thumbnail.png',
    url: 'https://kanon261.github.io/kitakuru.html',
  },
  {
    id: '4',
    title: 'Game.gpt',
    date: '2024.06',
    category: 'Web App',
    thumbnail: 'https://kanon261.github.io/images/gamegpt-thumbnail.png',
    url: 'https://kanon261.github.io/gamegpt.html',
  },
  {
    id: '5',
    title: 'uzatodo',
    date: '2024.05',
    category: 'Web App',
    thumbnail: 'https://kanon261.github.io/images/uzatodo-thumbnail.png',
    url: 'https://kanon261.github.io/uzatodo.html',
  },
]
