import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/blog/what-is-loan-clearance-service`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog/loan-app-harassment-calls-band-karna`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    // Informational high-traffic posts
    { url: `${SITE_URL}/blog/loan-app-contacts-access-kyon`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog/loan-app-ghar-aa-jayen-kya-karein`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog/loan-app-noc-kaise-milti-hai`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    // App-specific guides
    { url: `${SITE_URL}/blog/paisayaar-loan-clear-karna`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/blog/fauri-cash-loan-clear-karna`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/blog/qarzmitra-loan-clear-karna`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/blog/hakeem-app-loan-clear-karna`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/blog/pakcredit-loan-clear-karna`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/blog/money-tap-loan-clear-karna`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/blog/paisaghar-loan-clear-karna`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/blog/smart-qarza-loan-clear-karna`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${SITE_URL}/blog/loan-default-solution-pakistan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/blog/loan-overdue-credit-report-pakistan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/blog/loan-clearance-service-pakistan`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/blog/loan-repayment-emergency-checklist`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/tools/loan-penalty-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/terms-and-conditions`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.4 },
  ];
}
