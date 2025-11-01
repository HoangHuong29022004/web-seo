import { NextRequest, NextResponse } from 'next/server';
import { cars } from '@/lib/data/cars';

interface RouteContext {
  params: Promise<{ id: string }>;
}

/**
 * API Route: GET /api/cars/[id]
 * Lấy thông tin chi tiết 1 xe
 */
export async function GET(
  request: NextRequest,
  context: RouteContext
) {
  try {
    const { id } = await context.params;

    const car = cars.find(c => c.id === id);

    if (!car) {
      return NextResponse.json({
        success: false,
        error: 'Car not found',
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      data: car,
    }, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Internal Server Error',
    }, { status: 500 });
  }
}

export const revalidate = 3600;

