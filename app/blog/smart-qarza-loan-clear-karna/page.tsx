import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'smart-qarza-loan-clear-karna';
const PUBLISH_DATE = '2026-06-21';

export const metadata: Metadata = {
  title: 'Smart Qarza Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan',
  description:
    'Smart Qarza ka loan clear karna chahte hain? Complete step-by-step guide — officially kaise settle karein, NOC kaise lein, aur calls permanently kaise band karein Pakistan mein.',
  keywords: [
    'smart qarza loan clear', 'smart qarza loan settlement', 'smart qarza noc',
    'smart qarza calls band', 'smart qarza default', 'loan app clear karna pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Smart Qarza Loan Clear Karne Ka Tarika — Official NOC Guide',
    description: 'Smart Qarza ka loan officially clear karne ka complete guide — settlement, NOC, aur calls band karna.',
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
    headline: 'Smart Qarza Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan',
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
      { '@type': 'Question', name: 'Smart Qarza loan kaise clear karein Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'Smart Qarza loan clear karne ke liye ByeBye Loan se contact karein. Hum Smart Qarza ke saath directly negotiate karte hain, best settlement amount secure karte hain, aur aapko official NOC certificate dilwate hain. Process 24-48 ghante mein complete hoti hai.' } },
      { '@type': 'Question', name: 'Smart Qarza loan default ho jaaye toh kya karein?', acceptedAnswer: { '@type': 'Answer', text: 'Smart Qarza loan default hone par ghabrana nahi chahiye. Default ke baad bhi settlement possible hai. Professional negotiation se aap reduced amount par loan settle kar sakte hain aur official NOC le sakte hain.' } },
      { '@type': 'Question', name: 'Smart Qarza calls kaise band hon?', acceptedAnswer: { '@type': 'Answer', text: 'Smart Qarza calls permanently band hone ka ek hi tarika hai — official settlement aur NOC. Settlement ke baad Smart Qarza legally aapko contact nahi kar sakta.' } },
    ],
  },
];

