import type { MetadataRoute } from 'next';
import { services, siteUrl } from '@/lib/content';
export const dynamic = 'force-static';
export default function sitemap():MetadataRoute.Sitemap { return ['', ...services.map(s => s.slug), 'nosotros', 'contacto'].map(slug => ({url:`${siteUrl}/${slug}${slug ? '/' : ''}`})); }
