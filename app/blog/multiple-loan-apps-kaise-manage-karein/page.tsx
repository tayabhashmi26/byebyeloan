import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'multiple-loan-apps-kaise-manage-karein';
const PUBLISH_DATE = '2026-06-24';

export const metadata: Metadata = {
  title: 'Ek Saath Kai Loan Apps Se Qarz — Kaise Manage Karein Pakistan 2026',
  description:
    'Ek saath kai loan apps mein loan hai Pakistan mein? Smart Qarza, Paisayaar, QarzMitra — sab ek saath? Kaise manage karein, priority kya ho, aur ek hi baar mein sab kaise clear karein.',
  keywords: [
    'kai loan apps ek saath pakistan', 'multiple loan apps manage karna',
    'ek saath kai loan clear karna', 'multiple loan apps default pakistan',
    'loan apps debt trap pakistan', 'kai loan app settlement pakistan',
    'multiple loan settlement pakistan', 'loan app cycle kaise torein',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Ek Saath Kai Loan Apps Se Qarz — Kaise Manage Karein Pakistan',
    description: 'Multiple loan apps se ek saath qarz hai? Priority kya ho, kaise manage karein, aur ek hi baar mein sab clear karwayein — complete guide.',
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
    headline: 'Ek Saath Kai Loan Apps Se Qarz — Kaise Manage Karein Pakistan 2026',
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
      { '@type': 'Question', name: 'Kai loan apps ek saath clear ho sakte hain Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'Haan. ByeBye Loan multiple loan apps simultaneously settle karta hai. Ek hi process mein Smart Qarza, Paisayaar, QarzMitra, Hakeem — sab clear ho sakte hain. Har ek ke liye alag NOC milti hai.' } },
      { '@type': 'Question', name: 'Multiple loan apps hain — kaunsa pehle clear karein?', acceptedAnswer: { '@type': 'Answer', text: 'Priority generally yeh honi chahiye: 1) Jis ka penalty rate sabse zyada ho, 2) Jis ne contacts ko call karna shuru kar diya ho, 3) Jis ka amount sabse chhota ho (fast win). ByeBye Loan free assessment mein aapko priority plan de sakta hai.' } },
      { '@type': 'Question', name: 'Multiple loan apps ka ek saath settlement possible hai?', acceptedAnswer: { '@type': 'Answer', text: 'Haan. ByeBye Loan multiple apps ke saath parallel negotiations karta hai. Yeh individually karne se kaafi fast aur efficient hai. Sab loans ek coordinated process mein close kiye jaate hain.' } },
    ],
  },
];

const WACta = ({ label = 'WhatsApp Pe Free Consultation Lein' }) => (
  <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
    {label}
  </WALink>
);

