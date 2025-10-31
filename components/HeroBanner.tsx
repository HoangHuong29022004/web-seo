'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    title: 'Mua Xe Ô Tô Chất Lượng',
    subtitle: 'Giá Tốt Nhất Thị Trường',
    description: 'Hàng trăm mẫu xe mới và đã qua sử dụng • Trả góp 0% lãi suất • Hỗ trợ đăng ký 24h',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&auto=format&fit=crop',
    cta: 'Xem Danh Sách Xe',
    ctaLink: '/danh-sach-xe',
    bgColor: 'from-blue-600 to-blue-800'
  },
  {
    id: 2,
    title: 'Trả Góp Lãi Suất 0%',
    subtitle: 'Duyệt Hồ Sơ Nhanh 24h',
    description: 'Trả trước chỉ 20% • Vay tối đa 80% giá trị xe • Thủ tục đơn giản',
    image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200&auto=format&fit=crop',
    cta: 'Tính Trả Góp Ngay',
    ctaLink: '/tra-gop',
    bgColor: 'from-green-600 to-green-800'
  },
  {
    id: 3,
    title: 'Đặt Lái Thử Miễn Phí',
    subtitle: 'Trải Nghiệm Trước Khi Mua',
    description: 'Đội ngũ tư vấn chuyên nghiệp • Lái thử tận nhà • An toàn - Tiện lợi',
    image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&auto=format&fit=crop',
    cta: 'Đặt Lịch Ngay',
    ctaLink: '/dat-lai-thu',
    bgColor: 'from-red-600 to-red-800'
  }
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 translate-x-0'
              : index < currentSlide
              ? 'opacity-0 -translate-x-full'
              : 'opacity-0 translate-x-full'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={index === 0}
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor} opacity-80`} />
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <div className="mb-4 inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                🚗 AutoSale
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
                {slide.title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 animate-fade-in-up animation-delay-200">
                {slide.subtitle}
              </h2>
              <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in-up animation-delay-400">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600">
                <Link
                  href={slide.ctaLink}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  {slide.cta} →
                </Link>
                <Link
                  href="/lien-he"
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white"
                >
                  Liên Hệ Tư Vấn
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-colors z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-white w-12 h-3'
                : 'bg-white/50 w-3 h-3 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm text-white py-4 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold">500+</div>
              <div className="text-sm md:text-base text-white/80">Xe đang bán</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">10,000+</div>
              <div className="text-sm md:text-base text-white/80">Khách hàng</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold">15+</div>
              <div className="text-sm md:text-base text-white/80">Showroom</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