export default function BlogPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#1e1b4b] to-[#4338ca] py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              App-Specific Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Smart Qarza Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Smart Qarza se loan liya tha aur ab clear karna chahte hain? Yeh complete guide aapke liye hai.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-white/60 text-sm">
              <span>By {SITE_NAME}</span><span>·</span>
              <time dateTime={PUBLISH_DATE}>June 21, 2026</time><span>·</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            <strong>Smart Qarza</strong> Pakistan ke sabse zyada use hone wale loan apps mein se ek hai.
            Lakhon Pakistanis ne is app se instant loans liye hain — kuch ne successfully repay kiye,
            lekin bohot se log aaj bhi Smart Qarza ke outstanding loan ki wajah se calls, SMS, aur
            harassment jhel rahe hain. Is guide mein hum aapko exactly batayenge ke{' '}
            <strong>Smart Qarza loan officially kaise clear karein</strong> aur NOC kaise lein.
          </p>

          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-8">
            <p className="font-bold text-indigo-900 mb-2">Smart Qarza Ke Baare Mein Quick Facts</p>
            <ul className="space-y-1.5 text-indigo-800 text-sm">
              {['Pakistan ke top loan apps mein se ek', 'Rs 1,000 se Rs 50,000 tak instant loans', 'High interest rates aur late payment penalties', 'CNIC-based lending — koi collateral nahi', 'Aggressive recovery calls for defaults'].map(f => (
                <li key={f} className="flex gap-2"><span className="text-indigo-500">•</span>{f}</li>
              ))}
            </ul>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Smart Qarza Loan Clear Karne Ke Options</h2>
          <p className="text-gray-700 leading-relaxed mb-5">Smart Qarza loan clear karne ke teen raaste hain:</p>
          <div className="space-y-4 mb-8">
            {[
              { no: '01', title: 'Full Payment Khud Karein', pro: 'Sabse seedha tarika', con: 'Penalties aur interest ke saath amount kaafi barh jaata hai. NOC lena alag se zaroori hai.', color: '#4338ca' },
              { no: '02', title: 'Smart Qarza Se Seedha Negotiate Karein', pro: 'Possible hai lekin mushkil', con: 'Smart Qarza recovery team aksar negotiation ko discourage karti hai. Aapke paas professional knowledge nahi hogi ke kya demand karni hai.', color: '#b45309' },
              { no: '03', title: 'Professional Loan Clearance Service Use Karein', pro: 'Sabse effective tarika', con: 'Service fee lagti hai — lekin overall amount kaafi kam ho jaata hai aur NOC guaranteed milti hai.', color: '#006633' },
            ].map(({ no, title, pro, con, color }) => (
              <div key={no} className="flex gap-4 p-5 bg-white border-2 border-gray-100 rounded-2xl">
                <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white font-extrabold text-sm" style={{ backgroundColor: color }}>{no}</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{title}</p>
                  <p className="text-xs text-green-700 mb-1">✓ {pro}</p>
                  <p className="text-xs text-red-600">✗ {con}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">ByeBye Loan Se Smart Qarza Clear Karne Ka Process</h2>
          <div className="space-y-4 mb-8">
            {[
              { step: '01', title: 'WhatsApp Par Contact Karein', desc: 'Hume WhatsApp karein aur Smart Qarza loan ka detail batayein — outstanding amount, kitne time se default hai, aur kya calls aa rahi hain.' },
              { step: '02', title: 'Free Assessment', desc: 'Hum aapke loan ka complete analysis karte hain — actual outstanding vs penalties vs interest — aur aapko real picture batate hain.' },
              { step: '03', title: 'Smart Qarza Se Negotiation', desc: 'Hamari team Smart Qarza ke settlement department se directly deal karti hai. Hum best possible reduced amount par settlement secure karte hain.' },
              { step: '04', title: 'Payment Aur Official Closure', desc: 'Agreed amount pay hone ke baad Smart Qarza account officially close hota hai. Sab documentation hum handle karte hain.' },
              { step: '05', title: 'Digitally Verified NOC', desc: 'Aapko QR code ke saath ek official NOC certificate milta hai — lifetime valid, koi bhi scan kar ke verify kar sakta hai.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#4338ca] flex items-center justify-center text-white font-extrabold text-sm">{step}</div>
                <div><p className="font-bold text-gray-900 mb-1">{title}</p><p className="text-gray-600 text-sm leading-relaxed">{desc}</p></div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Smart Qarza NOC Kyun Zaroori Hai?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Sirf payment karna kaafi nahi — aapko NOC bhi leni chahiye. Yeh kyun zaroori hai:</p>
          <ul className="space-y-3 mb-8">
            {[
              'Proof ke bina Smart Qarza future mein dobara claim kar sakta hai ke loan outstanding hai',
              'NOC ke bina credit bureaus par aapki history clean nahi hoti',
              'Future mein bank loan ya credit card ke liye NOC zaroori hoti hai',
              'Agar calls dobara aayen, NOC aapka legal weapon hai',
            ].map(item => (
              <li key={item} className="flex gap-2.5 text-gray-700 text-sm">
                <span className="text-[#006633] font-bold shrink-0 mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>

          <div className="bg-[#006633] rounded-2xl p-7 text-center my-10">
            <p className="text-white font-extrabold text-xl mb-2">Smart Qarza Loan Aaj Clear Karwayein</p>
            <p className="text-white/80 text-sm mb-5">Free consultation — 24-48 ghante mein process complete.</p>
            <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Pe Contact Karein
            </WALink>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-5">Smart Qarza Ke Baare Mein FAQ</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: 'Smart Qarza loan default hone ke baad bhi settle ho sakta hai?', a: 'Haan. Default ke baad bhi settlement possible hai — actually is stage par negotiation zyada effective hoti hai kyunke Smart Qarza bhi kuch recover karna chahta hai. Hum reduced amount par settlement secure karte hain.' },
              { q: 'Smart Qarza kitne time mein settle hota hai?', a: '24 se 48 ghante — yeh hamare standard timeline hai Smart Qarza settlements ke liye. Kuch complex cases mein 3-5 days lag sakte hain.' },
              { q: 'Smart Qarza ne contacts ko call kiya — kya main action le sakta hun?', a: 'Yeh SECP regulations ke against hai. Ek baar loan settle hone ke baad yeh automatically band ho jaata hai. Settlement ke baad bhi koi call aaye toh aap FIA Cyber Crime unit mein complaint kar sakte hain.' },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-2xl p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">A: {a}</p>
              </div>
            ))}
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
