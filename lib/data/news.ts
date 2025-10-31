export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: 'top-5-xe-ban-chay-nhat-thang-10-2024',
    title: 'Top 5 Xe Bán Chạy Nhất Tháng 10/2024 Tại Việt Nam',
    excerpt: 'Thị trường ô tô Việt Nam tháng 10/2024 tiếp tục sôi động với nhiều mẫu xe hot. Cùng điểm qua top 5 xe bán chạy nhất.',
    content: `
# Top 5 Xe Bán Chạy Nhất Tháng 10/2024

Thị trường ô tô Việt Nam tháng 10/2024 tiếp tục ghi nhận sự tăng trưởng ấn tượng với tổng doanh số đạt hơn 30,000 xe.

## 1. Toyota Vios - 2,500 xe

Toyota Vios tiếp tục dẫn đầu phân khúc sedan hạng B với 2,500 xe bán ra trong tháng. Với giá từ 458-545 triệu đồng, Vios được đánh giá cao về độ bền bỉ và chi phí bảo dưỡng thấp.

## 2. Honda City - 2,200 xe

Honda City đứng thứ 2 với 2,200 xe. Thiết kế thể thao, động cơ mạnh mẽ và trang bị an toàn hiện đại là những điểm cộng của City.

## 3. Mazda CX-5 - 1,800 xe

Trong phân khúc SUV, Mazda CX-5 tiếp tục là lựa chọn hàng đầu với 1,800 xe bán ra. Thiết kế Kodo đẳng cấp và công nghệ SkyActiv tiết kiệm nhiên liệu.

## 4. Hyundai Tucson - 1,600 xe

Hyundai Tucson gây ấn tượng với thiết kế mới mẻ và công nghệ hiện đại, đạt 1,600 xe trong tháng.

## 5. Mitsubishi Xpander - 1,500 xe

MPV 7 chỗ Xpander vẫn giữ vững vị thế với 1,500 xe, phù hợp cho gia đình Việt.
    `,
    author: 'Nguyễn Văn A',
    publishDate: '2024-10-31',
    category: 'Tin thị trường',
    tags: ['thị trường', 'doanh số', 'xe bán chạy'],
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: '2',
    slug: 'huong-dan-mua-xe-tra-gop-lai-suat-thap',
    title: 'Hướng Dẫn Mua Xe Trả Góp Lãi Suất Thấp 2024',
    excerpt: 'Bí quyết mua xe trả góp với lãi suất thấp nhất. Những điều cần biết trước khi vay mua ô tô.',
    content: `
# Hướng Dẫn Mua Xe Trả Góp Lãi Suất Thấp

Mua xe trả góp đang trở thành xu hướng phổ biến tại Việt Nam. Dưới đây là những điều bạn cần biết.

## 1. Chuẩn Bị Hồ Sơ

- CMND/CCCD
- Hộ khẩu thường trú
- Giấy tờ thu nhập 6 tháng
- Sao kê ngân hàng

## 2. So Sánh Lãi Suất

Các ngân hàng hiện có lãi suất từ 0% - 0.8%/tháng tùy theo thời gian vay.

## 3. Tính Toán Chi Phí

Nên vay không quá 70% giá trị xe để giảm gánh nặng lãi suất.
    `,
    author: 'Trần Thị B',
    publishDate: '2024-10-29',
    category: 'Tư vấn',
    tags: ['trả góp', 'tài chính', 'mua xe'],
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: '3',
    slug: 'so-sanh-mazda-cx5-vs-honda-crv-2024',
    title: 'So Sánh Mazda CX-5 vs Honda CR-V 2024: Nên Chọn Xe Nào?',
    excerpt: 'Phân tích chi tiết ưu nhược điểm của 2 mẫu SUV hàng đầu phân khúc C - Mazda CX-5 và Honda CR-V.',
    content: `
# So Sánh Mazda CX-5 vs Honda CR-V

Hai mẫu SUV hàng đầu phân khúc C đều có điểm mạnh riêng.

## Thiết Kế

**Mazda CX-5**: Thiết kế Kodo sang trọng, thể thao
**Honda CR-V**: Thiết kế hiện đại, thực dụng

## Động Cơ

**CX-5**: 2.0L/2.5L, công nghệ SkyActiv
**CR-V**: 1.5L Turbo, mạnh mẽ hơn

## Giá Bán

**CX-5**: 749-899 triệu
**CR-V**: 1.029-1.259 tỷ
    `,
    author: 'Lê Văn C',
    publishDate: '2024-10-27',
    category: 'So sánh xe',
    tags: ['so sánh', 'SUV', 'Mazda', 'Honda'],
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop',
    featured: false
  },
  {
    id: '4',
    slug: 'kinh-nghiem-chon-mua-xe-cu-chat-luong',
    title: 'Kinh Nghiệm Chọn Mua Xe Cũ Chất Lượng',
    excerpt: 'Những điều cần kiểm tra khi mua xe đã qua sử dụng để tránh mua phải xe tai nạn, ngập nước.',
    content: `
# Kinh Nghiệm Mua Xe Cũ

## Kiểm Tra Ngoại Thất

- Kiểm tra độ đồng đều của khe hở
- Xem xét lớp sơn
- Kiểm tra đèn, gương

## Kiểm Tra Nội Thất

- Ghế ngồi, vô lăng
- Hệ thống điện tử
- Mùi trong xe

## Kiểm Tra Máy Móc

- Động cơ
- Hộp số
- Hệ thống treo
    `,
    author: 'Phạm Thị D',
    publishDate: '2024-10-25',
    category: 'Tư vấn',
    tags: ['xe cũ', 'kinh nghiệm', 'mua xe'],
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop',
    featured: false
  },
  {
    id: '5',
    slug: 'xu-huong-xe-dien-tai-viet-nam-2024',
    title: 'Xu Hướng Xe Điện Tại Việt Nam 2024',
    excerpt: 'Thị trường xe điện Việt Nam đang bùng nổ với nhiều mẫu xe mới từ VinFast và các hãng ngoại.',
    content: `
# Xu Hướng Xe Điện 2024

Xe điện đang trở thành xu hướng tất yếu tại Việt Nam.

## VinFast Dẫn Đầu

VinFast với VF 8, VF 9 đang chiếm lĩnh thị trường xe điện Việt Nam.

## Hạ Tầng Sạc

Hệ thống trạm sạc đang được mở rộng khắp cả nước.

## Chính Sách Ưu Đãi

Miễn phí trước bạ, giảm phí đăng ký cho xe điện.
    `,
    author: 'Hoàng Văn E',
    publishDate: '2024-10-23',
    category: 'Công nghệ',
    tags: ['xe điện', 'VinFast', 'công nghệ'],
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: '6',
    slug: 'ban-chay-nhat-thang-10',
    title: 'Bảo Dưỡng Xe Định Kỳ - Tiết Kiệm Chi Phí Dài Hạn',
    excerpt: 'Hướng dẫn bảo dưỡng xe định kỳ đúng cách giúp xe bền bỉ và tiết kiệm chi phí sửa chữa.',
    content: `
# Bảo Dưỡng Xe Định Kỳ

## Lịch Bảo Dưỡng

- 1,000 km: Bảo dưỡng đầu tiên
- 5,000 km: Thay dầu, kiểm tra
- 10,000 km: Bảo dưỡng định kỳ

## Chi Phí

Trung bình 2-3 triệu/lần bảo dưỡng định kỳ.
    `,
    author: 'Nguyễn Văn F',
    publishDate: '2024-10-20',
    category: 'Bảo dưỡng',
    tags: ['bảo dưỡng', 'tiết kiệm', 'xe ô tô'],
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop',
    featured: false
  }
];

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find(article => article.slug === slug);
}

export function getFeaturedArticles(): NewsArticle[] {
  return newsArticles.filter(article => article.featured);
}

export function getArticlesByCategory(category: string): NewsArticle[] {
  return newsArticles.filter(article => article.category === category);
}

export function getAllCategories(): string[] {
  return Array.from(new Set(newsArticles.map(article => article.category)));
}

