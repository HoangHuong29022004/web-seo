import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
            <a href="/" className="text-2xl font-bold text-blue-600">
              🚗 AutoSale
            </a>
            <div className="flex gap-6">
              <a href="/" className="hover:text-blue-600 transition-colors">Trang chủ</a>
              <a href="#brands" className="hover:text-blue-600 transition-colors">Hãng xe</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Liên hệ</a>
            </div>
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
                <p className="text-gray-400">Mua bán xe ô tô uy tín, giá tốt nhất thị trường.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Sản phẩm</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/" className="hover:text-white">Xe mới</a></li>
                  <li><a href="/" className="hover:text-white">Xe đã qua sử dụng</a></li>
                  <li><a href="/" className="hover:text-white">SUV</a></li>
                  <li><a href="/" className="hover:text-white">Sedan</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Hỗ trợ</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Tư vấn mua xe</a></li>
                  <li><a href="#" className="hover:text-white">Trả góp</a></li>
                  <li><a href="#" className="hover:text-white">Bảo hành</a></li>
                  <li><a href="#" className="hover:text-white">Liên hệ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Liên hệ</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>📞 Hotline: 1900-xxxx</li>
                  <li>📧 Email: contact@autosale.vn</li>
                  <li>📍 TP. Hồ Chí Minh</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 AutoSale. Bản quyền thuộc về AutoSale.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
