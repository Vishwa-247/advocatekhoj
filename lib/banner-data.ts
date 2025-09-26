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
  {
    id: 'banner-1',
    title: 'Legal Services Premium Ad',
    altText: 'Premium Legal Services Advertisement',
    isActive: true,
    priority: 1,
    position: 'left',
    linkUrl: 'https://example.com/legal-services',
    dimensions: { width: 550, height: 94 },
  },
  {
    id: 'banner-2', 
    title: 'Law Firm Partnership',
    altText: 'Professional Law Firm Partnership',
    isActive: true,
    priority: 1,
    position: 'right',
    linkUrl: 'https://example.com/partnerships',
    dimensions: { width: 550, height: 94 },
  },
  {
    id: 'banner-3',
    title: 'Legal Education Platform',
    altText: 'Online Legal Education',
    isActive: true,
    priority: 2,
    position: 'left',
    linkUrl: 'https://example.com/education',
    dimensions: { width: 550, height: 94 },
  },
  {
    id: 'banner-4',
    title: 'Court Case Management',
    altText: 'Digital Case Management Solutions',
    isActive: true,
    priority: 2,
    position: 'right',
    linkUrl: 'https://example.com/case-management',
    dimensions: { width: 550, height: 94 },
  },
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