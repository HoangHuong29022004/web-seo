# 📚 Thư Viện & Cách Sử Dụng

Hướng dẫn sử dụng các thư viện đã cài trong project.

---

## 📦 Dependencies Installed

### ✅ Production Dependencies

```json
{
  "react": "19.2.0",
  "react-dom": "19.2.0",
  "next": "16.0.1",
  "zustand": "^5.0.2",                    // 🆕 State Management
  "@tanstack/react-query": "^5.62.11"    // 🆕 Data Fetching & Caching
}
```

### ✅ Dev Dependencies

```json
{
  "@next/bundle-analyzer": "^15.1.4",    // 🆕 Bundle Analysis
  "typescript": "^5",
  "@types/*": "...",
  "tailwindcss": "^4",
  "eslint": "^9"
}
```

---

## 1️⃣ Zustand - State Management

**Why Zustand?**
- ✅ Nhỏ gọn: 1KB (Redux: ~3KB)
- ✅ Đơn giản: Ít boilerplate
- ✅ Fast: Zero unnecessary re-renders
- ✅ No Provider: Không cần wrap app

### 📁 Stores Available

```typescript
// 1. Car Store - Quản lý xe & filters
import { useCarStore } from '@/store/useCarStore';

// 2. Favorite Store - Xe yêu thích (persist localStorage)
import { useFavoriteStore } from '@/store/useFavoriteStore';

// 3. UI Store - UI state (modals, sidebar, theme)
import { useUIStore } from '@/store/useUIStore';
```

### 🎯 Usage Examples

#### Example 1: Favorite Store

```typescript
'use client';

import { useFavoriteStore } from '@/store/useFavoriteStore';

export function CarCard({ car }) {
  const isFavorite = useFavoriteStore(state => state.isFavorite(car.id));
  const toggleFavorite = useFavoriteStore(state => state.toggleFavorite);

  return (
    <div>
      <h3>{car.name}</h3>
      <button onClick={() => toggleFavorite(car.id)}>
        {isFavorite ? '❤️ Đã Thích' : '🤍 Yêu Thích'}
      </button>
    </div>
  );
}
```

#### Example 2: Car Filter Store

```typescript
'use client';

import { useCarStore } from '@/store/useCarStore';

export function FilterBar() {
  const filter = useCarStore(state => state.filter);
  const setFilter = useCarStore(state => state.setFilter);

  return (
    <div>
      <select
        value={filter.brand || ''}
        onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
      >
        <option value="">Tất cả hãng</option>
        <option value="Honda">Honda</option>
        <option value="Toyota">Toyota</option>
      </select>
    </div>
  );
}
```

#### Example 3: UI Store (Modal)

```typescript
'use client';

import { useUIStore } from '@/store/useUIStore';

export function ContactButton() {
  const openModal = useUIStore(state => state.openContactModal);

  return (
    <button onClick={openModal}>
      Liên Hệ
    </button>
  );
}

export function ContactModal() {
  const isOpen = useUIStore(state => state.isContactModalOpen);
  const closeModal = useUIStore(state => state.closeContactModal);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>Liên Hệ</h2>
      <button onClick={closeModal}>Đóng</button>
    </div>
  );
}
```

### 🔥 Performance Tips

**✅ Selective Subscription**
```typescript
// ✅ Good - Chỉ subscribe vào favorites
const favorites = useFavoriteStore(state => state.favorites);

// ❌ Bad - Subscribe vào toàn bộ store
const store = useFavoriteStore();
```

---

## 2️⃣ TanStack Query (React Query) - Data Fetching

**Why React Query?**
- ✅ Auto caching & revalidation
- ✅ Background refetching
- ✅ Dedupe requests
- ✅ Retry logic
- ✅ Pagination & infinite scroll

### Setup Provider

```typescript
// app/providers.tsx
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 phút
        cacheTime: 10 * 60 * 1000, // 10 phút
        retry: 2,
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

```typescript
// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
```

### 🎯 Usage Examples

#### Example 1: Fetch Cars

```typescript
'use client';

import { useQuery } from '@tanstack/react-query';
import { getCars } from '@/lib/services/carService';

