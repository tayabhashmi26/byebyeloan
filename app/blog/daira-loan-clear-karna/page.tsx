import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'daira-loan-clear-karna';
const PUBLISH_DATE = '2026-06-24';

export const metadata: Metadata = {
  title: 'Daira App Loan Clear Karne Ka Tarika — Pakistan 2026',
  description:
    'Daira app ka loan overdue ho gaya Pakistan mein? Calls aa rahi hain? Daira loan kaise settle karein, penalty rokein, aur official NOC kaise hasil karein — complete step by step guide.',
  keywords: [
    'daira loan clear karna', 'daira app loan settle', 'daira loan overdue',
    'daira app loan problem pakistan', 'daira noc kaise milti hai',
    'daira loan default pakistan', 'daira app recovery calls',
    'daira se loan kaise clear karein pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Daira App Loan Clear Karne Ka Tarika — Pakistan 2026',
    description: 'Daira loan overdue? Calls aa rahi hain? Step by step settle karein aur official NOC hasil karein.',
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
    headline: 'Daira App Loan Clear Karne Ka Tarika — Pakistan 2026',
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
      { '@type': 'Question', name: 'Daira loan overdue hone par kya hota hai?', acceptedAnswer: { '@type': 'Answer', text: 'Daira loan overdue hone par daily penalty add hoti hai, reminder SMS aur calls aati hain, aur contacts list ko bhi messages ya calls aa sakti hain. Delay jitna zyada utna penalty zyada aur situation complicated.' } },
      { '@type': 'Question', name: 'Daira loan kaise settle karein Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'Daira loan settle karne ke liye outstanding amount confirm karein, settlement negotiate karein (directly ya ByeBye Loan ke zariye), formal written agreement karein, payment karein, aur NOC hasil karein. ByeBye Loan yeh pura process 24-48 ghante mein complete karta hai.' } },
      { '@type': 'Question', name: 'Daira se NOC lena zaroori hai kya?', acceptedAnswer: { '@type': 'Answer', text: 'Haan, NOC bahut zaroori hai. NOC proof hai ke loan officially cleared hai. Iske bina eCIB update nahi hoti aur future credit history clean nahi hoti. NOC lifetime valid hoti hai.' } },
    ],
  },
];

const WACta = ({ label = 'WhatsApp Pe Free Consultation Lein' }) => (
  <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    {label}
  </WALink>
);

