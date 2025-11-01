import Image from 'next/image';
import Link from 'next/link';
import { Car } from '@/lib/data/cars';
import { formatPrice, formatMileage } from '@/lib/utils/format';

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const discount = car.originalPrice 
    ? Math.round(((car.originalPrice - car.price) / car.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/xe/${car.slug}`}>
      <article className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          {car.condition === 'new' && (
            <div className="absolute top-3 left-3 z-10 bg-green-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
              Mới 100%
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-3 right-3 z-10 bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md">
              -{discount}%
            </div>
          )}
          <Image
            src={car.images[0]}
            alt={`${car.name} - ${car.brand}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
        
        <div className="p-5 flex-1 flex flex-col">
          <div className="mb-2">
            <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded">
              {car.brand}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
            {car.name}
          </h3>
          
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-2xl font-bold text-red-600">
              {formatPrice(car.price)}
            </span>
            {car.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(car.originalPrice)}
              </span>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-3 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <span className="text-gray-400">📅</span>
              <span>{car.year}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400">⚙️</span>
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400">🛣️</span>
              <span>{formatMileage(car.mileage)}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-gray-400">⛽</span>
              <span>{car.fuelType}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t">
            <span className="flex items-center gap-1">
              <span>📍</span>
              {car.location}
            </span>
            <span className="text-blue-600 font-semibold group-hover:underline">
              Xem chi tiết →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

