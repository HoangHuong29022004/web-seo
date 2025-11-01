/**
 * Site Configuration - Thông tin cơ bản của website
 */

export const SITE_CONFIG = {
  name: 'AutoSale',
  title: 'Mua Bán Xe Ô Tô - Giá Tốt Nhất 2024',
  description: 'Chuyên mua bán xe ô tô mới và đã qua sử dụng. Hàng ngàn xe Honda, Toyota, Mazda, Hyundai, Ford với giá tốt nhất. Hỗ trợ trả góp, bảo hành chính hãng.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com',
  
  // Contact info
  contact: {
    phone: '1900-xxxx',
    email: 'contact@autosale.vn',
    zalo: '0901234567',
  },

  // Social media
  social: {
    facebook: 'https://facebook.com/autosale',
    instagram: 'https://instagram.com/autosale',
    youtube: 'https://youtube.com/@autosale',
    tiktok: 'https://tiktok.com/@autosale',
  },

  // Business info
  business: {
    name: 'Công ty TNHH AutoSale',
    address: 'TP. Hồ Chí Minh, Việt Nam',
    taxCode: '0123456789',
    established: '2020',
  },

  // SEO defaults
  seo: {
    keywords: [
      'mua xe ô tô',
      'bán xe ô tô',
      'xe hơi giá rẻ',
      'ô tô cũ',
      'ô tô mới',
      'trả góp xe',
    ],
    ogImage: '/og-image.jpg',
  },
} as const;

