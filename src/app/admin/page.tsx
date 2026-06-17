import { prisma } from "@/lib/prisma";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const [newsCount, galleryCount, slidesCount] = await Promise.all([
    prisma.news.count(),
    prisma.galleryImage.count(),
    prisma.slide.count(),
  ]);

  const stats = [
    { icon: "📰", label: "Новини", count: newsCount, href: "/admin/news" },
    { icon: "🖼️", label: "Галерея", count: galleryCount, href: "/admin/gallery" },
    { icon: "🎠", label: "Слайди", count: slidesCount, href: "/admin/slides" },
  ];

  return (
    <div>
      <h1 className="admin-page-title">Дашборд</h1>

      <div className="admin-stats-grid">
        {stats.map((s) => (
          <Link key={s.label} href={s.href} className="admin-stat-card">
            <span className="admin-stat-icon">{s.icon}</span>
            <span className="admin-stat-count">{s.count}</span>
            <span className="admin-stat-label">{s.label}</span>
          </Link>
        ))}
      </div>

      <div className="admin-quick-actions">
        <h2>Швидкі дії</h2>
        <div className="admin-actions-row">
          <Link href="/admin/news/new" className="admin-btn admin-btn-primary">
            + Додати новину
          </Link>
          <Link href="/admin/gallery/new" className="admin-btn admin-btn-primary">
            + Додати зображення
          </Link>
          <Link href="/admin/slides/new" className="admin-btn admin-btn-primary">
            + Додати слайд
          </Link>
        </div>
      </div>
    </div>
  );
}
