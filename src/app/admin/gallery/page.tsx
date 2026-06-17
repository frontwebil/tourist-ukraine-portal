import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const images = await prisma.galleryImage.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Галерея ({images.length})</h1>
        <Link href="/admin/gallery/new" className="admin-btn admin-btn-primary">
          + Додати
        </Link>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Зображення</th>
              <th>Назва</th>
              <th>Категорія</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {images.map((img) => (
              <tr key={img.id}>
                <td>{img.id}</td>
                <td>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img.src} alt={img.alt} className="admin-thumb" />
                </td>
                <td>{img.title}</td>
                <td>
                  <span className="admin-badge">{img.category}</span>
                </td>
                <td className="admin-actions-cell">
                  <Link
                    href={`/admin/gallery/${img.id}`}
                    className="admin-btn admin-btn-sm"
                  >
                    ✏️ Редагувати
                  </Link>
                  <DeleteButton endpoint={`/api/gallery/${img.id}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
