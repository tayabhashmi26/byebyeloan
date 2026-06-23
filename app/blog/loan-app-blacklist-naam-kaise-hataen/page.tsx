import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'loan-app-blacklist-naam-kaise-hataen';
const PUBLISH_DATE = '2026-06-24';

export const metadata: Metadata = {
  title: 'Loan App Blacklist Se Apna Naam Kaise Hataen Pakistan Mein — Complete Guide 2026',
  description:
    'Loan app blacklist mein naam aa gaya Pakistan mein? eCIB default entry kaise hati hai, NOC ka kya role hai, aur credit history kaise clean hoti hai — step by step guide.',
  keywords: [
    'loan app blacklist se naam kaise hataen', 'loan app blacklist pakistan',
    'ecib default entry kaise hati hai', 'loan blacklist pakistan',
    'credit report clean karna pakistan', 'loan app se naam hatana',
    'ecib clearance pakistan', 'loan default record hatana pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Loan App Blacklist Se Apna Naam Kaise Hataen Pakistan Mein',
    description: 'eCIB blacklist se naam hatane ka complete process — NOC, settlement, credit report clearing — Pakistan 2026.',
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
    headline: 'Loan App Blacklist Se Apna Naam Kaise Hataen Pakistan Mein — Complete Guide 2026',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
    datePublished: PUBLISH_DATE,
    dateModified: PUBLISH_DATE,
    image: `${SITE_URL}/og-image.png`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Loan app blacklist se naam kaise hata sakte hain Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'Loan app blacklist yaani eCIB credit bureau se naam hatane ka sirf ek tarika hai — loan officially settle karein aur official NOC lein. NOC ke baad loan company eCIB ko update karti hai aur aapka record cleared ho jaata hai. ByeBye Loan yeh process 24-48 ghante mein complete karta hai.' } },
      { '@type': 'Question', name: 'eCIB mein default entry kitni jaldi remove hoti hai?', acceptedAnswer: { '@type': 'Answer', text: 'Loan settle hone aur NOC milne ke baad company eCIB ko 30-60 din mein update karti hai usually. Aap khud SECP se apni eCIB report request kar ke check kar sakte hain. NOC document rakhna zaroori hai — yeh immediate proof hai even while eCIB updates.' } },
      { '@type': 'Question', name: 'Kya loan settle kiye bina eCIB se naam hat sakta hai?', acceptedAnswer: { '@type': 'Answer', text: 'Nahi. Loan app blacklist se naam sirf official settlement ke baad hata sakta hai. Koi shortcut ya workaround nahi hai. Settlement → NOC → eCIB update — yahi single valid path hai.' } },
    ],
  },
];

const WACta = ({ label = 'WhatsApp Pe Free Consultation Lein' }) => (
  <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
    {label}
  </WALink>
);

