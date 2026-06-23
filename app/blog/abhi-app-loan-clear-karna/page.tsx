import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'abhi-app-loan-clear-karna';
const PUBLISH_DATE = '2026-06-24';

export const metadata: Metadata = {
  title: 'Abhi App Loan Clear Karne Ka Tarika — Pakistan 2026',
  description:
    'Abhi app (Abhi Pvt Ltd) ka loan overdue ho gaya Pakistan mein? Calls aa rahi hain? Abhi loan kaise settle karein, penalty rokein, aur official NOC kaise hasil karein — step by step guide.',
  keywords: [
    'abhi app loan clear karna', 'abhi loan settle pakistan', 'abhi app loan overdue',
    'abhi pvt ltd loan problem', 'abhi app noc kaise milti hai',
    'abhi loan default pakistan', 'abhi app salary advance clear karna',
    'abhi app se loan kaise clear karein pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Abhi App Loan Clear Karne Ka Tarika — Pakistan 2026',
    description: 'Abhi app loan overdue? Step by step settle karein aur official NOC hasil karein — SECP licensed NBFC.',
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
    headline: 'Abhi App Loan Clear Karne Ka Tarika — Pakistan 2026',
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
      { '@type': 'Question', name: 'Abhi app loan overdue hone par kya hota hai Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'Abhi app SECP registered NBFC hai — yeh formal recovery process follow karta hai jisme reminder calls, formal notices, aur eCIB reporting shamil hain. Employer ko bhi notification ho sakti hai salary advance cases mein. Jitna jaldi settle karein utna behtar.' } },
      { '@type': 'Question', name: 'Abhi app loan settlement kaise hota hai?', acceptedAnswer: { '@type': 'Answer', text: 'Abhi loan settlement ke liye app ya customer support se contact karein. ByeBye Loan ke zariye hum Abhi ke saath negotiate karte hain — reduced penalty amount par settlement aur official NOC dilwate hain.' } },
      { '@type': 'Question', name: 'Abhi SECP registered hai — kya yeh zyada serious case hai?', acceptedAnswer: { '@type': 'Answer', text: 'SECP registered hona matlab yeh hai ke Abhi ke paas formal legal channels bhi available hain — lekin yeh bhi matlab hai ke SECP ke under consumer protection rights bhi aapko milte hain. Settlement process structured hai aur NOC formal hoti hai.' } },
    ],
  },
];

const WACta = ({ label = 'WhatsApp Pe Free Consultation Lein' }) => (
  <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    {label}
  </WALink>
);