export default function MultipleLoanPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#1e3a5f] to-[#2d5986] py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Multiple Loan Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Ek Saath Kai Loan Apps Se Qarz — Kaise Manage Karein
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Multiple loan apps mein phanse hain? Ghabrayein nahi — yeh situation common hai aur solution hai.
            </p>
            <WACta label="Sab Loans Ek Saath Clear Karwayein" />
            <p className="text-white/50 text-xs mt-3">By {SITE_NAME} · <time dateTime={PUBLISH_DATE}>June 24, 2026</time> · 8 min read</p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Pakistan mein "loan app cycle" ek common trap hai: pehle ek app se loan liya, repayment ke liye
            dusri app use ki, phir teesri. Ek waqt aata hai jab <strong>2, 3, ya 4 loan apps ek saath outstanding
            hoti hain</strong> — aur phones par calls ka toofan chal raha hota hai. Yeh guide exactly is
            situation ke liye hai.
          </p>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Multiple Loan Apps — Situation Ko Samjhein Pehle</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pakistan mein kai log yeh cycle mein phans jaate hain:
          </p>
          <div className="space-y-2 mb-6 pl-4 border-l-4 border-blue-200">
            {[
              'App 1 se loan liya → repayment ke liye App 2 use ki',
              'App 2 ka due date aaya → App 3 se loan liya',
              'Ab teeno pending hain → sab ke calls aa rahe hain',
              'Total outstanding original loans se 3-4x ho gaya',
            ].map((item, i) => (
              <p key={i} className="text-gray-700 text-sm">{item}</p>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Yeh "debt trap" hai — aur aap akele nahi hain. ByeBye Loan ke hazaron clients exactly is
            situation mein the. <strong>Is se nikla ja sakta hai — lekin sahi strategy chahiye.</strong>
          </p>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Multiple Loans Ki Priority — Kaunsa Pehle</h2>
          <p className="text-gray-700 text-sm mb-4">
            Agar sab loans ek saath clear nahi ho sakti aur phased approach leni hai, yeh priority order follow karein:
          </p>
          <div className="space-y-3 mb-6">
            {[
              { priority: 'Priority 1', title: 'Sabse Zyada Penalty Rate Wala', desc: 'Jo loan har din sabse zyada penalty add kar raha hai woh pehle target karein. Is se overall debt growth ruk jaati hai.' },
              { priority: 'Priority 2', title: 'Contacts Ko Call Karne Wala', desc: 'Jo app aapke family ya colleagues ko actively call kar raha hai — social damage ko stop karna important hai.' },
              { priority: 'Priority 3', title: 'Sabse Chhota Amount', desc: 'Chhoti loan jald close karna ek "quick win" deta hai — ek app ki calls band, ek NOC haath mein. Mental relief bhi zaroori hai.' },
              { priority: 'Priority 4', title: 'Largest Outstanding', desc: 'Baaki loans gradually — lekin ek ek kar ke. Hamesha formal settlement agreement aur NOC ke saath.' },
            ].map(({ priority, title, desc }) => (
              <div key={priority} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="shrink-0 text-xs font-bold text-blue-700 w-20 pt-0.5">{priority}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Sabse Fast Option: Sab Ek Saath ByeBye Loan Se</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Agar aap chahte hain ke <strong>sab loan apps ek hi process mein clear ho jayen</strong>, ByeBye
            Loan exactly yeh karta hai. Hum multiple apps ke saath parallel mein negotiate karte hain — aap ko
            har app se alag alag deal nahi karna padta.
          </p>
          <div className="space-y-3 mb-6">
            {[
              { step: '01', title: 'Single WhatsApp Consultation', desc: 'Hum ko sab loans ki detail batayein — app names, amounts, overdue period. Single conversation mein sab cover hota hai.' },
              { step: '02', title: 'Complete Assessment', desc: 'Har loan ka individual assessment — penalty breakdown aur settlement estimate. Aapko clear picture milti hai.' },
              { step: '03', title: 'Parallel Negotiations', desc: 'Hum sab apps ke saath parallel mein negotiate karte hain. Yeh individually karne se kaafi fast aur better results deta hai.' },
              { step: '04', title: 'Coordinated Settlement', desc: 'Sab settlements coordinate hoti hain. Ek hi phase mein sab loans closed, sab calls band.' },
              { step: '05', title: 'Multiple NOCs', desc: 'Har loan app ke liye alag official QR-verified NOC. eCIB clearance complete.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-[#2d5986] flex items-center justify-center text-white font-extrabold text-sm">{step}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#006633] rounded-2xl p-6 text-center my-8">
            <p className="text-white font-extrabold text-lg mb-2">Sab Loans Ek Saath Clear Karwayein</p>
            <p className="text-white/80 text-sm mb-4">Multiple apps? Hum sab handle karte hain — parallel negotiations, sab NOCs, zero hassle.</p>
            <WACta label="Abhi WhatsApp Karein" />
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Multiple Loan Apps — Common Galtiyan Jo Mat Karein</h2>
          <div className="space-y-2 mb-6">
            {[
              { mistake: 'Ek app ko chhod ke doosra clear karna', detail: 'Chhuta hua loan compound hota rehta hai aur calls bhi aati rehti hain.' },
              { mistake: 'Naya loan le kar purana clear karna', detail: 'Yeh cycle aur extend hoti hai — debt trap aur gahri ho jaati hai.' },
              { mistake: 'Calls ko block karna aur ignore karna', detail: 'Penalty barh rahi hai — ignore karna situation worse banata hai, better nahi.' },
              { mistake: 'Har app se khud alag alag negotiate karna', detail: 'Time consuming, stressful, aur aksar less effective. Professional help zyada efficient hai.' },
            ].map(({ mistake, detail }) => (
              <div key={mistake} className="flex gap-3 p-3 bg-red-50 border border-red-100 rounded-xl">
                <span className="text-red-500 shrink-0 font-bold text-xs mt-0.5">✗</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs mb-0.5">{mistake}</p>
                  <p className="text-gray-500 text-xs">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Loan Cycle Todne Ka Long-Term Plan</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Loans clear hone ke baad is cycle mein dobara na aane ke liye:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Emergency fund banayein — monthly income ka 5-10%, chahe Rs 500 hi sahi',
              'Loan apps se perhez — high-interest short-term loans debt trap hain',
              'Agar zaroorat ho toh bank personal loan ya family se consider karein',
              'Monthly budget banayein aur usse stick karein',
              'eCIB credit report regularly check karein — free mein SECP se milti hai',
            ].map(item => (
              <li key={item} className="flex gap-2 text-sm text-gray-700">
                <span className="text-green-600 shrink-0 mt-0.5 font-bold">✓</span>{item}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Multiple Loans FAQ</h2>
          <div className="space-y-3 mb-8">
            {[
              { q: 'Mere paas 4 loan apps hain — kya ByeBye Loan sab handle kar sakta hai?', a: 'Haan. ByeBye Loan multiple apps simultaneously handle karta hai — 2 ho ya 10. Hum ne 5 se zyada apps simultaneously settle ki hain ek client ke liye. WhatsApp par sab detail de dein — hum comprehensive plan banate hain.' },
              { q: 'Multiple loans mein settlement amount total kitni hogi?', a: 'Yeh har loan ki individual amount, penalty, aur overdue period par depend karta hai. ByeBye Loan free assessment mein har loan ka estimate deta hai. Phir aap decide karte hain.' },
              { q: 'Ek app ne already calls band kar di aur account block — kya karoon?', a: 'Account block ya recovery pause zyada tar temporary state hai. ByeBye Loan se contact karein — hum current status assess karte hain aur best strategy decide karte hain.' },
              { q: 'Multiple loans clear hone ke baad credit score automatically improve hoga?', a: 'Haan. Jitni zyada loans cleared hongi with NOC, utna better eCIB record. Time ke saath credit score meaningfully improve hota hai.' },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 mb-6">
            <p className="font-bold text-gray-900 mb-3 text-sm">App-Specific Guides:</p>
            <ul className="space-y-2">
              {[
                { href: '/blog/smart-qarza-loan-clear-karna', text: 'Smart Qarza Loan Clear Karne Ka Tarika' },
                { href: '/blog/paisayaar-loan-clear-karna', text: 'Paisayaar Loan Clear Karne Ka Tarika' },
                { href: '/blog/qarzmitra-loan-clear-karna', text: 'QarzMitra Loan Clear Karne Ka Tarika' },
                { href: '/blog/loan-app-blacklist-naam-kaise-hataen', text: 'Loan App Blacklist Se Naam Kaise Hataen' },
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
