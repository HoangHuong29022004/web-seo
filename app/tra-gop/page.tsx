import { Metadata } from 'next';
import { formatPrice } from '@/lib/utils/format';

export const metadata: Metadata = {
  title: 'Trả Góp Xe Ô Tô - Lãi Suất 0%, Duyệt Nhanh 2h',
  description: 'Hỗ trợ trả góp mua xe ô tô lãi suất 0%, thời gian vay linh hoạt 12-84 tháng. Duyệt nhanh chỉ 2 giờ, thủ tục đơn giản, hỗ trợ tận tình.',
  keywords: ['trả góp xe ô tô', 'vay mua xe', 'lãi suất 0%', 'mua xe trả góp', 'ngân hàng hỗ trợ vay xe'],
};

export default function InstallmentPage() {
  const banks = [
    { name: 'VPBank', rate: '0%', term: '12 tháng', logo: '🏦' },
    { name: 'TPBank', rate: '0%', term: '18 tháng', logo: '🏦' },
    { name: 'VIB', rate: '0.66%', term: '24 tháng', logo: '🏦' },
    { name: 'Shinhan Bank', rate: '0.7%', term: '36 tháng', logo: '🏦' },
    { name: 'BIDV', rate: '0.75%', term: '48 tháng', logo: '🏦' },
    { name: 'Vietcombank', rate: '0.8%', term: '60 tháng', logo: '🏦' },
  ];

  // Sample calculation
  const carPrice = 700000000;
  const downPayment = carPrice * 0.2; // 20%
  const loanAmount = carPrice - downPayment;
  const interestRate = 0.007; // 0.7% per month
  const months = 48;
  const monthlyPayment = Math.round((loanAmount * interestRate * Math.pow(1 + interestRate, months)) / (Math.pow(1 + interestRate, months) - 1));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Trả Góp Xe Ô Tô
            </h1>
            <p className="text-xl text-purple-100 mb-8">
              Sở hữu xe mơ ước với lãi suất ưu đãi từ 0%. 
              Thủ tục đơn giản, duyệt nhanh chỉ 2 giờ!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg">
                <div className="text-3xl font-bold">0%</div>
                <div className="text-sm">Lãi Suất</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg">
                <div className="text-3xl font-bold">2h</div>
                <div className="text-sm">Duyệt Nhanh</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-8 py-4 rounded-lg">
                <div className="text-3xl font-bold">90%</div>
                <div className="text-sm">Tỷ Lệ Duyệt</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Calculator */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Tính Trả Góp
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6">Nhập Thông Tin</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Giá Xe
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        defaultValue="700000000"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                        placeholder="700000000"
                      />
                      <span className="absolute right-4 top-3 text-gray-500">VNĐ</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Trả Trước (%)
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="80"
                      defaultValue="20"
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>0%</span>
                      <span className="font-bold text-purple-600">20%</span>
                      <span>80%</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Thời Gian Vay
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                      <option value="12">12 tháng</option>
                      <option value="24">24 tháng</option>
                      <option value="36">36 tháng</option>
                      <option value="48" selected>48 tháng</option>
                      <option value="60">60 tháng</option>
                      <option value="72">72 tháng</option>
                      <option value="84">84 tháng</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Lãi Suất/Tháng
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                      <option value="0">0% (12 tháng đầu)</option>
                      <option value="0.66">0.66%/tháng</option>
                      <option value="0.7" selected>0.7%/tháng</option>
                      <option value="0.75">0.75%/tháng</option>
                      <option value="0.8">0.8%/tháng</option>
                    </select>
                  </div>

                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
                    Tính Lại
                    </button>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-6">Kết Quả Tính Toán</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <span>Giá xe:</span>
                      <span className="font-bold">{formatPrice(carPrice)}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <span>Trả trước 20%:</span>
                      <span className="font-bold">{formatPrice(downPayment)}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <span>Số tiền vay:</span>
                      <span className="font-bold">{formatPrice(loanAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-white/20 pb-3">
                      <span>Thời gian:</span>
                      <span className="font-bold">{months} tháng</span>
                    </div>
                    <div className="bg-white/20 rounded-lg p-4 mt-6">
                      <div className="text-sm mb-2">Trả Hàng Tháng</div>
                      <div className="text-3xl font-bold">{formatPrice(monthlyPayment)}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <h4 className="font-bold text-yellow-800 mb-2">Lưu Ý</h4>
                      <p className="text-sm text-yellow-700">
                        Kết quả tính toán chỉ mang tính chất tham khảo. 
                        Chi phí thực tế có thể thay đổi tùy theo chính sách ngân hàng.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Banks */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ngân Hàng Đối Tác
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {banks.map((bank, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{bank.logo}</div>
                <h3 className="font-bold mb-1">{bank.name}</h3>
                <p className="text-purple-600 font-bold text-lg">{bank.rate}</p>
                <p className="text-xs text-gray-600">{bank.term}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ưu Điểm Vay Tại AutoSale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3">Duyệt Nhanh 2h</h3>
              <p className="text-gray-600">
                Hồ sơ được xử lý nhanh chóng, kết quả trong vòng 2 giờ làm việc
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-3">Thủ Tục Đơn Giản</h3>
              <p className="text-gray-600">
                Chỉ cần CMND + Hộ khẩu + Giấy tờ thu nhập. Chúng tôi lo phần còn lại
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Lãi Suất Thấp</h3>
              <p className="text-gray-600">
                Lãi suất cạnh tranh từ 0%, linh hoạt theo thời gian vay
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Tỷ Lệ Duyệt Cao</h3>
              <p className="text-gray-600">
                90% hồ sơ được chấp thuận nhờ quan hệ tốt với ngân hàng
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold mb-3">Thời Gian Linh Hoạt</h3>
              <p className="text-gray-600">
                Vay từ 12-84 tháng, tùy chọn theo khả năng tài chính
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Tư Vấn Miễn Phí</h3>
              <p className="text-gray-600">
                Đội ngũ chuyên viên hỗ trợ tư vấn và làm hồ sơ không mất phí
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Hồ Sơ Cần Chuẩn Bị
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">📋 Cá Nhân</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>CMND/CCCD (bản gốc + photo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Hộ khẩu thường trú (photo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Giấy tờ chứng minh thu nhập (3-6 tháng gần nhất)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Sao kê ngân hàng 6 tháng (nếu có)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-6">🏢 Doanh Nghiệp</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Giấy phép ĐKKD (photo công chứng)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Quyết định bổ nhiệm/Hợp đồng lao động</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>Báo cáo tài chính 2 năm gần nhất</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600">✓</span>
                    <span>CMND người đại diện pháp luật</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-blue-50 rounded-xl p-6">
              <p className="text-center text-gray-700">
                <strong>Lưu ý:</strong> Hồ sơ có thể khác nhau tùy theo chính sách từng ngân hàng. 
                Vui lòng liên hệ với chúng tôi để được tư vấn chi tiết.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold mb-2 text-center">
                Đăng Ký Vay Ngay
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Điền form để nhận tư vấn chi tiết từ chuyên viên
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Họ và Tên *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Số Điện Thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                      placeholder="0901234567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Giá Xe Dự Kiến
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                      <option value="">Chọn mức giá</option>
                      <option value="500">Dưới 500 triệu</option>
                      <option value="500-700">500 - 700 triệu</option>
                      <option value="700-1000">700 triệu - 1 tỷ</option>
                      <option value="1000-1500">1 - 1.5 tỷ</option>
                      <option value="1500+">Trên 1.5 tỷ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Thời Gian Vay
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500">
                      <option value="12">12 tháng</option>
                      <option value="24">24 tháng</option>
                      <option value="36">36 tháng</option>
                      <option value="48">48 tháng</option>
                      <option value="60">60 tháng</option>
                      <option value="72">72 tháng</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ghi Chú
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                    placeholder="Thông tin bổ sung..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
                >
                  Gửi Đăng Ký
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Câu Hỏi Thường Gặp
          </h2>
          <div className="space-y-4">
            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-bold text-lg cursor-pointer">
                Lãi suất 0% áp dụng như thế nào?
              </summary>
              <p className="mt-4 text-gray-600">
                Lãi suất 0% thường áp dụng cho 12-18 tháng đầu tùy theo chương trình khuyến mãi. 
                Sau đó sẽ áp dụng lãi suất ưu đãi của ngân hàng.
              </p>
            </details>
            
            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-bold text-lg cursor-pointer">
                Tôi cần trả trước bao nhiêu %?
              </summary>
              <p className="mt-4 text-gray-600">
                Tùy theo ngân hàng, thường yêu cầu từ 20-30% giá trị xe. Một số trường hợp đặc biệt có thể vay đến 90%.
              </p>
            </details>
            
            <details className="bg-gray-50 p-6 rounded-xl">
              <summary className="font-bold text-lg cursor-pointer">
                Thời gian xét duyệt mất bao lâu?
              </summary>
              <p className="mt-4 text-gray-600">
                Thông thường từ 2-4 giờ làm việc. Trong một số trường hợp phức tạp có thể mất 1-2 ngày.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}

