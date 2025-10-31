import { MetadataRoute } from 'next';
import { cars } from '@/lib/data/cars';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://your-domain.com';
  
  const carUrls = cars.map((car) => ({
    url: `${baseUrl}/xe/${car.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...carUrls,
  ];
}

