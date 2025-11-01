import { NextRequest, NextResponse } from 'next/server';
import { cars } from '@/lib/data/cars';

/**
 * API Route: GET /api/cars
 * Lấy danh sách xe với filtering và pagination
 * Performance: Server-side filtering, caching với revalidate
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Query parameters
    const brand = searchParams.get('brand');
    const condition = searchParams.get('condition');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '12');

    // Filter cars
    let filteredCars = [...cars];

    if (brand) {
      filteredCars = filteredCars.filter(car => 
        car.brand.toLowerCase() === brand.toLowerCase()
      );
    }

    if (condition) {
      filteredCars = filteredCars.filter(car => car.condition === condition);
    }

    if (minPrice) {
      filteredCars = filteredCars.filter(car => car.price >= parseInt(minPrice));
    }

    if (maxPrice) {
      filteredCars = filteredCars.filter(car => car.price <= parseInt(maxPrice));
    }

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedCars = filteredCars.slice(startIndex, endIndex);

    // Response
    return NextResponse.json({
      success: true,
      data: paginatedCars,
      meta: {
        total: filteredCars.length,
        page,
        limit,
        totalPages: Math.ceil(filteredCars.length / limit),
      },
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

// Revalidate cache sau 1 giờ
export const revalidate = 3600;

