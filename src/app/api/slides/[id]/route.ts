import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Ctx { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id } = await params;
  const slide = await prisma.slide.findUnique({ where: { id: Number(id) } });
  if (!slide) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(slide);
}

export async function PUT(req: NextRequest, { params }: Ctx) {
  const { id } = await params;
  const body = await req.json();
  const slide = await prisma.slide.update({ where: { id: Number(id) }, data: body });
  return NextResponse.json(slide);
}

export async function DELETE(_req: NextRequest, { params }: Ctx) {
  const { id } = await params;
  await prisma.slide.delete({ where: { id: Number(id) } });
  return NextResponse.json({ success: true });
}
