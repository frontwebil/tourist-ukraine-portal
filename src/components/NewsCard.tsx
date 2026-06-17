import Link from "next/link";

interface NewsCardProps {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  createdAt: Date;
}

export default function NewsCard({
  id,
  title,
  excerpt,
  image,
  createdAt,
}: NewsCardProps) {
  const dateStr = new Date(createdAt).toLocaleDateString("uk-UA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="news-card">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={image} alt={title} className="news-card-image" />
      <div className="news-card-body">
        <span className="news-card-date">{dateStr}</span>
        <h3 className="news-card-title">{title}</h3>
        <p className="news-card-excerpt">{excerpt}</p>
        <Link href={`/news/${id}`} className="news-card-link">
          Читати далі →
        </Link>
      </div>
    </article>
  );
}
