import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'paisaghar-loan-clear-karna';
const PUBLISH_DATE = '2026-06-23';

export const metadata: Metadata = {
  title: 'PaisaGhar Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan 2026',
  description:
    'PaisaGhar ka loan clear karna chahte hain? Complete step-by-step guide — officially kaise settle karein, recovery calls kaise band karein, aur Official NOC kaise lein Pakistan mein.',
  keywords: [
    'paisaghar loan clear', 'paisa ghar loan settlement', 'paisaghar noc',
    'paisaghar calls band karna', 'paisaghar default', 'paisaghar loan kaise clear karein',
    'paisa ghar outstanding loan', 'paisaghar pakistan', 'loan app clear karna pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'PaisaGhar Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan',
    description: 'PaisaGhar ka loan officially clear karne ka complete guide — settlement, NOC, aur calls permanently band karna.',
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
    headline: 'PaisaGhar Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan 2026',
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
      { '@type': 'Question', name: 'PaisaGhar loan kaise clear karein Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'PaisaGhar loan clear karne ke liye ByeBye Loan se WhatsApp par contact karein. Hum free assessment karte hain, PaisaGhar se directly negotiate karte hain, best settlement secure karte hain, aur Official NOC dilwate hain. Process 24-48 ghante mein complete.' } },
      { '@type': 'Question', name: 'PaisaGhar default ke baad settlement possible hai?', acceptedAnswer: { '@type': 'Answer', text: 'Haan. PaisaGhar default hone ke baad bhi settlement perfectly possible hai. Professional negotiation se reduced amount par settle kar sakte hain aur official NOC le sakte hain.' } },
      { '@type': 'Question', name: 'PaisaGhar calls permanently kaise band karein?', acceptedAnswer: { '@type': 'Answer', text: 'PaisaGhar calls permanently band karne ka ek hi tarika hai — official settlement aur NOC. Settlement ke baad PaisaGhar legally aapko ya aapke contacts ko contact nahi kar sakta.' } },
      { '@type': 'Question', name: 'PaisaGhar NOC kaise milti hai?', acceptedAnswer: { '@type': 'Answer', text: 'ByeBye Loan ke through PaisaGhar settlement ke 24-48 ghante mein official QR-verified NOC milti hai. Lifetime valid aur digitally verifiable.' } },
    ],
  },
];

