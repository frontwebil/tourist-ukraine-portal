"use client";

import { useRouter } from "next/navigation";
import SlideForm from "@/components/admin/SlideForm";

export default function NewSlidePage() {
  const router = useRouter();

  async function handleSubmit(data: Record<string, string>) {
    const res = await fetch("/api/slides", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, order: Number(data.order) || 0 }),
    });
    if (res.ok) router.push("/admin/slides");
    else alert("Помилка при створенні");
  }

  return (
    <div>
      <h1 className="admin-page-title">Додати слайд</h1>
      <SlideForm onSubmit={handleSubmit} />
    </div>
  );
}