export function CarList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['cars'],
    queryFn: () => getCars(),
    staleTime: 5 * 60 * 1000, // Cache 5 phút
  });

  if (isLoading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error.message}</div>;

  return (
    <div>
      {data?.data.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
```

#### Example 2: Fetch with Filters

```typescript
'use client';

import { useQuery } from '@tanstack/react-query';
import { getCars } from '@/lib/services/carService';
import { useCarStore } from '@/store/useCarStore';

export function FilteredCarList() {
  const filter = useCarStore(state => state.filter);

  const { data, isLoading } = useQuery({
    queryKey: ['cars', filter], // Key thay đổi khi filter thay đổi
    queryFn: () => getCars(filter),
    staleTime: 3 * 60 * 1000,
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      {data?.data.map(car => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
```

#### Example 3: Search with Debounce

```typescript
'use client';

import { useQuery } from '@tanstack/react-query';
import { searchCars } from '@/lib/services/carService';
import { useDebounce } from '@/hooks/useDebounce';
import { useState } from 'react';

export function SearchBar() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  const { data, isLoading } = useQuery({
    queryKey: ['search', debouncedSearch],
    queryFn: () => searchCars(debouncedSearch),
    enabled: debouncedSearch.length >= 2, // Chỉ search khi >= 2 ký tự
  });

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Tìm xe..."
      />

      {isLoading && <div>Đang tìm...</div>}

      {data?.data && (
        <div>
          {data.data.map(car => (
            <div key={car.id}>{car.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}
```

#### Example 4: Mutation (Submit Form)

```typescript
'use client';

import { useMutation } from '@tanstack/react-query';
import { submitContactForm } from '@/lib/services/contactService';

export function ContactForm() {
  const mutation = useMutation({
    mutationFn: submitContactForm,
    onSuccess: () => {
      alert('Gửi thành công!');
    },
    onError: (error) => {
      alert('Lỗi: ' + error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    mutation.mutate({
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Tên" required />
      <input name="email" type="email" placeholder="Email" required />
      <input name="phone" placeholder="SĐT" required />
      <textarea name="message" placeholder="Tin nhắn" required />

      <button type="submit" disabled={mutation.isPending}>
        {mutation.isPending ? 'Đang gửi...' : 'Gửi'}
      </button>

      {mutation.isError && (
        <div className="error">{mutation.error.message}</div>
      )}
    </form>
  );
}
```

### 🔥 Performance Benefits

| Feature | Benefit |
|---------|---------|
| **Auto Caching** | Giảm API calls không cần thiết |
| **Background Refetch** | Data luôn fresh mà không loading |
| **Dedupe** | Merge multiple requests thành 1 |
| **Retry** | Auto retry khi network fail |
| **Prefetch** | Load data trước khi user click |

---

## 3️⃣ Bundle Analyzer - Phân Tích Bundle Size

### Chạy Bundle Analyzer

```bash
# Analyze bundle size
npm run analyze
```

Mở browser để xem visual treemap của bundle!

### Tối Ưu Bundle

**1. Tree Shaking**
```typescript
// ✅ Good - Named import
import { Button } from '@/components/ui';

// ❌ Bad - Import toàn bộ
import * as UI from '@/components/ui';
```

**2. Dynamic Import**
```typescript
import dynamic from 'next/dynamic';

// Lazy load component nặng
const HeavyChart = dynamic(() => import('@/components/HeavyChart'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});
```

**3. Optimize Dependencies**
```typescript
// ✅ Good - dayjs (2KB)
import dayjs from 'dayjs';

// ❌ Bad - moment (67KB)
import moment from 'moment';
```

---

## 📊 Scripts Available

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm start                # Start production server

# Tools
npm run lint             # Run ESLint
npm run analyze          # Analyze bundle size (opens browser)
```

---

## 🎯 Best Practices

### ✅ State Management

1. **Use Zustand for:**
   - Global UI state (modals, sidebar)
   - User preferences (theme, favorites)
   - Filters & selections

2. **Use React Query for:**
   - Server data fetching
   - API caching
   - Mutations (POST/PUT/DELETE)

3. **Use useState for:**
   - Local component state
   - Form inputs
   - Toggle states

### ✅ Performance

```typescript
// ✅ Good Pattern
const favorites = useFavoriteStore(state => state.favorites); // Selective
const { data } = useQuery({ queryKey: ['cars'], ... }); // Auto cache

// ❌ Bad Pattern
const store = useFavoriteStore(); // Subscribe toàn bộ
const [data, setData] = useState([]); // Manual fetch & cache
```

---

## 📚 Resources

- [Zustand Docs](https://docs.pmnd.rs/zustand)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Next.js Bundle Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

---

**Happy Coding! 🚀**

