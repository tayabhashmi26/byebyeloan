import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'loan-clearance-service-pakistan';
const PUBLISH_DATE = '2026-06-21';

export const metadata: Metadata = {
  title: 'Loan Clearance Service in Pakistan — #1 Trusted Service | ByeBye Loan',
  description:
    'Pakistan ka #1 loan clearance service. Loan app ya bank ka loan officially clear karwayein — verified NOC certificate ke saath. 5,000+ clients served. 24–48 ghante mein complete.',
  keywords: [
    'loan clearance service in pakistan',
    'loan clearance service pakistan',
    'loan clearing service pakistan',
    'loan settlement service pakistan',
    'loan noc service pakistan',
    'loan app clear karna pakistan',
    'best loan clearance service pakistan',
    'professional loan settlement pakistan',
    'loan clearance company pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Loan Clearance Service in Pakistan — #1 Trusted Service | ByeBye Loan',
    description:
      'Pakistan ka #1 loan clearance service. Loan app ya bank ka loan officially clear karwayein — verified NOC certificate ke saath. 5,000+ clients served.',
    url: `${SITE_URL}/blog/${SLUG}`,
    type: 'article',
    publishedTime: PUBLISH_DATE,
    authors: [SITE_NAME],
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Loan Clearance Service in Pakistan — Complete Guide & Trusted Provider',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    datePublished: PUBLISH_DATE,
    dateModified: PUBLISH_DATE,
    image: `${SITE_URL}/og-image.png`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
    keywords: 'loan clearance service pakistan, loan settlement pakistan, NOC certificate pakistan',
    about: {
      '@type': 'Thing',
      name: 'Loan Clearance Service Pakistan',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Pakistan mein loan clearance service kya hoti hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Loan clearance service ek professional service hai jo aapki taraf se lender se negotiate karti hai, outstanding loan officially close karwati hai, aur digitally verified NOC (No Objection Certificate) dilwati hai. ByeBye Loan Pakistan ka leading loan clearance service hai jo 5,000+ clients ki madad kar chuka hai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pakistan mein loan clearance service ki fees kitni hoti hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ByeBye Loan ki service fee loan amount aur complexity par depend karti hai. Pehli consultation bilkul free hai. Hum performance-based kaam karte hain — pehle settlement secure hoti hai, phir fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Loan clearance service kitne time mein kaam karti hai Pakistan mein?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ByeBye Loan ka standard timeline 24 se 48 ghante hai loan apps ke liye. Bank loans ke liye 3 se 7 working days lag sakte hain. Aapko har step par update milta rehta hai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kya loan clearance service legally safe hai Pakistan mein?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Haan, bilkul. ByeBye Loan Pakistan mein legally operate karta hai. Hum lenders ke saath direct negotiation karte hain — koi illegal activity nahi. Settlement ke baad official NOC certificate milta hai jo lifetime valid hota hai.',
        },
      },
      {
        '@type': 'Question',
        name: 'Loan clearance service aur khud loan clear karne mein kya farq hai?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Khud loan clear karne mein aap full outstanding amount pay karte hain — penalties aur interest ke saath. Professional loan clearance service ke zariye typically 20–40% kam amount mein settlement ho jata hai, NOC guaranteed milti hai, aur sab paperwork handle hota hai. Calls bhi permanently band ho jati hain.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: 'Pakistan ka #1 loan clearance service — loan apps aur bank loans ke liye professional settlement aur NOC certificate.',
    url: SITE_URL,
    areaServed: { '@type': 'Country', name: 'Pakistan' },
    serviceType: 'Loan Clearance Service',
    priceRange: 'Consultation Free',
  },
];

const STATS = [
  { value: '5,000+', label: 'Clients Served' },
  { value: '24–48h', label: 'Average Processing Time' },
  { value: '30+ Apps', label: 'Loan Apps Covered' },
  { value: '100%', label: 'NOC Guarantee' },
];

const LOAN_APPS = [
  'Smart Qarza', 'Paisayaar', 'Aitemaad', 'Hakeem', 'Daira', 'Sahara',
  'Fauri Cash', 'Fori Qarza', 'Paisa Guru', 'Money Tap', 'PakCredit',
  'Loan Lado', 'CashBazar', 'PaisaGhar', 'QarzMitra', 'EasyLoan',
];

