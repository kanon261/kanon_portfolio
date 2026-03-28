import { getWorks } from '@/lib/contentful'
import Nav from '@/components/Nav'
import Cursor from '@/components/Cursor'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function WorkDetail({ params }: { params: { id: string } }) {
  const works = await getWorks()
  const work = works.find((w) => w.id === params.id)

  if (!work) notFound()

  const detail = work.detail

  return (
    <>
      <Cursor />
      <Nav />
      <section className="product-detail">
        <div className="container">
          <div className="product-detail-header">
            <Link href="/#products" className="back-home-btn">← Home</Link>
          </div>

          {/* タイトル・サブタイトル・技術バッジ ＋ 画像（2カラム） */}
          <div className="product-detail-content">
            <div className="product-detail-text">
              <h1 className="product-detail-title">{work.title}</h1>
              {detail && <p className="product-detail-subtitle">{detail.subtitle}</p>}
              {detail?.technologies && detail.technologies.length > 0 && (
                <div className="tech-badges">
                  {detail.technologies.map((tech) => (
                    <span key={tech.name} className="tech-badge">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={tech.icon} alt={tech.name} />
                      {tech.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="product-detail-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={work.thumbnail} alt={work.title} />
            </div>
          </div>

          {/* 詳細情報 */}
          {detail && (
            detail.extraImage ? (
              /* GCI用：セクション左 ＋ 証明書画像右 */
              <div className="product-detail-info" style={{ display: 'flex', gap: '80px', alignItems: 'flex-start', maxWidth: '100%' }}>
                <div style={{ flex: 2, paddingRight: '40px' }}>
                  {detail.sections.map((section) => (
                    <div key={section.title} className="detail-section">
                      <h3>{section.title}</h3>
                      {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                      {section.items && (
                        <ul>
                          {section.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      )}
                      {section.note && <p>{section.note}</p>}
                      {section.subitems && (
                        <ul>
                          {section.subitems.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
                <div style={{ flex: 1, paddingLeft: '40px' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={detail.extraImage} alt="certificate" style={{ maxWidth: '400px', width: '100%', borderRadius: '10px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} />
                </div>
              </div>
            ) : (
              /* 通常ページ：テーブル ＋ セクション */
              <div className="product-detail-info">
                {detail.table && detail.table.length > 0 && (
                  <table className="detail-table">
                    <tbody>
                      {detail.table.map((row) => (
                        <tr key={row.label}>
                          <th>{row.label}</th>
                          <td>
                            {row.link ? (
                              <a href={row.link} target="_blank" rel="noopener noreferrer">{row.value}</a>
                            ) : (
                              row.value
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                {detail.sections.map((section) => (
                  <div key={section.title} className="detail-section">
                    <h3>{section.title}</h3>
                    {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                    {section.items && (
                      <ul>
                        {section.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    )}
                    {section.note && <p>{section.note}</p>}
                    {section.subitems && (
                      <ul>
                        {section.subitems.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )
          )}
        </div>
      </section>
    </>
  )
}
