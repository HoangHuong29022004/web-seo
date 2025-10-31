import { Metadata } from 'next';
import CarCard from '@/components/CarCard';
import { cars, getAllBrands } from '@/lib/data/cars';

export const metadata: Metadata = {
  title: 'Mua Bán Xe Ô Tô Chính Hãng - Giá Tốt Nhất 2024',
  description: 'Tìm xe ô tô mơ ước của bạn tại AutoSale. Hơn 1000+ xe mới và cũ từ các hãng Honda, Toyota, Mazda, Hyundai, Ford. Hỗ trợ trả góp 0% lãi suất.',
  openGraph: {
    title: 'Mua Bán Xe Ô Tô Chính Hãng - Giá Tốt Nhất 2024',
    description: 'Tìm xe ô tô mơ ước của bạn tại AutoSale. Hơn 1000+ xe mới và cũ.',
    url: 'https://your-domain.com',
  },
};

export default function Home() {
  const brands = getAllBrands();
  const newCars = cars.filter(car => car.condition === 'new');
  const usedCars = cars.filter(car => car.condition === 'used');

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Tìm Xe Ô Tô<br />
              <span className="text-yellow-400">Giá Tốt Nhất 2024</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Hơn 1000+ xe mới và đã qua sử dụng từ các hãng uy tín. 
              Hỗ trợ trả góp 0%, bảo hành chính hãng, giao xe tận nhà.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#cars" 
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition-colors inline-flex items-center gap-2"
              >
                Xem xe ngay
                <span>→</span>
              </a>
              <a 
                href="/dat-lai-thu" 
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-colors"
              >
                Đặt lái thử
              </a>
              <a 
                href="/lien-he" 
                className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-colors hidden sm:inline-flex"
              >
                Tư vấn miễn phí
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Xe có sẵn</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Hãng xe</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
              <div className="text-gray-600">Khách hàng</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
              <div className="text-gray-600">Hài lòng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section id="brands" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Hãng Xe Nổi Bật
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Chúng tôi cung cấp đa dạng các dòng xe từ các thương hiệu hàng đầu thế giới
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {brands.map(brand => (
              <div 
                key={brand}
                className="px-8 py-4 bg-gray-50 rounded-lg font-semibold text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Cars Section */}
      <section id="cars" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                🆕 Xe Mới 100%
              </h2>
              <p className="text-gray-600">
                Xe mới nguyên chiếc, chính hãng với giá tốt nhất
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Used Cars Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                💎 Xe Đã Qua Sử Dụng
              </h2>
              <p className="text-gray-600">
                Xe cũ chất lượng cao, giá rẻ hơn 20-30% so với xe mới
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {usedCars.map(car => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Tại Sao Chọn AutoSale?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-2">Uy Tín</h3>
              <p className="text-blue-100">
                Đảm bảo nguồn gốc xuất xứ, chất lượng xe
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">Giá Tốt</h3>
              <p className="text-blue-100">
                Cam kết giá tốt nhất thị trường
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold mb-2">Bảo Hành</h3>
              <p className="text-blue-100">
                Bảo hành chính hãng, hỗ trợ 24/7
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-2">Giao Xe</h3>
              <p className="text-blue-100">
                Giao xe tận nhà toàn quốc
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn Sàng Tìm Xe Mơ Ước?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận ưu đãi đặc biệt
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:1900xxxx" 
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
            >
              📞 Gọi ngay: 1900-xxxx
            </a>
            <a 
              href="mailto:contact@autosale.vn" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors inline-flex items-center justify-center gap-2 border-2 border-blue-600"
            >
              ✉️ Email tư vấn
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'AutoDealer',
            name: 'AutoSale',
            description: 'Chuyên mua bán xe ô tô mới và đã qua sử dụng',
            url: 'https://your-domain.com',
            telephone: '1900-xxxx',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'TP. Hồ Chí Minh',
              addressCountry: 'VN',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: '5000',
            },
          }),
        }}
      />
    </>
  );
}
