import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Giới Thiệu - Về AutoSale Việt Nam',
  description: 'AutoSale - Hệ thống mua bán xe ô tô uy tín hàng đầu Việt Nam với hơn 10 năm kinh nghiệm. Cam kết chất lượng, giá tốt, bảo hành chính hãng.',
  keywords: ['về chúng tôi', 'giới thiệu AutoSale', 'showroom ô tô uy tín', 'lịch sử công ty'],
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Về AutoSale
            </h1>
            <p className="text-2xl text-blue-100 mb-8">
              Hơn 10 năm đồng hành cùng người Việt trên mọi hành trình
            </p>
            <div className="flex gap-6 text-center">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Năm Kinh Nghiệm</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm">Showroom</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-4 rounded-lg">
                <div className="text-3xl font-bold">100K+</div>
                <div className="text-sm">Khách Hàng</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Câu Chuyện Của Chúng Tôi
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>AutoSale</strong> được thành lập vào năm 2014 với sứ mệnh mang đến cho người Việt 
                những trải nghiệm mua xe ô tô tốt nhất. Từ một showroom nhỏ tại TP. Hồ Chí Minh, 
                chúng tôi đã phát triển thành hệ thống mua bán xe ô tô hàng đầu Việt Nam với hơn 
                50 showroom trên toàn quốc.
              </p>
              <p>
                Với phương châm <strong>"Uy tín - Chất lượng - Tận tâm"</strong>, AutoSale cam kết 
                cung cấp những chiếc xe chất lượng cao với giá cả hợp lý nhất. Mỗi chiếc xe trước 
                khi đến tay khách hàng đều được kiểm tra kỹ lưỡng qua 150 điểm bởi đội ngũ kỹ thuật 
                chuyên nghiệp.
              </p>
              <p>
                Chúng tôi tự hào là đối tác chiến lược của các hãng xe lớn như Honda, Toyota, 
                Mazda, Hyundai, Ford, và nhiều thương hiệu uy tín khác. Điều này giúp khách hàng 
                yên tâm về nguồn gốc xuất xứ và được hưởng chế độ bảo hành chính hãng tốt nhất.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Sứ Mệnh</h3>
              <p className="text-gray-700">
                Làm cho việc mua xe trở nên dễ dàng, minh bạch và đáng tin cậy cho mọi người Việt.
              </p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="text-5xl mb-4">👁️</div>
              <h3 className="text-2xl font-bold mb-4">Tầm Nhìn</h3>
              <p className="text-gray-700">
                Trở thành hệ thống mua bán xe ô tô số 1 Đông Nam Á vào năm 2030.
              </p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="text-5xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4">Giá Trị</h3>
              <p className="text-gray-700">
                Uy tín, Chất lượng, Tận tâm, Đổi mới, và luôn đặt khách hàng lên hàng đầu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Tại Sao Chọn AutoSale?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-bold mb-3">Kiểm Tra 150 Điểm</h3>
              <p className="text-gray-600">
                Mọi xe đều được kiểm tra kỹ lưỡng qua 150 điểm kiểm định chất lượng nghiêm ngặt.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-3">Giá Tốt Nhất</h3>
              <p className="text-gray-600">
                Cam kết giá cạnh tranh nhất thị trường. Nếu tìm thấy giá tốt hơn, chúng tôi sẽ giảm thêm 5%.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-3">Bảo Hành Toàn Diện</h3>
              <p className="text-gray-600">
                Bảo hành chính hãng kết hợp bảo hành mở rộng từ AutoSale. Yên tâm sử dụng lâu dài.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-3">Trả Góp 0%</h3>
              <p className="text-gray-600">
                Hỗ trợ trả góp lãi suất 0% qua nhiều ngân hàng. Duyệt nhanh chỉ trong 2 giờ.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold mb-3">Giao Xe Tận Nhà</h3>
              <p className="text-gray-600">
                Miễn phí giao xe tận nhà toàn quốc. Hỗ trợ đăng ký, đăng kiểm, bảo hiểm.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold mb-3">Đổi Trả 7 Ngày</h3>
              <p className="text-gray-600">
                Không hài lòng? Đổi trả trong 7 ngày đầu tiên, không cần lý do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Đội Ngũ Lãnh Đạo
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Những con người đam mê và tận tâm đứng sau thành công của AutoSale
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👨‍💼
                </div>
              </div>
              <h3 className="font-bold text-lg">Nguyễn Văn An</h3>
              <p className="text-blue-600">CEO & Founder</p>
            </div>

            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👨‍💼
                </div>
              </div>
              <h3 className="font-bold text-lg">Trần Thị Bình</h3>
              <p className="text-blue-600">COO</p>
            </div>

            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👨‍💼
                </div>
              </div>
              <h3 className="font-bold text-lg">Lê Văn Cường</h3>
              <p className="text-blue-600">CTO</p>
            </div>

            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  👩‍💼
                </div>
              </div>
              <h3 className="font-bold text-lg">Phạm Thị Dung</h3>
              <p className="text-blue-600">Marketing Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            Thành Tựu & Giải Thưởng
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl mb-3">🏆</div>
              <div className="text-2xl font-bold mb-2">Top 1</div>
              <p className="text-blue-100">Showroom Uy Tín 2023</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">⭐</div>
              <div className="text-2xl font-bold mb-2">4.9/5</div>
              <p className="text-blue-100">Đánh Giá Khách Hàng</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🎖️</div>
              <div className="text-2xl font-bold mb-2">ISO 9001</div>
              <p className="text-blue-100">Chứng Nhận Chất Lượng</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">🌟</div>
              <div className="text-2xl font-bold mb-2">100K+</div>
              <p className="text-blue-100">Xe Đã Bán</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sẵn Sàng Tìm Xe Mơ Ước?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Hãy để AutoSale đồng hành cùng bạn trên hành trình tìm kiếm chiếc xe hoàn hảo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              Xem Xe Ngay
            </a>
            <a
              href="/lien-he"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Liên Hệ Tư Vấn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

