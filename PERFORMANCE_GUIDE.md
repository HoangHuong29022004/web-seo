# ⚡ Performance Optimization Guide - Next.js 16

Hướng dẫn chi tiết về cách tối ưu performance cho Next.js TypeScript project.

---

## 📊 Performance Checklist

- [x] React Server Components (RSC)
- [x] Next.js Image Optimization
- [x] Static Generation (SSG)
- [x] Incremental Static Regeneration (ISR)
- [ ] Dynamic Imports & Code Splitting
- [ ] React Query / SWR for data caching
- [ ] Bundle Analysis
- [ ] Font Optimization
- [ ] Compression & Minification

---

## 🎯 1. React Server Components (RSC)

**Impact**: ⭐⭐⭐⭐⭐ (Cao nhất)

### Lợi ích
- Giảm 70-80% JavaScript bundle size
- Fetch data trực tiếp trên server
- Zero client-side JavaScript cho static content
- Tự động code splitting

### Implementation

**✅ Server Component (Default)**
```typescript
// app/cars/page.tsx
import { getCars } from '@/lib/data/cars';

export default async function CarsPage() {
  const cars = await getCars(); // Fetch on server

  return (
    <div>
      {cars.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
```

**✅ Client Component (when needed)**
```typescript
'use client';

import { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

### Khi nào dùng Client Component?
- Cần useState, useEffect, custom hooks
- Event handlers (onClick, onChange)
- Browser APIs (localStorage, window)
- Third-party libraries cần browser

---

## 🖼️ 2. Image Optimization

**Impact**: ⭐⭐⭐⭐⭐

### Next.js Image Component

```typescript
import Image from 'next/image';

// ✅ Good - Optimized
<Image
  src="/car.jpg"
  alt="Honda City"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={isAboveFold} // Chỉ dùng cho ảnh above-the-fold
  loading={isAboveFold ? undefined : 'lazy'}
/>

// ❌ Bad - Not optimized
<img src="/car.jpg" alt="Honda City" />
```

### Configuration

```typescript
// next.config.ts
export default {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'], // AVIF > WebP > JPEG
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};
```

### Lợi ích
- Tự động resize & optimize
- Lazy loading by default
- AVIF/WebP format (nhỏ hơn 50%)
- Responsive images với `sizes` prop
- Cache CDN

---

## 🔄 3. Caching & Revalidation

**Impact**: ⭐⭐⭐⭐⭐

### Static Generation (SSG)

```typescript
// app/xe/[slug]/page.tsx
export async function generateStaticParams() {
  const cars = await getCars();

  return cars.map(car => ({
    slug: car.slug,
  }));
}

export default async function CarPage({ params }) {
  const car = await getCarBySlug(params.slug);
  return <CarDetail car={car} />;
}
```

**Result**: Pages được build sẵn → load cực nhanh!

### Incremental Static Regeneration (ISR)

```typescript
// Revalidate mỗi 1 giờ
export const revalidate = 3600;

export default async function CarsPage() {
  const cars = await getCars();
  return <CarList cars={cars} />;
}
```

**Result**: Static page nhưng data refresh định kỳ!

### API Route Caching

```typescript
// app/api/cars/route.ts
export async function GET() {
  const cars = await getCars();

  return NextResponse.json(cars, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

export const revalidate = 3600;
```

### Fetch Caching

```typescript
// Cache 1 giờ
const data = await fetch('https://api.example.com/cars', {
  next: { revalidate: 3600 },
});

// No caching
const data = await fetch('https://api.example.com/cars', {
  cache: 'no-store',
});

// Force cache
const data = await fetch('https://api.example.com/cars', {
  cache: 'force-cache',
});
```

---

## 📦 4. Code Splitting & Dynamic Imports

**Impact**: ⭐⭐⭐⭐

### Dynamic Import Components

```typescript
import dynamic from 'next/dynamic';

// Lazy load component
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <div>Loading chart...</div>,
  ssr: false, // Không render trên server nếu không cần
});

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <HeavyChart data={data} />
    </div>
  );
}
```

### Route-based Code Splitting

Next.js tự động code split theo routes:
```
app/
├── page.tsx          → page.js
├── about/page.tsx    → about/page.js
└── contact/page.tsx  → contact/page.js
```

Mỗi route chỉ load JavaScript cần thiết!

### Manual Chunk Splitting

```typescript
// next.config.ts
export default {
  webpack: (config) => {
    config.optimization.splitChunks = {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          priority: 10,
        },
      },
    };
    return config;
  },
};
```

---

## 🎣 5. Data Fetching với React Query

**Impact**: ⭐⭐⭐⭐

### Installation

```bash
npm install @tanstack/react-query
```

### Setup Provider

```typescript
// app/providers.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 phút
        cacheTime: 10 * 60 * 1000, // 10 phút
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
```

### Usage

```typescript
'use client';

import { useQuery } from '@tanstack/react-query';
import { getCars } from '@/lib/services/carService';

