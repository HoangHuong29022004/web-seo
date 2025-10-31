import { Metadata } from 'next';
import { cars, getAllBrands } from '@/lib/data/cars';
import { showrooms } from '@/lib/data/showrooms';

export const metadata: Metadata = {
  title: 'Đặt Lịch Lái Thử Xe - Trải Nghiệm Miễn Phí',
  description: 'Đặt lịch lái thử xe ô tô miễn phí tại AutoSale. Trải nghiệm thực tế trước khi quyết định mua. Đặt lịch nhanh chỉ 30 giây, xác nhận ngay.',
  keywords: ['đặt lịch lái thử', 'lái thử xe miễn phí', 'test drive', 'trải nghiệm xe'],
};

export default function TestDrivePage() {
  const brands = getAllBrands();
  const cities = Array.from(new Set(showrooms.map(s => s.city)));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Đặt Lịch Lái Thử
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Trải nghiệm xe thực tế hoàn toàn miễn phí. 
              Đặt lịch nhanh chỉ 30 giây, chúng tôi sẽ xác nhận ngay!
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">100% Miễn Phí</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">Xác Nhận 30 Phút</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <div className="text-2xl font-bold">Linh Hoạt Thời Gian</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Điền Thông Tin Đặt Lịch
              </h2>
              
              <form className="space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Họ và Tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Số Điện Thoại *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="0901234567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Car Selection */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold mb-4">Thông Tin Xe Muốn Lái Thử</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="brand" className="block text-sm font-semibold text-gray-700 mb-2">
                        Hãng Xe *
                      </label>
                      <select
                        id="brand"
                        name="brand"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Chọn hãng xe</option>
                        {brands.map(brand => (
                          <option key={brand} value={brand}>{brand}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="car-model" className="block text-sm font-semibold text-gray-700 mb-2">
                        Dòng Xe *
                      </label>
                      <select
                        id="car-model"
                        name="car-model"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Chọn dòng xe</option>
                        {cars.map(car => (
                          <option key={car.id} value={car.id}>{car.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Location & Time */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-bold mb-4">Thời Gian & Địa Điểm</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="city" className="block text-sm font-semibold text-gray-700 mb-2">
                        Tỉnh/Thành Phố *
                      </label>
                      <select
                        id="city"
                        name="city"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Chọn tỉnh thành</option>
                        {cities.map(city => (
                          <option key={city} value={city}>{city}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="showroom" className="block text-sm font-semibold text-gray-700 mb-2">
                        Showroom *
                      </label>
                      <select
                        id="showroom"
                        name="showroom"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Chọn showroom</option>
                        {showrooms.map(showroom => (
                          <option key={showroom.id} value={showroom.id}>{showroom.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                        Ngày Lái Thử *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                        Giờ Mong Muốn *
                      </label>
                      <select
                        id="time"
                        name="time"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Chọn giờ</option>
                        <option value="08:00">08:00 - 09:00</option>
                        <option value="09:00">09:00 - 10:00</option>
                        <option value="10:00">10:00 - 11:00</option>
                        <option value="11:00">11:00 - 12:00</option>
                        <option value="13:00">13:00 - 14:00</option>
                        <option value="14:00">14:00 - 15:00</option>
                        <option value="15:00">15:00 - 16:00</option>
                        <option value="16:00">16:00 - 17:00</option>
                        <option value="17:00">17:00 - 18:00</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label htmlFor="notes" className="block text-sm font-semibold text-gray-700 mb-2">
                    Ghi Chú (Tùy chọn)
                  </label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Yêu cầu đặc biệt hoặc câu hỏi..."
                  ></textarea>
                </div>

                {/* Terms */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    Tôi đồng ý với{' '}
                    <a href="#" className="text-green-600 hover:underline">điều khoản sử dụng</a>
                    {' '}và{' '}
                    <a href="#" className="text-green-600 hover:underline">chính sách bảo mật</a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
                >
                  🚗 Đặt Lịch Ngay
                </button>

                <p className="text-center text-sm text-gray-500">
                  Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Quy Trình Lái Thử
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                1️⃣
              </div>
              <h3 className="font-bold text-lg mb-2">Đặt Lịch Online</h3>
              <p className="text-gray-600 text-sm">
                Điền form đặt lịch nhanh chóng chỉ 30 giây
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                2️⃣
              </div>
              <h3 className="font-bold text-lg mb-2">Xác Nhận</h3>
              <p className="text-gray-600 text-sm">
                Nhận xác nhận qua SMS/Email trong 30 phút
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                3️⃣
              </div>
              <h3 className="font-bold text-lg mb-2">Lái Thử</h3>
              <p className="text-gray-600 text-sm">
                Trải nghiệm xe cùng tư vấn viên chuyên nghiệp
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                4️⃣
              </div>
              <h3 className="font-bold text-lg mb-2">Tư Vấn</h3>
              <p className="text-gray-600 text-sm">
                Nhận tư vấn chi tiết về xe và chính sách
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Điều Kiện Lái Thử
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-bold mb-1">Giấy Phép Lái Xe</h3>
                    <p className="text-gray-600 text-sm">Có bằng lái xe hạng B1 trở lên còn hiệu lực</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-bold mb-1">Độ Tuổi</h3>
                    <p className="text-gray-600 text-sm">Từ 18 tuổi trở lên</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-bold mb-1">CMND/CCCD</h3>
                    <p className="text-gray-600 text-sm">Mang theo giấy tờ tùy thân hợp lệ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <div>
                    <h3 className="font-bold mb-1">Đúng Giờ</h3>
                    <p className="text-gray-600 text-sm">Đến đúng giờ đã đặt lịch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Xe Được Lái Thử Nhiều Nhất
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
            {cars.slice(0, 6).map(car => (
              <a
                key={car.id}
                href={`/xe/${car.slug}`}
                className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-2">🚗</div>
                <h3 className="font-semibold text-sm">{car.brand}</h3>
                <p className="text-xs text-gray-600">{car.bodyType}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="font-bold text-lg cursor-pointer">
                Lái thử có mất phí không?
              </summary>
              <p className="mt-4 text-gray-600">
                Hoàn toàn miễn phí! AutoSale không thu bất kỳ chi phí nào cho việc lái thử.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="font-bold text-lg cursor-pointer">
                Lái thử mất bao lâu?
              </summary>
              <p className="mt-4 text-gray-600">
                Thông thường từ 30-45 phút, bao gồm giới thiệu xe và trải nghiệm lái.
              </p>
            </details>
            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="font-bold text-lg cursor-pointer">
                Tôi có thể hủy lịch không?
              </summary>
              <p className="mt-4 text-gray-600">
                Có, vui lòng hủy trước ít nhất 2 giờ qua hotline 1900-xxxx.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

