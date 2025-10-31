export interface Car {
  id: string;
  slug: string;
  name: string;
  brand: string;
  year: number;
  price: number;
  originalPrice?: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  description: string;
  features: string[];
  images: string[];
  condition: 'new' | 'used';
  location: string;
  color: string;
  engineCapacity: string;
  bodyType: string;
  interior?: string; // Nội thất: da, vải, da lộn
  seats?: number; // Số chỗ ngồi
}

export const cars: Car[] = [
  {
    id: '1',
    slug: 'honda-city-2023',
    name: 'Honda City RS 2023',
    brand: 'Honda',
    year: 2023,
    price: 569000000,
    originalPrice: 599000000,
    mileage: 15000,
    fuelType: 'Xăng',
    transmission: 'Tự động CVT',
    description: 'Honda City RS 2023 - Sedan hạng B cao cấp với thiết kế thể thao, động cơ 1.5L VTEC mạnh mẽ, tiết kiệm nhiên liệu. Xe đã qua sử dụng nhưng còn rất mới, bảo dưỡng định kỳ tại hãng.',
    features: [
      'Động cơ VTEC 1.5L',
      'Hệ thống Honda SENSING',
      'Màn hình cảm ứng 8 inch',
      'Phanh tay điện tử',
      'Cruise control',
      'Camera lùi',
      'Cảm biến va chạm',
      'Khởi động bằng nút bấm'
    ],
    images: [
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&auto=format&fit=crop'
    ],
    condition: 'used',
    location: 'TP. Hồ Chí Minh',
    color: 'Đỏ',
    engineCapacity: '1.5L',
    bodyType: 'Sedan',
    interior: 'Da',
    seats: 5
  },
  {
    id: '2',
    slug: 'toyota-vios-2024',
    name: 'Toyota Vios G 2024',
    brand: 'Toyota',
    year: 2024,
    price: 498000000,
    mileage: 0,
    fuelType: 'Xăng',
    transmission: 'Tự động CVT',
    description: 'Toyota Vios G 2024 - Xe mới 100%, sedan hạng B bán chạy nhất Việt Nam. Thiết kế hiện đại, tiết kiệm nhiên liệu, bảo dưỡng rẻ. Cam kết chính hãng, bảo hành toàn diện.',
    features: [
      'Động cơ 1.5L Dual VVT-i',
      'Màn hình 9 inch',
      '6 túi khí',
      'Cân bằng điện tử VSC',
      'Hỗ trợ khởi hành ngang dốc',
      'Camera 360 độ',
      'Cảnh báo điểm mù',
      'Đèn LED tự động'
    ],
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop'
    ],
    condition: 'new',
    location: 'Hà Nội',
    color: 'Trắng Ngọc Trai',
    engineCapacity: '1.5L',
    bodyType: 'Sedan',
    interior: 'Vải cao cấp',
    seats: 5
  },
  {
    id: '3',
    slug: 'mazda-cx5-2023',
    name: 'Mazda CX-5 2.0 Luxury 2023',
    brand: 'Mazda',
    year: 2023,
    price: 799000000,
    originalPrice: 839000000,
    mileage: 8500,
    fuelType: 'Xăng',
    transmission: 'Tự động 6 cấp',
    description: 'Mazda CX-5 2023 - SUV 5 chỗ sang trọng với công nghệ SkyActiv, thiết kế Kodo đẳng cấp. Xe chạy ít, còn rất mới, full options.',
    features: [
      'Động cơ SkyActiv-G 2.0L',
      'Hệ thống i-Activsense',
      'Màn hình 10.25 inch',
      'Âm thanh Bose 10 loa',
      'Cửa sổ trời',
      'Ghế da cao cấp',
      'Hệ thống lọc không khí',
      'HUD - Hiển thị kính lái'
    ],
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&auto=format&fit=crop'
    ],
    condition: 'used',
    location: 'Đà Nẵng',
    color: 'Đỏ Soul',
    engineCapacity: '2.0L',
    bodyType: 'SUV',
    interior: 'Da cao cấp',
    seats: 5
  },
  {
    id: '4',
    slug: 'hyundai-tucson-2024',
    name: 'Hyundai Tucson 2.0 Đặc Biệt 2024',
    brand: 'Hyundai',
    year: 2024,
    price: 919000000,
    mileage: 0,
    fuelType: 'Xăng',
    transmission: 'Tự động 6 cấp',
    description: 'Hyundai Tucson 2024 - SUV 5 chỗ thế hệ mới với thiết kế tương lai, công nghệ hiện đại nhất phân khúc. Xe mới 100%, nhập khẩu nguyên chiếc.',
    features: [
      'Động cơ Smartstream 2.0L',
      'Màn hình kép 10.25 inch',
      'Chìa khóa thông minh Digital Key',
      'Sạc không dây',
      'Phanh tay điện tử tự động',
      'Ghế lái chỉnh điện 10 hướng',
      'Hệ thống Hyundai SmartSense',
      'Cửa cốp điện thông minh'
    ],
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop'
    ],
    condition: 'new',
    location: 'TP. Hồ Chí Minh',
    color: 'Xanh Dương',
    engineCapacity: '2.0L',
    bodyType: 'SUV',
    interior: 'Da',
    seats: 5
  },
  {
    id: '5',
    slug: 'ford-ranger-raptor-2023',
    name: 'Ford Ranger Raptor 2023',
    brand: 'Ford',
    year: 2023,
    price: 1250000000,
    originalPrice: 1268000000,
    mileage: 12000,
    fuelType: 'Dầu',
    transmission: 'Tự động 10 cấp',
    description: 'Ford Ranger Raptor 2023 - Bán tải hiệu năng cao với động cơ twin-turbo mạnh mẽ. Xe đi cực ít, như mới, dành cho người yêu off-road.',
    features: [
      'Động cơ EcoBoost 2.0L Bi-Turbo',
      'Hệ thống treo FOX Racing',
      'Chế độ lái địa hình',
      'Màn hình SYNC 4 12 inch',
      'Camera 360 độ',
      'Phanh Brembo',
      'Ghế Recaro thể thao',
      'Âm thanh B&O'
    ],
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop'
    ],
    condition: 'used',
    location: 'Hà Nội',
    color: 'Xám',
    engineCapacity: '2.0L',
    bodyType: 'Bán tải',
    interior: 'Da lộn',
    seats: 5
  },
  {
    id: '6',
    slug: 'kia-seltos-2024',
    name: 'Kia Seltos Premium 2024',
    brand: 'Kia',
    year: 2024,
    price: 699000000,
    mileage: 0,
    fuelType: 'Xăng',
    transmission: 'Tự động vô cấp IVT',
    description: 'Kia Seltos 2024 - SUV đô thị hiện đại, trẻ trung với nhiều công nghệ tiên tiến. Xe mới 100%, giá tốt nhất thị trường.',
    features: [
      'Động cơ Smartstream 1.5L',
      'Màn hình cảm ứng 10.25 inch',
      'Bản đồ Naver Map',
      'Điều hòa tự động 2 vùng',
      'Hệ thống âm thanh Bose',
      'Cửa sổ trời toàn cảnh',
      'Cruise control thích ứng',
      'Sạc không dây'
    ],
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop'
    ],
    condition: 'new',
    location: 'Cần Thơ',
    color: 'Đen',
    engineCapacity: '1.5L',
    bodyType: 'SUV',
    interior: 'Da',
    seats: 5
  },
  {
    id: '7',
    slug: 'mitsubishi-xpander-2023',
    name: 'Mitsubishi Xpander Cross 2023',
    brand: 'Mitsubishi',
    year: 2023,
    price: 670000000,
    originalPrice: 698000000,
    mileage: 20000,
    fuelType: 'Xăng',
    transmission: 'Tự động 4 cấp',
    description: 'Mitsubishi Xpander Cross 2023 - MPV 7 chỗ đa dụng, phong cách SUV. Xe gia đình đi kỹ, bảo dưỡng định kỳ.',
    features: [
      'Động cơ MIVEC 1.5L',
      'Màn hình 9 inch',
      'Kết nối Apple CarPlay/Android Auto',
      'Hệ thống kiểm soát hành trình',
      'Camera lùi',
      '6 túi khí',
      'Cảm biến áp suất lốp',
      'Đèn LED'
    ],
    images: [
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop'
    ],
    condition: 'used',
    location: 'TP. Hồ Chí Minh',
    color: 'Trắng',
    engineCapacity: '1.5L',
    bodyType: 'MPV',
    interior: 'Vải',
    seats: 7
  },
  {
    id: '8',
    slug: 'vinfast-vf8-2024',
    name: 'VinFast VF 8 Plus 2024',
    brand: 'VinFast',
    year: 2024,
    price: 1030000000,
    mileage: 0,
    fuelType: 'Điện',
    transmission: 'Tự động 1 cấp',
    description: 'VinFast VF 8 Plus 2024 - SUV điện 5 chỗ made in Vietnam với công nghệ hiện đại. Pin cho thuê, chi phí vận hành cực thấp.',
    features: [
      'Động cơ điện 2 mô-tơ AWD',
      'Công suất 402 mã lực',
      'Phạm vi hoạt động 400km',
      'Màn hình trung tâm 15.6 inch',
      'Hệ thống ADAS cao cấp',
      'Sạc nhanh 70% trong 31 phút',
      'Ghế massage',
      'Cốp điện thông minh'
    ],
    images: [
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop'
    ],
    condition: 'new',
    location: 'Hà Nội',
    color: 'Xanh Ocean',
    engineCapacity: 'Điện',
    bodyType: 'SUV',
    interior: 'Da Nappa',
    seats: 5
  }
];

export function getCarBySlug(slug: string): Car | undefined {
  return cars.find(car => car.slug === slug);
}

export function getAllBrands(): string[] {
  return Array.from(new Set(cars.map(car => car.brand)));
}

export function getCarsByBrand(brand: string): Car[] {
  return cars.filter(car => car.brand === brand);
}


