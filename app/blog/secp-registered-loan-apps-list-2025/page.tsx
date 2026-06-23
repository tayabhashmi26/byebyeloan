import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'secp-registered-loan-apps-list-2025';
const PUBLISH_DATE = '2026-06-24';

export const metadata: Metadata = {
  title: 'SECP Registered Loan Apps Ki List 2026 Pakistan — Kon Si Legal Hai, Kon Si Nahin',
  description:
    'Pakistan mein SECP registered loan apps ki list 2026. Kaunsi apps legal hain, kaunsi illegal? Loan lene se pehle zaroor check karein. Smart Qarza, Paisayaar, PakCredit aur baaki apps ka status.',
  keywords: [
    'secp registered loan apps pakistan 2025', 'secp registered loan apps list pakistan',
    'legal loan apps pakistan', 'illegal loan apps pakistan',
    'secp loan app check', 'pakistan loan app legal ya illegal',
    'secp nbfc list pakistan', 'loan app verify karna pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'SECP Registered Loan Apps Ki List 2026 Pakistan — Legal Vs Illegal',
    description: 'Kaunsi Pakistani loan apps SECP registered hain? Loan lene se pehle yeh guide zaroor parhen.',
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
    headline: 'SECP Registered Loan Apps Ki List 2026 Pakistan — Kon Si Legal Hai, Kon Si Nahin',
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
      { '@type': 'Question', name: 'SECP registered loan app kya hota hai Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'SECP (Securities and Exchange Commission of Pakistan) se registered loan app ek licensed Non-Banking Finance Company (NBFC) hoti hai jo Pakistan mein legally operate kar sakti hai. Yeh apps SECP ki guidelines follow karne ki paband hoti hain — including fair recovery practices.' } },
      { '@type': 'Question', name: 'Pakistan mein loan app legal hai ya nahi kaise check karein?', acceptedAnswer: { '@type': 'Answer', text: 'SECP ki official website (secp.gov.pk) par NBFC list available hai. Wahan company name search kar ke verify kar sakte hain. Agar koi app SECP registered nahi hai, woh technically illegal operate kar rahi hai Pakistan mein.' } },
      { '@type': 'Question', name: 'Illegal loan app se loan lia — kya hoga?', acceptedAnswer: { '@type': 'Answer', text: 'Illegal loan app se loan lena aapko legally weak position mein dalta hai lekin loan wapas karna phir bhi aapki zimmedari hai. Illegal apps ki recovery harassment practices zyada aggressive hoti hain kyunke unpar accountability kam hai. Settlement approach same hai.' } },
    ],
  },
];

const WACta = ({ label = 'WhatsApp Pe Free Consultation Lein' }) => (
  <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
    {label}
  </WALink>
);

