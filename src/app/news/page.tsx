import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import NewsCard from "@/components/NewsCard";

export const metadata: Metadata = {
  title: "Новини — TouristUA",
  description: "Новини про туристичні місця та події в Україні",
};

export const dynamic = "force-dynamic";

export default async function NewsPage() {
  const news = await prisma.news.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <>
      <div className="page-hero">
        <h1>Новини</h1>
        <p>Актуальні новини про туристичні місця України</p>
      </div>

      <section className="section">
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
