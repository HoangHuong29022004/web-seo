'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import CarCard from '@/components/CarCard';
import { cars, getAllBrands } from '@/lib/data/cars';

const ITEMS_PER_PAGE = 6;

export default function CarListingPage() {
  const [filters, setFilters] = useState({
    brand: '',
    priceRange: '',
    color: '',
    bodyType: '',
    interior: '',
    condition: '',
    search: ''
  });
  
  const [currentPage, setCurrentPage] = useState(1);

  // Get unique values for filters
  const brands = getAllBrands();
  const colors = Array.from(new Set(cars.map(car => car.color)));
  const bodyTypes = Array.from(new Set(cars.map(car => car.bodyType)));
  const interiors = Array.from(new Set(cars.filter(car => car.interior).map(car => car.interior!)));

  // Filter cars
  const filteredCars = cars.filter(car => {
    if (filters.brand && car.brand !== filters.brand) return false;
    if (filters.color && car.color !== filters.color) return false;
    if (filters.bodyType && car.bodyType !== filters.bodyType) return false;
    if (filters.interior && car.interior !== filters.interior) return false;
    if (filters.condition && car.condition !== filters.condition) return false;
    
    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        if (car.price < min || car.price > max) return false;
      } else {
        if (car.price < min) return false;
      }
    }
    
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return car.name.toLowerCase().includes(searchLower) ||
             car.brand.toLowerCase().includes(searchLower) ||
             car.description.toLowerCase().includes(searchLower);
    }
    
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCars = filteredCars.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const resetFilters = () => {
    setFilters({
      brand: '',
      priceRange: '',
      color: '',
      bodyType: '',
      interior: '',
      condition: '',
      search: ''
    });
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Danh Sách Xe Ô Tô
          </h1>
          <p className="text-xl text-blue-100">
            Tìm kiếm và lọc xe theo nhu cầu của bạn • {filteredCars.length} xe
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-20">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Bộ Lọc</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm text-blue-600 hover:underline"
                >
                  Xóa bộ lọc
                </button>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tìm kiếm
                  </label>
                  <input
                    type="text"
                    placeholder="Tên xe, hãng..."
                    value={filters.search}
                    onChange={(e) => setFilters({...filters, search: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Brand */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hãng xe
                  </label>
                  <select
                    value={filters.brand}
                    onChange={(e) => setFilters({...filters, brand: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Tất cả</option>
                    {brands.map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>

                {/* Price Range */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Giá
                  </label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Tất cả</option>
                    <option value="0-500000000">Dưới 500 triệu</option>
                    <option value="500000000-700000000">500 - 700 triệu</option>
                    <option value="700000000-1000000000">700 triệu - 1 tỷ</option>
                    <option value="1000000000-1500000000">1 - 1.5 tỷ</option>
                    <option value="1500000000">Trên 1.5 tỷ</option>
                  </select>
                </div>

                {/* Color */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Màu sắc
                  </label>
                  <select
                    value={filters.color}
                    onChange={(e) => setFilters({...filters, color: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Tất cả</option>
                    {colors.map(color => (
                      <option key={color} value={color}>{color}</option>
                    ))}
                  </select>
                </div>

                {/* Body Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Kiểu dáng
                  </label>
                  <select
                    value={filters.bodyType}
                    onChange={(e) => setFilters({...filters, bodyType: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Tất cả</option>
                    {bodyTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                {/* Interior */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nội thất
                  </label>
                  <select
                    value={filters.interior}
                    onChange={(e) => setFilters({...filters, interior: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Tất cả</option>
                    {interiors.map(interior => (
                      <option key={interior} value={interior}>{interior}</option>
                    ))}
                  </select>
                </div>

                {/* Condition */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tình trạng
                  </label>
                  <select
                    value={filters.condition}
                    onChange={(e) => setFilters({...filters, condition: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Tất cả</option>
                    <option value="new">Xe mới</option>
                    <option value="used">Xe đã qua sử dụng</option>
                  </select>
                </div>
              </div>
            </div>
          </aside>

          {/* Car Grid */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Hiển thị {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredCars.length)} trong {filteredCars.length} xe
              </p>
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>Mới nhất</option>
                <option>Giá thấp đến cao</option>
                <option>Giá cao đến thấp</option>
              </select>
            </div>

            {/* Car Grid */}
            {paginatedCars.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                  {paginatedCars.map(car => (
                    <CarCard key={car.id} car={car} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      ← Trước
                    </button>
                    
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 border rounded-lg ${
                          currentPage === page
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Sau →
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">Không tìm thấy xe</h3>
                <p className="text-gray-600 mb-4">Thử thay đổi bộ lọc để xem thêm kết quả</p>
                <button
                  onClick={resetFilters}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

