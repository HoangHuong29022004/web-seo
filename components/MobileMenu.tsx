'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col gap-1.5 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 max-w-full bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-screen">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <Link href="/" onClick={closeMenu} className="text-2xl font-bold text-blue-600">
              🚗 AutoSale
            </Link>
            <button
              onClick={closeMenu}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <span className="text-2xl text-gray-600">✕</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto overscroll-contain">
            <div className="py-6 space-y-1 px-4">
              <Link
                href="/"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
              >
                <span className="mr-3">🏠</span>
                Trang chủ
              </Link>
              
              <Link
                href="/gioi-thieu"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
              >
                <span className="mr-3">ℹ️</span>
                Giới thiệu
              </Link>
              
              <Link
                href="/he-thong-phan-phoi"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
              >
                <span className="mr-3">📍</span>
                Hệ thống showroom
              </Link>
              
              <Link
                href="/so-sanh-xe"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
              >
                <span className="mr-3">⚖️</span>
                So sánh xe
              </Link>
              
              <Link
                href="/dat-lai-thu"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
              >
                <span className="mr-3">🚗</span>
                Đặt lái thử
              </Link>
              
              <Link
                href="/tra-gop"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
              >
                <span className="mr-3">💰</span>
                Trả góp
              </Link>
              
              <Link
                href="/lien-he"
                onClick={closeMenu}
                className="block px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium"
              >
                <span className="mr-3">📞</span>
                Liên hệ
              </Link>
            </div>

            {/* Divider */}
            <div className="my-6 border-t"></div>

            {/* Quick Actions */}
            <div className="px-4 space-y-3">
              <a
                href="tel:1900xxxx"
                className="block bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                📞 Gọi ngay: 1900-xxxx
              </a>
              <a
                href="/dat-lai-thu"
                onClick={closeMenu}
                className="block bg-green-500 text-white text-center py-3 px-4 rounded-lg font-bold hover:bg-green-600 transition-colors"
              >
                🚗 Đặt Lái Thử
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t bg-gray-50">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">📍 TP. HCM, Hà Nội, Đà Nẵng</p>
              <p>✉️ contact@autosale.vn</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

