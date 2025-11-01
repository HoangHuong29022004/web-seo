/**
 * App Routes - Centralized route definitions
 * Performance: Type-safe routing, dễ maintain và refactor
 */

export const ROUTES = {
  HOME: '/',
  
  // Car pages
  CARS: '/danh-sach-xe',
  CAR_DETAIL: (slug: string) => `/xe/${slug}`,
  
  // News pages
  NEWS: '/tin-tuc',
  NEWS_DETAIL: (slug: string) => `/tin-tuc/${slug}`,
  
  // Info pages
  ABOUT: '/gioi-thieu',
  CONTACT: '/lien-he',
  SHOWROOMS: '/he-thong-phan-phoi',
  
  // Feature pages
  COMPARE: '/so-sanh-xe',
  FINANCE: '/tra-gop',
  TEST_DRIVE: '/dat-lai-thu',

  // API routes
  API: {
    CARS: '/api/cars',
    CAR_BY_ID: (id: number) => `/api/cars/${id}`,
    SEARCH: '/api/search',
    CONTACT: '/api/contact',
  },
} as const;

// Breadcrumb labels
export const BREADCRUMB_LABELS: Record<string, string> = {
  '/': 'Trang chủ',
  '/danh-sach-xe': 'Danh sách xe',
  '/tin-tuc': 'Tin tức',
  '/gioi-thieu': 'Giới thiệu',
  '/lien-he': 'Liên hệ',
  '/he-thong-phan-phoi': 'Hệ thống phân phối',
  '/so-sanh-xe': 'So sánh xe',
  '/tra-gop': 'Trả góp',
  '/dat-lai-thu': 'Đặt lái thử',
};

