import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET /api/news — список всіх новин
export async function GET() {
  const news = await prisma.news.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(news);
}

// POST /api/news — створити новину
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, slug, content, excerpt, image } = body;

  if (!title || !content) {
    return NextResponse.json({ error: "Title and content are required" }, { status: 400 });
  }

  const newsSlug = slug || title.toLowerCase().replace(/[^a-zа-яіїєґ0-9]+/gi, "-").replace(/^-|-$/g, "");

  const news = await prisma.news.create({
    data: { title, slug: newsSlug, content, excerpt: excerpt || content.slice(0, 150) + "...", image: image || "" },
  });
  return NextResponse.json(news, { status: 201 });
}
