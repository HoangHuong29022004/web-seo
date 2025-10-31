import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileMenu from "@/components/MobileMenu";

const inter = Inter({ 
  subsets: ["latin", "vietnamese"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-domain.com'),
  title: {
    default: 'Mua Bán Xe Ô Tô - Giá Tốt Nhất 2024',
    template: '%s | Mua Bán Xe Ô Tô'
  },
  description: 'Chuyên mua bán xe ô tô mới và đã qua sử dụng. Hàng ngàn xe Honda, Toyota, Mazda, Hyundai, Ford với giá tốt nhất. Hỗ trợ trả góp, bảo hành chính hãng.',
  keywords: ['mua xe ô tô', 'bán xe ô tô', 'xe hơi giá rẻ', 'ô tô cũ', 'ô tô mới', 'Honda City', 'Toyota Vios', 'Mazda CX5', 'Hyundai Tucson', 'xe SUV', 'xe sedan', 'trả góp xe'],
  authors: [{ name: 'Auto Sale' }],
  creator: 'Auto Sale',
  publisher: 'Auto Sale',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'vi_VN',
    url: 'https://your-domain.com',
    title: 'Mua Bán Xe Ô Tô - Giá Tốt Nhất 2024',
    description: 'Chuyên mua bán xe ô tô mới và đã qua sử dụng. Hàng ngàn xe với giá tốt nhất.',
    siteName: 'Auto Sale',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mua Bán Xe Ô Tô',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mua Bán Xe Ô Tô - Giá Tốt Nhất 2024',
    description: 'Chuyên mua bán xe ô tô mới và đã qua sử dụng. Hàng ngàn xe với giá tốt nhất.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.className} antialiased`}>
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
          <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              🚗 <span className="hidden sm:inline">AutoSale</span>
            </a>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-4 lg:gap-6 text-sm lg:text-base">
              <a href="/" className="hover:text-blue-600 transition-colors font-medium">Trang chủ</a>
              <a href="/danh-sach-xe" className="hover:text-blue-600 transition-colors font-medium">Danh sách xe</a>
              <a href="/tin-tuc" className="hover:text-blue-600 transition-colors font-medium">Tin tức</a>
              <a href="/so-sanh-xe" className="hover:text-blue-600 transition-colors font-medium">So sánh</a>
              <a href="/tra-gop" className="hover:text-blue-600 transition-colors font-medium">Trả góp</a>
              <a href="/lien-he" className="hover:text-blue-600 transition-colors font-medium">Liên hệ</a>
            </div>

            {/* Mobile Menu */}
            <MobileMenu />
          </nav>
        </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">🚗 AutoSale</h3>
                <p className="text-gray-400 mb-4">Mua bán xe ô tô uy tín, giá tốt nhất thị trường.</p>
                <div className="flex gap-3">
                  <a href="#" className="text-2xl hover:text-blue-400">📘</a>
                  <a href="#" className="text-2xl hover:text-blue-400">📸</a>
                  <a href="#" className="text-2xl hover:text-blue-400">🎥</a>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Sản phẩm</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/" className="hover:text-white transition-colors">Xe mới</a></li>
                  <li><a href="/" className="hover:text-white transition-colors">Xe đã qua sử dụng</a></li>
                  <li><a href="/so-sanh-xe" className="hover:text-white transition-colors">So sánh xe</a></li>
                  <li><a href="/dat-lai-thu" className="hover:text-white transition-colors">Đặt lái thử</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Dịch vụ</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/tra-gop" className="hover:text-white transition-colors">Trả góp 0%</a></li>
                  <li><a href="/he-thong-phan-phoi" className="hover:text-white transition-colors">Hệ thống showroom</a></li>
                  <li><a href="/gioi-thieu" className="hover:text-white transition-colors">Về chúng tôi</a></li>
                  <li><a href="/lien-he" className="hover:text-white transition-colors">Liên hệ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Liên hệ</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📞 Hotline: <a href="tel:1900xxxx" className="hover:text-white">1900-xxxx</a></li>
                  <li>📧 Email: <a href="mailto:contact@autosale.vn" className="hover:text-white">contact@autosale.vn</a></li>
                  <li>📍 TP. Hồ Chí Minh, Hà Nội</li>
                  <li className="pt-2">
                    <a href="/he-thong-phan-phoi" className="text-blue-400 hover:text-blue-300">
                      Xem tất cả showroom →
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800">
              <div className="text-center text-gray-400 mb-4">
                <div className="flex flex-wrap justify-center gap-4 text-sm mb-4">
                  <a href="/gioi-thieu" className="hover:text-white">Về chúng tôi</a>
                  <span>•</span>
                  <a href="/lien-he" className="hover:text-white">Liên hệ</a>
                  <span>•</span>
                  <a href="#" className="hover:text-white">Điều khoản</a>
                  <span>•</span>
                  <a href="#" className="hover:text-white">Chính sách bảo mật</a>
                </div>
                <p>&copy; 2024 AutoSale. Bản quyền thuộc về AutoSale.</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
