import { Metadata } from 'next';
import Image from 'next/image';
import { showrooms } from '@/lib/data/showrooms';

export const metadata: Metadata = {
  title: 'Hệ Thống Phân Phối - Showroom Xe Ô Tô Toàn Quốc',
  description: 'Hệ thống 50+ showroom AutoSale trên toàn quốc. Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ. Đến showroom gần bạn để xem và lái thử xe ngay hôm nay!',
  keywords: ['showroom ô tô', 'đại lý xe', 'hệ thống phân phối', 'showroom gần tôi'],
};

export default function ShowroomsPage() {
  const cities = Array.from(new Set(showrooms.map(s => s.city)));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
            Hệ Thống Phân Phối
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto mb-8">
            50+ showroom trên toàn quốc, sẵn sàng phục vụ bạn với đội ngũ tư vấn chuyên nghiệp
          </p>
          <div className="flex justify-center gap-8 text-center">
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm">Showroom</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">63</div>
              <div className="text-sm">Tỉnh Thành</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm">Hỗ Trợ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Tất cả ({showrooms.length})
            </button>
            {cities.map(city => (
              <button
                key={city}
                className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                {city} ({showrooms.filter(s => s.city === city).length})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Showrooms List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {showrooms.map(showroom => (
              <article key={showroom.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={showroom.image}
                    alt={showroom.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{showroom.name}</h3>
                  
                  <div className="space-y-3 text-gray-600 mb-6">
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">📍</span>
                      <span className="text-sm">{showroom.address}, {showroom.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">📞</span>
                      <a href={`tel:${showroom.phone}`} className="text-sm hover:text-blue-600">
                        {showroom.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">✉️</span>
                      <a href={`mailto:${showroom.email}`} className="text-sm hover:text-blue-600">
                        {showroom.email}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">⏰</span>
                      <span className="text-sm">{showroom.hours}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-600">👤</span>
                      <span className="text-sm">Quản lý: {showroom.manager}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={showroom.map}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-blue-700 transition-colors text-sm"
                    >
                      Chỉ Đường
                    </a>
                    <a
                      href="/dat-lai-thu"
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold text-center hover:bg-gray-200 transition-colors text-sm"
                    >
                      Đặt Lái Thử
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Dịch Vụ Tại Showroom
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="font-bold text-lg mb-2">Xem Xe Thực Tế</h3>
              <p className="text-gray-600 text-sm">
                Xem và trải nghiệm xe ngay tại showroom
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🔑</div>
              <h3 className="font-bold text-lg mb-2">Lái Thử Miễn Phí</h3>
              <p className="text-gray-600 text-sm">
                Đặt lịch lái thử ngay hôm nay
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Tư Vấn Trả Góp</h3>
              <p className="text-gray-600 text-sm">
                Hỗ trợ trả góp lãi suất ưu đãi
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">☕</div>
              <h3 className="font-bold text-lg mb-2">Khu Vực Chờ</h3>
              <p className="text-gray-600 text-sm">
                Phòng chờ sang trọng, WiFi miễn phí
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Bản Đồ Hệ Thống Showroom
          </h2>
          <div className="aspect-[16/9] bg-gray-200 rounded-xl overflow-hidden max-w-5xl mx-auto">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-xl">Google Maps với tất cả showroom</p>
                <p className="text-sm mt-2">Tích hợp khi deploy production</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ghé Thăm Showroom Gần Bạn
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ bạn tìm chiếc xe phù hợp nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:1900xxxx"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              📞 Gọi Hotline: 1900-xxxx
            </a>
            <a
              href="/dat-lai-thu"
              className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-800 transition-colors"
            >
              🚗 Đặt Lịch Lái Thử
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: showrooms.map((showroom, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'AutoDealer',
                name: showroom.name,
                telephone: showroom.phone,
                email: showroom.email,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: showroom.address,
                  addressLocality: showroom.city,
                  addressCountry: 'VN',
                },
              },
            })),
          }),
        }}
      />
    </div>
  );
}