export default function PaisaGharBlogPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#134e4a] to-[#0f766e] py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              App-Specific Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              PaisaGhar Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              PaisaGhar ka loan clear karna chahte hain ya default mein hain? Is complete guide mein sab kuch hai.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-white/60 text-sm flex-wrap">
              <span>By {SITE_NAME}</span><span>·</span>
              <time dateTime={PUBLISH_DATE}>June 23, 2026</time><span>·</span>
              <span>10 min read</span>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            <strong>PaisaGhar</strong> — naame mein hi "ghar" hai — yeh promise deta hai ke aapke ghar mein paisa
            aayega, zaroorat ke waqt. Pakistan mein chhote aur medium size loans ke liye PaisaGhar ek well-known
            naam hai. Lekin jab koi payment miss ho jaaye, toh PaisaGhar ki recovery ka "ghar" aapke ghar tak
            pahunch jaata hai — calls, messages, aur contacts ke zariye.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Is complete guide mein hum aapko batayenge ke <strong>PaisaGhar loan officially kaise clear karein</strong>,
            default ke baad kya options hain, aapke kya legal rights hain, aur ByeBye Loan ke through 24-48 ghante
            mein yeh mushkil khatam kaise hoti hai.
          </p>

          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8">
            <p className="font-bold text-teal-900 mb-3">PaisaGhar App — Quick Facts</p>
            <ul className="space-y-2 text-teal-800 text-sm">
              {[
                'Pakistan ka digital personal loan platform',
                'Rs 1,000 se Rs 40,000 tak instant loans',
                'Phone aur CNIC based approval',
                'Repayment period 15 se 90 days',
                'Daily penalty charges on default',
                'Contacts list recovery ke liye use hoti hai',
                'Multiple recovery channels active on default',
              ].map(f => (
                <li key={f} className="flex gap-2"><span className="text-teal-500 shrink-0 mt-0.5">•</span>{f}</li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">PaisaGhar Default — Aapko Kya Pata Hona Chahiye</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            PaisaGhar se loan lene wale log aksar emergency situations mein hote hain — rent nahi tha, bijli ka
            bill tha, bachon ka kharcha — real needs. Jab yeh emergency resolve nahi hoti ya koi naya challenge
            aata hai, repayment mushkil ho jaati hai. Default hona koi crime nahi — yeh ek financial reality hai.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Lekin PaisaGhar ka system is situation mein pressure add karta hai. Jab due date miss hoti hai toh
            automated system immediately active ho jaata hai aur escalation tezi se hoti hai:
          </p>
          <div className="space-y-3 mb-8">
            {[
              { phase: 'Day 1-3', desc: 'App aur SMS reminders. Penalty start. "Please pay today" messages.' },
              { phase: 'Day 4-10', desc: 'Direct recovery calls. Polite lekin regular. WhatsApp messages bhi aate hain.' },
              { phase: 'Day 11-25', desc: 'Call intensity barh jaati hai. Contacts list se numbers contacted hote hain. Psychological pressure high.' },
              { phase: 'Day 25+', desc: 'Third-party recovery possible. Amount heavily inflated. Professional intervention most needed.' },
            ].map(({ phase, desc }) => (
              <div key={phase} className="flex gap-4 p-4 bg-teal-50/40 rounded-xl border border-teal-100">
                <div className="shrink-0 w-20 text-xs font-bold text-teal-700 pt-0.5">{phase}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">PaisaGhar Loan Clear Karne Ka Best Tarika</h2>
          <div className="space-y-4 mb-8">
            {[
              { no: '01', title: 'Khud Full Amount Pay Karein', color: '#6b7280', desc: 'Principal + penalties ka total. Amount significantly barh gaya hoga. NOC alag se leni hogi — guarantee nahi milti.' },
              { no: '02', title: 'Khud Negotiate Karein', color: '#b45309', desc: 'Direct PaisaGhar se negotiate karna stressful process hai. Written settlement + formal NOC guarantee nahi milti aksar.' },
              { no: '03', title: 'ByeBye Loan (Recommended)', color: '#006633', desc: 'Best settlement negotiated. Official QR-verified NOC guaranteed. 24-48 ghante mein complete. Koi stress nahi.' },
            ].map(({ no, title, color, desc }) => (
              <div key={no} className="flex gap-4 p-5 bg-white border-2 border-gray-100 rounded-2xl">
                <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm" style={{ backgroundColor: color }}>{no}</div>
                <div><p className="font-bold text-gray-900 mb-1.5">{title}</p><p className="text-gray-600 text-sm">{desc}</p></div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">ByeBye Loan Se PaisaGhar Clear Karne Ka Process</h2>
          <div className="space-y-5 mb-8">
            {[
              { step: '01', title: 'Free WhatsApp Consultation', time: 'Abhi', desc: 'Message karein. PaisaGhar loan amount, overdue time batayein. Zero commitment, zero charge.' },
              { step: '02', title: 'Loan Assessment', time: '30 minutes', desc: 'PaisaGhar account analysis. Penalty breakdown. Realistic settlement estimate clearly bataya jaata hai.' },
              { step: '03', title: 'PaisaGhar Se Negotiation', time: '12-24 hours', desc: 'Hum PaisaGhar ke saath professionally engage karte hain. Best reduced settlement secure karte hain.' },
              { step: '04', title: 'Payment Aur Closure', time: 'Same day', desc: 'Agreed amount pay karne ke baad PaisaGhar account officially closed. Calls band. Hum documentation handle karte hain.' },
              { step: '05', title: 'QR-Verified NOC', time: '24-48 hours', desc: 'Official NOC QR code ke saath. PaisaGhar loan cleared — lifetime verifiable.' },
            ].map(({ step, title, time, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#0f766e] flex items-center justify-center text-white font-extrabold text-sm">{step}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <p className="font-bold text-gray-900">{title}</p>
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-0.5 rounded-full">{time}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#006633] rounded-2xl p-7 text-center my-10">
            <p className="text-white font-extrabold text-xl mb-2">PaisaGhar Loan Aaj Clear Karwayein</p>
            <p className="text-white/80 text-sm mb-5">Free consultation. Official NOC guaranteed. 24-48 ghante mein.</p>
            <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Pe Contact Karein
            </WALink>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Pakistan Mein PaisaGhar Ke Against Aapke Huquq</h2>
          <ul className="space-y-3 mb-8">
            {[
              'Civil debt ke liye Pakistan mein arrest nahi hoti — "FIR/arrest" baseless threat hai',
              'Third party contacts ko call karna SECP guidelines ke against hai',
              'Recovery agents abusive language use karein toh reportable hai',
              'CNIC ya NADRA block karna PaisaGhar ke liye impossible hai',
              'Settlement ke baad koi bhi contact legally prohibited hai',
            ].map(item => (
              <li key={item} className="flex gap-2.5 text-gray-700 text-sm">
                <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-5">PaisaGhar FAQ</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: 'PaisaGhar loan settle hone mein kitna waqt lagta hai?', a: 'ByeBye Loan ke through 24-48 ghante. Yeh standard timeline hai PaisaGhar ke liye. Assessment aur negotiation is timeline mein complete hoti hai.' },
              { q: 'PaisaGhar ne mere rishtedaaron ko call kiya — kya karein?', a: 'Settlement karke yeh permanently khatam karein. Official settlement ke baad PaisaGhar ke paas koi reason nahi rehta kisi ko contact karne ka.' },
              { q: 'Kya PaisaGhar amount negotiate ho sakta hai?', a: 'Haan. Formal settlement mein PaisaGhar reduced amount par agree karta hai. Professional negotiation se best possible deal milti hai.' },
              { q: 'PaisaGhar default mein amount kitna barh jaata hai?', a: 'Depends on overdue period. Generally 30 din mein original loan ka 30-60% extra add ho jaata hai. Jitna jald action lo, utna better.' },
              { q: 'Multiple loan apps hain — PaisaGhar ke saath aur bhi — kya ek saath ho sakta hai?', a: 'ByeBye Loan multiple apps simultaneously handle karta hai. Poori situation batayein — hum comprehensive solution denge.' },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-2xl p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <p className="font-bold text-gray-900 mb-3 text-sm">Related Guides:</p>
            <ul className="space-y-2">
              {[
                { href: '/blog/money-tap-loan-clear-karna', text: 'Money Tap Loan Clear Karne Ka Tarika' },
                { href: '/blog/loan-app-contacts-access-kyon', text: 'Loan App Contacts Kyun Access Karta Hai?' },
                { href: '/blog/loan-app-noc-kaise-milti-hai', text: 'Official NOC Kaise Milti Hai Pakistan Mein' },
                { href: '/blog/loan-app-ghar-aa-jayen-kya-karein', text: 'Loan App Wale Ghar Aa Jayen Toh Kya Karein' },
              ].map(({ href, text }) => (
                <li key={href}>
                  <Link href={href} className="text-[#006633] hover:underline text-sm font-medium">→ {text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
            <Link href="/blog" className="hover:text-[#006633] transition-colors">← Sab Articles</Link>
            <Link href="/" className="hover:text-[#006633] transition-colors">ByeBye Loan Home →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
