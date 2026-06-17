"use client";

import { useState } from "react";
import Link from "next/link";

interface Props {
  initial?: Record<string, string>;
  onSubmit: (data: Record<string, string>) => Promise<void>;
}

export default function GalleryForm({ initial, onSubmit }: Props) {
  const [title, setTitle] = useState(initial?.title || "");
  const [src, setSrc] = useState(initial?.src || "");
  const [alt, setAlt] = useState(initial?.alt || "");
  const [category, setCategory] = useState(initial?.category || "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await onSubmit({ title, src, alt, category });
    setLoading(false);
  }

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <div className="admin-form-group">
        <label>Назва *</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Назва зображення"
        />
      </div>
      <div className="admin-form-group">
        <label>URL зображення *</label>
        <input
          type="url"
          value={src}
          onChange={(e) => setSrc(e.target.value)}
          required
          placeholder="https://images.unsplash.com/..."
        />
        {src && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={src} alt="preview" className="admin-preview" />
        )}
      </div>
      <div className="admin-form-group">
        <label>Alt текст</label>
        <input
          type="text"
          value={alt}
          onChange={(e) => setAlt(e.target.value)}
          placeholder="Опис зображення для доступності"
        />
      </div>
      <div className="admin-form-group">
        <label>Категорія</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Оберіть категорію</option>
          <option value="Замки">Замки</option>
          <option value="Природа">Природа</option>
          <option value="Міста">Міста</option>
          <option value="Інше">Інше</option>
        </select>
      </div>
      <div className="admin-form-actions">
        <button type="submit" className="admin-btn admin-btn-primary" disabled={loading}>
          {loading ? "Збереження..." : initial ? "Зберегти зміни" : "Створити"}
        </button>
        <Link href="/admin/gallery" className="admin-btn">
          Скасувати
        </Link>
      </div>
    </form>
  );
}
