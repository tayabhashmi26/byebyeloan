import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_URL, PHONE_HREF } from '@/lib/constants';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

// ─── Full SEO Metadata ────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'ByeBye Loan — Pakistan Ka #1 Loan Clearing Service | Smart Qarza, Paisayaar & All Banks | Official NOC',
    template: `%s | ${SITE_NAME}`,
  },

  description:
    'Pakistan ka #1 loan clearing service. Smart Qarza, Paisayaar, Aitemaad, Hakeem, Daira, Fauri Cash, QarzMitra, Abhi, JazzCash, Easypaisa aur sab bank loans officially clear karein. Official NOC milega. Calls aur SMS hamesha ke liye band. Free consultation.',

  keywords: [
    'loan clearing service Pakistan',
    'loan clear karna Pakistan',
    'Smart Qarza loan clear',
    'Paisayaar loan settlement',
    'Aitemaad loan clear',
    'Hakeem app loan',
    'Daira loan settlement',
    'Fauri Cash clear',
    'QarzMitra settlement',
    'Abhi loan clear',
    'ZoodPay settlement',
    'Muawin loan',
    'Qist Bazaar clear',
    'Neem Paymenow',
    'Nova Finance loan',
    'Baadmay clear',
    'Alif Shop loan',
    'JazzCash loan clear',
    'Easypaisa loan settlement',
    'HBL Microfinance clear',
    'Zindigi loan',
    'Konnect HBL loan',
    'DOST loan clear',
    'loan app clearance Pakistan',
    'bank loan settlement Pakistan',
    'NOC loan Pakistan',
    'loan harassment calls stop Pakistan',
    'loan repayment service Pakistan',
    'credit load repaying Pakistan',
    'HBL loan settlement',
    'UBL credit loan clear',
    'Meezan Bank loan settlement',
    'Bank Alfalah loan',
    'loan se azaad Pakistan',
    'loan app se kaise bachein',
    'byebye loan',
    'byebyeloan online',
    'byebye loan online Pakistan',
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // ── Open Graph (Facebook Ads, WhatsApp previews) ──────────────────────────
  openGraph: {
    title: 'ByeBye Loan — Pakistan Ka #1 Loan Clearing Service',
    description:
      'Smart Qarza, Paisayaar, JazzCash, Easypaisa aur sab bank loans clear karein. Official NOC. Calls forever band. Free consultation.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'ByeBye Loan — Pakistan Loan Clearing Service',
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    title: 'ByeBye Loan — Loan Clearing Service Pakistan',
    description:
      'Clear your loan apps & bank loans in Pakistan. Official NOC. Stop all calls & SMS forever. Free consultation.',
    images: [`${SITE_URL}/og-image.png`],
  },

  // ── Favicon & Icons ───────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: '/favicon.ico',
  },

  // ── Manifest (PWA / mobile homescreen) ───────────────────────────────────
  manifest: '/manifest.json',

  // ── Indexing rules ────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: { canonical: SITE_URL },

  // ── Google Search Console verification (add your code after connecting) ──
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_CODE',
  },

  category: 'financial services',
};

// ─── JSON-LD Structured Data (SEO + LLM optimization) ─────────────────────────
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: 'ByeBye Loan Online',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
        width: 320,
        height: 88,
      },
      image: `${SITE_URL}/og-image.png`,
      description:
        "Pakistan's trusted loan clearing service. We officially settle Smart Qarza, Paisayaar, Aitemaad, Hakeem, Daira, Fauri Cash, QarzMitra, Abhi, ZoodPay, JazzCash, Easypaisa and all major Pakistani bank loans. Official NOC provided. Calls permanently stopped after clearance.",
      foundingDate: '2022',
      areaServed: 'Pakistan',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: PHONE_HREF,
        contactType: 'customer service',
        availableLanguage: ['Urdu', 'English'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '09:00',
          closes: '21:00',
        },
      },
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: SITE_NAME,
      description:
        "Pakistan's #1 loan clearing service. Official NOC provided. All calls and SMS permanently stopped after clearance.",
      url: SITE_URL,
      telephone: PHONE_HREF,
      image: `${SITE_URL}/og-image.png`,
      logo: `${SITE_URL}/logo.png`,
      priceRange: '$$',
      currenciesAccepted: 'PKR',
      paymentAccepted: 'Bank Transfer, JazzCash, EasyPaisa, Cash',
      openingHours: 'Mo-Sa 09:00-21:00',
      areaServed: { '@type': 'Country', name: 'Pakistan' },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '5000',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: 'Pakistan loan clearing service — Smart Qarza, Paisayaar, bank loans, Official NOC',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: ['en', 'ur'],
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Smart Qarza loan kaise clear karein Pakistan mein?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ByeBye Loan se contact karein. Hum Smart Qarza ke saath directly negotiate karte hain aur aapka loan officially settle karte hain. Settlement ke baad aapko verified NOC milega aur koi bhi call ya SMS nahi aayega.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya aap Pakistan ke sab banks ke loans clear karte hain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Haan, hum Pakistan ke tamam commercial banks ke loans clear karte hain jisme HBL, UBL, MCB, ABL, Meezan Bank, Bank Alfalah, Faysal Bank, Habib Metro, JS Bank, Bank Islami, Askari Bank, NBP, aur baaki sab banks shamil hain.',
          },
        },
        {
          '@type': 'Question',
          name: 'Loan clear hone mein kitna waqt lagta hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zyada tar cases mein 24 se 48 ghante ke andar process complete ho jata hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya loan clear hone ke baad sach mein koi call ya SMS nahi aayega?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bilkul guarantee. Official settlement aur NOC ke baad koi bhi bank ya loan app aapko contact nahi karega. Yeh hamare service ki lifetime guarantee hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'JazzCash aur Easypaisa ke loans bhi clear hote hain?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Haan, hum JazzCash, Easypaisa, HBL Microfinance, Zindigi, Konnect by HBL, aur DOST ke loans bhi officially clear karte hain.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD — Google rich results + LLM knowledge graph */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Geo targeting for Pakistan */}
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="language" content="English, Urdu" />
        {/* Facebook Pixel — paste your pixel code here */}
        {/* Google Tag Manager — paste your GTM snippet here */}
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
