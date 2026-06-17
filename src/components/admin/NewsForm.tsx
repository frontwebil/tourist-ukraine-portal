"use client";

import { useState } from "react";
import Link from "next/link";

interface Props {
  initial?: Record<string, string>;
  onSubmit: (data: Record<string, string>) => Promise<void>;
}

export default function NewsForm({ initial, onSubmit }: Props) {
  const [title, setTitle] = useState(initial?.title || "");
  const [slug, setSlug] = useState(initial?.slug || "");
  const [excerpt, setExcerpt] = useState(initial?.excerpt || "");
  const [image, setImage] = useState(initial?.image || "");
  const [content, setContent] = useState(initial?.content || "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await onSubmit({ title, slug, excerpt, image, content });
    setLoading(false);
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <div className="admin-form-group">
        <label>Заголовок *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Заголовок новини"
        />
      </div>
      <div className="admin-form-group">
        <label>Slug (URL)</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="auto-generated якщо порожньо"
        />
      </div>
      <div className="admin-form-group">
        <label>Короткий опис</label>
        <input
          type="text"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="Короткий опис для картки"
        />
      </div>
      <div className="admin-form-group">
        <label>URL зображення</label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://images.unsplash.com/..."
        />
        {image && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={image} alt="preview" className="admin-preview" />
        )}
      </div>
      <div className="admin-form-group">
        <label>Контент *</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={10}
          placeholder="Повний текст новини..."
        />
      </div>
      <div className="admin-form-actions">
        <button type="submit" className="admin-btn admin-btn-primary" disabled={loading}>
          {loading ? "Збереження..." : initial ? "Зберегти зміни" : "Створити"}
        </button>
        <Link href="/admin/news" className="admin-btn">
          Скасувати
        </Link>
      </div>
    </form>
  );
}
