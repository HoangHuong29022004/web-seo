'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  carName: string;
  condition?: string;
  discount?: number;
}

export default function ImageGallery({ images, carName, condition, discount }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevImage();
    if (e.key === 'ArrowRight') handleNextImage();
    if (e.key === 'Escape') setIsLightboxOpen(false);
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main Image */}
        <div 
          className="relative aspect-[16/10] rounded-xl overflow-hidden bg-gray-100 cursor-zoom-in group"
          onClick={() => setIsLightboxOpen(true)}
        >
          {condition === 'new' && (
            <div className="absolute top-4 left-4 z-10 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
              🆕 Xe Mới 100%
            </div>
          )}
          {discount && discount > 0 && (
            <div className="absolute top-4 right-4 z-10 bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
              Giảm {discount}%
            </div>
          )}
          <Image
            src={images[selectedImage]}
            alt={`${carName} - Hình ${selectedImage + 1}`}
            fill
            sizes="(max-width: 1024px) 100vw, 66vw"
            className="object-cover transition-transform duration-500"
            priority={selectedImage === 0}
          />
          
          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              >
                ←
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
              >
                →
              </button>
            </>
          )}

          {/* Counter & Zoom Icon */}
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <div className="bg-black/70 text-white px-3 py-2 rounded-lg text-sm font-semibold">
              {selectedImage + 1} / {images.length}
            </div>
            <div className="bg-black/70 text-white p-2 rounded-lg">
              🔍
            </div>
          </div>
        </div>

        {/* Thumbnail Slider */}
        {images.length > 1 && (
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 pb-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden transition-all ${
                      selectedImage === index
                        ? 'ring-4 ring-blue-500'
                        : 'ring-2 ring-gray-200 hover:ring-blue-300 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${carName} - Thumbnail ${index + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicators */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        )}

        {/* Tips */}
        <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
          <span>👆 Click vào ảnh để phóng to</span>
          <span>•</span>
          <span>👈 Lướt thumbnails để xem thêm</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsLightboxOpen(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-colors z-10"
          >
            ✕
          </button>

          {/* Main Image */}
          <div 
            className="relative max-w-7xl w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedImage]}
              alt={`${carName} - Hình ${selectedImage + 1}`}
              width={1920}
              height={1080}
              className="max-h-[90vh] w-auto object-contain"
              quality={100}
            />

            {/* Navigation */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 bg-white/20 hover:bg-white/30 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-colors"
                >
                  ←
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 bg-white/20 hover:bg-white/30 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl transition-colors"
                >
                  →
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-lg font-semibold">
              {selectedImage + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-20 left-0 right-0">
            <div className="max-w-4xl mx-auto px-4">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex gap-2 justify-center">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(index);
                      }}
                      className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all ${
                        selectedImage === index
                          ? 'ring-4 ring-white'
                          : 'ring-2 ring-white/30 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute top-4 left-4 text-white text-sm bg-black/50 px-4 py-2 rounded-lg">
            <div className="flex items-center gap-4">
              <span>← → Chuyển ảnh</span>
              <span>•</span>
              <span>ESC Đóng</span>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for hiding scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}

