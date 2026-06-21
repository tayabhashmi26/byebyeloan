import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Loan Penalty Calculator Pakistan — Outstanding Amount Calculator | ByeBye Loan',
  description:
    'Free loan penalty calculator for Pakistan. Calculate your total outstanding loan amount including interest and late fees for Smart Qarza, Paisayaar, Fori Qarza and other loan apps.',
  keywords: [
    'loan penalty calculator pakistan',
    'loan outstanding calculator',
    'loan interest calculator pakistan',
    'loan app penalty calculator',
    'smart qarza calculator',
    'loan repayment calculator pakistan',
    'loan overdue amount calculator',
  ],
  alternates: { canonical: `${SITE_URL}/tools/loan-penalty-calculator` },
  openGraph: {
    title: 'Loan Penalty Calculator Pakistan — Free Tool | ByeBye Loan',
    description:
      'Calculate your total outstanding loan amount with interest and late fees. Free tool for Pakistani loan app users.',
    url: `${SITE_URL}/tools/loan-penalty-calculator`,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
