"use client";

import { useState } from "react";

interface GalleryImage {
  id: number;
  title: string;
  src: string;
  alt: string;
  category: string;
}

export default function GalleryClient({
  images,
  categories,
}: {
  images: GalleryImage[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState("Всі");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filtered =
    activeCategory === "Всі"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Фільтри */}
      <div className="gallery-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`gallery-filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Сітка зображень */}
      <div className="gallery-grid">
        {filtered.map((img) => (
          <div
            key={img.id}
            className="gallery-item"
            onClick={() => setLightboxImage(img)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} />
            <div className="gallery-item-overlay">
              <span>{img.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Лайтбокс */}
      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setLightboxImage(null)}
          >
            ✕
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightboxImage.src} alt={lightboxImage.alt} />
          <div className="lightbox-title">{lightboxImage.title}</div>
        </div>
      )}
    </>
  );
}
