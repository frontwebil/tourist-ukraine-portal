"use client";

import { useState } from "react";
import Link from "next/link";

interface Props {
  initial?: Record<string, string>;
  onSubmit: (data: Record<string, string>) => Promise<void>;
}

export default function SlideForm({ initial, onSubmit }: Props) {
  const [title, setTitle] = useState(initial?.title || "");
  const [description, setDescription] = useState(initial?.description || "");
  const [image, setImage] = useState(initial?.image || "");
  const [order, setOrder] = useState(String(initial?.order ?? "0"));
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await onSubmit({ title, description, image, order });
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
          placeholder="Назва слайду"
        />
      </div>
      <div className="admin-form-group">
        <label>Опис</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          placeholder="Короткий опис для слайду"
        />
      </div>
      <div className="admin-form-group">
        <label>URL зображення *</label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          placeholder="https://images.unsplash.com/..."
        />
        {image && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={image} alt="preview" className="admin-preview" />
        )}
      </div>
      <div className="admin-form-group">
        <label>Порядок (число)</label>
        <input
          type="number"
          value={order}
          onChange={(e) => setOrder(e.target.value)}
          placeholder="0"
        />
      </div>
      <div className="admin-form-actions">
        <button type="submit" className="admin-btn admin-btn-primary" disabled={loading}>
          {loading ? "Збереження..." : initial ? "Зберегти зміни" : "Створити"}
        </button>
        <Link href="/admin/slides" className="admin-btn">
          Скасувати
        </Link>
      </div>
    </form>
  );
}
