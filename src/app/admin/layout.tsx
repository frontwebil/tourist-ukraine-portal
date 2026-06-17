import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-logo">
          <Link href="/admin">⚙️ Адмін-панель</Link>
        </div>
        <nav className="admin-nav">
          <Link href="/admin" className="admin-nav-link">
            📊 Дашборд
          </Link>
          <Link href="/admin/news" className="admin-nav-link">
            📰 Новини
          </Link>
          <Link href="/admin/gallery" className="admin-nav-link">
            🖼️ Галерея
          </Link>
          <Link href="/admin/slides" className="admin-nav-link">
            🎠 Слайдер
          </Link>
        </nav>
        <div className="admin-sidebar-footer">
          <Link href="/" className="admin-nav-link">
            ← На сайт
          </Link>
        </div>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
