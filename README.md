# 🚗 AutoSale - Website Bán Xe Ô Tô với SEO Tối Ưu

Website bán xe ô tô được xây dựng với **Next.js 14+**, **TypeScript**, và **Tailwind CSS**. Tối ưu hoàn toàn cho SEO với mục tiêu đạt 90+ điểm trên tất cả các chỉ số Lighthouse.

## ✨ Tính Năng

- ⚡ **Performance cao**: SSR/SSG, Image Optimization, Code Splitting
- 🎯 **SEO tối ưu**: Meta tags, JSON-LD, Sitemap, Robots.txt
- 📱 **Responsive**: Hiển thị hoàn hảo trên mọi thiết bị
- 🎨 **UI/UX hiện đại**: Thiết kế đẹp mắt với Tailwind CSS
- 🔍 **Structured Data**: JSON-LD cho Product, Organization, Breadcrumb
- 🖼️ **Image Optimization**: Next.js Image với AVIF, WebP
- 📊 **Core Web Vitals**: Tối ưu LCP, FID, CLS

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Fonts**: Next.js Font Optimization (Inter)
- **Images**: Next.js Image Component

## 📦 Cài Đặt

\`\`\`bash
# Clone repository hoặc cd vào thư mục
cd /opt/homebrew/var/www/web-seo

# Cài đặt dependencies (đã cài rồi)
npm install

# Chạy development server
npm run dev
\`\`\`

Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000)

## 🚀 Build & Deploy

\`\`\`bash
# Build production
npm run build

# Start production server
npm start
\`\`\`

## 📁 Cấu Trúc Thư Mục

\`\`\`
web-seo/
├── app/
│   ├── layout.tsx          # Root layout với SEO meta tags
│   ├── page.tsx            # Trang chủ
│   ├── globals.css         # Global styles
│   ├── robots.ts           # Robots.txt generator
│   ├── sitemap.ts          # Sitemap.xml generator
│   └── xe/
│       └── [slug]/
│           ├── page.tsx    # Chi tiết sản phẩm (dynamic route)
│           └── not-found.tsx
├── components/
│   └── CarCard.tsx         # Component card hiển thị xe
├── lib/
│   ├── data/
│   │   └── cars.ts         # Mock data xe (8 sản phẩm)
│   └── utils/
│       └── format.ts       # Utility functions
├── public/
│   └── manifest.json       # PWA manifest
└── next.config.ts          # Next.js configuration
\`\`\`

## 🎯 SEO Features

### 1. **Meta Tags**
- Title, Description, Keywords
- Open Graph (Facebook)
- Twitter Cards
- Canonical URLs

### 2. **Structured Data (JSON-LD)**
- Product Schema
- Organization Schema
- Breadcrumb Schema
- AggregateRating Schema

### 3. **Technical SEO**
- Sitemap.xml tự động
- Robots.txt
- Semantic HTML
- Alt text cho images
- Responsive images

### 4. **Performance**
- Image optimization (AVIF, WebP)
- Font optimization
- Code splitting
- Lazy loading
- Static Generation

## 📊 Lighthouse Scores Target

Mục tiêu: **90+ điểm** trên tất cả:
- ⚡ Performance: 90+
- ♿ Accessibility: 90+
- 🎯 Best Practices: 90+
- 🔍 SEO: 90+

## 🔧 Tùy Chỉnh

### Thay đổi domain
Tìm và thay thế `https://your-domain.com` trong các file:
- `app/layout.tsx`
- `app/sitemap.ts`
- `app/robots.ts`
- `app/xe/[slug]/page.tsx`

### Thêm sản phẩm
Chỉnh sửa file `lib/data/cars.ts` để thêm/sửa/xóa sản phẩm xe.

### Thay đổi màu sắc
Chỉnh sửa Tailwind CSS trong các component hoặc `globals.css`.

## 📝 Checklist Trước Khi Deploy

- [ ] Thay đổi domain từ `your-domain.com` sang domain thật
- [ ] Thêm Google Analytics tracking code
- [ ] Thêm Google Search Console verification
- [ ] Cập nhật số điện thoại, email liên hệ
- [ ] Tạo logo và favicon thực tế
- [ ] Thay thế images từ Unsplash bằng ảnh thật
- [ ] Test Lighthouse scores
- [ ] Submit sitemap lên Google Search Console
- [ ] Setup SSL certificate (HTTPS)

## 🌐 Deploy

### Vercel (Recommended)
\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Netlify
\`\`\`bash
npm run build
# Deploy folder .next
\`\`\`

### Docker
\`\`\`bash
docker build -t autosale .
docker run -p 3000:3000 autosale
\`\`\`

## 📈 SEO Tips

1. **Content**: Viết mô tả chi tiết, unique cho mỗi sản phẩm
2. **Keywords**: Sử dụng từ khóa tự nhiên trong nội dung
3. **Images**: Đặt tên file ảnh có ý nghĩa, thêm alt text
4. **Internal Links**: Liên kết giữa các trang sản phẩm
5. **Loading Speed**: Giữ thời gian tải < 3 giây
6. **Mobile First**: Đảm bảo mobile experience tốt
7. **Schema Markup**: Đã tích hợp JSON-LD đầy đủ
8. **Social Sharing**: Open Graph tags đã được setup

## 🐛 Troubleshooting

### Lỗi build
\`\`\`bash
rm -rf .next node_modules
npm install
npm run build
\`\`\`

### Lỗi TypeScript
\`\`\`bash
npm run lint
\`\`\`

## 📞 Support

- Email: contact@autosale.vn
- Phone: 1900-xxxx

## 📄 License

MIT License - Tự do sử dụng cho mục đích thương mại và cá nhân.

---

**Made with ❤️ using Next.js + TypeScript + Tailwind CSS**