export default function DairaPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#0c4a6e] to-[#082f49] py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              App Guide · Daira
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Daira App Loan Clear Karne Ka Tarika — Step by Step
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Daira loan overdue ho gaya? Calls aa rahi hain? Yahan exact settlement process janein.
            </p>
            <WACta label="Daira Loan Clear Karwayein — Free Consultation" />
            <p className="text-white/50 text-xs mt-3">By {SITE_NAME} · <time dateTime={PUBLISH_DATE}>June 24, 2026</time> · 7 min read</p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Daira app se loan liya tha aur ab repayment mein masla ho raha hai? Calls, messages, contacts
            ko harassment — <strong>yeh sab ek baar mein band ho sakta hai</strong> agar loan sahi tarike
            se settle kiya jaaye aur official NOC li jaaye.
          </p>

          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5 mb-8">
            <p className="font-bold text-sky-900 mb-1">Zaroor Yaad Rakhein</p>
            <p className="text-sky-800 text-sm leading-relaxed">
              Daira loan ignore karne se situation improve nahi hoti — <strong>penalty barh rahi hai
              aur contacts ko calls aa rahi hain.</strong> Jitni jaldi settlement hogi utna better
              outcome hoga aur kam paisa dena hoga.
            </p>
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Daira Loan Settlement — 5 Steps</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: '01', title: 'Total Outstanding Amount Pata Karein', desc: 'Daira app ya helpline se current total confirm karein — principal + penalty + all charges. Yeh exact number settlement start point hai.' },
              { step: '02', title: 'Settlement Ka Method Choose Karein', desc: 'Option 1: Khud Daira se directly negotiate karein. Option 2: ByeBye Loan ke zariye professional settlement — better results, faster process, reduced amount.' },
              { step: '03', title: 'Written Settlement Agreement Zaroor Lein', desc: 'Sirf phone par "haan" sunna kaafi nahi. Written settlement confirm karna zaroori hai — amount, payment date, NOC commitment.' },
              { step: '04', title: 'Payment Karen aur Proof Rakhein', desc: 'Payment karne ke baad transaction screenshot, receipt — sab rakhein. Yeh evidence hai jab bhi zaroorat pade.' },
              { step: '05', title: 'Official NOC Haath Mein Lein', desc: 'Daira se official NOC lein — yeh loan cleared hone ka final, authoritative proof hai. NOC ke baad eCIB update hoti hai aur sab communication band.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-[#0c4a6e] flex items-center justify-center text-white font-extrabold text-sm">{step}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Daira Loan Mein Aapke Qanoni Haqooq</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Loan overdue ho toh bhi aapke rights hain — Daira bhi Pakistan ke laws follow karne ka paband hai:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Outstanding amount aur charges ka complete breakdown maangna aapka right hai',
              'Raat 10 baje ke baad calls — refuse karna aapka right hai',
              'Abusive language ya threats — FIA Cyber Crime 9911 par report kar sakte hain',
              'Contacts/family ko harassment calls — PECA 2016 ke under illegal',
              'Settlement negotiate karna — company koi bhi amount maange, negotiate possible hai',
              'NOC in writing demand karna — company dene ki paband hai settlement ke baad',
            ].map(item => (
              <li key={item} className="flex gap-2 text-sm text-gray-700">
                <span className="text-green-600 shrink-0 mt-0.5 font-bold">✓</span>{item}
              </li>
            ))}
          </ul>

          <div className="bg-[#006633] rounded-2xl p-6 text-center my-8">
            <p className="text-white font-extrabold text-lg mb-2">Daira Loan 24-48 Ghante Mein Clear</p>
            <p className="text-white/80 text-sm mb-4">ByeBye Loan professionally settle karta hai — reduced amount, official QR-verified NOC, harassment band.</p>
            <WACta label="Abhi WhatsApp Karein" />
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">ByeBye Loan Se Daira Settlement — Kya Milega</h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {[
              { title: 'Best Settlement Amount', desc: 'Daira se directly negotiate — reduced penalty, best possible total' },
              { title: 'QR-Verified NOC', desc: 'Koi bhi scan kar ke verify kar sake — bank, employer ke liye valid' },
              { title: 'Calls Permanently Band', desc: 'Settlement complete → Daira ki sab calls immediately band' },
              { title: '24-48 Ghante', desc: 'Complete process — consultation se NOC tak — ek se do din' },
            ].map(({ title, desc }) => (
              <div key={title} className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <p className="font-bold text-blue-900 text-sm mb-1">{title}</p>
                <p className="text-gray-600 text-xs">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Daira Loan FAQ</h2>
          <div className="space-y-3 mb-8">
            {[
              { q: 'Daira app ne contacts ko calls karna shuru kar diya — kya yeh rok sakta hun?', a: 'Fastest way: loan settle karein. Settlement ke baad contacts ko calls immediately band ho jaati hain. ByeBye Loan emergency cases mein same-day settlement bhi possible hai.' },
              { q: 'Daira ne amount itni barha di — original se zyada penalty hai ab. Settle hoga?', a: 'Haan. Yeh common case hai aur ByeBye Loan exactly yeh negotiate karta hai — ke total settlement reasonable amount par ho jaaye. WhatsApp karein — free assessment mein estimate milega.' },
              { q: 'Daira loan ke saath ZoodPay ka bhi loan hai — kya dono ek saath?', a: 'Bilkul. ByeBye Loan multiple apps simultaneously handle karta hai. Sab loans detail ke saath WhatsApp karein — comprehensive settlement plan milega.' },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 mb-6">
            <p className="font-bold text-gray-900 mb-3 text-sm">Related App Guides:</p>
            <ul className="space-y-2">
              {[
                { href: '/blog/smart-qarza-loan-clear-karna', text: 'Smart Qarza Loan Clear Karne Ka Tarika' },
                { href: '/blog/hakeem-app-loan-clear-karna', text: 'Hakeem App Loan Clear Karne Ka Tarika' },
                { href: '/blog/multiple-loan-apps-kaise-manage-karein', text: 'Kai Loan Apps Ek Saath Kaise Clear Karein' },
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
