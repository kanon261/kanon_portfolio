export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="about-content">
          <div className="about-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://kanon261.github.io/images/profile-photo.png" alt="Baba Kanon" />
          </div>
          <div className="about-text">
            <h3>Baba Kanon</h3>
            <div className="about-info">
              <p><span className="label">Name: </span>Baba Kanon</p>
              <p><span className="label">University: </span>近畿大学 情報学科</p>
              <p>
                <span className="label">Club: </span>
                <a href="https://www.instagram.com/tabippo.south/" target="_blank" rel="noopener noreferrer">TABIPPO</a>、
                <a href="https://www.instagram.com/centia.women/" target="_blank" rel="noopener noreferrer">センティア</a>、
                <a href="https://www.instagram.com/finding__ai/" target="_blank" rel="noopener noreferrer">Finding AI</a>、
                <a href="https://x.com/kindaijourite" target="_blank" rel="noopener noreferrer">情報リテラシー研究会</a>
              </p>
            </div>
            <p className="about-description">
              近畿大学で情報工学を学んでいる学生です。
            </p>
            <p className="about-description">
              まだ「これが一番やりたい」と言い切れる分野は模索中ですが、興味を持ったことには積極的に取り組み、実際に手を動かしながら自分の関心や得意分野を見つけていきたいと考えています。
            </p>
            <p className="about-description">
              このポートフォリオでは、制作物・学習記録を中心に掲載しています。
              未熟な点も多いですが、学び続ける姿勢と成長の過程を大切にしながら、技術力と理解を深めていくことを目標としています。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
