import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'cashbazar-loan-clear-karna';
const PUBLISH_DATE = '2026-06-24';

export const metadata: Metadata = {
  title: 'CashBazar Loan Clear Karne Ka Tarika — Pakistan 2026',
  description:
    'CashBazar app ka loan overdue ho gaya Pakistan mein? Calls aa rahi hain? CashBazar loan kaise settle karein, penalty rokein, aur official NOC kaise hasil karein — step by step Roman Urdu guide.',
  keywords: [
    'cashbazar loan clear karna', 'cashbazar app loan settle', 'cashbazar loan overdue',
    'cashbazar loan problem pakistan', 'cashbazar noc kaise milti hai',
    'cashbazar app recovery calls', 'cashbazar loan default',
    'cashbazar se loan kaise clear karein pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'CashBazar Loan Clear Karne Ka Tarika — Pakistan 2026',
    description: 'CashBazar loan overdue? Calls aa rahi hain? Step by step settle karein aur official NOC hasil karein.',
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
    headline: 'CashBazar Loan Clear Karne Ka Tarika — Pakistan 2026',
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
      { '@type': 'Question', name: 'CashBazar loan overdue hone par kya hota hai?', acceptedAnswer: { '@type': 'Answer', text: 'CashBazar loan overdue hone par daily penalty add hoti hai, reminder calls aati hain, aur contacts ko bhi messages ya calls aa sakti hain. eCIB mein negative entry ho sakti hai. Jitna jaldi settle karein utna behtar — penalty barh rahi hai.' } },
      { '@type': 'Question', name: 'CashBazar loan settlement kaise hota hai Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'CashBazar loan settle karne ke liye app ya company se contact karein, ya ByeBye Loan ke zariye professionally kara sakte hain. Settlement mein outstanding amount ka formal agreement, payment, aur NOC shamil hoti hai.' } },
      { '@type': 'Question', name: 'CashBazar se NOC kaise milti hai?', acceptedAnswer: { '@type': 'Answer', text: 'Loan fully settle hone ke baad CashBazar official NOC issue karta hai. ByeBye Loan ke zariye QR-verified NOC 24-48 ghante mein milti hai jo koi bhi verify kar sake.' } },
    ],
  },
];

const WACta = ({ label = 'WhatsApp Pe Free Consultation Lein' }) => (
  <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    {label}
  </WALink>
);

