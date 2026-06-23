import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'aitemaad-loan-clear-karna';
const PUBLISH_DATE = '2026-06-24';

export const metadata: Metadata = {
  title: 'Aitemaad App Loan Clear Karne Ka Tarika — Step by Step Guide Pakistan 2026',
  description:
    'Aitemaad app ka loan overdue ho gaya? Calls aa rahi hain? Yahan janein Aitemaad loan kaise settle karein, penalty kaise rokein, aur official NOC kaise lein — Roman Urdu mein complete guide.',
  keywords: [
    'aitemaad loan clear karna', 'aitemaad app loan settle', 'aitemaad loan overdue',
    'aitemaad app loan payment', 'aitemaad loan default pakistan', 'aitemaad noc kaise milti hai',
    'aitemaad loan problem', 'aitemaad app se loan kaise clear karein',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Aitemaad App Loan Clear Karne Ka Tarika — Pakistan 2026',
    description: 'Aitemaad loan overdue? Calls aa rahi hain? Step by step settle karein aur official NOC hasil karein.',
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
    headline: 'Aitemaad App Loan Clear Karne Ka Tarika — Step by Step Guide Pakistan 2026',
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
      { '@type': 'Question', name: 'Aitemaad app loan overdue hone par kya hota hai?', acceptedAnswer: { '@type': 'Answer', text: 'Aitemaad loan overdue hone par daily penalty add hoti hai aur reminder calls aani shuru ho jaati hain. Agar aur delay ho toh contacts ko bhi calls aa sakti hain aur eCIB mein negative entry ho sakti hai. Jitna jaldi settle karein utna behtar.' } },
      { '@type': 'Question', name: 'Aitemaad loan ka settlement kaise hota hai?', acceptedAnswer: { '@type': 'Answer', text: 'Aitemaad loan settlement ke liye app ya company se directly contact karein, ya ByeBye Loan ke zariye professionally settle karwayein jahan hum reduced amount par negotiate karte hain aur official NOC bhi dilwate hain.' } },
      { '@type': 'Question', name: 'Aitemaad se NOC kaise milti hai?', acceptedAnswer: { '@type': 'Answer', text: 'Loan fully settle hone ke baad Aitemaad official NOC issue karta hai. ByeBye Loan ke zariye settle karwanay par QR-verified NOC 24-48 ghante mein mil jaati hai.' } },
    ],
  },
];

const WACta = ({ label = 'WhatsApp Pe Free Consultation Lein' }) => (
  <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    {label}
  </WALink>
);

