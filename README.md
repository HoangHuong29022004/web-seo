# 🚗 AutoSale - Website Bán Xe Ô Tô

Website bán xe ô tô hiện đại với **Next.js 16**, **TypeScript**, và **Tailwind CSS**. Tối ưu hoàn toàn cho **Performance** và **SEO**.

---

## ⚡ Quick Start

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build for production
npm run build
npm start
```

Mở [http://localhost:3000](http://localhost:3000)

---

## 🎯 Tính Năng Nổi Bật

### 🌐 Client-Only App
- **Public Website** - Không có admin panel
- **Read-Only APIs** - GET endpoints cho data
- **Contact Form** - POST endpoint cho liên hệ
- **Static Data** - Quản lý data qua code

### ⚡ Performance Optimization
- **React Server Components** - Giảm 70-80% JavaScript bundle
- **Next.js Image Optimization** - AVIF/WebP, lazy loading
- **ISR Caching** - Static với auto-revalidate
- **Code Splitting** - Dynamic imports cho components

### 🔍 SEO Optimization
- **Meta Tags** - Title, Description, Keywords, OG tags
- **JSON-LD Structured Data** - Product, Breadcrumb, Organization
- **Dynamic Sitemap** - Auto-generated từ data
- **Robots.txt** - SEO-friendly configuration

### 🛠️ Developer Experience
- **TypeScript** - Type safety toàn project
- **API Client** - Centralized HTTP client (no duplicate code)
- **Custom Hooks** - Reusable logic
- **State Management** - Zustand (optional)

---

## 📦 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16.0.1 (App Router) |
| **Language** | TypeScript 5+ |
| **Styling** | Tailwind CSS 4 |
| **Performance** | React Server Components, ISR |
| **SEO** | Metadata API, JSON-LD, Sitemap |

---

## 📁 Cấu Trúc Project

```
web-seo/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes (REST endpoints)
│   ├── xe/[slug]/         # Dynamic car pages
│   └── page.tsx           # Homepage
│
├── components/            # React components
│   ├── CarCard.tsx
│   ├── ImageGallery.tsx
│   └── MobileMenu.tsx
│
├── lib/
│   ├── api-client.ts     # 🆕 HTTP client wrapper
│   ├── services/         # 🆕 API service functions
│   ├── data/             # Static data
│   └── utils/            # Utility functions
│
├── hooks/                # 🆕 Custom React hooks
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   └── useIntersectionObserver.ts
│
├── types/                # 🆕 TypeScript type definitions
│   ├── car.ts
│   ├── api.ts
│   └── form.ts
│
├── store/                # 🆕 State management (Zustand)
│   ├── useCarStore.ts
│   └── useFavoriteStore.ts
│
├── constants/            # 🆕 Constants & configs
│   ├── routes.ts
│   ├── messages.ts
│   └── car.ts
│
└── config/               # 🆕 App configuration
    ├── site.config.ts
    └── env.config.ts
```

---

## 📚 Documentation

### Core Guides
- 📌 [**Client-Only App**](./CLIENT_ONLY.md) - ⭐ Quan trọng: Không có admin panel
- 📚 [**Libraries Guide**](./LIBRARIES_GUIDE.md) - 🆕 Zustand, React Query, Bundle Analyzer
- 📖 [**Project Structure**](./PROJECT_STRUCTURE.md) - Chi tiết cấu trúc project
- ⚡ [**Performance Guide**](./PERFORMANCE_GUIDE.md) - Hướng dẫn tối ưu performance
- 🔌 [**API Client**](./lib/API_CLIENT.md) - Sử dụng HTTP client

### Quick Links
- [API Routes](./app/api/) - REST API endpoints
- [Services](./lib/services/) - API service functions
- [Hooks](./hooks/) - Custom React hooks
- [Types](./types/) - TypeScript definitions

---

## 🚀 Features Overview

### 1️⃣ Read-Only APIs

**Available endpoints:**
```typescript
// GET - Lấy danh sách xe
GET /api/cars?brand=Honda&page=1

// GET - Chi tiết xe
GET /api/cars/:id

// GET - Tìm kiếm
GET /api/search?q=Honda City

// POST - Form liên hệ
POST /api/contact
```

**Usage:**
```typescript
import { getCars, getCarById } from '@/lib/services/carService';

const cars = await getCars({ brand: 'Honda' });
const car = await getCarById('1');
```

### 2️⃣ Custom Hooks

```typescript
// Debounce search
const debouncedQuery = useDebounce(searchTerm, 500);

// Lazy loading
const [ref, isVisible] = useIntersectionObserver();

// LocalStorage persist
const [favorites, setFavorites] = useLocalStorage('favorites', []);
```

### 3️⃣ Type Safety

```typescript
// Type-safe API calls
const response = await getCars({ brand: 'Honda', page: 1 });
const cars: Car[] = response.data; // Fully typed
```

---

## 🎯 Performance Targets

| Metric | Target | Impact |
|--------|--------|--------|
| **Lighthouse Score** | 95-100 | ⭐⭐⭐⭐⭐ |
| **First Contentful Paint** | < 1.5s | ⭐⭐⭐⭐⭐ |
| **Largest Contentful Paint** | < 2.5s | ⭐⭐⭐⭐⭐ |
| **Time to Interactive** | < 3.5s | ⭐⭐⭐⭐ |
| **Bundle Size** | < 200KB | ⭐⭐⭐⭐ |

---

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```bash
# Site
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_API_URL=https://your-domain.com

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789

# Google Maps (Optional)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIzaSy...
```

### Installed Libraries

```json
{
  "zustand": "^5.0.2",              // State Management
  "@tanstack/react-query": "^5.62.11", // Data Fetching & Caching
  "@next/bundle-analyzer": "^15.1.4"   // Bundle Analysis
}
```

📚 **[Xem hướng dẫn sử dụng →](./LIBRARIES_GUIDE.md)**

---

## 📊 SEO Checklist

- [x] Meta tags (Title, Description, Keywords)
- [x] Open Graph tags
- [x] Twitter Cards
- [x] JSON-LD structured data
- [x] Dynamic sitemap.xml
- [x] Robots.txt
- [x] Canonical URLs
- [x] Alt text cho images
- [x] Responsive images
- [x] Lazy loading
- [x] Core Web Vitals optimization

---

## 🌐 Deploy

### Vercel (Recommended)
```bash
vercel
```

### Build & Start
```bash
npm run build
npm start
```

### Docker
```bash
docker build -t autosale .
docker run -p 3000:3000 autosale
```

---

## 🐛 Troubleshooting

### Clear cache & rebuild
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Check linter errors
```bash
npm run lint
```

---

## 📈 What's Next?

1. **Add Database** - Connect với PostgreSQL/MongoDB
2. **Authentication** - NextAuth.js cho admin
3. **CMS Integration** - Headless CMS cho content
4. **Payment Gateway** - Stripe/VNPay integration
5. **Analytics** - Google Analytics, Vercel Analytics

---

## 🤝 Contributing

Khi thêm feature mới:

1. ✅ Tạo types trong `/types`
2. ✅ Tạo API route trong `/app/api`
3. ✅ Tạo service trong `/lib/services`
4. ✅ Sử dụng `apiClient` cho HTTP calls
5. ✅ Tạo custom hooks nếu cần
6. ✅ Update documentation

---

## 📄 License

MIT License - Tự do sử dụng cho mục đích thương mại và cá nhân.

---

**Made with ❤️ by Next.js 16 + TypeScript + Performance Best Practices**

**Lighthouse Score Target: 95-100** ⚡🚀