export default function CarList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cars'],
    queryFn: getCars,
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <Loading />;
  if (error) return <Error />;

  return (
    <div>
      {data.map(car => <CarCard key={car.id} car={car} />)}
    </div>
  );
}
```

### Lợi ích
- Tự động caching
- Background refetching
- Dedupe requests
- Retry logic
- Pagination & infinite scroll

---

## 🔍 6. Bundle Analysis

**Impact**: ⭐⭐⭐

### Installation

```bash
npm install @next/bundle-analyzer
```

### Configuration

```typescript
// next.config.ts
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  // Your config...
});
```

### Run Analysis

```bash
ANALYZE=true npm run build
```

Mở browser để xem visual bundle size!

### Optimization Tips

1. **Tree Shaking**: Chỉ import những gì cần dùng
```typescript
// ✅ Good
import { Button } from '@/components/ui';

// ❌ Bad
import * as UI from '@/components/ui';
```

2. **Optimize Libraries**: Chọn libraries nhỏ gọn
```typescript
// ✅ Good - 2KB
import dayjs from 'dayjs';

// ❌ Bad - 67KB
import moment from 'moment';
```

---

## 🔤 7. Font Optimization

**Impact**: ⭐⭐⭐⭐

### Next.js Font Optimization

```typescript
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin', 'vietnamese'],
  display: 'swap', // Hiển thị fallback font ngay
  preload: true,
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="vi" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

### Lợi ích
- Self-hosted fonts (không request Google)
- Automatic subsetting
- Zero layout shift
- Font display optimization

---

## 🗜️ 8. Compression & Minification

**Impact**: ⭐⭐⭐

### Enable Compression

```typescript
// next.config.ts
export default {
  compress: true, // Enable gzip compression

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production', // Remove console.log
  },

  swcMinify: true, // Use SWC minifier (faster than Terser)
};
```

### Result
- HTML/CSS/JS được minify
- Gzip compression enabled
- Console.log removed in production

---

## 🚀 9. Lazy Loading Strategies

**Impact**: ⭐⭐⭐⭐

### Intersection Observer Hook

```typescript
// hooks/useIntersectionObserver.ts
export function useIntersectionObserver() {
  const [ref, isVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}
```

### Usage

```typescript
'use client';

export function HeavyComponent() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div ref={ref}>
      {isVisible ? <ActualComponent /> : <Skeleton />}
    </div>
  );
}
```

---

## 📱 10. Responsive Loading

**Impact**: ⭐⭐⭐

### Media Query Hook

```typescript
const isMobile = useMediaQuery('(max-width: 768px)');

return isMobile ? (
  <MobileOptimizedComponent />
) : (
  <DesktopComponent />
);
```

### Benefits
- Load components phù hợp với device
- Giảm JavaScript trên mobile
- Better UX

---

## 📈 Performance Metrics

### Core Web Vitals

1. **LCP (Largest Contentful Paint)**: < 2.5s
   - Optimize images với Next.js Image
   - Server-side rendering
   - CDN caching

2. **FID (First Input Delay)**: < 100ms
   - Giảm JavaScript với RSC
   - Code splitting
   - Avoid long tasks

3. **CLS (Cumulative Layout Shift)**: < 0.1
   - Specify image dimensions
   - Font display: swap
   - Avoid dynamic content injection

### Measurement Tools

```bash
# Lighthouse
npx lighthouse http://localhost:3000

# Web Vitals
npm install web-vitals
```

```typescript
// app/layout.tsx
import { reportWebVitals } from './web-vitals';

export function RootLayout({ children }) {
  useEffect(() => {
    reportWebVitals((metric) => {
      console.log(metric);
      // Send to analytics
    });
  }, []);

  return children;
}
```

---

## 🎓 Advanced Techniques

### Partial Prerendering (PPR) - Next.js 15+

```typescript
// next.config.ts
export default {
  experimental: {
    ppr: 'incremental',
  },
};

// Page
export const experimental_ppr = true;

export default function Page() {
  return (
    <>
      <StaticShell /> {/* Prerendered */}
      <Suspense fallback={<Skeleton />}>
        <DynamicContent /> {/* Streamed */}
      </Suspense>
    </>
  );
}
```

### Edge Runtime

```typescript
export const runtime = 'edge';

export default function Page() {
  // Runs on Edge Network - ultra fast!
}
```

### React Compiler (Experimental)

```typescript
// next.config.ts
export default {
  experimental: {
    reactCompiler: true,
  },
};
```

Auto memoization - không cần useMemo/useCallback!

---

## 📋 Performance Checklist

### Before Deploy

- [ ] Run `npm run build` và check bundle size
- [ ] Run Lighthouse audit
- [ ] Test trên slow 3G network
- [ ] Check mobile performance
- [ ] Verify images được optimize
- [ ] Check console errors (removed in prod)
- [ ] Test Core Web Vitals
- [ ] Enable compression
- [ ] Setup CDN
- [ ] Configure caching headers

### Monitoring

- [ ] Setup Google Analytics
- [ ] Monitor Web Vitals
- [ ] Track bundle size over time
- [ ] Monitor API response times
- [ ] Setup error tracking (Sentry)

---

## 🎯 Performance Goals

| Metric | Target | Current |
|--------|--------|---------|
| Lighthouse Score | 95+ | - |
| FCP | < 1.5s | - |
| LCP | < 2.5s | - |
| TTI | < 3.5s | - |
| CLS | < 0.1 | - |
| Bundle Size | < 200KB | - |

---

## 📚 Resources

- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Web.dev Performance](https://web.dev/performance/)
- [React Performance](https://react.dev/learn/render-and-commit)
- [Core Web Vitals](https://web.dev/vitals/)

---

**Happy Optimizing! ⚡**

