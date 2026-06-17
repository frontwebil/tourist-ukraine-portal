"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import NewsForm from "@/components/admin/NewsForm";

export default function EditNewsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [initial, setInitial] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    fetch(`/api/news/${id}`)
      .then((r) => r.json())
      .then(setInitial);
  }, [id]);

  async function handleSubmit(data: Record<string, string>) {
    const res = await fetch(`/api/news/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) router.push("/admin/news");
    else alert("Помилка при оновленні");
  }

  if (!initial) return <p>Завантаження...</p>;

  return (
    <div>
      <h1 className="admin-page-title">Редагувати новину #{id}</h1>
      <NewsForm initial={initial} onSubmit={handleSubmit} />
    </div>
  );
}
