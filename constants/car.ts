/**
 * Car Constants - Danh sách các giá trị cố định cho xe
 */

export const CAR_BRANDS = [
  'Honda',
  'Toyota',
  'Mazda',
  'Hyundai',
  'Ford',
  'Kia',
  'Mitsubishi',
  'Nissan',
  'Suzuki',
  'Isuzu',
] as const;

export const CAR_BODY_TYPES = [
  'Sedan',
  'SUV',
  'Hatchback',
  'MPV',
  'Pickup',
  'Crossover',
  'Coupe',
  'Convertible',
] as const;

export const CAR_TRANSMISSIONS = [
  'Tự động',
  'Số sàn',
  'Bán tự động',
] as const;

export const CAR_FUEL_TYPES = [
  'Xăng',
  'Dầu diesel',
  'Hybrid',
  'Điện',
  'CNG',
] as const;

export const CAR_CONDITIONS = [
  { value: 'new', label: 'Mới 100%' },
  { value: 'used', label: 'Đã qua sử dụng' },
] as const;

export const CAR_COLORS = [
  'Trắng',
  'Đen',
  'Xám',
  'Bạc',
  'Đỏ',
  'Xanh',
  'Vàng',
  'Nâu',
  'Cam',
  'Khác',
] as const;

// Filter options
export const PRICE_RANGES = [
  { label: 'Dưới 500 triệu', min: 0, max: 500_000_000 },
  { label: '500 - 700 triệu', min: 500_000_000, max: 700_000_000 },
  { label: '700 - 1 tỷ', min: 700_000_000, max: 1_000_000_000 },
  { label: '1 - 1.5 tỷ', min: 1_000_000_000, max: 1_500_000_000 },
  { label: 'Trên 1.5 tỷ', min: 1_500_000_000, max: Infinity },
] as const;

export const YEAR_RANGES = [
  { label: '2024', value: 2024 },
  { label: '2023', value: 2023 },
  { label: '2022', value: 2022 },
  { label: '2021', value: 2021 },
  { label: '2020', value: 2020 },
  { label: 'Trước 2020', value: 2019 },
] as const;

// Sort options
export const SORT_OPTIONS = [
  { value: 'price-asc', label: 'Giá tăng dần' },
  { value: 'price-desc', label: 'Giá giảm dần' },
  { value: 'year-desc', label: 'Năm mới nhất' },
  { value: 'year-asc', label: 'Năm cũ nhất' },
  { value: 'mileage-asc', label: 'Km ít nhất' },
  { value: 'mileage-desc', label: 'Km nhiều nhất' },
] as const;

// Pagination
export const ITEMS_PER_PAGE = 12;
export const ITEMS_PER_PAGE_OPTIONS = [12, 24, 36, 48] as const;