const STEPS = [
  {
    n: '01',
    title: 'Free Consultation',
    desc: 'WhatsApp par contact karein aur apni loan situation batayein. Hum 15 minute mein aapka complete assessment karte hain — bilkul free.',
  },
  {
    n: '02',
    title: 'Loan Analysis',
    desc: 'Hum aapke outstanding amount ka detailed breakdown karte hain — principal vs interest vs penalties. Aapko real picture milti hai.',
  },
  {
    n: '03',
    title: 'Lender Negotiation',
    desc: 'Hamari experienced team aapki taraf se directly lender se negotiate karti hai. Typically 20–40% reduced settlement secure karte hain.',
  },
  {
    n: '04',
    title: 'Payment & Closure',
    desc: 'Agreed settlement amount pay hone ke baad loan officially close hota hai. Sab documentation aur receipts hum handle karte hain.',
  },
  {
    n: '05',
    title: 'Verified NOC Certificate',
    desc: 'QR code ke saath digitally verified NOC certificate milti hai. Lifetime valid — koi bhi scan kar ke verify kar sakta hai.',
  },
];

const COMPARE = [
  { feature: 'Amount Pay Karna', diy: 'Full outstanding + penalties', pro: 'Negotiated reduced amount' },
  { feature: 'NOC Certificate', diy: 'Often difficult to obtain', pro: 'Guaranteed — digitally verified' },
  { feature: 'Time Lagta Hai', diy: 'Weeks of back-and-forth', pro: '24–48 ghante (loan apps)' },
  { feature: 'Calls Band Hoti Hain', diy: 'Guarantee nahi', pro: 'Permanently band — guaranteed' },
  { feature: 'Legal Documentation', diy: 'Khud handle karna padta hai', pro: 'Hum sab karte hain' },
  { feature: 'Stress Level', diy: 'High — direct lender dealing', pro: 'Zero — hum negotiate karte hain' },
  { feature: 'Success Rate', diy: 'Variable', pro: '98%+ cases successfully closed' },
];

