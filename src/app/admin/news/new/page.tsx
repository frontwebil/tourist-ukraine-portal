"use client";

import { useRouter } from "next/navigation";
import NewsForm from "@/components/admin/NewsForm";

export default function NewNewsPage() {
  const router = useRouter();

  async function handleSubmit(data: Record<string, string>) {
    const res = await fetch("/api/news", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) router.push("/admin/news");
    else alert("Помилка при створенні");
  }

  return (
    <div>
      <h1 className="admin-page-title">Додати новину</h1>
      <NewsForm onSubmit={handleSubmit} />
    </div>
  );
}
