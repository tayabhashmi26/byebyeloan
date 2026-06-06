import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_NAME, SITE_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Loan Clear Service Pakistan | Smart Qarza, Paisayaar & All Banks | Official NOC — ${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Pakistan ka #1 loan clearing service. Smart Qarza, Paisayaar, Foricash, QarzMitra, LudoLoan, EasyLoan, UpLoan, PakCredit, HakeemApp, DairaApp, PaysaGhur, MoneyTab aur sab bank loans clear karein. Official NOC milega. Calls aur SMS hamesha ke liye band. Free consultation.',
  keywords: [
    'loan clearing service Pakistan',
    'loan clear Pakistan',
    'Smart Qarza loan clear',
    'Paisayaar loan settlement',
    'Foricash loan clear',
    'QarzMitra settlement',
    'LudoLoan clear',
    'EasyLoan settlement',
    'UpLoan clearance',
    'PakCredit loan',
    'HakeemApp loan clear',
    'DairaApp clearance',
    'PaysaGhur loan',
    'MoneyTab settlement',
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
    'loan clear karna Pakistan',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    title: `${SITE_NAME} — Pakistan Ka #1 Loan Clearing Service`,
    description:
      'Smart Qarza, Paisayaar, Foricash, QarzMitra aur sab bank loans clear karein. Official NOC. Calls forever band. Free consultation.',
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_PK',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'ByeBye Loan — Pakistan Loan Clearing Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Loan Clearing Service Pakistan`,
    description:
      'Clear your loan apps & bank loans. Official NOC. Stop all calls & SMS forever. Free consultation Pakistan.',
    images: [`${SITE_URL}/og-image.jpg`],
  },
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
  alternates: {
    canonical: SITE_URL,
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
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description:
        "Pakistan's trusted loan clearing service offering official settlement for Smart Qarza, Paisayaar, Foricash, QarzMitra, LudoLoan, EasyLoan, UpLoan, PakCredit, HakeemApp, DairaApp, PaysaGhur, MoneyTab and all major Pakistani bank loans. Official NOC provided. Calls and SMS permanently stopped after clearance.",
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
        "Pakistan's #1 loan clearing service. We officially settle Smart Qarza, Paisayaar, Foricash, QarzMitra, LudoLoan, EasyLoan, UpLoan, PakCredit, HakeemApp, DairaApp, PaysaGhur, MoneyTab and all Pakistani bank loans. Verified NOC provided. After clearance, no calls or SMS ever again.",
      url: SITE_URL,
      telephone: PHONE_HREF,
      priceRange: '$$',
      currenciesAccepted: 'PKR',
      paymentAccepted: 'Bank Transfer, JazzCash, EasyPaisa, Cash',
      openingHours: 'Mo-Sa 09:00-21:00',
      areaServed: {
        '@type': 'Country',
        name: 'Pakistan',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Loan Clearing Services Pakistan',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Loan App Clearance Pakistan',
              description:
                'Official settlement of loans from Smart Qarza, Paisayaar, Foricash, QarzMitra, LudoLoan, EasyLoan, UpLoan, PakCredit, HakeemApp, DairaApp, PaysaGhur, MoneyTab. NOC provided.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Bank Loan Settlement Pakistan',
              description:
                'Official settlement of credit loans and personal loans from all Pakistani banks including HBL, UBL, MCB, ABL, Meezan Bank, Bank Alfalah, Faysal Bank. NOC provided.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Official NOC Certificate',
              description:
                'Verified No Objection Certificate issued after successful loan clearance. Legal proof that the loan obligation has been fulfilled.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Harassment Call & SMS Stop Service',
              description:
                'After official loan clearance, we guarantee permanent stop of all calls and SMS from loan apps and banks.',
            },
          },
        ],
      },
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
          name: 'NOC kya hota hai aur loan clearance ke liye kyun zaruri hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'NOC (No Objection Certificate) ek official document hai jo bank ya loan app is baat ki tasdiq karta hai ke aapka loan completely settle ho gaya hai aur unka koi claim nahi. Yeh document future mein credit score repair, property purchase, job applications wagheera ke liye zaruri hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'Loan clear hone mein kitna waqt lagta hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zyada tar cases mein 24 se 48 ghante ke andar process complete ho jata hai. Zyada complicated cases mein 3 se 5 business days lag sakte hain.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kya loan clear hone ke baad sach mein koi call ya SMS nahi aayega?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bilkul guarantee. Official settlement aur NOC ke baad koi bhi bank ya loan app aapko contact karne ka haq nahi rakhta. Yeh hamare service ki lifetime guarantee hai.',
          },
        },
        {
          '@type': 'Question',
          name: 'Paisayaar, Foricash ya QarzMitra loan clear ho sakta hai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Haan, hum Paisayaar, Foricash, QarzMitra ke alaawa LudoLoan, EasyLoan, UpLoan, PakCredit, HakeemApp, DairaApp, PaysaGhur, MoneyTab — sab 12 apps ke loans clear karte hain.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO and LLM indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Facebook Pixel — add your pixel ID here */}
        {/* Google Tag — add your GTM/GA4 ID here */}
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
