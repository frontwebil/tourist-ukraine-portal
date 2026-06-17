"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import SlideForm from "@/components/admin/SlideForm";

export default function EditSlidePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [initial, setInitial] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    fetch(`/api/slides/${id}`)
      .then((r) => r.json())
      .then(setInitial)
      .catch(() => alert("Не знайдено"));
  }, [id]);

  async function handleSubmit(data: Record<string, string>) {
    const res = await fetch(`/api/slides/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, order: Number(data.order) || 0 }),
    });
    if (res.ok) router.push("/admin/slides");
    else alert("Помилка при оновленні");
  }

  if (!initial) return <p>Завантаження...</p>;

  return (
    <div>
      <h1 className="admin-page-title">Редагувати слайд #{id}</h1>
      <SlideForm initial={initial} onSubmit={handleSubmit} />
    </div>
  );
}
