"use client";

import { useRouter } from "next/navigation";

export default function DeleteButton({ endpoint }: { endpoint: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm("Ви впевнені, що хочете видалити?")) return;
    const res = await fetch(endpoint, { method: "DELETE" });
    if (res.ok) router.refresh();
    else alert("Помилка при видаленні");
  }

  return (
    <button onClick={handleDelete} className="admin-btn admin-btn-danger admin-btn-sm">
      🗑️ Видалити
    </button>
  );
}
