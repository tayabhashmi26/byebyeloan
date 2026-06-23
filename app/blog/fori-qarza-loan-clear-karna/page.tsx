import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'fori-qarza-loan-clear-karna';
const PUBLISH_DATE = '2026-06-24';

export const metadata: Metadata = {
  title: 'Fori Qarza App Loan Clear Karne Ka Tarika — Pakistan 2026',
  description:
    'Fori Qarza app ka loan overdue ho gaya? Calls aa rahi hain? Fori Qarza loan kaise settle karein, penalty rokein, aur official NOC kaise hasil karein — complete Roman Urdu guide.',
  keywords: [
    'fori qarza loan clear karna', 'fori qarza app loan settle', 'fori qarza loan overdue',
    'fori qarza app loan problem', 'fori qarza noc kaise milti hai',
    'fori qarza loan default pakistan', 'fori qarza app recovery calls',
    'fori qarza se loan kaise clear karein',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Fori Qarza App Loan Clear Karne Ka Tarika — Pakistan 2026',
    description: 'Fori Qarza loan overdue? Calls aa rahi hain? Step by step settle karein aur official NOC hasil karein.',
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
    headline: 'Fori Qarza App Loan Clear Karne Ka Tarika — Pakistan 2026',
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
      { '@type': 'Question', name: 'Fori Qarza loan overdue hone par kya hota hai?', acceptedAnswer: { '@type': 'Answer', text: 'Fori Qarza loan overdue hone par daily penalty shuru hoti hai, reminder calls aati hain, aur contacts ko bhi messages ya calls aa sakti hain. eCIB mein entry ho sakti hai. Jitna jaldi settle karein utna behtar.' } },
      { '@type': 'Question', name: 'Fori Qarza aur Fauri Cash mein kya farq hai?', acceptedAnswer: { '@type': 'Answer', text: 'Fori Qarza aur Fauri Cash alag alag apps hain jo similar naam rakhte hain. Dono Pakistan mein digital loan apps hain lekin alag companies hain. Agar aapka loan Fori Qarza par hai toh settlement process same hai — ByeBye Loan dono handle karta hai.' } },
      { '@type': 'Question', name: 'Fori Qarza se NOC kaise milti hai?', acceptedAnswer: { '@type': 'Answer', text: 'Loan fully settle hone ke baad Fori Qarza official NOC issue karta hai. ByeBye Loan ke zariye settle karwanay par QR-verified NOC 24-48 ghante mein mil jaati hai jo bank ya employer ke liye acceptable hai.' } },
    ],
  },
];

const WACta = ({ label = 'WhatsApp Pe Free Consultation Lein' }) => (
  <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    {label}
  </WALink>
);

