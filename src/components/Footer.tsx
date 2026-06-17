import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h3>🇺🇦 TouristUA</h3>
          <p>
            Інформаційний портал про найвідоміші туристичні місця України.
            Відкривай красу рідного краю разом з нами!
          </p>
        </div>

        <div className="footer-links">
          <h4>Навігація</h4>
          <ul>
            <li><Link href="/">Головна</Link></li>
            <li><Link href="/about">Про сайт</Link></li>
            <li><Link href="/gallery">Галерея</Link></li>
            <li><Link href="/news">Новини</Link></li>
            <li><Link href="/contacts">Контакти</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Контакти</h4>
          <p>📍 м. Київ, Україна</p>
          <p>📧 info@touristua.com</p>
          <p>📞 +380 (44) 123-45-67</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TouristUA — Найвідоміші туристичні місця України. Всі права захищені.</p>
      </div>
    </footer>
  );
}
