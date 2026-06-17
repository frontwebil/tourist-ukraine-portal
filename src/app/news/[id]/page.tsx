import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const news = await prisma.news.findUnique({
    where: { id: Number(id) },
  });

  return {
    title: news ? `${news.title} — TouristUA` : "Новина не знайдена",
    description: news?.excerpt ?? "",
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { id } = await params;
  const news = await prisma.news.findUnique({
    where: { id: Number(id) },
  });

  if (!news) notFound();

  const dateStr = news.createdAt.toLocaleDateString("uk-UA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="news-detail" style={{ paddingTop: "2rem" }}>
      <Link href="/news" className="back-link">
        ← Назад до новин
      </Link>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={news.image}
        alt={news.title}
        className="news-detail-image"
      />

      <h1>{news.title}</h1>
      <p className="news-detail-date">📅 {dateStr}</p>

      <div className="news-detail-content">
        {news.content.split("\n").map((paragraph, i) =>
          paragraph.trim() ? <p key={i}>{paragraph}</p> : null
        )}
      </div>
    </div>
  );
}
