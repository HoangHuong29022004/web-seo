/**
 * Type definitions cho News/Blog entities
 */

export interface NewsArticle {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: NewsCategory;
  author: string;
  publishedAt: string;
  views?: number;
  tags?: string[];
}

export type NewsCategory = 
  | 'Tin tức' 
  | 'Đánh giá xe' 
  | 'Tư vấn' 
  | 'Thị trường';

