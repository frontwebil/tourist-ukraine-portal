import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminSlidesPage() {
  const slides = await prisma.slide.findMany({ orderBy: { order: "asc" } });

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Слайдер ({slides.length})</h1>
        <Link href="/admin/slides/new" className="admin-btn admin-btn-primary">
          + Додати
        </Link>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Порядок</th>
              <th>Зображення</th>
              <th>Заголовок</th>
              <th>Опис</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {slides.map((slide) => (
              <tr key={slide.id}>
                <td>{slide.order}</td>
                <td>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={slide.image} alt={slide.title} className="admin-thumb" />
                </td>
                <td>{slide.title}</td>
                <td className="admin-truncate">{slide.description}</td>
                <td className="admin-actions-cell">
                  <Link
                    href={`/admin/slides/${slide.id}`}
                    className="admin-btn admin-btn-sm"
                  >
                    ✏️ Редагувати
                  </Link>
                  <DeleteButton endpoint={`/api/slides/${slide.id}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
