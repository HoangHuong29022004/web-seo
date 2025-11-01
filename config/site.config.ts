/**
 * Site Configuration File
 * Centralized config cho toàn bộ app
 */

export const siteConfig = {
  // App info
  app: {
    name: 'AutoSale',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
  },

  // API endpoints
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || '',
    timeout: 10000, // 10 seconds
  },

  // Feature flags
  features: {
    enableDarkMode: true,
    enableSearch: true,
    enableFavorites: true,
    enableComparison: true,
    enableTestDrive: true,
    enableFinancing: true,
    enableChatbot: false,
  },

  // Performance settings
  performance: {
    // Image optimization
    imageSizes: [640, 750, 828, 1080, 1200, 1920],
    imageFormats: ['image/avif', 'image/webp'],
    imageCacheTTL: 60 * 60 * 24 * 30, // 30 days

    // Data revalidation (seconds)
    revalidateTime: {
      cars: 3600, // 1 hour
      news: 1800, // 30 minutes
      static: 86400, // 24 hours
    },

    // Pagination
    itemsPerPage: 12,
    maxItemsPerPage: 48,
  },

  // SEO settings
  seo: {
    defaultTitle: 'Mua Bán Xe Ô Tô - Giá Tốt Nhất 2024',
    titleTemplate: '%s | AutoSale',
    description: 'Chuyên mua bán xe ô tô mới và đã qua sử dụng. Hàng ngàn xe với giá tốt nhất.',
    ogImageWidth: 1200,
    ogImageHeight: 630,
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    facebookPixelId: process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },

  // External services
  services: {
    // Google Maps
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    
    // Payment gateway (nếu có)
    // paymentGatewayKey: process.env.NEXT_PUBLIC_PAYMENT_KEY,
  },
} as const;

// Type export
export type SiteConfig = typeof siteConfig;

