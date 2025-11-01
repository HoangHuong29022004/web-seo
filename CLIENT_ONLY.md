# 📌 Client-Only App - No Admin Panel

Project này là **client-side app** (website bán xe cho khách hàng), **KHÔNG có admin panel**.

---

## ✅ APIs Available (Read-Only)

### GET APIs (Public)

```typescript
// Lấy danh sách xe
GET /api/cars?brand=Honda&page=1&limit=12

// Lấy chi tiết xe
GET /api/cars/:id

// Tìm kiếm xe
GET /api/search?q=Honda City
```

### POST APIs (Form Submission Only)

```typescript
// Gửi form liên hệ
POST /api/contact
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "0901234567",
  "message": "Tôi muốn hỏi về Honda City"
}
```

---

## ❌ KHÔNG CÓ Admin APIs

Các APIs sau **ĐÃ BỊ XÓA** vì không cần admin:

```typescript
// ❌ Không có
POST /api/cars           // Tạo xe mới
PUT /api/cars/:id        // Cập nhật xe
DELETE /api/cars/:id     // Xóa xe
```

---

## 📝 Services Available

### ✅ Car Service (Read-only)

```typescript
import { getCars, getCarById, searchCars } from '@/lib/services/carService';

// Lấy danh sách xe
const cars = await getCars({ brand: 'Honda', page: 1 });

// Lấy chi tiết xe
const car = await getCarById('1');

// Tìm kiếm
const results = await searchCars('Honda City');
```

### ✅ Contact Service (Form Submission)

```typescript
import { submitContactForm } from '@/lib/services/contactService';

// Gửi form liên hệ
await submitContactForm({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '0901234567',
  message: 'Tôi muốn hỏi về xe',
});
```

---

## 🔧 Data Management

Vì không có admin panel, data được quản lý bằng:

### 1. Static Data Files
```typescript
// lib/data/cars.ts
export const cars: Car[] = [
  {
    id: '1',
    name: 'Honda City RS 2023',
    brand: 'Honda',
    price: 569000000,
    // ... other fields
  },
  // ... more cars
];
```

**Cách update data:**
- Chỉnh sửa trực tiếp file `lib/data/cars.ts`
- Commit và deploy lại

### 2. Database (Future)
Nếu muốn thêm database sau này:
- Connect PostgreSQL/MongoDB
- Tạo API routes mới cho admin (bảo mật với NextAuth)
- Build admin panel riêng

---

## 🎯 Use Cases

### Khách Hàng (Public)
✅ Xem danh sách xe
✅ Xem chi tiết xe
✅ Tìm kiếm xe
✅ Filter xe (brand, price, condition)
✅ Gửi form liên hệ
✅ Lưu xe yêu thích (localStorage)

### Admin (KHÔNG CÓ)
❌ Thêm xe mới
❌ Sửa xe
❌ Xóa xe
❌ Quản lý đơn hàng
❌ Quản lý khách hàng

---

## 💡 Future: Thêm Admin Panel

Nếu sau này cần admin panel:

### 1. Authentication
```bash
npm install next-auth
```

```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  providers: [
    CredentialsProvider({
      // Admin login config
    }),
  ],
};
```

### 2. Protected API Routes
```typescript
// app/api/admin/cars/route.ts
import { getServerSession } from 'next-auth';

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Admin logic here
}
```

### 3. Admin Dashboard
```typescript
// app/admin/page.tsx
'use client';

import { useSession } from 'next-auth/react';

export default function AdminDashboard() {
  const { data: session } = useSession();

  if (!session) {
    return <div>Please login</div>;
  }

  return <div>Admin Dashboard</div>;
}
```

---

## 📊 Current Architecture

```
┌─────────────────┐
│   Browser       │
│   (Client)      │
└────────┬────────┘
         │
         │ GET /api/cars
         │ GET /api/search
         │ POST /api/contact
         │
         ▼
┌─────────────────┐
│   Next.js API   │
│   (Server)      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Static Data    │
│  lib/data/      │
└─────────────────┘
```

**No Database, No Admin** - Simple & Fast! ⚡

---

## 🎉 Benefits

### ✅ Pros
- **Simple** - Không cần database setup
- **Fast** - Static data, no DB queries
- **Cheap** - Không cần database hosting
- **Secure** - Không có admin attack surface
- **Easy Deploy** - Chỉ cần deploy Next.js

### ⚠️ Cons
- Phải deploy lại để update data
- Không real-time updates
- Không có admin UI
- Manual data management

---

**📝 Note**: Đây là client-facing website. Nếu cần quản lý data động, nên build admin panel riêng hoặc dùng Headless CMS.

