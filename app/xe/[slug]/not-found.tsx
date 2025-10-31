import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          Không Tìm Thấy Xe
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Rất tiếc, chúng tôi không tìm thấy chiếc xe bạn đang tìm kiếm. 
          Có thể xe đã được bán hoặc đường dẫn không chính xác.
        </p>
        <Link 
          href="/"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
        >
          ← Quay về trang chủ
        </Link>
      </div>
    </div>
  );
}

