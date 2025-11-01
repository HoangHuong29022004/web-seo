/**
 * Type definitions cho Showroom entities
 */

export interface Showroom {
  id: number;
  name: string;
  city: string;
  district: string;
  address: string;
  phone: string;
  email: string;
  openHours: string;
  latitude?: number;
  longitude?: number;
  image?: string;
}

export interface ShowroomFilter {
  city?: string;
  district?: string;
}