export default function SECPListPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#0f3460] to-[#16213e] py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Authority Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              SECP Registered Loan Apps Ki List 2026 — Kon Si Legal Hai, Kon Si Nahin
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Loan lene se pehle app ka SECP status zaroor check karein — yeh guide aapko protect karti hai.
            </p>
            <WACta label="Loan App Se Pareshan? Free Consultation Lein" />
            <p className="text-white/50 text-xs mt-3">By {SITE_NAME} · <time dateTime={PUBLISH_DATE}>June 24, 2026</time> · 7 min read</p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Pakistan mein hundreds of loan apps available hain — lekin unme se sirf kuch SECP (Securities and
            Exchange Commission of Pakistan) se registered hain. <strong>SECP registered app ka matlab hai ke
            woh legally operate kar rahi hai</strong> aur uske paas accountability hai. Unregistered apps ke
            saath dealings zyada risky hoti hain.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-8">
            <p className="font-bold text-blue-900 mb-2">SECP Registration Kya Hai?</p>
            <p className="text-blue-800 text-sm leading-relaxed">
              SECP Pakistan ka financial regulator hai. Digital lending companies ko NBFC (Non-Banking Finance
              Company) license ke under register hona hota hai. Yeh license sirf tab milta hai jab company SECP
              ke financial, operational, aur consumer protection standards meet kare. Registered companies par
              SECP complaint mechanism bhi kaam karta hai.
            </p>
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Pakistan Ki Popular Loan Apps — SECP Status 2026</h2>
          <p className="text-gray-700 text-sm mb-4">
            Yeh information publicly available data aur SECP disclosures par based hai. Exact current status ke
            liye secp.gov.pk par verify karein — registrations change ho sakti hain.
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left p-3 font-bold text-gray-900 rounded-tl-xl">App / Company</th>
                  <th className="text-left p-3 font-bold text-gray-900">SECP Status</th>
                  <th className="text-left p-3 font-bold text-gray-900 rounded-tr-xl">Notes</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { app: 'Abhi (Abhi Pvt Ltd)', status: '✓ Registered', statusColor: 'text-green-700', note: 'SECP licensed NBFC' },
                  { app: 'Paisayaar', status: '✓ Registered', statusColor: 'text-green-700', note: 'SECP registered entity' },
                  { app: 'PakCredit', status: '✓ Registered', statusColor: 'text-green-700', note: 'SECP licensed' },
                  { app: 'QarzMitra', status: '⚠ Verify', statusColor: 'text-yellow-700', note: 'Check secp.gov.pk for current status' },
                  { app: 'Smart Qarza', status: '⚠ Verify', statusColor: 'text-yellow-700', note: 'Check secp.gov.pk — status may have changed' },
                  { app: 'Fauri Cash', status: '⚠ Verify', statusColor: 'text-yellow-700', note: 'Verify current status at secp.gov.pk' },
                  { app: 'Hakeem App', status: '⚠ Verify', statusColor: 'text-yellow-700', note: 'Registration status: verify directly' },
                  { app: 'Money Tap', status: '⚠ Verify', statusColor: 'text-yellow-700', note: 'Check secp.gov.pk' },
                  { app: 'PaisaGhar', status: '⚠ Verify', statusColor: 'text-yellow-700', note: 'Verify at secp.gov.pk' },
                  { app: 'ZoodPay', status: '✓ Registered', statusColor: 'text-green-700', note: 'SECP licensed fintech' },
                  { app: 'Easypaisa (Telenor)', status: '✓ Regulated', statusColor: 'text-green-700', note: 'SBP + SECP regulated' },
                  { app: 'JazzCash (Jazz)', status: '✓ Regulated', statusColor: 'text-green-700', note: 'SBP + SECP regulated' },
                ].map(({ app, status, statusColor, note }, i) => (
                  <tr key={app} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-3 font-medium text-gray-900">{app}</td>
                    <td className={`p-3 font-bold text-xs ${statusColor}`}>{status}</td>
                    <td className="p-3 text-gray-500 text-xs">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-8">
            Disclaimer: Yeh table educational purposes ke liye hai. SECP registrations change hoti rahti hain.
            Authoritative list ke liye secp.gov.pk/nbfc-list check karein.
          </p>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">SECP Registered App Se Loan Lene Ke Fayde</h2>
          <ul className="space-y-2 mb-6">
            {[
              'SECP complaint mechanism available hai agar app rules violate kare',
              'Recovery harassment ke against formal complaint possible hai',
              'App ke operations transparent hain — financial statements public hoti hain',
              'Data protection requirements apply hoti hain',
              'Consumer rights SECP consumer protection framework ke under protected hain',
            ].map(item => (
              <li key={item} className="flex gap-2 text-sm text-gray-700">
                <span className="text-green-600 shrink-0 mt-0.5 font-bold">✓</span>{item}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Unregistered / Illegal Loan Apps Ke Saath Kya Risk Hai</h2>
          <ul className="space-y-2 mb-6">
            {[
              'Koi formal complaint mechanism nahi — SECP unregistered apps par action nahi le sakta',
              'Interest rates koi limit nahi — jo chahein charge kar sakte hain',
              'Recovery harassment zyada aggressive hoti hai — koi accountability nahi',
              'Data privacy koi guarantee nahi — aapki contacts aur data misuse ho sakta hai',
              'Settlement process complicated — koi regulatory oversight nahi',
            ].map(item => (
              <li key={item} className="flex gap-2 text-sm text-gray-700">
                <span className="text-red-500 shrink-0 mt-0.5 font-bold">✗</span>{item}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Loan App Ka SECP Status Khud Kaise Check Karein</h2>
          <div className="space-y-3 mb-6">
            {[
              { step: '1', text: 'secp.gov.pk website par jayen' },
              { step: '2', text: '"Licensed NBFCs" ya "Regulated Entities" section dhundhen' },
              { step: '3', text: 'Company name search karein (app name se parent company name alag ho sakta hai)' },
              { step: '4', text: 'List mein agar naam hai toh registered — nahi hai toh verify karein' },
            ].map(({ step, text }) => (
              <div key={step} className="flex gap-3 text-sm">
                <div className="shrink-0 w-6 h-6 rounded bg-[#0f3460] text-white flex items-center justify-center font-bold text-xs">{step}</div>
                <span className="text-gray-700 self-center">{text}</span>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8">
            <p className="font-bold text-yellow-900 text-sm mb-1">Important Note:</p>
            <p className="text-yellow-800 text-xs leading-relaxed">
              SECP registered hona ya nahi hona aapke loan wapas karne ki zimmedari ko affect nahi karta.
              Registered aur unregistered — dono se liya loan legally wapas karna hota hai. Lekin <strong>settlement
              aur recovery practices registered apps ke saath better hoti hain.</strong>
            </p>
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Agar Pehle Se Loan App Se Loan Le Liya — Chahe Registered Ho Ya Nahi</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Loan liya hua hai aur ab situation control se bahar ho rahi hai? <strong>ByeBye Loan dono tarah ki
            apps handle karta hai</strong> — registered aur unregistered. Hum aapke loan ko professionally settle
            karte hain, harassment band karwate hain, aur Official NOC dilwate hain.
          </p>

          <div className="bg-[#006633] rounded-2xl p-6 text-center my-8">
            <p className="text-white font-extrabold text-lg mb-2">Loan App Se Pareshan Hain? Hum Help Kar Sakte Hain</p>
            <p className="text-white/80 text-sm mb-4">SECP registered ya nahi — sab loan apps clear karte hain. Free consultation.</p>
            <WACta label="Abhi WhatsApp Karein" />
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">SECP aur Loan Apps — FAQ</h2>
          <div className="space-y-3 mb-8">
            {[
              { q: 'SECP unregistered app ke against complaint kar sakta hun?', a: 'SECP directly unregistered apps par limited jurisdiction rakhti hai. Lekin FIA Cyber Crime (9911) par harassment ki complaint ho sakti hai. Aur PTA ko excessive calls ke baare mein report kar sakte hain.' },
              { q: 'Kya SECP registered loan apps interest rate cap hai?', a: 'SECP ne NBFCs ke liye maximum interest rate guidelines issue ki hain. Registered apps yeh follow karne ki paband hain. Unregistered apps koi bhi rate charge kar sakti hain — yahi ek bada risk hai.' },
              { q: 'App ka naam list mein nahi hai — kya main loan le sakta hun?', a: 'Strongly avoid karein. Unregistered loan apps se loan lena significant risk hai — both in terms of unfair interest rates aur aggressive recovery. Registered apps prefer karein.' },
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
                { href: '/blog/loan-app-contacts-access-kyon', text: 'Loan App Contacts Kyun Access Karta Hai? Legal Hai?' },
                { href: '/blog/loan-app-noc-kaise-milti-hai', text: 'Official NOC Kaise Milti Hai Pakistan Mein' },
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
