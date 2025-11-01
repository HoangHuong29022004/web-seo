import { NextRequest, NextResponse } from 'next/server';
import { cars } from '@/lib/data/cars';

/**
 * API Route: GET /api/search
 * Full-text search cho xe
 * Performance: Client-side search với debounce, cache results
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q')?.toLowerCase() || '';

    if (!query || query.length < 2) {
      return NextResponse.json({
        success: false,
        error: 'Query must be at least 2 characters',
      }, { status: 400 });
    }

    // Search trong multiple fields
    const results = cars.filter(car => {
      const searchText = `
        ${car.name} 
        ${car.brand} 
        ${car.description} 
        ${car.bodyType}
        ${car.features.join(' ')}
      `.toLowerCase();

      return searchText.includes(query);
    });

    // Limit results để optimize performance
    const limitedResults = results.slice(0, 20);

    return NextResponse.json({
      success: true,
      data: limitedResults,
      meta: {
        total: results.length,
        shown: limitedResults.length,
      },
    }, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=1800, stale-while-revalidate=3600',
      },
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: 'Internal Server Error',
    }, { status: 500 });
  }
}

export const revalidate = 1800; // 30 phút

