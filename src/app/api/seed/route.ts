import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// POST /api/seed — заповнює БД тестовими даними (для зручності)
export async function POST() {
  try {
    const newsCount = await prisma.news.count();
    if (newsCount > 0) {
      return NextResponse.json(
        { message: "База даних вже заповнена", newsCount },
        { status: 200 }
      );
    }

    // Якщо БД порожня — запускаємо seed через npx prisma db seed
    return NextResponse.json(
      {
        message:
          "Запустіть `npm run db:seed` для заповнення бази даних тестовими даними",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Помилка підключення до БД. Перевірте DATABASE_URL в .env" },
      { status: 500 }
    );
  }
}
