import { prisma } from "@/lib/prisma";
import type { Metadata } from "next";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "Галерея — TouristUA",
  description: "Фотогалерея найвідоміших туристичних місць України",
};

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const images = await prisma.galleryImage.findMany({
    orderBy: { createdAt: "desc" },
  });

  const categories = ["Всі", ...new Set(images.map((img) => img.category))];

  return (
    <>
      <div className="page-hero">
        <h1>Галерея</h1>
        <p>Фотографії найкрасивіших куточків України</p>
      </div>

      <section className="section">
        <GalleryClient images={images} categories={categories} />
      </section>
    </>
  );
}
