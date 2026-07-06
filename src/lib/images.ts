/** Shared image tuning for performance + premium load feel */

export const IMAGE_QUALITY = {
  hero: 82,
  card: 78,
  gallery: 75,
  logo: 90,
} as const;

/** Warm neutral blur — avoids harsh pop-in on food/interior photography */
export const BLUR_WARM =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

/** Dark blur for hero / moody overlays */
export const BLUR_DARK =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

/** Resolve image src — local assets pass through; legacy Unsplash URLs get sized */
export function imageSrc(src: string, width = 1200) {
  if (src.startsWith("/")) return src;
  return unsplash(src, width);
}

/** Strip redundant Unsplash params; Next.js Image handles width/quality */
export function unsplash(src: string, width: number) {
  const id = src.match(/photo-[\d-]+/)?.[0] ?? "";
  if (!id) return src;
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;
}
