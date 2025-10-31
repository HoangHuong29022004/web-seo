import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Liên Hệ - Tư Vấn Mua Xe Miễn Phí',
  description: 'Liên hệ AutoSale để được tư vấn miễn phí về mua xe ô tô. Hotline: 1900-xxxx. Hỗ trợ 24/7, giao xe tận nhà, trả góp 0% lãi suất.',
  keywords: ['liên hệ mua xe', 'tư vấn mua ô tô', 'hotline bán xe', 'showroom ô tô'],
  openGraph: {
    title: 'Liên Hệ AutoSale - Tư Vấn Mua Xe Miễn Phí',
    description: 'Liên hệ ngay để được tư vấn và nhận ưu đãi đặc biệt',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Đội ngũ tư vấn chuyên nghiệp sẵn sàng hỗ trợ bạn 24/7. 
            Cam kết phản hồi trong vòng 30 phút.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Thông Tin Liên Hệ</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl">📞</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Hotline</h3>
                    <p className="text-gray-600 mb-2">Gọi ngay để được tư vấn miễn phí</p>
                    <a href="tel:1900xxxx" className="text-blue-600 text-xl font-bold hover:underline">
                      1900-xxxx
                    </a>
                    <p className="text-sm text-gray-500 mt-1">24/7 - Miễn phí cuộc gọi</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl">✉️</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-gray-600 mb-2">Gửi email cho chúng tôi</p>
                    <a href="mailto:contact@autosale.vn" className="text-blue-600 font-bold hover:underline">
                      contact@autosale.vn
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Phản hồi trong 2 giờ</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl">💬</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Zalo / Messenger</h3>
                    <p className="text-gray-600 mb-2">Chat trực tiếp với tư vấn viên</p>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Chat Zalo
                      </button>
                      <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                        Messenger
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-4xl">📍</div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Địa Chỉ Văn Phòng</h3>
                    <p className="text-gray-700">
                      123 Nguyễn Huệ, Quận 1<br />
                      TP. Hồ Chí Minh, Việt Nam
                    </p>
                    <a href="/he-thong-phan-phoi" className="text-blue-600 font-semibold hover:underline inline-block mt-2">
                      Xem tất cả showroom →
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-bold text-lg mb-4">⏰ Giờ Làm Việc</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Thứ 2 - Thứ 6:</span>
                    <span className="font-semibold">8:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thứ 7 - Chủ nhật:</span>
                    <span className="font-semibold">8:00 - 18:00</span>
                  </div>
                  <p className="text-sm text-blue-600 font-semibold mt-3">
                    ⚡ Hotline 24/7 - Luôn sẵn sàng phục vụ
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold mb-6">Gửi Tin Nhắn</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Họ và Tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0901234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="car-interest" className="block text-sm font-semibold text-gray-700 mb-2">
                      Xe Quan Tâm
                    </label>
                    <select
                      id="car-interest"
                      name="car-interest"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Chọn dòng xe</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="mpv">MPV</option>
                      <option value="pickup">Bán tải</option>
                      <option value="electric">Xe điện</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Ngân Sách Dự Kiến
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Chọn mức giá</option>
                      <option value="under-500">Dưới 500 triệu</option>
                      <option value="500-700">500 - 700 triệu</option>
                      <option value="700-1000">700 triệu - 1 tỷ</option>
                      <option value="1000-1500">1 - 1.5 tỷ</option>
                      <option value="over-1500">Trên 1.5 tỷ</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nội Dung *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tôi muốn tư vấn về..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
                  >
                    Gửi Tin Nhắn
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    Bằng việc gửi form, bạn đồng ý với{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                      điều khoản sử dụng
                    </a>
                  </p>
                </form>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="text-2xl font-bold text-blue-600">30ph</div>
                  <div className="text-xs text-gray-600">Phản hồi</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="text-2xl font-bold text-blue-600">5000+</div>
                  <div className="text-xs text-gray-600">Khách hàng</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow text-center">
                  <div className="text-2xl font-bold text-blue-600">99%</div>
                  <div className="text-xs text-gray-600">Hài lòng</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tìm Showroom Gần Bạn
          </h2>
          <div className="aspect-[16/9] bg-gray-200 rounded-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-xl">Google Maps sẽ hiển thị ở đây</p>
                <p className="text-sm mt-2">Tích hợp Google Maps API khi deploy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="space-y-4">
            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="font-bold text-lg cursor-pointer">
                Làm sao để đặt lịch xem xe?
              </summary>
              <p className="mt-4 text-gray-600">
                Bạn có thể đặt lịch xem xe bằng cách gọi hotline 1900-xxxx, 
                hoặc điền form trên trang web. Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="font-bold text-lg cursor-pointer">
                Có hỗ trợ trả góp không?
              </summary>
              <p className="mt-4 text-gray-600">
                Có, chúng tôi hỗ trợ trả góp qua nhiều ngân hàng với lãi suất ưu đãi từ 0%. 
                Thời gian vay linh hoạt từ 12-84 tháng.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-xl shadow-md">
              <summary className="font-bold text-lg cursor-pointer">
                Xe có bảo hành không?
              </summary>
              <p className="mt-4 text-gray-600">
                Tất cả xe mới đều có bảo hành chính hãng. Xe đã qua sử dụng có bảo hành 
                từ AutoSale và hỗ trợ bảo dưỡng định kỳ miễn phí.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            name: 'Liên Hệ AutoSale',
            url: 'https://your-domain.com/lien-he',
            telephone: '1900-xxxx',
            email: 'contact@autosale.vn',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '123 Nguyễn Huệ',
              addressLocality: 'TP. Hồ Chí Minh',
              addressCountry: 'VN',
            },
          }),
        }}
      />
    </div>
  );
}

