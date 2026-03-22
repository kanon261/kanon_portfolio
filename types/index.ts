// Contentful から取得する Work（作品）の型
export type Work = {
  id: string
  title: string
  date: string
  category: string // "Game App" | "Web App" | "Mobile App" | "Certificate"
  thumbnail: string
  url: string
  description?: string
}

// Contentful の生レスポンス型
export type ContentfulWork = {
  sys: { id: string }
  fields: {
    title: string
    date: string
    category: string
    thumbnail: {
      fields: {
        file: { url: string }
      }
    }
    url: string
    description?: string
  }
}
