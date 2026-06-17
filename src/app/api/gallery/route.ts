import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const images = await prisma.galleryImage.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(images);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, src, alt, category } = body;

  if (!title || !src) {
    return NextResponse.json({ error: "Title and src are required" }, { status: 400 });
  }

  const image = await prisma.galleryImage.create({
    data: { title, src, alt: alt || title, category: category || "Інше" },
  });
  return NextResponse.json(image, { status: 201 });
}