export default function AitemaadPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#1a3a52] to-[#0d2233] py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              App Guide · Aitemaad
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Aitemaad App Loan Clear Karne Ka Tarika — Step by Step
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Aitemaad loan overdue ho gaya? Calls aa rahi hain? Yahan sahi tarika janein — settlement se NOC tak.
            </p>
            <WACta label="Aitemaad Loan Clear Karwayein — Free Consultation" />
            <p className="text-white/50 text-xs mt-3">By {SITE_NAME} · <time dateTime={PUBLISH_DATE}>June 24, 2026</time> · 7 min read</p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Aitemaad app se loan liya aur ab situation difficult ho rahi hai? Calls, messages, relatives ko
            contact — yeh sab kuch ek hi cheez ka sign hai: <strong>loan jitna jaldi settle ho jaaye utna
            behtar.</strong> Yeh guide aapko exactly woh tarika batayegi jo kaam karta hai.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
            <p className="font-bold text-amber-900 mb-1">Pehle Yeh Samjhein</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              Aitemaad loan overdue hone par <strong>har din penalty add hoti hai.</strong> Ignore karne se
              total amount barh jaati hai aur situation aur complicated hoti hai. Jitna jaldi act karein
              utna kam paisa dena hoga.
            </p>
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Aitemaad Loan Clear Karne Ka Step by Step Process</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: '01', title: 'Apna Total Outstanding Pata Karein', desc: 'Aitemaad app open karein aur current outstanding amount check karein — original principal + penalty + fees sab mil ke. Yeh aapka starting point hai.' },
              { step: '02', title: 'Settlement Ka Faisla Karein', desc: 'Khud settle karna chahte hain ya professional help? Agar amount zyada hai ya situation complicated hai — ByeBye Loan se consult karein. Hum reduced amount par settle karte hain.' },
              { step: '03', title: 'Formal Settlement Agreement', desc: 'Sirf payment karna kaafi nahi — formal written settlement agreement zaroori hai. Yeh prove karta hai ke loan officially closed hua hai.' },
              { step: '04', title: 'Official NOC Lein', desc: 'Settlement ke baad Aitemaad se official NOC (No Objection Certificate) lein. Yeh aapka final proof hai.' },
              { step: '05', title: 'eCIB Update Confirm Karein', desc: 'NOC milne ke baad Aitemaad eCIB credit bureau ko update karta hai. 30-60 din mein aapki credit report clear ho jaati hai.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-[#1a3a52] flex items-center justify-center text-white font-extrabold text-sm">{step}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Aitemaad Recovery — Kya Ho Sakta Hai</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Aitemaad loan overdue par yeh hone ki possibility hoti hai:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {[
              { phase: 'Early Stage', desc: 'Daily SMS reminders, app notifications, in-app messages' },
              { phase: 'Mid Stage', desc: 'Phone calls aana shuru — pehle aapko, phir contacts list ko' },
              { phase: 'Later Stage', desc: 'eCIB mein negative entry, recovery agent contact possible' },
              { phase: 'Settlement', desc: 'Agreement → Payment → NOC → eCIB cleared — cycle end' },
            ].map(({ phase, desc }) => (
              <div key={phase} className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <p className="font-bold text-gray-900 text-xs mb-1">{phase}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Aapke Legal Rights — Aitemaad Bhi Follow Karne Ki Paband Hai</h2>
          <ul className="space-y-2 mb-6">
            {[
              'Raat 10 baje ke baad calls — aap refuse kar sakte hain',
              'Abusive language ya threats — FIA Cyber Crime (9911) par complaint hoti hai',
              'Workplace par contact — illegal hai Pakistan mein',
              'Fake legal notices ya arrest threats — sab bluff hain, koi arrest nahi hoti loan default par',
              'Contacts/family ko harassment — PECA 2016 ke under actionable hai',
            ].map(item => (
              <li key={item} className="flex gap-2 text-sm text-gray-700">
                <span className="text-green-600 shrink-0 mt-0.5 font-bold">✓</span>{item}
              </li>
            ))}
          </ul>

          <div className="bg-[#006633] rounded-2xl p-6 text-center my-8">
            <p className="text-white font-extrabold text-lg mb-2">Aitemaad Loan 24-48 Ghante Mein Clear</p>
            <p className="text-white/80 text-sm mb-4">ByeBye Loan professionally settle karta hai — reduced amount, official NOC, harassment band.</p>
            <WACta label="Abhi WhatsApp Karein" />
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">ByeBye Loan Se Aitemaad Loan Clear Karwanay Ke Fayde</h2>
          <div className="space-y-2 mb-8">
            {[
              { title: 'Reduced Settlement Amount', desc: 'Hum Aitemaad ke saath negotiate karte hain — aksar original amount se kam par settle hota hai' },
              { title: 'QR-Verified NOC', desc: 'Koi bhi scan kar ke verify kar sake — lifetime valid, bank aur employer ke liye acceptable' },
              { title: 'Calls Band', desc: 'Settlement hote hi — Aitemaad ki sab calls aur messages band ho jaate hain' },
              { title: '24-48 Ghante', desc: 'Pakistan ka fastest loan clearance — ek se do din mein complete process' },
            ].map(({ title, desc }) => (
              <div key={title} className="flex gap-3 p-3 bg-green-50 border border-green-100 rounded-xl">
                <span className="text-green-600 shrink-0 font-bold text-sm mt-0.5">✓</span>
                <div>
                  <p className="font-bold text-gray-800 text-xs mb-0.5">{title}</p>
                  <p className="text-gray-500 text-xs">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Aitemaad Loan FAQ</h2>
          <div className="space-y-3 mb-8">
            {[
              { q: 'Aitemaad ki calls band karne ka koi tarika hai?', a: 'Block karna short-term hai — debt barh rahi hoti hai. Single best solution: loan settle karein. Settlement ke baad Aitemaad apne aap calls band kar deta hai.' },
              { q: 'Aitemaad arrest kar sakta hai?', a: 'Nahi. Loan default par arrest nahi hoti Pakistan mein. Yeh ek common myth hai jo recovery teams use karti hain. Loan ek civil matter hai, criminal nahi.' },
              { q: 'Aitemaad ne eCIB mein entry kar di — ab kya?', a: 'ByeBye Loan se contact karein. Hum loan settle karte hain, NOC dilwate hain, aur eCIB update hone mein bhi guide karte hain.' },
              { q: 'Aitemaad se pehle ek aur loan bhi hai — kya dono ek saath clear ho sakte hain?', a: 'Haan. ByeBye Loan multiple loans simultaneously handle karta hai. WhatsApp par sab detail share karein — hum comprehensive plan banate hain.' },
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
                { href: '/blog/paisayaar-loan-clear-karna', text: 'Paisayaar Loan Clear Karne Ka Tarika' },
                { href: '/blog/multiple-loan-apps-kaise-manage-karein', text: 'Multiple Loan Apps Ek Saath Kaise Clear Karein' },
                { href: '/blog/loan-app-noc-kaise-milti-hai', text: 'Official NOC Kaise Milti Hai Pakistan Mein' },
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
