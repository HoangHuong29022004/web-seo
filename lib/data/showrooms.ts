export interface Showroom {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  email: string;
  hours: string;
  image: string;
  map: string;
  manager: string;
}

export const showrooms: Showroom[] = [
  {
    id: '1',
    name: 'AutoSale Quận 1',
    address: '123 Nguyễn Huệ, Phường Bến Nghé, Quận 1',
    city: 'TP. Hồ Chí Minh',
    phone: '028 1234 5678',
    email: 'q1@autosale.vn',
    hours: 'Thứ 2 - Chủ nhật: 8:00 - 20:00',
    image: 'https://images.unsplash.com/photo-1562911791-c7a97b729ec5?w=800&auto=format&fit=crop',
    map: 'https://maps.google.com',
    manager: 'Nguyễn Văn A'
  },
  {
    id: '2',
    name: 'AutoSale Bình Thạnh',
    address: '456 Điện Biên Phủ, Phường 25, Quận Bình Thạnh',
    city: 'TP. Hồ Chí Minh',
    phone: '028 9876 5432',
    email: 'binhtranh@autosale.vn',
    hours: 'Thứ 2 - Chủ nhật: 8:00 - 20:00',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&auto=format&fit=crop',
    map: 'https://maps.google.com',
    manager: 'Trần Thị B'
  },
  {
    id: '3',
    name: 'AutoSale Hà Nội',
    address: '789 Láng Hạ, Phường Thành Công, Quận Ba Đình',
    city: 'Hà Nội',
    phone: '024 1234 5678',
    email: 'hanoi@autosale.vn',
    hours: 'Thứ 2 - Chủ nhật: 8:00 - 20:00',
    image: 'https://images.unsplash.com/photo-1581093458791-9d42e3c9a8de?w=800&auto=format&fit=crop',
    map: 'https://maps.google.com',
    manager: 'Lê Văn C'
  },
  {
    id: '4',
    name: 'AutoSale Đà Nẵng',
    address: '321 Hùng Vương, Phường Thạc Gián, Quận Thanh Khê',
    city: 'Đà Nẵng',
    phone: '0236 123 4567',
    email: 'danang@autosale.vn',
    hours: 'Thứ 2 - Chủ nhật: 8:00 - 20:00',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=800&auto=format&fit=crop',
    map: 'https://maps.google.com',
    manager: 'Phạm Thị D'
  },
  {
    id: '5',
    name: 'AutoSale Cần Thơ',
    address: '555 Trần Hưng Đạo, Phường An Nghiệp, Quận Ninh Kiều',
    city: 'Cần Thơ',
    phone: '0292 123 4567',
    email: 'cantho@autosale.vn',
    hours: 'Thứ 2 - Chủ nhật: 8:00 - 20:00',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    map: 'https://maps.google.com',
    manager: 'Hoàng Văn E'
  }
];

