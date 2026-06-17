import { prisma } from "@/lib/prisma";
import Slider from "@/components/Slider";
import NewsCard from "@/components/NewsCard";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [slides, news] = await Promise.all([
    prisma.slide.findMany({ orderBy: { order: "asc" } }),
    prisma.news.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
    }),
  ]);

  return (
    <>
      {/* Слайдер */}
      <Slider slides={slides} />

      {/* 10 головних новин */}
      <section className="section">
        <h2 className="section-title">Останні новини</h2>
        <p className="section-subtitle">
          Актуальні новини про туристичні місця України
        </p>

        <div className="news-grid">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              title={item.title}
              excerpt={item.excerpt}
              image={item.image}
              createdAt={item.createdAt}
            />
          ))}
        </div>
      </section>
    </>
  );
}
