export interface Banner {
  id: string;
  title: string;
  imageUrl?: string;
  linkUrl?: string;
  altText: string;
  isActive: boolean;
  priority: number; // For rotation order
  startDate?: Date;
  endDate?: Date;
  position: 'left' | 'right'; // For dual banner layout
  dimensions: {
    width: number;
    height: number;
  };
}

export interface BannerSlot {
  position: 'left' | 'right';
  banners: Banner[];
  currentIndex: number;
}

// Sample banner data - In production, this would come from a CMS or API
export const sampleBanners: Banner[] = [
  // User requested removal of all ad blocks
];

export function getBannersByPosition(position: 'left' | 'right'): Banner[] {
  return sampleBanners.filter(
    banner => banner.isActive && banner.position === position
  ).sort((a, b) => a.priority - b.priority);
}

export function getActiveBanners(): Banner[] {
  const now = new Date();
  return sampleBanners.filter(banner => {
    if (!banner.isActive) return false;
    if (banner.startDate && banner.startDate > now) return false;
    if (banner.endDate && banner.endDate < now) return false;
    return true;
  });
}