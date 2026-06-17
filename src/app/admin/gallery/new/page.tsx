"use client";

import { useRouter } from "next/navigation";
import GalleryForm from "@/components/admin/GalleryForm";

export default function NewGalleryPage() {
  const router = useRouter();

  async function handleSubmit(data: Record<string, string>) {
    const res = await fetch("/api/gallery", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) router.push("/admin/gallery");
    else alert("Помилка при створенні");
  }

  return (
    <div>
      <h1 className="admin-page-title">Додати зображення</h1>
      <GalleryForm onSubmit={handleSubmit} />
    </div>
  );
}
