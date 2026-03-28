// Contentful から取得する Work（作品）の型
export type Work = {
  id: string
  title: string
  date: string
  category: string
  thumbnail: string
  url: string
  description?: string
  detail?: WorkDetail
}

export type TableRow = {
  label: string
  value: string
  link?: string
}

export type WorkSection = {
  title: string
  paragraphs?: string[]
  items?: string[]
  note?: string
  subitems?: string[]
}

export type WorkDetail = {
  subtitle: string
  technologies?: Array<{ name: string; icon: string }>
  table?: TableRow[]
  sections: WorkSection[]
  extraImage?: string
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