export default function BlacklistPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#450a0a] to-[#991b1b] py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Credit Clearing Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Loan App Blacklist Se Apna Naam Kaise Hataen Pakistan Mein
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              eCIB default record se nikalne ka complete step-by-step process — clear aur honest.
            </p>
            <WACta label="Blacklist Se Niklen — Free Consultation" />
            <p className="text-white/50 text-xs mt-3">By {SITE_NAME} · <time dateTime={PUBLISH_DATE}>June 24, 2026</time> · 7 min read</p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            "Loan app blacklist mein naam aa gaya" — yeh Pakistan mein ek common phrase ban gaya hai. Lekin
            actually kya hota hai, aur naam <strong>kaise hata sakte hain</strong> — yeh bahut kam log clearly
            jaante hain. Is guide mein hum yeh exactly explain karenge.
          </p>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Loan App "Blacklist" Aslaan Kya Hai?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pakistan mein loan app "blacklist" actually <strong>eCIB (e-Credit Information Bureau)</strong> ko
            refer karta hai — yeh SECP ka credit tracking system hai. Jab aap loan default karte hain, loan
            company yeh information eCIB mein report karti hai. Phir Pakistan ke sab banks aur financial
            institutions is database se check karte hain.
          </p>
          <div className="grid sm:grid-cols-3 gap-3 mb-6">
            {[
              { title: 'Kya Hota Hai', desc: 'Default hone par loan company eCIB mein negative entry daal deti hai' },
              { title: 'Asar Kya Hota Hai', desc: 'Future bank loan, credit card, housing finance — sab reject ho sakta hai' },
              { title: 'Kaise Niklen', desc: 'Sirf ek tarika: loan settle karein, NOC lein, eCIB update ho jaata hai' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center">
                <p className="font-bold text-gray-900 text-sm mb-2">{title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Koi Shortcut Nahi Hai — Yeh Samjhein</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Internet par "loan blacklist se naam hatane" ke bohot "tricks" milenge — fake NOC, paid eCIB
            clearing services, "sifarish" wali services. <strong>Yeh sab fraud hain.</strong>
          </p>
          <div className="space-y-2 mb-6">
            {[
              { fraud: 'Paid eCIB clearing service', reality: 'eCIB sirf loan company ya bank ki official request par update hoti hai — koi third party directly clear nahi kar sakta' },
              { fraud: 'Fake NOC purchase', reality: 'Fake NOC fraud hai — future mein discovered hone par serious legal consequences' },
              { fraud: '"Sifarish" ya "contacts" se record delete', reality: 'eCIB automated system hai — koi bhi manually delete nahi kar sakta bina official process ke' },
            ].map(({ fraud, reality }) => (
              <div key={fraud} className="flex gap-3 p-3 bg-red-50 border border-red-100 rounded-xl">
                <span className="text-red-500 shrink-0 font-bold text-xs mt-0.5">✗</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs mb-0.5">"{fraud}"</p>
                  <p className="text-gray-600 text-xs">{reality}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Sahi Tarika — Step by Step</h2>
          <div className="space-y-4 mb-6">
            {[
              { step: '01', title: 'Loan Officially Settle Karein', desc: 'Loan company se formal settlement agreement ke zariye loan close karein. Sirf payment karna kaafi nahi — formal written settlement zaroori hai.' },
              { step: '02', title: 'Official NOC Lein', desc: 'Settlement ke baad loan company se official NOC (No Objection Certificate) lein. Yeh document prove karta hai ke loan cleared hai.' },
              { step: '03', title: 'eCIB Update Ke Liye Wait Karein', desc: 'Loan company eCIB ko update karti hai — usually 30-60 din mein. NOC rakhna zaroori hai is period mein bhi as proof.' },
              { step: '04', title: 'Apni eCIB Report Check Karein', desc: 'SECP se apni eCIB report request karein — nominal fee lagti hai. Cleared status confirm karein. Agar update nahi hua toh NOC ke saath follow-up karein.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-[#006633] flex items-center justify-center text-white font-extrabold text-sm">{step}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#006633] rounded-2xl p-6 text-center my-8">
            <p className="text-white font-extrabold text-lg mb-2">eCIB Cleared Karwayein — 24-48 Ghante Mein</p>
            <p className="text-white/80 text-sm mb-4">ByeBye Loan loan settle karta hai + Official QR-verified NOC dilwata hai. Free consultation.</p>
            <WACta label="Abhi WhatsApp Karein" />
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">ByeBye Loan Se Blacklist Clearing — Kya Milta Hai</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              { title: 'Loan Settlement', desc: 'Best reduced amount par formal settlement — loan company se directly negotiate' },
              { title: 'Official NOC', desc: 'QR-verified NOC jo koi bhi scan kar ke verify kar sake — lifetime valid' },
              { title: 'eCIB Clearing Support', desc: 'NOC ke baad eCIB update follow-up mein bhi hum guide karte hain' },
              { title: '24-48 Ghante', desc: 'Pakistan ka fastest loan clearance timeline — settlement process complete' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 bg-green-50 border border-green-100 rounded-xl">
                <p className="font-bold text-green-900 text-sm mb-1">{title}</p>
                <p className="text-gray-600 text-xs">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Blacklist FAQ</h2>
          <div className="space-y-3 mb-8">
            {[
              { q: 'Kya loan settle kiye bina eCIB se naam nikal sakta hai?', a: 'Nahi. Koi bhi shortcut, trick, ya paid service directly eCIB mein changes nahi kar sakti. Sirf loan company ki official request par eCIB update hoti hai — aur yeh sirf settlement ke baad milti hai.' },
              { q: 'Ek se zyada loan apps mein default mein hun — kya sab clear ho sakte hain?', a: 'Haan. ByeBye Loan multiple apps simultaneously settle karta hai. Sab ke liye alag alag NOC milti hain aur eCIB mein sab cleared ho jaate hain.' },
              { q: 'eCIB update hone mein kitna time lagta hai settlement ke baad?', a: 'Usually 30-60 working days. Lekin NOC hath mein hone ke baad aap immediately bank ya employer ko yeh proof de sakte hain ke loan settled hai — eCIB update ka wait nahi karna padta practically.' },
              { q: 'Kya eCIB default entry 5 saal mein automatically delete ho jaati hai?', a: 'Haan, kuch entries time ke baad archive ho jaati hain. Lekin settled entry aur un-settled entry ka asar alag alag hota hai. Settled + NOC = much better financial position. Wait karna nahi chahiye.' },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 mb-6">
            <p className="font-bold text-gray-900 mb-3 text-sm">Related Guides:</p>
            <ul className="space-y-2">
              {[
                { href: '/blog/loan-app-noc-kaise-milti-hai', text: 'Official NOC Kaise Milti Hai Pakistan Mein' },
                { href: '/blog/loan-overdue-credit-report-pakistan', text: 'Overdue Loan eCIB Credit Report Par Kitna Rehta Hai' },
                { href: '/blog/loan-default-solution-pakistan', text: 'Loan Default Ho Jaaye Toh Kya Karein' },
              ].map(({ href, text }) => (
                <li key={href}><Link href={href} className="text-[#006633] hover:underline text-sm font-medium">→ {text}</Link></li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400 pt-6 border-t border-gray-100">
            <Link href="/blog" className="hover:text-[#006633] transition-colors">← Sab Articles</Link>
            <Link href="/" className="hover:text-[#006633] transition-colors">ByeBye Loan Home →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
