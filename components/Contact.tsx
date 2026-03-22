export default function Contact() {
  return (
    <>
      {/* Concept */}
      <section className="concept">
        <div className="container">
          <h2 className="concept-title">Concept</h2>
          <p className="concept-text">つくりながら学び、学びながらつくる</p>
          <div className="concept-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://kanon261.github.io/images/shimaenagas_huwahuwa.png" alt="シマエナガ" />
          </div>
        </div>
      </section>

      {/* Thank You */}
      <section className="thank-you">
        <div className="thank-you-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path fill="#ffe4ec" d="M0,60L48,55C96,50,192,40,288,45C384,50,480,70,576,75C672,80,768,70,864,60C960,50,1056,40,1152,45C1248,50,1344,70,1392,80L1440,90L1440,120L0,120Z" />
          </svg>
        </div>
        <div className="thank-you-content">
          <div className="container">
            <h2 className="thank-you-title">ご覧いただきありがとうございました</h2>
            <p className="thank-you-subtitle">Thank you for your time and interest!</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <p>MyPortfolio</p>
              <p className="footer-subtitle">- BabaKanon&apos;s Products -</p>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/non2u._.u/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://kanon261.github.io/images/insta_cat.jpg" alt="Instagram" />
              </a>
              <a href="https://x.com/z8it44iz48630" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://kanon261.github.io/images/icon_x.jpg" alt="X" />
              </a>
              <a href="https://github.com/kanon261" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://kanon261.github.io/images/icon_github.jpg" alt="GitHub" />
              </a>
            </div>
          </div>
          <p className="credits">
            Illustrations:{' '}
            <a href="https://xn--u9j9hpb6a0g1a.com/" target="_blank" rel="noopener noreferrer">フリーペンシル</a> /{' '}
            <a href="https://eiyoushi-hutaba.com/" target="_blank" rel="noopener noreferrer">フタバ</a> /{' '}
            <a href="https://kaiunillust.com/" target="_blank" rel="noopener noreferrer">ILOHACO</a> /{' '}
            <a href="https://hiyokoyarou.com/" target="_blank" rel="noopener noreferrer">ぴよたそ</a> /{' '}
            <a href="https://regeld.com/desi/" target="_blank" rel="noopener noreferrer">てがきですの！</a> /{' '}
            <a href="https://icons8.jp/" target="_blank" rel="noopener noreferrer">Icons8</a>
          </p>
        </div>
      </footer>
    </>
  )
}
