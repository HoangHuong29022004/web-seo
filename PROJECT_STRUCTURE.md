# 📁 Project Structure - Next.js 16 + TypeScript

## 🎯 Tổng quan cấu trúc đầy đủ

```
web-seo/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes (Server-side)
│   │   ├── cars/
│   │   │   ├── route.ts          # GET /api/cars, POST /api/cars
│   │   │   └── [id]/
│   │   │       └── route.ts      # GET/PUT/DELETE /api/cars/:id
│   │   ├── contact/
│   │   │   └── route.ts          # POST /api/contact
│   │   └── search/
│   │       └── route.ts          # GET /api/search
│   │
│   ├── xe/                       # Car pages
│   │   └── [slug]/
│   │       ├── page.tsx          # Chi tiết xe
│   │       └── not-found.tsx
│   │
│   ├── tin-tuc/                  # News pages
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   │
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles
│   ├── robots.ts                 # robots.txt generator
│   └── sitemap.ts                # sitemap.xml generator
│
├── components/                   # React components
│   ├── CarCard.tsx
│   ├── HeroBanner.tsx
│   ├── ImageGallery.tsx
│   └── MobileMenu.tsx
│
├── hooks/                        # Custom React hooks
│   ├── useDebounce.ts           # Debounce input
│   ├── useLocalStorage.ts       # Persist to localStorage
│   ├── useIntersectionObserver.ts # Lazy loading
│   ├── useMediaQuery.ts         # Responsive breakpoints
│   └── useToggle.ts             # Toggle boolean state
│
├── lib/                         # Core logic & utilities
│   ├── data/                    # Static data
│   │   ├── cars.ts
│   │   ├── news.ts
│   │   └── showrooms.ts
│   │
│   ├── services/                # API client services
│   │   ├── carService.ts        # Car API calls
│   │   └── contactService.ts    # Contact form API
│   │
│   └── utils/                   # Utility functions
│       └── format.ts            # Format helpers
│
├── store/                       # State management (Zustand)
│   ├── useCarStore.ts          # Car state
│   ├── useFavoriteStore.ts     # Favorites (persist)
│   └── useUIStore.ts           # UI state (modals, sidebar)
│
├── types/                       # TypeScript definitions
│   ├── car.ts                   # Car types
│   ├── api.ts                   # API response types
│   ├── news.ts                  # News types
│   ├── form.ts                  # Form data types
│   └── showroom.ts              # Showroom types
│
├── constants/                   # Constants & configurations
│   ├── routes.ts                # Route definitions
│   ├── messages.ts              # User messages
│   ├── site.ts                  # Site config
│   └── car.ts                   # Car constants
│
├── config/                      # App configuration
│   ├── site.config.ts           # Main app config
│   └── env.config.ts            # Environment variables
│
├── public/                      # Static assets
│   ├── favicon.ico
│   └── manifest.json
│
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies
```

---

## 🚀 Quick Start

### 1️⃣ Cài đặt dependencies

```bash
# Install dependencies đã có
npm install

# Optional: Install Zustand cho state management
npm install zustand

# Optional: Install React Query cho data fetching
npm install @tanstack/react-query
```

### 2️⃣ Setup environment variables

Tạo file `.env.local`:

```bash
# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FB_PIXEL_ID=123456789

# Google Maps (Optional)
NEXT_PUBLIC_GOOGLE_MAPS_KEY=AIzaSy...
```

### 3️⃣ Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📂 Giải thích từng thư mục

### 🔷 `/app` - Next.js App Router
- **Server Components by default** (tối ưu performance)
- Automatic routing dựa trên file structure
- Có thể dùng `'use client'` cho client components

### 🔷 `/app/api` - API Routes
- **Server-side API endpoints**
- RESTful API design
- Built-in caching với `revalidate`
- **Performance**: Edge runtime support

### 🔷 `/components` - React Components
- Tái sử dụng UI components
- Server Components hoặc Client Components
- Có thể lazy load với `dynamic()`

### 🔷 `/hooks` - Custom Hooks
- **Chỉ dùng trong Client Components** (`'use client'`)
- Tái sử dụng logic
- **Performance optimized** với useCallback/useMemo

### 🔷 `/lib/services` - API Client
- Wrapper functions cho API calls
- Type-safe với TypeScript
- Sử dụng với React Query để cache

### 🔷 `/store` - State Management
- Global state với Zustand
- **Nhẹ hơn Redux** (1KB vs 3KB)
- Persist middleware cho localStorage

### 🔷 `/types` - TypeScript Types
- Centralized type definitions
- **0% runtime overhead** (compile-time only)
- Auto-complete trong editor

### 🔷 `/constants` - Constants
- Single source of truth
- Type-safe constants
- **Performance**: Tree-shaking & inlining

### 🔷 `/config` - Configuration
- App configuration
- Environment variables validation
- Feature flags

---

## 🎯 Best Practices được áp dụng

### ✅ Performance
1. **Server Components** - Giảm JavaScript bundle
2. **Image Optimization** - Next.js Image với AVIF/WebP
3. **Caching** - ISR với revalidate
4. **Code Splitting** - Dynamic imports
5. **Lazy Loading** - useIntersectionObserver

### ✅ TypeScript
1. **Type Safety** - Tất cả files đều typed
2. **No `any`** - Dùng specific types
3. **Interfaces & Types** - Centralized trong /types
4. **Strict Mode** - tsconfig.json

### ✅ Code Organization
1. **Separation of Concerns** - Logic tách ra khỏi UI
2. **Reusability** - Custom hooks & services
3. **Single Responsibility** - Mỗi file 1 mục đích
4. **DRY** - Don't Repeat Yourself

### ✅ SEO
1. **Metadata API** - generateMetadata()
2. **Dynamic Sitemap** - app/sitemap.ts
3. **Robots.txt** - app/robots.ts
4. **JSON-LD** - Structured data

---

## 📊 Performance Metrics

Với cấu trúc này, bạn có thể đạt được:

- **Lighthouse Score**: 95-100
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Cumulative Layout Shift**: < 0.1
- **Bundle Size**: Optimized với tree-shaking

---

## 🔧 Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

---

## 📚 Documentation

Mỗi thư mục có file `README.md` riêng với hướng dẫn chi tiết:

- [API Routes README](./app/api/README.md)
- [Services README](./lib/services/README.md)
- [Hooks README](./hooks/README.md)
- [Types README](./types/README.md)
- [Store README](./store/README.md)
- [Constants README](./constants/README.md)
- [Config README](./config/README.md)

---

## 🎓 Learning Resources

### Next.js 16
- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

### Performance
- [Web.dev Performance](https://web.dev/performance/)
- [Core Web Vitals](https://web.dev/vitals/)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

### TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

---

## 🤝 Contributing

Khi thêm feature mới:

1. ✅ Tạo types trong `/types`
2. ✅ Tạo API route trong `/app/api`
3. ✅ Tạo service trong `/lib/services`
4. ✅ Tạo custom hooks nếu cần trong `/hooks`
5. ✅ Tạo constants trong `/constants`
6. ✅ Update documentation

---

## 🐛 Troubleshooting

### TypeScript Errors
```bash
# Clear TypeScript cache
rm -rf .next
npm run build
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Image Optimization Errors
- Check `next.config.ts` → `images.remotePatterns`
- Ensure image URLs are accessible

---

**Happy Coding! 🚀**

