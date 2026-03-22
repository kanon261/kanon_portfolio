export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">MyPortfolio</h1>
          <p className="hero-subtitle">- BabaKanon&apos;s Products -</p>
        </div>
        <div className="hero-icon-wrapper">
          <div className="hero-icon">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://kanon261.github.io/images/rabbit_ribbon.jpg" alt="Profile Icon" />
          </div>
          <div className="floating-tag floating-tag--top">
            <span className="floating-tag-dot" />
            App Developer
          </div>
          <div className="floating-tag floating-tag--bottom">
            <span className="floating-tag-dot" />
            近畿大学 情報学科
          </div>
        </div>
      </div>
      <div className="wave-container">
        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </section>
  )
}
