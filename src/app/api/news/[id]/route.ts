import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Ctx { params: Promise<{ id: string }> }

// GET /api/news/:id
export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params;
  const news = await prisma.news.findUnique({ where: { id: Number(id) } });
  if (!news) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(news);
}

// PUT /api/news/:id
export async function PUT(req: NextRequest, { params }: Ctx) {
  const { id } = await params;
  const body = await req.json();
  const news = await prisma.news.update({ where: { id: Number(id) }, data: body });
  return NextResponse.json(news);
}

// DELETE /api/news/:id
export async function DELETE(_req: NextRequest, { params }: Ctx) {
  const { id } = await params;
  await prisma.news.delete({ where: { id: Number(id) } });
  return NextResponse.json({ success: true });
}
