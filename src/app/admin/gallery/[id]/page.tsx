"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import GalleryForm from "@/components/admin/GalleryForm";

export default function EditGalleryPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [initial, setInitial] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    fetch(`/api/gallery/${id}`)
      .then((r) => r.json())
      .then(setInitial)
      .catch(() => alert("Не знайдено"));
  }, [id]);

  async function handleSubmit(data: Record<string, string>) {
    const res = await fetch(`/api/gallery/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) router.push("/admin/gallery");
    else alert("Помилка при оновленні");
  }

  if (!initial) return <p>Завантаження...</p>;

  return (
    <div>
      <h1 className="admin-page-title">Редагувати зображення #{id}</h1>
      <GalleryForm initial={initial} onSubmit={handleSubmit} />
    </div>
  );
}
