import { prisma } from "@/lib/prisma";
import Link from "next/link";
import DeleteButton from "@/components/admin/DeleteButton";

export const dynamic = "force-dynamic";

export default async function AdminNewsPage() {
  const news = await prisma.news.findMany({ orderBy: { createdAt: "desc" } });

  return (
    <div>
      <div className="admin-page-header">
        <h1 className="admin-page-title">Новини ({news.length})</h1>
        <Link href="/admin/news/new" className="admin-btn admin-btn-primary">
          + Додати
        </Link>
      </div>

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Зображення</th>
              <th>Заголовок</th>
              <th>Дата</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {news.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  {item.image && (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img src={item.image} alt="" className="admin-thumb" />
                  )}
                </td>
                <td>{item.title}</td>
                <td>{item.createdAt.toLocaleDateString("uk-UA")}</td>
                <td className="admin-actions-cell">
                  <Link
                    href={`/admin/news/${item.id}`}
                    className="admin-btn admin-btn-sm"
                  >
                    ✏️ Редагувати
                  </Link>
                  <DeleteButton endpoint={`/api/news/${item.id}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
