/**
 * Type definitions cho Car entities
 */

export interface Car {
  id: string;
  name: string;
  slug: string;
  brand: string;
  year: number;
  price: number;
  originalPrice?: number;
  condition: 'new' | 'used';
  bodyType: string;
  transmission: string;
  fuelType: string;
  engineCapacity: string;
  mileage: number;
  color: string;
  location: string;
  description: string;
  features: string[];
  images: string[];
  interior?: string;
  seats?: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CarFilter {
  brand?: string;
  condition?: 'new' | 'used';
  minPrice?: number;
  maxPrice?: number;
  bodyType?: string;
  transmission?: string;
  fuelType?: string;
  year?: number;
}

export interface CarSort {
  field: 'price' | 'year' | 'mileage' | 'createdAt';
  order: 'asc' | 'desc';
}

export type CarBrand = 
  | 'Honda' 
  | 'Toyota' 
  | 'Mazda' 
  | 'Hyundai' 
  | 'Ford' 
  | 'Kia' 
  | 'Mitsubishi';

export type CarBodyType = 
  | 'Sedan' 
  | 'SUV' 
  | 'Hatchback' 
  | 'MPV' 
  | 'Pickup';

export type CarTransmission = 'Tự động' | 'Số sàn';

export type CarFuelType = 'Xăng' | 'Dầu diesel' | 'Hybrid' | 'Điện';

