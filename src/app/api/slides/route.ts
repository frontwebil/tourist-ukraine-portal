import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const slides = await prisma.slide.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json(slides);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, description, image, order } = body;

  if (!title || !image) {
    return NextResponse.json({ error: "Title and image are required" }, { status: 400 });
  }

  const slide = await prisma.slide.create({
    data: { title, description: description || "", image, order: order ?? 0 },
  });
  return NextResponse.json(slide, { status: 201 });
}
