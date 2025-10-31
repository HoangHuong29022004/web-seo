import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { newsArticles, getFeaturedArticles, getAllCategories } from '@/lib/data/news';

export const metadata: Metadata = {
  title: 'Tin Tức Ô Tô - Cập Nhật Mới Nhất | AutoSale',
  description: 'Tin tức, đánh giá xe, bí quyế mua xe ô tô mới nhất. Cập nhật thông tin thị trường, giá xe hàng ngày.',
};

export default function NewsPage() {
  const featuredArticles = getFeaturedArticles();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            📰 Tin Tức Ô Tô
          </h1>
          <p className="text-xl text-blue-100">
            Cập nhật tin tức, đánh giá và kiến thức về xe hơi mới nhất
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">🔥 Tin Nổi Bật</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map(article => (
                <Link
                  key={article.id}
                  href={`/tin-tuc/${article.slug}`}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      HOT
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                        {article.category}
                      </span>
                      <span>{article.publishDate}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>✍️ {article.author}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Categories */}
        <section className="mb-8">
          <div className="flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold">
              Tất cả
            </button>
            {categories.map(category => (
              <button
                key={category}
                className="px-4 py-2 bg-white text-gray-700 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* All Articles */}
        <section>
          <h2 className="text-3xl font-bold mb-6">📄 Tất Cả Bài Viết</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsArticles.map(article => (
              <Link
                key={article.id}
                href={`/tin-tuc/${article.slug}`}
                className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
                      {article.category}
                    </span>
                    <span>{article.publishDate}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>✍️ {article.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

