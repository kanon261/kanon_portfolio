import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Kanon's Portfolio",
  description: '近畿大学情報学科 Baba Kanonのポートフォリオサイト。制作物・学習記録を掲載しています。',
  openGraph: {
    title: "Kanon's Portfolio",
    description: 'つくりながら学び、学びながらつくる',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
