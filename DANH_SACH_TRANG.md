# 📄 DANH SÁCH TẤT CẢ CÁC TRANG

## 🌐 URLs để Test (Local)

Sau khi chạy `npm run dev`, mở các URL sau:

### 1. Trang Chủ
```
http://localhost:3000/
```
- Hero với CTA buttons
- Stats section
- Danh sách hãng xe
- 4 xe mới + 4 xe cũ
- Why choose us
- CTA section

---

### 2. Chi Tiết Sản Phẩm (8 xe)

```
http://localhost:3000/xe/honda-city-2023
http://localhost:3000/xe/toyota-vios-2024
http://localhost:3000/xe/mazda-cx5-2023
http://localhost:3000/xe/hyundai-tucson-2024
http://localhost:3000/xe/ford-ranger-raptor-2023
http://localhost:3000/xe/kia-seltos-2024
http://localhost:3000/xe/mitsubishi-xpander-2023
http://localhost:3000/xe/vinfast-vf8-2024
```
- Gallery ảnh
- Thông số kỹ thuật
- Tính năng nổi bật
- Giá cả
- Call to action
- Xe liên quan

---

### 3. Liên Hệ
```
http://localhost:3000/lien-he
```
- Form liên hệ đầy đủ
- Thông tin liên lạc
- Giờ làm việc
- Google Maps placeholder
- FAQ

---

### 4. Giới Thiệu
```
http://localhost:3000/gioi-thieu
```
- Câu chuyện công ty
- Sứ mệnh, tầm nhìn, giá trị
- 6 lý do chọn AutoSale
- Đội ngũ lãnh đạo
- Thành tựu & giải thưởng

---

### 5. Hệ Thống Phân Phối
```
http://localhost:3000/he-thong-phan-phoi
```
- 5 showroom toàn quốc
- Filter theo tỉnh thành
- Thông tin chi tiết mỗi showroom
- Dịch vụ tại showroom
- Google Maps

---

### 6. Đặt Lái Thử
```
http://localhost:3000/dat-lai-thu
```
- Form đặt lịch lái thử
- Quy trình 4 bước
- Điều kiện lái thử
- Xe được lái thử nhiều
- FAQ

---

### 7. Trả Góp
```
http://localhost:3000/tra-gop
```
- Máy tính trả góp (calculator)
- 6 ngân hàng đối tác
- Ưu điểm vay tại AutoSale
- Hồ sơ cần chuẩn bị
- Form đăng ký vay
- FAQ

---

### 8. So Sánh Xe
```
http://localhost:3000/so-sanh-xe
```
- Tool chọn 2 xe so sánh
- 3 so sánh phổ biến
- So sánh theo phân khúc (6 loại)
- Tips chọn xe

---

### 9. SEO Files

```
http://localhost:3000/sitemap.xml
http://localhost:3000/robots.txt
```

---

## 🎯 Test Checklist

### Desktop
- [ ] Trang chủ
- [ ] 8 trang chi tiết xe
- [ ] Liên hệ
- [ ] Giới thiệu
- [ ] Hệ thống phân phối
- [ ] Đặt lái thử
- [ ] Trả góp
- [ ] So sánh xe
- [ ] Sitemap
- [ ] Robots

### Mobile (F12 → Toggle Device)
- [ ] Navigation responsive
- [ ] Tất cả trang hiển thị tốt
- [ ] Form hoạt động
- [ ] Images load nhanh
- [ ] CTA buttons rõ ràng

### SEO Check
- [ ] Meta tags (View Page Source)
- [ ] JSON-LD (View Page Source - search for "application/ld+json")
- [ ] Alt text cho images (Inspect images)
- [ ] Sitemap.xml có đủ URLs
- [ ] Robots.txt cho phép crawl

### Performance
- [ ] F12 → Lighthouse → Run
- [ ] Check Performance score
- [ ] Check SEO score
- [ ] Check Accessibility score
- [ ] Check Best Practices score

---

## 🧪 Test Commands

```bash
# Chạy dev server
npm run dev

# Build production
npm run build

# Start production
npm start

# Lint
npm run lint
```

---

## 📱 Responsive Breakpoints

Test trên các kích thước:
- Mobile: 375px, 390px, 414px
- Tablet: 768px, 834px
- Desktop: 1024px, 1280px, 1920px

---

## 🔗 Navigation Links

### Header
- Trang chủ → `/`
- Giới thiệu → `/gioi-thieu` (hidden on mobile)
- So sánh → `/so-sanh-xe`
- Trả góp → `/tra-gop` (hidden on mobile)
- Lái thử → `/dat-lai-thu` (hidden on tablet)
- Liên hệ → `/lien-he`

### Footer
#### Sản phẩm
- Xe mới → `/`
- Xe đã qua sử dụng → `/`
- So sánh xe → `/so-sanh-xe`
- Đặt lái thử → `/dat-lai-thu`

#### Dịch vụ
- Trả góp 0% → `/tra-gop`
- Hệ thống showroom → `/he-thong-phan-phoi`
- Về chúng tôi → `/gioi-thieu`
- Liên hệ → `/lien-he`

#### Liên hệ
- Hotline: 1900-xxxx
- Email: contact@autosale.vn
- Xem tất cả showroom → `/he-thong-phan-phoi`

---

## 🎨 Pages Overview

| Trang | URL | Components | Features |
|-------|-----|-----------|----------|
| Trang chủ | `/` | Hero, Stats, Brands, Cars, CTA | JSON-LD Organization |
| Chi tiết xe | `/xe/[slug]` | Gallery, Specs, Features | JSON-LD Product + Breadcrumb |
| Liên hệ | `/lien-he` | Form, Contact Info, Map | JSON-LD ContactPage |
| Giới thiệu | `/gioi-thieu` | Story, Team, Achievements | Branding |
| Showrooms | `/he-thong-phan-phoi` | List, Filter, Map | JSON-LD ItemList |
| Đặt lái thử | `/dat-lai-thu` | Form, Process, FAQ | Booking |
| Trả góp | `/tra-gop` | Calculator, Banks, Form | Finance |
| So sánh xe | `/so-sanh-xe` | Comparison Tool, Categories | Comparison |

---

## ✅ Quick Test

1. Chạy dev:
```bash
npm run dev
```

2. Mở browser: http://localhost:3000

3. Test navigation (click vào mỗi link)

4. Test responsive (F12 → Toggle Device)

5. Test Lighthouse (F12 → Lighthouse → Analyze)

6. Check Sitemap: http://localhost:3000/sitemap.xml

7. Check Robots: http://localhost:3000/robots.txt

---

**All 10 pages ready to test! 🎉**

