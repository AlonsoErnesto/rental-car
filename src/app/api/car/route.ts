import { auth } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId } = await auth();
    const { isPublish } = body;

    const car = await db.car.create({
      data: {
        userId: userId as string,
        ...body,
        isPublish: Boolean(isPublish),
      },
    });

    return NextResponse.json(car, { status: 201 });
  } catch (error: any) {
    if (error.code) {
      console.error('Prisma error code:', error.code);
    }
    return NextResponse.json(
      {
        error: 'Internal Server Error',
        details:
          process.env.NODE_ENV === 'development' ? error.message : undefined,
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const cars = await db.car.findMany({
      where: {
        isPublish: true, // solo cars publicados
      },
    });

    return NextResponse.json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