export default function CashBazarPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#14532d] to-[#052e16] py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              App Guide · CashBazar
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              CashBazar Loan Clear Karne Ka Tarika — Step by Step
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              CashBazar loan overdue ho gaya? Calls aa rahi hain? Yahan sahi settlement process janein.
            </p>
            <WACta label="CashBazar Loan Clear Karwayein — Free Consultation" />
            <p className="text-white/50 text-xs mt-3">By {SITE_NAME} · <time dateTime={PUBLISH_DATE}>June 24, 2026</time> · 7 min read</p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            CashBazar app Pakistan mein instant digital loan ke liye use hoti hai. Loan overdue hone par
            situation quickly complicated ho sakti hai. <strong>Is guide mein hum aapko exact steps
            batayenge</strong> — CashBazar loan settle karne ka sahi tarika kya hai.
          </p>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-8">
            <p className="font-bold text-green-900 mb-1">Sabse Pehle Yeh Samjhein</p>
            <p className="text-green-800 text-sm leading-relaxed">
              CashBazar loan overdue par <strong>daily penalty add hoti hai.</strong> Ignore karna option nahi
              hai — sirf situation aur complicated hoti hai. Jitna jaldi action lein utna jitna kam amount
              mein settle hoga.
            </p>
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">CashBazar Loan Clear Karne Ka Complete Process</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: '01', title: 'Outstanding Amount Confirm Karein', desc: 'CashBazar app mein ya helpline par current outstanding amount confirm karein — principal, penalty, fees sab including. Yeh number hi aapka settlement base hoga.' },
              { step: '02', title: 'Settlement Ka Approach Decide Karein', desc: 'Khud app se direct negotiate karein — ya ByeBye Loan ke zariye professional settlement. Professional approach mein penalty waiver chances zyada hoti hain.' },
              { step: '03', title: 'Formal Agreement Karein', desc: 'Settlement sirf payment se complete nahi hoti — written agreement zaroori hai jisme amount, date, aur NOC provision clearly mentioned ho.' },
              { step: '04', title: 'Payment aur Receipt', desc: 'Payment karne ke baad screenshot ya transaction ID rakhein. Yeh proof hai ke payment hua — kabhi delete mat karein.' },
              { step: '05', title: 'NOC Lein — Sab Se Zaroori Step', desc: 'CashBazar se official NOC lein — bina NOC ke loan technically "cleared" nahi hai. NOC ke baad eCIB update hoti hai aur sab calls permanently band ho jaati hain.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-[#14532d] flex items-center justify-center text-white font-extrabold text-sm">{step}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">CashBazar Loan — Typical Timeline</h2>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-bold text-gray-900 rounded-tl-xl">Stage</th>
                  <th className="text-left p-3 font-bold text-gray-900 rounded-tr-xl">Kya Hota Hai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: 'Day 1-3 Overdue', what: 'App notifications, SMS reminders — abhi bhi manageable' },
                  { stage: 'Week 1-2', what: 'Phone calls shuru — pehle aapko, phir contacts list' },
                  { stage: 'Month 1+', what: 'eCIB entry possible, penalty significantly barh jaati hai' },
                  { stage: 'Settlement', what: 'Agreement → Payment → NOC → Sab band — clean slate' },
                ].map(({ stage, what }, i) => (
                  <tr key={stage} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-gray-900 text-xs">{stage}</td>
                    <td className="p-3 text-gray-600 text-xs">{what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">CashBazar Recovery Tactics — Sach Kya Hai</h2>
          <div className="space-y-2 mb-6">
            {[
              { claim: 'Arrest hogi', truth: 'Nahi. Loan default civil matter hai Pakistan mein.' },
              { claim: 'Court mein case kar denge', truth: 'Small loan amount ke liye court case rare hai — expensive process for them too.' },
              { claim: 'Contacts ko sab bata denge', truth: 'Contacts ko embarrassing calls — illegal under PECA 2016. FIA complaint possible.' },
              { claim: 'Property attach ho jaayegi', truth: 'Digital loan apps ke liye property attachment process complicated hai — mostly threat tactics.' },
            ].map(({ claim, truth }) => (
              <div key={claim} className="p-3 bg-red-50 border border-red-100 rounded-xl">
                <p className="text-red-800 font-bold text-xs mb-1">❌ Claim: "{claim}"</p>
                <p className="text-gray-700 text-xs"><span className="text-green-700 font-bold">✓ Haqeeqat:</span> {truth}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#006633] rounded-2xl p-6 text-center my-8">
            <p className="text-white font-extrabold text-lg mb-2">CashBazar Loan 24-48 Ghante Mein Clear</p>
            <p className="text-white/80 text-sm mb-4">Professional settlement, reduced penalty, QR-verified NOC. Free consultation available.</p>
            <WACta label="Abhi WhatsApp Karein" />
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">CashBazar FAQ</h2>
          <div className="space-y-3 mb-8">
            {[
              { q: 'CashBazar se loan amount chhoti thi — ab penalty original se zyada ho gayi. Kya karoon?', a: 'Yeh common situation hai. ByeBye Loan se contact karein — hum CashBazar se negotiate karte hain ke total settlement amount reasonable ho. Aksar penalty ka significant portion waive ho sakta hai.' },
              { q: 'CashBazar ki calls relatives ko aa rahi hain — kya yeh legal hai?', a: 'Nahi. Contacts/relatives ko harassment calls PECA 2016 ke under illegal hain Pakistan mein. FIA Cyber Crime (9911) par complaint ho sakti hai. Lekin fastest solution: loan settle karein — calls immediately band ho jaayengi.' },
              { q: 'CashBazar loan ke ilawa ek aur app ka bhi loan hai — ek saath kaise handle karoon?', a: 'ByeBye Loan multiple loans simultaneously handle karta hai. WhatsApp par dono apps ke detail share karein — hum parallel settlement process karenge.' },
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
                { href: '/blog/paisayaar-loan-clear-karna', text: 'Paisayaar Loan Clear Karne Ka Tarika' },
                { href: '/blog/smart-qarza-loan-clear-karna', text: 'Smart Qarza Loan Clear Karne Ka Tarika' },
                { href: '/blog/loan-app-blacklist-naam-kaise-hataen', text: 'Loan App Blacklist Se Apna Naam Kaise Hataen' },
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