export default function BlogPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #003d1f 0%, #005c2e 50%, #006633 100%)' }} className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Pakistan Ka #1 Loan Clearance Service
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
              Loan Clearance Service<br className="hidden sm:block" /> in Pakistan
            </h1>
            <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8">
              Loan app ya bank ka loan officially clear karwayein — professional negotiation,
              guaranteed NOC certificate, aur permanently band calls. 5,000+ Pakistanis ka
              trusted partner.
            </p>
            <WALink className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-extrabold px-8 py-4 rounded-2xl transition-colors text-base shadow-xl">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Free Consultation — WhatsApp Karein
            </WALink>
            <p className="text-white/50 text-xs mt-3">Koi commitment nahi — pehle consultation free hai</p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-[#004d26] py-5 px-4">
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {STATS.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-white font-extrabold text-2xl">{value}</p>
                <p className="text-white/60 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Pakistan mein loan lena zyada aasaan ho gaya hai — loan apps aur banks ne instant
            credit available kar diya hai. Lekin repayment mushkil hone par, ya loan default
            hone par, situation stress-ful ho jaati hai. Recovery calls, threatening SMS,
            contacts ko calls — yeh sab loan borrowers ki common complaints hain.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Isi liye <strong>loan clearance service in Pakistan</strong> ek growing need ban gayi
            hai. Yeh professional service aapki taraf se lender se negotiate karti hai, best
            possible amount par loan settle karwati hai, aur officially verified NOC (No
            Objection Certificate) dilwati hai — jis ke baad sab calls aur harassment permanently
            band ho jaati hai.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Is guide mein hum cover karein ge: loan clearance service kya hoti hai, Pakistan mein
            yeh kaise kaam karti hai, ByeBye Loan kyun Pakistan ka best choice hai, aur aap aaj
            se kaise shuru kar sakte hain.
          </p>

          {/* What is */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            Loan Clearance Service in Pakistan — Kya Hoti Hai?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Loan clearance service ek professional intermediary service hai jo aur lender ke
            darmiyan kaam karti hai. Iska kaam hai:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              'Aapke outstanding loan ka complete analysis karna — principal, interest, penalties alag alag',
              'Lender se aapki taraf se directly negotiate karna — reduced settlement amount secure karna',
              'Legal documentation handle karna — payment receipts, closure letters, official forms',
              'Digitally verified NOC certificate lena — proof ke taur par ke loan officially closed hai',
              'Recovery calls aur harassment permanently band karwana — legally aur officially',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-gray-700 text-sm leading-relaxed">
                <span className="text-[#006633] font-bold shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mb-10">
            Simple terms mein: aap humen case dete hain, hum sab kuch handle karte hain, aur
            aapko NOC certificate milti hai. Zyada tar clients ko outstanding amount ka{' '}
            <strong>20–40% discount</strong> bhi mil jaata hai professional negotiation ki wajah se.
          </p>

          {/* Why need */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            Pakistan Mein Loan Clearance Service Ki Zaroorat Kyun Hai?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              { icon: '📞', title: 'Recovery Calls', desc: 'Loan default par aggressive calls — khud, contacts ko bhi. Yeh stress aur embarrassment kaafi bura hota hai.' },
              { icon: '💸', title: 'Penalty Buildup', desc: 'Har din delay karne par interest aur late fees add hoti rehti hain. Jitna wait, utna zyada.' },
              { icon: '📄', title: 'NOC Ki Mushkilat', desc: 'Loan pay karne ke baad bhi official NOC lena mushkil hota hai — banks aur apps process complicated rakhte hain.' },
              { icon: '⚖️', title: 'Legal Threats', desc: 'Kuch lenders legal action ki dhamki dete hain — chahe legally possible na ho. Professional service yeh sab handle karti hai.' },
              { icon: '🏦', title: 'Future Loans Block', desc: 'Unsettled loans future credit history affect karte hain. Official settlement aur NOC yeh clear karta hai.' },
              { icon: '😓', title: 'Mental Stress', desc: 'Loan ki wajah se anxiety aur stress aam baat hai. Professional service yeh bojh hata deti hai.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="p-5 bg-gray-50 rounded-2xl">
                <p className="text-2xl mb-2">{icon}</p>
                <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* DIY vs Pro comparison */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-5">
            Khud Loan Clear Karna vs Professional Service — Kya Farq Hai?
          </h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left px-4 py-3 bg-gray-100 text-gray-600 font-semibold rounded-tl-xl text-xs">Feature</th>
                  <th className="text-center px-4 py-3 bg-red-50 text-red-700 font-semibold text-xs">Khud Karna (DIY)</th>
                  <th className="text-center px-4 py-3 bg-[#006633] text-white font-semibold rounded-tr-xl text-xs">ByeBye Loan ✓</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map(({ feature, diy, pro }, i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-4 py-3.5 text-gray-700 font-medium text-xs border-b border-gray-100">{feature}</td>
                    <td className="px-4 py-3.5 text-red-600 text-xs border-b border-gray-100 text-center">{diy}</td>
                    <td className="px-4 py-3.5 text-[#006633] font-semibold text-xs border-b border-gray-100 text-center">{pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How it works */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-6">
            ByeBye Loan Ka Process — Step by Step
          </h2>
          <div className="relative space-y-0 mb-10">
            {STEPS.map(({ n, title, desc }, idx) => (
              <div key={n} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="shrink-0 w-11 h-11 rounded-2xl bg-[#006633] flex items-center justify-center text-white font-extrabold text-sm z-10">
                    {n}
                  </div>
                  {idx < STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-[#006633]/20 my-1" style={{ minHeight: 32 }} />
                  )}
                </div>
                <div className="pb-8">
                  <p className="font-bold text-gray-900 mb-1">{title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mid CTA */}
          <div className="rounded-2xl p-8 text-center my-10" style={{ background: 'linear-gradient(135deg, #003d1f 0%, #006633 100%)' }}>
            <p className="text-white font-extrabold text-2xl mb-2">Aaj Hi Shuru Karein</p>
            <p className="text-white/80 text-sm mb-6 max-w-md mx-auto">
              5,000+ Pakistanis ne ByeBye Loan trust kiya — aur apna loan officially clear karwaya.
              Pehli consultation bilkul free hai.
            </p>
            <WALink className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-8 py-4 rounded-2xl transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp — Free Consultation
            </WALink>
          </div>

          {/* Loan apps covered */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            Konse Loan Apps Cover Hote Hain?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            ByeBye Loan Pakistan ke <strong>30+ loan apps aur banks</strong> ke saath kaam
            karta hai. Kuch major apps jo hum cover karte hain:
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {LOAN_APPS.map((app) => (
              <span
                key={app}
                className="px-3.5 py-2 bg-[#f0fdf4] border border-[#006633]/20 text-[#006633] text-xs font-semibold rounded-xl"
              >
                {app}
              </span>
            ))}
            <span className="px-3.5 py-2 bg-gray-100 text-gray-500 text-xs font-semibold rounded-xl">
              + 15 more apps & banks
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-10">
            Agar aapka loan app is list mein nahi bhi hai, toh WhatsApp par contact karein —
            hum assess karke batayenge ke kya kar sakte hain.
          </p>

          {/* Why ByeBye Loan */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-5">
            ByeBye Loan Kyun Choose Karein? — Pakistan Ka Best Loan Clearance Service
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                title: 'Proven Track Record',
                desc: '5,000+ successful loan clearances. Hum Pakistan mein is field mein sabse experienced team hain. Hamare results khud bolte hain.',
                icon: '🏆',
              },
              {
                title: 'Guaranteed NOC Certificate',
                desc: 'Har successful settlement ke baad digitally verified NOC certificate — QR code ke saath. Koi bhi scan kar ke verify kar sakta hai. Lifetime valid.',
                icon: '📜',
              },
              {
                title: 'Reduced Amount — Real Savings',
                desc: 'Professional negotiation ki wajah se clients typically 20–40% kam amount dete hain. Yeh savings often haari service fee se kaafi zyada hoti hai.',
                icon: '💰',
              },
              {
                title: 'Fast Process — 24 to 48 Hours',
                desc: 'Loan app clearances 24 se 48 ghante mein. Bank loans 3 se 7 working days mein. Pakistan mein koi aur service itni fast nahi hai.',
                icon: '⚡',
              },
              {
                title: 'Transparent & Honest',
                desc: 'Pehle free consultation mein hum honestly batate hain ke hum kya kar sakte hain aur kya nahi. Koi false promises nahi. Performance ke baad fees.',
                icon: '🤝',
              },
              {
                title: 'Calls Permanently Band',
                desc: 'Settlement ke baad recovery calls, SMS, aur contacts ko calls — sab permanently band. Legal documentation ensure karta hai ke dobara contact na ho.',
                icon: '🔕',
              },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-5">
            Loan Clearance Service — Aksar Pooche Jaane Wale Sawalat
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                q: 'Pakistan mein loan clearance service ki fees kitni hoti hai?',
                a: 'Pehli consultation bilkul free hai. Service fee loan amount aur complexity par depend karti hai — hum pehle assessment karte hain phir transparent fee quote dete hain. Performance-based approach: pehle result, phir payment. Koi hidden charges nahi.',
              },
              {
                q: 'Kya loan clearance service legally safe hai Pakistan mein?',
                a: 'Haan, 100% legal. Hum lenders ke saath official channels ke zariye kaam karte hain — direct negotiation, formal settlement agreements, aur official NOC certificates. Koi illegal activity ya shortcuts nahi.',
              },
              {
                q: 'Loan clearance service kitne time mein complete hoti hai?',
                a: 'Loan apps ke liye: 24 se 48 ghante. Bank loans ke liye: 3 se 7 working days. Process shuru hone ke baad hum aapko har update dete rehte hain — aapko khud kuch chase nahi karna padta.',
              },
              {
                q: 'Kya main loan default hone ke baad bhi loan clearance service use kar sakta hun?',
                a: 'Haan — actually default ke baad professional service aur bhi zyada effective hoti hai. Is stage par lenders settlement accept karne ke liye zyada willing hote hain. Hum 30, 60, aur 90+ days default cases bhi successfully handle karte hain.',
              },
              {
                q: 'NOC certificate ke baad kya guarantee hai ke calls dobara nahi aayengi?',
                a: 'NOC certificate legal proof hai ke loan officially settled hai. Is ke baad agar koi lender contact kare toh yeh illegal hai aur aap SECP ya FIA mein complaint kar sakte hain. 5,000+ hamare clients mein se kisi ko bhi NOC ke baad calls nahi aayin.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-2xl p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="rounded-2xl overflow-hidden border-2 border-[#006633]/20">
            <div className="bg-[#006633] px-6 py-4 text-center">
              <p className="text-white font-extrabold text-xl">
                Pakistan Ka #1 Loan Clearance Service
              </p>
            </div>
            <div className="p-7 text-center">
              <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-lg mx-auto">
                Loan app ya bank ka loan officially clear karwayein — professional negotiation,
                verified NOC certificate, calls permanently band. 5,000+ Pakistanis ka trusted
                choice. Pehli consultation free hai, koi commitment nahi.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <WALink className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-8 py-4 rounded-xl transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp — Free Consultation
                </WALink>
                <Link
                  href="/tools/loan-penalty-calculator"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#006633] text-[#006633] font-bold px-8 py-4 rounded-xl hover:bg-[#006633] hover:text-white transition-colors"
                >
                  Calculator Try Karein →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
            <Link href="/blog" className="hover:text-[#006633] transition-colors">← Sab Articles</Link>
            <Link href="/" className="hover:text-[#006633] transition-colors">ByeBye Loan Home →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
