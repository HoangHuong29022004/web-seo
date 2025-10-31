import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleBySlug, newsArticles } from '@/lib/data/news';

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  
  if (!article) {
    return {
      title: 'Bài viết không tồn tại',
    };
  }

  return {
    title: `${article.title} | AutoSale`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get related articles
  const relatedArticles = newsArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Image */}
      <div className="relative w-full aspect-[21/9] bg-gray-900">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="100vw"
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-full inline-block mb-4 font-bold">
              {article.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
              {article.title}
            </h1>
            <div className="flex items-center gap-6 text-white/90">
              <span className="flex items-center gap-2">
                ✍️ {article.author}
              </span>
              <span className="flex items-center gap-2">
                📅 {article.publishDate}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Article Content */}
          <article className="lg:col-span-2 bg-white rounded-xl shadow-md p-8">
            {/* Excerpt */}
            <div className="text-xl text-gray-700 font-medium mb-8 p-6 bg-blue-50 border-l-4 border-blue-600 rounded-r-lg">
              {article.excerpt}
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {article.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h2 key={index} className="text-3xl font-bold mt-8 mb-4">
                      {paragraph.replace('# ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('## ')) {
                  return (
                    <h3 key={index} className="text-2xl font-bold mt-6 mb-3">
                      {paragraph.replace('## ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="font-bold my-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="my-4 text-gray-700 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            {/* Tags */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-bold mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="mt-8 pt-8 border-t">
              <h3 className="font-bold mb-4">Chia sẻ bài viết:</h3>
              <div className="flex gap-3">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                  📘 Facebook
                </button>
                <button className="bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-600">
                  🐦 Twitter
                </button>
                <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">
                  💬 Zalo
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-xl shadow-md p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">📌 Bài Viết Liên Quan</h3>
                <div className="space-y-4">
                  {relatedArticles.map(related => (
                    <Link
                      key={related.id}
                      href={`/tin-tuc/${related.slug}`}
                      className="block group"
                    >
                      <div className="flex gap-3">
                        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                          <Image
                            src={related.image}
                            alt={related.title}
                            fill
                            sizes="96px"
                            className="object-cover group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {related.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {related.publishDate}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-3">🚗 Tìm xe ngay!</h3>
              <p className="mb-4">
                Khám phá hàng trăm xe ô tô chất lượng với giá tốt nhất
              </p>
              <Link
                href="/danh-sach-xe"
                className="block bg-white text-blue-600 text-center py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
              >
                Xem Danh Sách Xe
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