export default function ForiQarzaPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#7c2d12] to-[#431407] py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              App Guide · Fori Qarza
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Fori Qarza App Loan Clear Karne Ka Tarika — Step by Step
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Fori Qarza loan overdue ho gaya? Yahan janein kaise settle karein aur calls band karwayein.
            </p>
            <WACta label="Fori Qarza Loan Clear Karwayein — Free Consultation" />
            <p className="text-white/50 text-xs mt-3">By {SITE_NAME} · <time dateTime={PUBLISH_DATE}>June 24, 2026</time> · 7 min read</p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Fori Qarza app se short-term loan liya aur ab repayment mein masla ho raha hai? Calls ka pressure,
            contacts ko messages — yeh sab bahut stressful hota hai. Lekin <strong>is se nikla ja sakta hai —
            sahi tarike se.</strong>
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 mb-8">
            <p className="font-bold text-orange-900 mb-1">Important Baat Pehle</p>
            <p className="text-orange-800 text-sm leading-relaxed">
              Fori Qarza loan default par <strong>daily penalty lag rahi hai.</strong> Har din delay = zyada
              paisa. Aur zyada delay = contacts list par calls. Jitna jaldi action lein utna behtar.
            </p>
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Fori Qarza Loan Settlement — Complete Process</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: '01', title: 'Current Outstanding Confirm Karein', desc: 'App mein login karein — total amount check karein jisme principal + accrued penalty + processing fees sab shamil ho. Yeh figure settlement negotiations ka base hai.' },
              { step: '02', title: 'Settlement Ka Rasta Chunein', desc: 'Option A: Khud Fori Qarza se contact karein aur negotiate karein. Option B: ByeBye Loan ke zariye — hum professional settlement karte hain aksar reduced amount par.' },
              { step: '03', title: 'Written Settlement Agreement', desc: 'Verbal kuch nahi hota — har baat likhi honi chahiye. Settlement agreement mein amount, date, aur NOC provision clear ho.' },
              { step: '04', title: 'Payment Confirm Karein', desc: 'Payment karne ke baad receipt/confirmation screenshot rakhein. Kabhi bhi delete mat karein.' },
              { step: '05', title: 'NOC Haath Mein Lein', desc: 'Settlement complete hone ke baad Fori Qarza se official NOC demand karein. Bina NOC ke process incomplete hai.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="shrink-0 w-9 h-9 rounded-xl bg-[#7c2d12] flex items-center justify-center text-white font-extrabold text-sm">{step}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Fori Qarza Vs Fauri Cash — Konsa App Hai Aapka?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Kai log Fori Qarza aur Fauri Cash ko confuse karte hain — similar naam hain. Dono alag apps hain:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            <div className="p-4 bg-gray-50 border-2 border-orange-200 rounded-xl">
              <p className="font-bold text-gray-900 text-sm mb-2">Fori Qarza</p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Short-term digital loan app</li>
                <li>• Fori = Urdu for "immediate/urgent"</li>
                <li>• Pakistan mein operate karta hai</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 border-2 border-gray-200 rounded-xl">
              <p className="font-bold text-gray-900 text-sm mb-2">Fauri Cash</p>
              <ul className="space-y-1 text-xs text-gray-600">
                <li>• Alag company, alag app</li>
                <li>• Similar naam — different entity</li>
                <li>• <Link href="/blog/fauri-cash-loan-clear-karna" className="text-[#006633] underline">Fauri Cash guide yahan</Link></li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-6">
            ByeBye Loan dono apps handle karta hai — dono ke liye settlement process aur NOC available hai.
          </p>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Recovery Calls Ka Kya Karein</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Fori Qarza ki recovery team calls par jo threats deti hai — unki reality:
          </p>
          <div className="space-y-2 mb-6">
            {[
              { threat: '"Police aayegi / arrest hogi"', reality: 'Jhooth. Loan default civil matter hai Pakistan mein — koi criminal case nahi banta.' },
              { threat: '"Court notice aa raha hai"', reality: 'Mostly bluff. Loan amount itni kam hoti hai ke civil court case financially viable nahi hota apps ke liye.' },
              { threat: '"Aapke saath kuch bura hoga"'  , reality: 'Illegal threat hai. FIA Cyber Crime 9911 par report kar sakte hain.' },
              { threat: '"Kal tak payment nahi ki toh..."', reality: 'Urgency create karne ki tactic. Settlement negotiate karna aapka right hai.' },
            ].map(({ threat, reality }) => (
              <div key={threat} className="p-3 bg-red-50 border border-red-100 rounded-xl">
                <p className="font-bold text-gray-800 text-xs mb-1">Kehte hain: {threat}</p>
                <p className="text-gray-600 text-xs"><span className="font-bold text-green-700">Haqeeqat:</span> {reality}</p>
              </div>
            ))}
          </div>

          <div className="bg-[#006633] rounded-2xl p-6 text-center my-8">
            <p className="text-white font-extrabold text-lg mb-2">Fori Qarza Loan 24-48 Ghante Mein Clear</p>
            <p className="text-white/80 text-sm mb-4">Professional settlement, reduced amount, QR-verified NOC. Free consultation.</p>
            <WACta label="Abhi WhatsApp Karein" />
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Fori Qarza FAQ</h2>
          <div className="space-y-3 mb-8">
            {[
              { q: 'Fori Qarza ne contacts ko call karna shuru kar diya — kya karoon?', a: 'ByeBye Loan se abhi contact karein. Jitna jaldi loan settle hoga utna jaldi contacts ko calls band hongi. Hum emergency cases mein same-day settlement bhi karte hain.' },
              { q: 'Kya Fori Qarza loan waive ho sakta hai?', a: 'Complete waiver rare hai. Lekin penalty reduction aur reduced settlement amount possible hai — especially jab professionally negotiate kiya jaaye. ByeBye Loan yeh kaam karta hai.' },
              { q: 'Fori Qarza ne app access block kar diya — kya main pay nahi kar sakta?', a: 'Block hone ke baad bhi settlement possible hai. ByeBye Loan directly company ke saath negotiate karta hai — app access ki zaroorat nahi.' },
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
                { href: '/blog/fauri-cash-loan-clear-karna', text: 'Fauri Cash Loan Clear Karne Ka Tarika' },
                { href: '/blog/loan-app-noc-kaise-milti-hai', text: 'Official NOC Kaise Milti Hai Pakistan Mein' },
                { href: '/blog/loan-app-contacts-access-kyon', text: 'Loan App Contacts Kyun Access Karta Hai?' },
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
