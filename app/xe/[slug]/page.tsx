import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { cars, getCarBySlug } from '@/lib/data/cars';
import { formatPrice, formatMileage } from '@/lib/utils/format';
import ImageGallery from '@/components/ImageGallery';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return cars.map((car) => ({
    slug: car.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    return {
      title: 'Không tìm thấy xe',
    };
  }

  const title = `${car.name} ${car.year} - ${formatPrice(car.price)}`;
  const description = `${car.description} ⚡ ${car.transmission} ⛽ ${car.fuelType} 📍 ${car.location}. Liên hệ ngay để được tư vấn và xem xe!`;

  return {
    title,
    description,
    keywords: [
      car.name,
      car.brand,
      `xe ${car.brand}`,
      `${car.brand} ${car.year}`,
      car.bodyType,
      car.condition === 'new' ? 'xe mới' : 'xe cũ',
      car.transmission,
      car.fuelType,
      car.location,
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://your-domain.com/xe/${car.slug}`,
      images: [
        {
          url: car.images[0],
          width: 1200,
          height: 630,
          alt: car.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [car.images[0]],
    },
    alternates: {
      canonical: `https://your-domain.com/xe/${car.slug}`,
    },
  };
}

export default async function CarDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const car = getCarBySlug(slug);

  if (!car) {
    notFound();
  }

  const relatedCars = cars
    .filter(c => c.brand === car.brand && c.id !== car.id)
    .slice(0, 4);

  const discount = car.originalPrice 
    ? Math.round(((car.originalPrice - car.price) / car.originalPrice) * 100)
    : 0;

  // JSON-LD structured data for SEO
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: car.name,
    description: car.description,
    brand: {
      '@type': 'Brand',
      name: car.brand,
    },
    image: car.images,
    offers: {
      '@type': 'Offer',
      url: `https://your-domain.com/xe/${car.slug}`,
      priceCurrency: 'VND',
      price: car.price,
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      itemCondition: car.condition === 'new' ? 'https://schema.org/NewCondition' : 'https://schema.org/UsedCondition',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'AutoDealer',
        name: 'AutoSale',
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '127',
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: 'https://your-domain.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: car.brand,
        item: `https://your-domain.com/brand/${car.brand.toLowerCase()}`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: car.name,
        item: `https://your-domain.com/xe/${car.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Breadcrumb */}
      <nav className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                Trang chủ
              </Link>
            </li>
            <li className="text-gray-400">/</li>
            <li>
              <span className="text-blue-600">{car.brand}</span>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-600">{car.name}</li>
          </ol>
        </div>
      </nav>

      <article className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Images */}
            <div className="lg:col-span-2">
              {/* Interactive Image Gallery */}
              <ImageGallery 
                images={car.images}
                carName={car.name}
                condition={car.condition}
                discount={discount}
              />

              {/* 360 Degree View */}
              <div className="mt-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border-2 border-blue-200">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                    <span className="text-3xl">🔄</span>
                    Xem Xe 360 Độ
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Khám phá mọi góc nhìn của {car.name} với công nghệ xem 360 độ
                  </p>
                  
                  {/* 360 Viewer Placeholder */}
                  <div className="relative aspect-[16/9] bg-white rounded-xl overflow-hidden shadow-lg border-4 border-white">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4 animate-spin">🔄</div>
                        <h4 className="text-xl font-bold text-gray-700 mb-2">
                          Viewer 360° Interactive
                        </h4>
                        <p className="text-gray-600 mb-4">
                          Drag để xoay xe • Pinch để zoom
                        </p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                          Bắt Đầu Xem 360°
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600 mt-4">
                    💡 Tip: Sử dụng chuột hoặc ngón tay để xoay xe theo mọi góc độ
                  </p>
                </div>
              </div>

              {/* Virtual Tour CTA */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">🎥</span>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Video Giới Thiệu</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        Xem video review chi tiết về {car.name}
                      </p>
                      <button className="text-purple-600 font-semibold hover:underline">
                        Xem ngay →
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">📸</span>
                    <div>
                      <h4 className="font-bold text-lg mb-2">Thư Viện Ảnh</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        {car.images.length}+ ảnh chi tiết nội ngoại thất
                      </p>
                      <button className="text-green-600 font-semibold hover:underline">
                        Xem tất cả →
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Mô Tả Chi Tiết</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {car.description}
                </p>

                <h3 className="text-xl font-bold mb-4">Tính Năng Nổi Bật</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Thông Số Kỹ Thuật</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Hãng xe</div>
                    <div className="font-semibold">{car.brand}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Năm sản xuất</div>
                    <div className="font-semibold">{car.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Số km đã đi</div>
                    <div className="font-semibold">{formatMileage(car.mileage)}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Hộp số</div>
                    <div className="font-semibold">{car.transmission}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Nhiên liệu</div>
                    <div className="font-semibold">{car.fuelType}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Dung tích</div>
                    <div className="font-semibold">{car.engineCapacity}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Kiểu dáng</div>
                    <div className="font-semibold">{car.bodyType}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Màu sắc</div>
                    <div className="font-semibold">{car.color}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Vị trí</div>
                    <div className="font-semibold">{car.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Price & Contact */}
            <div className="lg:col-span-1">
              <div className="sticky top-20 space-y-6">
                {/* Price Card */}
                <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-blue-100">
                  <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    {car.name}
                  </h1>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-3xl font-bold text-red-600">
                        {formatPrice(car.price)}
                      </span>
                    </div>
                    {car.originalPrice && (
                      <div className="flex items-center gap-2">
                        <span className="text-lg text-gray-400 line-through">
                          {formatPrice(car.originalPrice)}
                        </span>
                        <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded">
                          Tiết kiệm {formatPrice(car.originalPrice - car.price)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-gray-600">Tình trạng:</span>
                      <span className="font-semibold">
                        {car.condition === 'new' ? 'Mới 100%' : 'Đã qua sử dụng'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-gray-600">Năm sản xuất:</span>
                      <span className="font-semibold">{car.year}</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-gray-600">Số km:</span>
                      <span className="font-semibold">{formatMileage(car.mileage)}</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-gray-600">Vị trí:</span>
                      <span className="font-semibold">📍 {car.location}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <a
                      href="tel:1900xxxx"
                      className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                      📞 Gọi ngay: 1900-xxxx
                    </a>
                    <a
                      href="mailto:contact@autosale.vn"
                      className="block w-full bg-white text-blue-600 text-center py-4 rounded-lg font-bold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      ✉️ Email tư vấn
                    </a>
                    <button className="block w-full bg-green-500 text-white text-center py-4 rounded-lg font-bold hover:bg-green-600 transition-colors">
                      💬 Chat Zalo
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold mb-4">Cam Kết Của Chúng Tôi</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Nguồn gốc xuất xứ rõ ràng</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Bảo hành chính hãng</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Hỗ trợ trả góp 0% lãi suất</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Đổi trả trong 7 ngày</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>Giao xe tận nhà miễn phí</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Cars */}
          {relatedCars.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-bold mb-8">
                Xe {car.brand} Khác
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedCars.map(relatedCar => (
                  <Link key={relatedCar.id} href={`/xe/${relatedCar.slug}`}>
                    <div className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all">
                      <div className="relative aspect-[4/3] rounded-t-lg overflow-hidden bg-gray-100">
                        <Image
                          src={relatedCar.images[0]}
                          alt={relatedCar.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                          {relatedCar.name}
                        </h3>
                        <p className="text-red-600 font-bold text-lg">
                          {formatPrice(relatedCar.price)}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
}

