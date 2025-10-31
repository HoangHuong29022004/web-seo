import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { cars, getAllBrands } from '@/lib/data/cars';
import { formatPrice, formatMileage } from '@/lib/utils/format';

export const metadata: Metadata = {
  title: 'So Sánh Xe Ô Tô - Chọn Xe Phù Hợp Nhất',
  description: 'So sánh thông số kỹ thuật, giá bán, tính năng của các dòng xe ô tô. Giúp bạn đưa ra quyết định mua xe chính xác nhất.',
  keywords: ['so sánh xe', 'so sánh ô tô', 'chọn mua xe', 'đánh giá xe', 'xe nào tốt hơn'],
};

export default function ComparePage() {
  const brands = getAllBrands();

  // Popular comparisons
  const popularComparisons = [
    { car1: cars[1], car2: cars[0] }, // Vios vs City
    { car1: cars[2], car2: cars[3] }, // CX5 vs Tucson
    { car1: cars[6], car2: cars[5] }, // Xpander vs Seltos
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              So Sánh Xe Ô Tô
            </h1>
            <p className="text-xl text-orange-100 mb-8">
              So sánh chi tiết thông số, giá cả, tính năng để tìm xe phù hợp nhất với bạn
            </p>
          </div>
        </div>
      </section>

      {/* Compare Tool */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Chọn Xe Để So Sánh
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Car 1 Selector */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center text-orange-600">
                  Xe 1
                </h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Chọn Hãng
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4">
                    <option value="">Tất cả hãng</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Chọn Xe
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                    <option value="">Chọn dòng xe</option>
                    {cars.map(car => (
                      <option key={car.id} value={car.id}>{car.name}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-6 text-center text-gray-400">
                  <div className="text-6xl mb-2">🚗</div>
                  <p>Chọn xe để so sánh</p>
                </div>
              </div>

              {/* VS Icon */}
              <div className="hidden lg:flex items-center justify-center">
                <div className="text-6xl font-bold text-orange-600">VS</div>
              </div>

              {/* Car 2 Selector */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-center text-orange-600">
                  Xe 2
                </h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Chọn Hãng
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4">
                    <option value="">Tất cả hãng</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Chọn Xe
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                    <option value="">Chọn dòng xe</option>
                    {cars.map(car => (
                      <option key={car.id} value={car.id}>{car.name}</option>
                    ))}
                  </select>
                </div>

                <div className="mt-6 text-center text-gray-400">
                  <div className="text-6xl mb-2">🚗</div>
                  <p>Chọn xe để so sánh</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button className="bg-orange-600 text-white px-12 py-4 rounded-lg font-bold text-lg hover:bg-orange-700 transition-colors">
                So Sánh Ngay
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Comparisons */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            So Sánh Phổ Biến
          </h2>
          
          <div className="space-y-12 max-w-6xl mx-auto">
            {popularComparisons.map((comp, index) => (
              <article key={index} className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Car 1 */}
                  <div className="p-8 bg-white">
                    <Link href={`/xe/${comp.car1.slug}`}>
                      <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-6">
                        <Image
                          src={comp.car1.images[0]}
                          alt={comp.car1.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                    <h3 className="text-2xl font-bold mb-4">{comp.car1.name}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Giá:</span>
                        <span className="font-bold text-orange-600">{formatPrice(comp.car1.price)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Năm:</span>
                        <span className="font-semibold">{comp.car1.year}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Hộp số:</span>
                        <span className="font-semibold">{comp.car1.transmission}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Nhiên liệu:</span>
                        <span className="font-semibold">{comp.car1.fuelType}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b">
                        <span className="text-gray-600">Dung tích:</span>
                        <span className="font-semibold">{comp.car1.engineCapacity}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Km đã đi:</span>
                        <span className="font-semibold">{formatMileage(comp.car1.mileage)}</span>
                      </div>
                    </div>
                    <Link
                      href={`/xe/${comp.car1.slug}`}
                      className="block mt-6 bg-orange-600 text-white text-center py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors"
                    >
                      Xem Chi Tiết
                    </Link>
                  </div>

                  {/* Car 2 */}
                  <div className="p-8 bg-blue-50">
                    <Link href={`/xe/${comp.car2.slug}`}>
                      <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-6">
                        <Image
                          src={comp.car2.images[0]}
                          alt={comp.car2.name}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </Link>
                    <h3 className="text-2xl font-bold mb-4">{comp.car2.name}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between py-2 border-b border-blue-200">
                        <span className="text-gray-600">Giá:</span>
                        <span className="font-bold text-orange-600">{formatPrice(comp.car2.price)}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-blue-200">
                        <span className="text-gray-600">Năm:</span>
                        <span className="font-semibold">{comp.car2.year}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-blue-200">
                        <span className="text-gray-600">Hộp số:</span>
                        <span className="font-semibold">{comp.car2.transmission}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-blue-200">
                        <span className="text-gray-600">Nhiên liệu:</span>
                        <span className="font-semibold">{comp.car2.fuelType}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-blue-200">
                        <span className="text-gray-600">Dung tích:</span>
                        <span className="font-semibold">{comp.car2.engineCapacity}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-600">Km đã đi:</span>
                        <span className="font-semibold">{formatMileage(comp.car2.mileage)}</span>
                      </div>
                    </div>
                    <Link
                      href={`/xe/${comp.car2.slug}`}
                      className="block mt-6 bg-blue-600 text-white text-center py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                      Xem Chi Tiết
                    </Link>
                  </div>
                </div>

                {/* Winner Badge */}
                <div className="p-6 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                  <div className="flex items-center justify-center gap-4">
                    <span className="text-2xl">🏆</span>
                    <p className="font-bold">
                      {comp.car1.price < comp.car2.price 
                        ? `${comp.car1.name} rẻ hơn ${formatPrice(comp.car2.price - comp.car1.price)}`
                        : `${comp.car2.name} rẻ hơn ${formatPrice(comp.car1.price - comp.car2.price)}`
                      }
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison by Category */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            So Sánh Theo Phân Khúc
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/so-sanh-xe?category=sedan" className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 text-center">
              <div className="text-5xl mb-4">🚘</div>
              <h3 className="text-xl font-bold mb-2">Sedan</h3>
              <p className="text-gray-600 text-sm mb-4">
                City, Vios, Accent, Cerato...
              </p>
              <span className="text-orange-600 font-semibold">Xem so sánh →</span>
            </Link>

            <Link href="/so-sanh-xe?category=suv" className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 text-center">
              <div className="text-5xl mb-4">🚙</div>
              <h3 className="text-xl font-bold mb-2">SUV</h3>
              <p className="text-gray-600 text-sm mb-4">
                CX-5, Tucson, CR-V, Seltos...
              </p>
              <span className="text-orange-600 font-semibold">Xem so sánh →</span>
            </Link>

            <Link href="/so-sanh-xe?category=mpv" className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 text-center">
              <div className="text-5xl mb-4">🚐</div>
              <h3 className="text-xl font-bold mb-2">MPV</h3>
              <p className="text-gray-600 text-sm mb-4">
                Xpander, Ertiga, Rush, Avanza...
              </p>
              <span className="text-orange-600 font-semibold">Xem so sánh →</span>
            </Link>

            <Link href="/so-sanh-xe?category=pickup" className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 text-center">
              <div className="text-5xl mb-4">🛻</div>
              <h3 className="text-xl font-bold mb-2">Bán Tải</h3>
              <p className="text-gray-600 text-sm mb-4">
                Ranger, Colorado, Hilux, D-Max...
              </p>
              <span className="text-orange-600 font-semibold">Xem so sánh →</span>
            </Link>

            <Link href="/so-sanh-xe?category=electric" className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Xe Điện</h3>
              <p className="text-gray-600 text-sm mb-4">
                VF8, VF9, Model 3, EV6...
              </p>
              <span className="text-orange-600 font-semibold">Xem so sánh →</span>
            </Link>

            <Link href="/so-sanh-xe?category=luxury" className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 text-center">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-xl font-bold mb-2">Sang Trọng</h3>
              <p className="text-gray-600 text-sm mb-4">
                BMW, Mercedes, Lexus, Audi...
              </p>
              <span className="text-orange-600 font-semibold">Xem so sánh →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tips Chọn Xe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>💰</span> Ngân Sách
              </h3>
              <p className="text-gray-700">
                Xác định ngân sách rõ ràng, bao gồm cả chi phí bảo hiểm, đăng ký và bảo dưỡng. 
                Nên dành 20-30% thu nhập hàng tháng cho xe.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>👨‍👩‍👧‍👦</span> Nhu Cầu Sử Dụng
              </h3>
              <p className="text-gray-700">
                Cân nhắc số người trong gia đình, mục đích sử dụng (đi làm, đi chơi, kinh doanh) 
                để chọn loại xe phù hợp.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>⛽</span> Chi Phí Vận Hành
              </h3>
              <p className="text-gray-700">
                Xe tiết kiệm nhiên liệu sẽ giúp tiết kiệm lâu dài. Cân nhắc giữa xe xăng, 
                diesel hay điện tùy theo quãng đường di chuyển.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🔧</span> Bảo Dưỡng
              </h3>
              <p className="text-gray-700">
                Hãng xe phổ biến thường có chi phí phụ tùng và bảo dưỡng rẻ hơn. 
                Kiểm tra mạng lưới dịch vụ trước khi mua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vẫn Chưa Quyết Định Được?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Để chuyên viên của chúng tôi tư vấn giúp bạn chọn xe phù hợp nhất
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/lien-he"
              className="inline-block bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-colors"
            >
              Tư Vấn Miễn Phí
            </a>
            <a
              href="/dat-lai-thu"
              className="inline-block bg-orange-700 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-900 transition-colors"
            >
              Đặt Lái Thử
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

