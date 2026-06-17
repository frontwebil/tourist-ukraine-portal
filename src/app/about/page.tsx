import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Про сайт — TouristUA",
  description: "Інформація про інформаційний портал TouristUA",
};

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <h1>Про сайт</h1>
        <p>Дізнайтеся більше про наш портал та його місію</p>
      </div>

      <section className="section">
        <div className="about-content">
          <div className="about-text">
            <h2>Портал «TouristUA»</h2>
            <p>
              Інформаційний портал <strong>«TouristUA»</strong> — це сучасний
              веб-ресурс, присвячений найвідомішим туристичним місцям України.
              Наша мета — розповісти про красу та різноманіття українських
              пам&apos;яток, замків, природних парків та культурних об&apos;єктів.
            </p>
            <p>
              Україна має неймовірну кількість визначних місць, які вартують
              уваги: від стародавніх замків Поділля та Закарпаття до мальовничих
              Карпатських гір, від історичних центрів Львова та Києва до
              унікальних природних заповідників.
            </p>
            <p>
              Портал створено в рамках курсової роботи з використанням
              сучасних web-технологій: <strong>Next.js</strong>,{" "}
              <strong>React</strong>, <strong>Prisma ORM</strong>,{" "}
              <strong>Supabase</strong> (PostgreSQL), <strong>Bootstrap 5</strong>,
              CSS Grid, Flexbox та медіазапитів для адаптивного дизайну.
            </p>
          </div>
          <div className="about-image">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://varta1.com.ua/uploads/media/images/image/9d/8d/9d8d20ce31a842f58aa6651d6cc4e795n5qobfltetxhygz_image.jpg"
              alt="Львів — перлина Західної України"
            />
          </div>
        </div>

        {/* Статистика */}
        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-number">20+</span>
            <span className="stat-label">Туристичних місць</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">15+</span>
            <span className="stat-label">Новин</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">15+</span>
            <span className="stat-label">Фото в галереї</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24</span>
            <span className="stat-label">Області України</span>
          </div>
        </div>

        {/* Технології */}
        <div style={{ marginTop: "3rem" }}>
          <h2
            className="section-title"
            style={{ textAlign: "center", marginBottom: "1.5rem" }}
          >
            Використані технології
          </h2>
          <div
            className="about-stats"
            style={{ gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}
          >
            {[
              { icon: "⚛️", name: "React / Next.js", desc: "Frontend-фреймворк" },
              { icon: "🗄️", name: "Prisma ORM", desc: "Робота з базою даних" },
              { icon: "🐘", name: "Supabase", desc: "PostgreSQL хмарна БД" },
              { icon: "🎨", name: "Bootstrap 5", desc: "CSS-фреймворк" },
              { icon: "📐", name: "CSS Grid", desc: "Сіткова розмітка" },
              { icon: "📏", name: "Flexbox", desc: "Гнучка розмітка" },
              { icon: "📱", name: "Медіазапити", desc: "Адаптивний дизайн" },
              { icon: "NodeJs", name: "Node.js", desc: "Серверне середовище" },
            ].map((tech) => (
              <div className="stat-card" key={tech.name}>
                <span style={{ fontSize: "2rem" }}>{tech.icon}</span>
                <span
                  className="stat-label"
                  style={{
                    color: "var(--color-primary)",
                    fontWeight: 600,
                    fontSize: "1rem",
                    display: "block",
                    marginTop: "0.5rem",
                  }}
                >
                  {tech.name}
                </span>
                <span className="stat-label">{tech.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