export default function AbhiAppPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#312e81] to-[#1e1b4b] py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              App Guide · Abhi
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Abhi App Loan Clear Karne Ka Tarika — Step by Step
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Abhi app ka loan overdue hai? SECP registered hone ka matlab zyada structured process — yahan sab kuch samjhein.
            </p>
            <WACta label="Abhi Loan Clear Karwayein — Free Consultation" />
            <p className="text-white/50 text-xs mt-3">By {SITE_NAME} · <time dateTime={PUBLISH_DATE}>June 24, 2026</time> · 7 min read</p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Abhi app Pakistan mein salary advance aur personal loan ke liye popular hai. Yeh SECP registered
            NBFC hai — yani <strong>zyada structured recovery process</strong> hai doosri apps se. Lekin
            settlement possible hai aur NOC bhi milti hai — process samajhna zaroori hai.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-8">
            <p className="font-bold text-indigo-900 mb-2">Abhi App — Key Facts</p>
            <ul className="space-y-1 text-indigo-800 text-sm">
              <li>• <strong>SECP Registered:</strong> Abhi Pvt Ltd licensed NBFC hai — formal regulatory oversight hai</li>
              <li>• <strong>Salary Advance Model:</strong> Salary se directly deduct hoti hai — employer involvement possible</li>
              <li>• <strong>Formal Channels:</strong> Structured recovery process — legal notices send kar sakta hai</li>
              <li>• <strong>Settlement Possible:</strong> ByeBye Loan Abhi ke saath negotiate karta hai</li>
            </ul>
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Abhi Loan Settlement — Step by Step Process</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: '01', title: 'Total Dues Check Karein', desc: 'Abhi app mein ya customer support se outstanding amount confirm karein — principal + markup + late fees sab included. SECP regulated hai toh breakdown clearly provide karna unki zimmedari hai.' },
              { step: '02', title: 'Employer Involvement Assess Karein', desc: 'Agar salary advance tha toh employer notification ho chuki hai? Yeh assess karna zaroori hai before settlement approach.' },
              { step: '03', title: 'Settlement Negotiate Karein', desc: 'Abhi SECP licensed hai — kuch penalty waiver possible hai especially agar financial hardship explain karein. ByeBye Loan professionally yeh negotiate karta hai.' },
              { step: '04', title: 'Written Settlement Complete Karein', desc: 'Formal settlement letter, amount confirmation, payment proof — sab documented hona chahiye.' },
              { step: '05', title: 'Official NOC aur eCIB Update', desc: 'Abhi formal NOC issue karta hai settlement ke baad. NOC ke baad eCIB mein record update hota hai. Employer ko bhi clearance letter bhejna consider karein.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-[#312e81] flex items-center justify-center text-white font-extrabold text-sm">{step}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Abhi SECP Registered Hai — Aapke Rights Bhi Zyada Hain</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Abhi SECP ke under operate karta hai — yeh consumer protection dono taraf se apply hoti hai:
          </p>
          <div className="space-y-2 mb-6">
            {[
              { right: 'Loan amount aur charges ka full breakdown maangna aapka right hai', type: 'aapka right' },
              { right: 'Abusive recovery tactics ke against SECP complaint possible hai', type: 'aapka right' },
              { right: 'Settlement negotiate karna — SECP guidelines ke under possible hai', type: 'aapka right' },
              { right: 'NOC in writing demand karna — SECP registered companies NOC dene ki paband hain', type: 'aapka right' },
            ].map(({ right }) => (
              <div key={right} className="flex gap-2 text-sm text-gray-700 p-3 bg-green-50 border border-green-100 rounded-xl">
                <span className="text-green-600 shrink-0 font-bold mt-0.5">✓</span>{right}
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Abhi Salary Advance — Special Situation</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Abhi salary advance ka ek unique dimension hai — employer integration. Agar aapka loan salary
            advance tha:
          </p>
          <div className="space-y-2 mb-6">
            {[
              'Employer ko notification ho sakti hai — yeh embarrassing aur job risk ho sakta hai',
              'Salary se deduction directly ho sakti hai — agar employer ne integrate kiya hua hai',
              'ByeBye Loan salary advance cases mein employer-angle bhi consider karta hai',
              'Settlement employer notification se pehle ho jaaye toh best outcome hota hai',
            ].map(item => (
              <li key={item} className="flex gap-2 text-sm text-gray-700 list-none">
                <span className="text-amber-500 shrink-0 mt-0.5 font-bold">!</span>{item}
              </li>
            ))}
          </div>

          <div className="bg-[#006633] rounded-2xl p-6 text-center my-8">
            <p className="text-white font-extrabold text-lg mb-2">Abhi Loan 24-48 Ghante Mein Clear</p>
            <p className="text-white/80 text-sm mb-4">SECP licensed apps ke saath bhi professional settlement karte hain — reduced amount, formal NOC.</p>
            <WACta label="Abhi WhatsApp Karein" />
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Abhi App FAQ</h2>
          <div className="space-y-3 mb-8">
            {[
              { q: 'Abhi app ne employer ko notify kar diya — ab kya karoon?', a: 'Abhi se contact karein ya ByeBye Loan se — fastest possible settlement arrange karein. Employer clearance letter bhi milti hai settlement ke baad jis se situation address ho sakti hai professionally.' },
              { q: 'Abhi SECP registered hai — kya yeh court case kar sakta hai?', a: 'Technically haan, SECP registered NBFC hone ki wajah se unke paas legal options hain. Lekin practically loan amount typically itni nahi hoti ke court case financially worthwhile ho. Settlement zyada common resolution hai.' },
              { q: 'Abhi loan aur Easypaisa loan — dono hain. Kya ek saath clear ho sakte hain?', a: 'Haan. ByeBye Loan multiple apps simultaneously handle karta hai — Abhi, Easypaisa, ya koi bhi combination. WhatsApp par sab detail share karein.' },
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
                { href: '/blog/secp-registered-loan-apps-list-2025', text: 'SECP Registered Loan Apps Ki List Pakistan 2026' },
                { href: '/blog/loan-app-noc-kaise-milti-hai', text: 'Official NOC Kaise Milti Hai Pakistan Mein' },
                { href: '/blog/multiple-loan-apps-kaise-manage-karein', text: 'Multiple Loan Apps Ek Saath Kaise Clear Karein' },
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
