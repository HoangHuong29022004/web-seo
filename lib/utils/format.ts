export function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).replace(/\s/g, ' ');
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('vi-VN').format(num);
}

export function formatMileage(mileage: number): string {
  return `${formatNumber(mileage)} km`;
}

