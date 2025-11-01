/**
 * Car Service - Frontend API calls
 * Performance: Use SWR or React Query để cache và revalidate
 */

import apiClient from '@/lib/api-client';
import { Car } from '@/types/car';
import { ApiResponse, PaginatedResponse } from '@/types/api';

export type GetCarsParams = {
  brand?: string;
  condition?: 'new' | 'used';
  minPrice?: number;
  maxPrice?: number;
  page?: number;
  limit?: number;
}

/**
 * Lấy danh sách xe với filtering
 */
export async function getCars(params?: GetCarsParams): Promise<PaginatedResponse<Car>> {
  return apiClient.get<PaginatedResponse<Car>>('/api/cars', {
    params: params as Record<string, string | number | boolean | undefined>,
    next: { revalidate: 3600 } as any, // Cache 1 giờ
  });
}

/**
 * Lấy chi tiết 1 xe
 */
export async function getCarById(id: string): Promise<ApiResponse<Car>> {
  return apiClient.get<ApiResponse<Car>>(`/api/cars/${id}`, {
    next: { revalidate: 3600 } as any,
  });
}

/**
 * Tìm kiếm xe
 */
export async function searchCars(query: string): Promise<ApiResponse<Car[]>> {
  return apiClient.get<ApiResponse<Car[]>>('/api/search', {
    params: { q: query },
    next: { revalidate: 1800 } as any,
  });
}


